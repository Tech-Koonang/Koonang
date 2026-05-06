const fs = require('fs');

let data = fs.readFileSync('src/components/language-provider.tsx', 'utf8');

const missingEnResultPage = `    resultPage: {
      title: "Strategic Blueprint Generated",
      sections: {
        summary: "Executive Summary",
        architecture: "Architecture Recommendation",
        automation: "Automation Strategy",
        roadmap: "Roadmap Phases",
      },
      survey: {
        question: "Is this AI analysis aligned with your expectations?",
        options: [
          { label: "Highly Accurate", value: "highly_accurate" },
          { label: "Mostly Relevant", value: "mostly_relevant" },
          { label: "Needs Adjustment", value: "needs_adjustment" },
        ],
        submitted: "Thank you for your feedback.",
      },
      booking: {
        title: "Schedule Live Consultation",
        date: "Date & Time",
        platform: "Platform (Zoom / Google Meet)",
        notes: "Additional Notes (Optional)",
        submit: "Schedule Now",
        success: "Schedule created successfully. Our team will contact you shortly.",
      },
    },`;

if (!data.includes('resultPage: {', data.indexOf('en: {'))) {
  data = data.replace(
    /    wizard: \{\s*steps: \{\s*identity: "Identity",/,
    missingEnResultPage + '\n    wizard: {\n      steps: {\n        identity: "Identity",'
  );
  fs.writeFileSync('src/components/language-provider.tsx', data, 'utf8');
  console.log("Fixed missing en resultPage");
} else {
  console.log("en resultPage already exists");
}
