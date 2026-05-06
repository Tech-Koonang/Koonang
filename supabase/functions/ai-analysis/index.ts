import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { inquiry_id } = await req.json();

    if (!inquiry_id) {
      throw new Error("inquiry_id is required");
    }

    // 1. Fetch Inquiry
    const { data: inquiry, error: fetchError } = await supabase
      .from("inquiries")
      .select("*")
      .eq("id", inquiry_id)
      .single();

    if (fetchError || !inquiry) {
      throw new Error(`Inquiry not found: ${fetchError?.message}`);
    }

    // 2. Prepare prompt based on language
    const isId = inquiry.language === "id";
    const systemPrompt = `You are a Senior Full-Stack Engineer and System Architect at Koonang.io.
    You evaluate client requirements and produce a professional, strategic architecture blueprint.
    Output MUST be in JSON format matching the following structure.
    Language MUST be ${isId ? "Indonesian" : "English"}.
    
    Structure:
    {
      "executive_summary": "High-level summary of the proposed solution.",
      "architecture_recommendation": "Detailed system architecture recommendation.",
      "automation_strategy": "How to automate their processes.",
      "competitive_analysis": "Insight on how this system provides a competitive edge.",
      "risk_analysis": "Potential technical or business risks and mitigations.",
      "roadmap_phases": [
        { "phase": "Phase 1: Foundation", "duration": "x weeks", "description": "..." },
        { "phase": "Phase 2: Core Development", "duration": "x weeks", "description": "..." },
        { "phase": "Phase 3: Scale & Optimize", "duration": "x weeks", "description": "..." }
      ],
      "ai_complexity_score": "Low" | "Medium" | "High" | "Enterprise",
      "ai_estimation_range": "e.g., Mid-Scale Architecture Deployment"
    }`;

    const userPrompt = `
      Business: ${inquiry.business_name}
      Industry: ${inquiry.industry}
      Purposes: ${inquiry.purposes?.join(", ")}
      Challenges: ${inquiry.challenges}
      Growth Target: ${inquiry.growth_target}
      Integrations: ${inquiry.integrations?.join(", ")}
    `;

    // 3. Call AI API (OpenAI example)
    const openAiKey = Deno.env.get("OPENAI_API_KEY");
    if (!openAiKey) throw new Error("OPENAI_API_KEY is not set");

    const aiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openAiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4-turbo",
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
      }),
    });

    const aiData = await aiRes.json();
    const resultJson = JSON.parse(aiData.choices[0].message.content);

    // 4. Update inquiry with complexity score & estimation
    await supabase
      .from("inquiries")
      .update({
        ai_complexity_score: resultJson.ai_complexity_score,
        ai_estimation_range: resultJson.ai_estimation_range,
        status: "completed"
      })
      .eq("id", inquiry_id);

    // 5. Insert AI Result
    const { error: insertError } = await supabase
      .from("ai_results")
      .insert({
        inquiry_id: inquiry.id,
        executive_summary: resultJson.executive_summary,
        architecture_recommendation: resultJson.architecture_recommendation,
        automation_strategy: resultJson.automation_strategy,
        competitive_analysis: resultJson.competitive_analysis,
        risk_analysis: resultJson.risk_analysis,
        roadmap_phases: resultJson.roadmap_phases,
        raw_ai_output: resultJson
      });

    if (insertError) throw new Error(`Insert failed: ${insertError.message}`);

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 400,
    });
  }
});
