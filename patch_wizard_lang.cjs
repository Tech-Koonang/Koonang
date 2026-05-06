const fs = require('fs');

const data = fs.readFileSync('src/components/language-provider.tsx', 'utf8');

// Replace Types
let newData = data.replace(
`  wizard: {
    steps: {
      business: string;
      goals: string;
      contact: string;
    };
    fields: {
      name: string;
      industry: string;
      target: string;
      budget: string;
      email: string;
      whatsapp: string;
    };
    placeholders: {
      name: string;
      email: string;
      whatsapp: string;
    };
    options: {
      industries: string[];
      targets: string[];
      budgets: string[];
    };
  };`,
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
  };`);

// Replace ID
newData = newData.replace(
`    wizard: {
      steps: {
        business: "Profil Bisnis",
        goals: "Tujuan Strategis",
        contact: "Detail Kontak",
      },
      fields: {
        name: "Nama Bisnis",
        industry: "Industri",
        target: "Target Utama",
        budget: "Estimasi Budget",
        email: "Email Bisnis",
        whatsapp: "WhatsApp",
      },
      placeholders: {
        name: "Contoh: Koonang Studio",
        email: "nama@perusahaan.com",
        whatsapp: "0812...",
      },
      options: {
        industries: ["Teknologi", "Ritel", "Jasa", "F&B", "Lainnya"],
        targets: ["Peningkatan Sales", "Efisiensi Operasional", "Go to Market", "Lainnya"],
        budgets: ["< 50JT", "50JT - 150JT", "> 150JT"],
      },
    },`,
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
    },`);

// Replace EN
newData = newData.replace(
`    wizard: {
      steps: {
        business: "Business Profile",
        goals: "Strategic Goals",
        contact: "Contact Details",
      },
      fields: {
        name: "Business Name",
        industry: "Industry",
        target: "Main Target",
        budget: "Estimated Budget",
        email: "Business Email",
        whatsapp: "WhatsApp",
      },
      placeholders: {
        name: "Example: Koonang Studio",
        email: "name@company.com",
        whatsapp: "0812...",
      },
      options: {
        industries: ["Technology", "Retail", "Services", "F&B", "Other"],
        targets: ["Increase Sales", "Operational Efficiency", "Go to Market", "Other"],
        budgets: ["< $5K", "$5K - $15K", "> $15K"],
      },
    },`,
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
    },`);

fs.writeFileSync('src/components/language-provider.tsx', newData, 'utf8');
console.log('Wizard language patch complete!');
