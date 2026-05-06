const fs = require('fs');

const data = fs.readFileSync('src/components/language-provider.tsx', 'utf8');

// Replace Types
let newData = data.replace(
`  wizard: {`,
`  resultPage: {
    title: string;
    sections: {
      summary: string;
      architecture: string;
      automation: string;
      roadmap: string;
    };
    survey: {
      question: string;
      options: { label: string; value: string }[];
      submitted: string;
    };
    booking: {
      title: string;
      date: string;
      platform: string;
      notes: string;
      submit: string;
      success: string;
    };
  };
  wizard: {`);

// Replace ID
newData = newData.replace(
`    wizard: {`,
`    resultPage: {
      title: "Blueprint Strategis Telah Dibuat",
      sections: {
        summary: "Ringkasan Eksekutif",
        architecture: "Rekomendasi Arsitektur",
        automation: "Strategi Otomasi",
        roadmap: "Fase Roadmap",
      },
      survey: {
        question: "Apakah analisis AI ini sesuai dengan ekspektasi Anda?",
        options: [
          { label: "Sangat Akurat", value: "highly_accurate" },
          { label: "Cukup Relevan", value: "mostly_relevant" },
          { label: "Perlu Penyesuaian", value: "needs_adjustment" },
        ],
        submitted: "Terima kasih atas feedback Anda.",
      },
      booking: {
        title: "Jadwalkan Diskusi Strategis",
        date: "Tanggal & Waktu",
        platform: "Platform (Zoom / Google Meet)",
        notes: "Catatan Tambahan (Opsional)",
        submit: "Jadwalkan Sekarang",
        success: "Jadwal berhasil dibuat. Tim kami akan menghubungi Anda segera.",
      },
    },
    wizard: {`);

// Replace EN
newData = newData.replace(
`    wizard: {
      steps: {
        identity: "Identity",`,
`    resultPage: {
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
    },
    wizard: {
      steps: {
        identity: "Identity",`);

fs.writeFileSync('src/components/language-provider.tsx', newData, 'utf8');
console.log('Result language patch complete!');
