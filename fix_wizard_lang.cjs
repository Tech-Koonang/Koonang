const fs = require('fs');

let data = fs.readFileSync('src/components/language-provider.tsx', 'utf8');

// Replace Types
data = data.replace(
/  wizard: \{\s*steps: \{\s*business: string;\s*goals: string;\s*contact: string;\s*\};\s*fields: \{\s*name: string;\s*industry: string;\s*target: string;\s*budget: string;\s*email: string;\s*whatsapp: string;\s*\};\s*placeholders: \{\s*name: string;\s*email: string;\s*whatsapp: string;\s*\};\s*options: \{\s*industries: string\[\];\s*targets: string\[\];\s*budgets: string\[\];\s*\};\s*analyzing: \{\s*title: string;\s*desc: string;\s*\};\s*complete: \{\s*title: string;\s*desc: string;\s*close: string;\s*\};\s*buttons: \{\s*next: string;\s*generate: string;\s*\};\s*\};/g,
`  wizard: {
    steps: {
      identity: string;
      business: string;
      purposes: string;
      challenges: string;
      targets: string;
      integrations: string;
      review: string;
    };
    fields: {
      fullName: string;
      email: string;
      phone: string;
      businessName: string;
      industry: string;
      website: string;
      challenges: string;
      growthTarget: string;
    };
    placeholders: {
      fullName: string;
      email: string;
      phone: string;
      businessName: string;
      industry: string;
      website: string;
      challenges: string;
    };
    options: {
      purposes: { label: string; value: string }[];
      growthTargets: string[];
      integrations: { label: string; value: string }[];
    };
    ui: {
      next: string;
      prev: string;
      submit: string;
      saving: string;
      saved: string;
      generating: string;
      error: string;
    };
  };`
);

// Replace ID
data = data.replace(
/    wizard: \{\s*steps: \{\s*business: "Profil Bisnis",\s*goals: "Tujuan Strategis",\s*contact: "Detail Kontak",\s*\},\s*fields: \{\s*name: "Nama Bisnis",\s*industry: "Industri",\s*target: "Target Utama",\s*budget: "Estimasi Budget",\s*email: "Email Bisnis",\s*whatsapp: "WhatsApp",\s*\},\s*placeholders: \{\s*name: "Contoh: Koonang Studio",\s*email: "nama@perusahaan.com",\s*whatsapp: "0812...",\s*\},\s*options: \{\s*industries: \["Teknologi", "Ritel", "Jasa", "F&B", "Lainnya"\],\s*targets: \["Meningkatkan Revenue", "Mendapatkan Leads", "Brand Awareness", "Otomasi"\],\s*budgets: \["< 50 Juta", "50 - 100 Juta", "> 100 Juta"\],\s*\},\s*analyzing: \{\s*title: "AI Sedang Menganalisis...",\s*desc: "Menghubungkan titik data & menghasilkan strategi.",\s*\},\s*complete: \{\s*title: "Analisis Selesai!",\s*desc: "Blueprint strategi Anda telah dikirim ke email.",\s*close: "Tutup",\s*\},\s*buttons: \{\s*next: "Selanjutnya",\s*generate: "Generate Blueprint AI",\s*\},\s*\},/g,
`    wizard: {
      steps: {
        identity: "Identitas",
        business: "Informasi Bisnis",
        purposes: "Tujuan",
        challenges: "Tantangan",
        targets: "Target",
        integrations: "Integrasi",
        review: "Review",
      },
      fields: {
        fullName: "Nama Lengkap",
        email: "Email",
        phone: "Nomor WhatsApp",
        businessName: "Nama Bisnis",
        industry: "Industri",
        website: "Website (Opsional)",
        challenges: "Tantangan Saat Ini",
        growthTarget: "Target 6-12 Bulan Ke Depan",
      },
      placeholders: {
        fullName: "Budi Santoso",
        email: "budi@perusahaan.com",
        phone: "081234567890",
        businessName: "PT Koonang Teknologi",
        industry: "E-commerce, SaaS, dll.",
        website: "https://domain.com",
        challenges: "Deskripsikan kendala yang menghambat pertumbuhan bisnis Anda saat ini...",
      },
      options: {
        purposes: [
          { label: "Meningkatkan Lead Generation", value: "lead_generation" },
          { label: "Otomasi Sistem", value: "automation" },
          { label: "Integrasi CRM", value: "crm_integration" },
          { label: "E-commerce Development", value: "ecommerce" },
          { label: "Dashboard Internal", value: "internal_dashboard" },
          { label: "Rebuild Sistem Lama", value: "system_rebuild" },
          { label: "Transformasi Digital", value: "digital_transformation" },
          { label: "Validasi Produk Baru", value: "product_validation" }
        ],
        growthTargets: [
          "Skala pengguna 2x lipat",
          "Otomasi 80% operasional",
          "Ekspansi ke pasar baru",
          "Peluncuran produk baru",
          "Lainnya"
        ],
        integrations: [
          { label: "Payment Gateway", value: "payment" },
          { label: "CRM", value: "crm" },
          { label: "WhatsApp API", value: "whatsapp" },
          { label: "Email Automation", value: "email" },
          { label: "Multi Role Dashboard", value: "dashboard" },
          { label: "Third-party API", value: "api" }
        ],
      },
      ui: {
        next: "Lanjutkan",
        prev: "Kembali",
        submit: "Generate Blueprint AI",
        saving: "Menyimpan...",
        saved: "Tersimpan otomatis",
        generating: "AI Sedang Menganalisis...",
        error: "Terjadi kesalahan. Silakan coba lagi.",
      }
    },`
);

