-- Enable UUID and Crypto extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 1. Table: inquiries
CREATE TABLE inquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    draft_id TEXT UNIQUE NOT NULL,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    business_name TEXT,
    industry TEXT,
    website TEXT,
    purposes TEXT[],
    challenges TEXT,
    growth_target TEXT,
    integrations TEXT[],
    status TEXT DEFAULT 'draft',
    language TEXT DEFAULT 'id',
    ai_complexity_score TEXT,
    ai_estimation_range TEXT,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Table: ai_results
CREATE TABLE ai_results (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    inquiry_id UUID REFERENCES inquiries(id) ON DELETE CASCADE,
    executive_summary TEXT,
    architecture_recommendation TEXT,
    automation_strategy TEXT,
    competitive_analysis TEXT,
    risk_analysis TEXT,
    roadmap_phases JSONB,
    raw_ai_output JSONB,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. Table: ai_feedback
CREATE TABLE ai_feedback (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    inquiry_id UUID REFERENCES inquiries(id) ON DELETE CASCADE,
    accuracy_rating TEXT,
    feedback_note TEXT,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 4. Table: consultation_bookings
CREATE TABLE consultation_bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    inquiry_id UUID REFERENCES inquiries(id) ON DELETE CASCADE,
    scheduled_at TIMESTAMPTZ,
    meeting_platform TEXT,
    notes TEXT,
    consultation_status TEXT DEFAULT 'scheduled',
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 5. Table: project_tracking
CREATE TABLE project_tracking (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    inquiry_id UUID REFERENCES inquiries(id) ON DELETE CASCADE,
    project_status TEXT DEFAULT 'pre-consultation',
    proposal_sent_at TIMESTAMPTZ,
    approved_at TIMESTAMPTZ,
    project_start_date DATE,
    project_end_estimate DATE,
    internal_notes TEXT,
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_feedback ENABLE ROW LEVEL SECURITY;
ALTER TABLE consultation_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_tracking ENABLE ROW LEVEL SECURITY;

-- RLS Policies for inquiries
-- Public can insert new inquiries
CREATE POLICY "Public can insert inquiries" ON inquiries
    FOR INSERT WITH CHECK (true);

-- Public can update their own inquiries if it's a draft (using draft_id as a pseudo-auth token for anonymous users)
-- In a real app, you'd match the draft_id from local storage.
CREATE POLICY "Public can update draft inquiries" ON inquiries
    FOR UPDATE USING (status IN ('draft', 'completed')) WITH CHECK (true);

-- Public can view their inquiry by draft_id or email
CREATE POLICY "Public can view own inquiries" ON inquiries
    FOR SELECT USING (true); -- We will rely on application layer to filter by draft_id for public

-- Authenticated admins can do everything
CREATE POLICY "Admins have full access to inquiries" ON inquiries
    TO authenticated
    USING (auth.jwt() ->> 'role' = 'admin');

-- RLS Policies for ai_results
CREATE POLICY "Public can view ai_results" ON ai_results
    FOR SELECT USING (true); -- Filtered by inquiry_id in app

CREATE POLICY "Admins have full access to ai_results" ON ai_results
    TO authenticated
    USING (auth.jwt() ->> 'role' = 'admin');

-- RLS Policies for ai_feedback
CREATE POLICY "Public can insert ai_feedback" ON ai_feedback
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins have full access to ai_feedback" ON ai_feedback
    TO authenticated
    USING (auth.jwt() ->> 'role' = 'admin');

-- RLS Policies for consultation_bookings
CREATE POLICY "Public can insert consultation_bookings" ON consultation_bookings
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins have full access to consultation_bookings" ON consultation_bookings
    TO authenticated
    USING (auth.jwt() ->> 'role' = 'admin');

-- RLS Policies for project_tracking (Admin only)
CREATE POLICY "Admins have full access to project_tracking" ON project_tracking
    TO authenticated
    USING (auth.jwt() ->> 'role' = 'admin');

-- Auto-update updated_at triggers
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_inquiries_updated_at
    BEFORE UPDATE ON inquiries
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_project_tracking_updated_at
    BEFORE UPDATE ON project_tracking
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