// Replace EN
data = data.replace(
/    wizard: \{\s*steps: \{\s*business: "Business Profile",\s*goals: "Strategic Goals",\s*contact: "Contact Details",\s*\},\s*fields: \{\s*name: "Business Name",\s*industry: "Industry",\s*target: "Main Target",\s*budget: "Estimated Budget",\s*email: "Business Email",\s*whatsapp: "WhatsApp",\s*\},\s*placeholders: \{\s*name: "Example: Koonang Studio",\s*email: "name@company.com",\s*whatsapp: "0812...",\s*\},\s*options: \{\s*industries: \["Technology", "Retail", "Services", "F&B", "Other"\],\s*targets: \["Increase Revenue", "Generate Leads", "Brand Awareness", "Automation"\],\s*budgets: \["< 50 Million", "50 - 100 Million", "> 100 Million"\],\s*\},\s*analyzing: \{\s*title: "AI Analyzing...",\s*desc: "Connecting data points & generating strategy.",\s*\},\s*complete: \{\s*title: "Analysis Complete!",\s*desc: "Your strategy blueprint has been sent to your email.",\s*close: "Close",\s*\},\s*buttons: \{\s*next: "Next",\s*generate: "Generate AI Blueprint",\s*\},\s*\},/g,
`    wizard: {
      steps: {
        identity: "Identity",
        business: "Business Info",
        purposes: "Purposes",
        challenges: "Challenges",
        targets: "Targets",
        integrations: "Integrations",
        review: "Review",
      },
      fields: {
        fullName: "Full Name",
        email: "Email",
        phone: "WhatsApp Number",
        businessName: "Business Name",
        industry: "Industry",
        website: "Website (Optional)",
        challenges: "Current Challenges",
        growthTarget: "6-12 Months Target",
      },
      placeholders: {
        fullName: "John Doe",
        email: "john@company.com",
        phone: "+6281234567890",
        businessName: "Koonang Tech",
        industry: "E-commerce, SaaS, etc.",
        website: "https://domain.com",
        challenges: "Describe the bottlenecks hindering your business growth...",
      },
      options: {
        purposes: [
          { label: "Improve Lead Generation", value: "lead_generation" },
          { label: "System Automation", value: "automation" },
          { label: "CRM Integration", value: "crm_integration" },
          { label: "E-commerce Development", value: "ecommerce" },
          { label: "Internal Dashboard", value: "internal_dashboard" },
          { label: "System Rebuild", value: "system_rebuild" },
          { label: "Digital Transformation", value: "digital_transformation" },
          { label: "Product Validation", value: "product_validation" }
        ],
        growthTargets: [
          "Scale users 2x",
          "Automate 80% operations",
          "Expand to new markets",
          "Launch new product",
          "Other"
        ],
        integrations: [
          { label: "Payment Gateway", value: "payment" },
          { label: "CRM", value: "crm" },
          { label: "WhatsApp API", value: "whatsapp" },
          { label: "Email Automation", value: "email" },
          { label: "Multi Role Dashboard", value: "dashboard" },
          { label: "Third-party API", value: "api" }
        ],
      },
      ui: {
        next: "Next",
        prev: "Back",
        submit: "Generate AI Blueprint",
        saving: "Saving...",
        saved: "Auto saved",
        generating: "AI is Analyzing...",
        error: "An error occurred. Please try again.",
      }
    },`
);

fs.writeFileSync('src/components/language-provider.tsx', data, 'utf8');
console.log('Fixed wizard lang');
