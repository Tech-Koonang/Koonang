"use client";

import React, { createContext, useContext, useState } from "react";

type Language = "id" | "en";

type Translations = {
  nav: {
    home: string;
    approach: string;
    system: string;
    caseStudies: string;
    pricing: string;
    demo: string;
    contact: string;
    startAnalysis: string;
  };
  hero: {
    badge: string;
    headline: {
      part1: string;
      part2: string;
    };
    subheadline: {
      part1: string;
      revenue: string;
      automation: string;
      scalability: string;
    };
    cta: {
      primary: string;
      secondary: string;
    };
  };
  problem: {
    title: {
      part1: string;
      part2: string;
    };
    desc: string;
    cards: {
      title: string;
      desc: string;
    }[];
  };
  solution: {
    title: {
      part1: string;
      part2: string;
    };
    desc: string;
    steps: string[];
  };
  process: {
    title: {
      part1: string;
      part2: string;
    };
    desc: string;
    steps: {
      title: string;
      desc: string;
    }[];
  };
  blueprint: {
    title: string;
    desc: string;
    diagram: string;
    visualization: string;
    strategy: string;
    points: string[];
    automation: string;
    tags: string[];
    phases: string[];
  };
  comparison: {
    traditional: {
      title: string;
      points: string[];
    };
    koonang: {
      points: string[];
    };
  };
  cta: {
    title: {
      part1: string;
      part2: string;
    };
    button: string;
  };
  footer: {
    desc: string;
    contact: {
      phone: string;
      email: string;
      instagram: string;
      linkedin: string;
    };
    platform: {
      title: string;
      links: string[];
    };
    company: {
      title: string;
      links: string[];
    };
    rights: string;
    privacy: string;
    terms: string;
  };
  resultPage: {
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
  wizard: {
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
  };
  approachPage: {
    hero: {
      headline: {
        part1: string;
        part2: string;
      };
      subheadline: string;
      cta: string;
    };
    philosophy: {
      headline: string;
      principles: {
        title: string;
        desc: string;
      }[];
    };
    framework: {
      title: string;
      steps: {
        title: string;
        desc: string;
      }[];
    };
    aiRole: {
      headline: string;
      left: {
        title: string;
        items: string[];
      };
      right: {
        title: string;
      };
    };
    corePrinciples: {
      title: string;
      items: {
        title: string;
        desc: string;
      }[];
    };
    closing: {
      headline: string;
      subheadline: string;
      cta: string;
    };
  };
  systemPage: {
    hero: {
      headline: string;
      subheadline: string;
      cta: string;
    };
    definition: {
      headline: string;
      content: string;
    };
    architecture: {
      headline: string;
      layers: {
        title: string;
        points: string[];
      }[];
    };
    modular: {
      headline: string;
      engines: {
        title: string;
        desc: string;
      }[];
    };
    flows: {
      headline: string;
      items: {
        title: string;
        steps: string[];
      }[];
    };
    advantage: {
      headline: string;
      traditional: {
        title: string;
        points: string[];
      };
      system: {
        title: string;
        points: string[];
      };
    };
    closing: {
      headline: string;
      subheadline: string;
      cta: string;
    };
  };
  caseStudiesPage: {
    hero: {
      headline: string;
      subheadline: string;
      cta: string;
    };
    simulations: {
      title: string;
      context: {
        title: string;
        points: string[];
      };
      diagnosis: {
        title: string;
        points: string[];
      };
      architecture: {
        title: string;
        layers: {
          title: string;
          points: string[];
        }[];
      };
      flow: {
        title: string;
        steps: string[];
      };
    }[];
    insight: {
      headline: string;
      content: string;
    };
  };
  contactPage: {
    hero: {
      headline: string;
      subheadline: string;
      cta: string;
    };
    contact: {
      phone: string;
      email: string;
      instagram: string;
      linkedin: string;
    };
    consultation: {
      headline: string;
      description: string;
      expertise: string[];
      affirmation: string;
    };
    authority: {
      items: {
        title: string;
        desc: string;
      }[];
    };
    form: {
      headline: string;
      fields: {
        name: string;
        email: string;
        whatsapp: string;
        business: string;
        industry: string;
        goal: string;
        challenge: string;
        target: string;
      };
      note: string;
      submit: string;
      success: {
        title: string;
        message: string;
      };
    };
    process: {
      headline: string;
      steps: string[];
    };
  };
  architecturePage: {
    hero: {
      headline: string;
      subheadline: string;
      cta: string;
    };
    problems: {
      headline: string;
      cards: {
        title: string;
        desc: string;
      }[];
      closing: string;
    };
    approach: {
      headline: string;
      layers: {
        title: string;
        desc: string;
      }[];
    };
    blueprint: {
      headline: string;
      steps: string[];
    };
    impact: {
      headline: string;
      outcomes: string[];
    };
    closing: {
      headline: string;
      subtext: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
  };
  automationPage: {
    hero: {
      headline: string;
      subheadline: string;
      cta: string;
    };
    problems: {
      headline: string;
      cards: {
        title: string;
        desc: string;
      }[];
      closing: string;
    };
    framework: {
      headline: string;
      layers: {
        title: string;
        desc: string;
      }[];
    };
    scenarios: {
      headline: string;
      items: {
        title: string;
        steps: string[];
      }[];
    };
    impact: {
      headline: string;
      outcomes: string[];
    };
    integrations: {
      headline: string;
      items: string[];
    };
    closing: {
      headline: string;
      subtext: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
  };
  aboutPage: {
    hero: {
      headline: string;
      subheadline: string;
      narration: string;
    };
    pillars: {
      headline: string;
      subheadline: string;
      members: {
        name: string;
        title: string;
        description: string;
        focusTitle: string;
        focusItems: string[];
        closing: string;
      }[];
    };
    synergy: {
      headline: string;
      narration: string;
      points: string[];
      closing: string;
    };
    principles: {
      headline: string;
      items: {
        title: string;
        desc: string;
      }[];
    };
    closing: {
      headline: string;
      subtext: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
  };
  investmentPage: {
    hero: {
      headline: string;
      subheadline: string;
      cta: string;
    };
    whyNoFixed: {
      headline: string;
      narration: string;
      points: {
        title: string;
        desc: string;
      }[];
      closing: string;
    };
    aiModel: {
      headline: string;
      steps: string[];
      explanation: string;
      resultsTitle: string;
      results: string[];
    };
    factors: {
      headline: string;
      items: {
        title: string;
        desc: string;
      }[];
    };
    subscription: {
      headline: string;
      narration: string;
      options: string[];
      closing: string;
    };
    qualification: {
      headline: string;
      bullets: string[];
      closing: string;
    };
    closing: {
      headline: string;
      subtext: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
  };
  privacyPage: {
    title: string;
    lastUpdated: string;
    sections: { title: string; content: string[] }[];
  };
  termsPage: {
    title: string;
    lastUpdated: string;
    sections: { title: string; content: string[] }[];
  };
  careersPage: {
    hero: {
      headline: string;
      subheadline: string;
      cta: string;
    };
    principles: {
      title: string;
      desc: string;
      items: string[];
    };
    profile: {
      title: string;
      desc: string;
      points: string[];
      closing: string;
    };
    roles: {
      title: string;
      items: { title: string; desc: string }[];
      note: string;
    };
    selection: {
      title: string;
      steps: string[];
      note: string;
    };
    form: {
      title: string;
      desc: string;
      fields: {
        name: string;
        email: string;
        link: string;
        expertise: string;
        experience: string;
        motivation: string;
      };
      note: string;
      submit: string;
    };
    closing: {
      title: string;
      desc: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
  };
};

const translations: Record<Language, Translations> = {
  id: {
    nav: {
      home: "Beranda",
      approach: "Pendekatan",
      system: "Sistem",
      caseStudies: "Studi Kasus",
      pricing: "Harga",
      demo: "Demo",
      contact: "Kontak",
      startAnalysis: "Mulai Analisis",
    },
    hero: {
      badge: "AI-Powered Web Architecture",
      headline: {
        part1: "Bangun Website yang",
        part2: "Bekerja untuk Bisnis Anda.",
      },
      subheadline: {
        part1: "Koonang adalah AI-powered Web Architecture Studio yang merancang sistem digital untuk",
        revenue: "revenue",
        automation: "automation",
        scalability: "scalability",
      },
      cta: {
        primary: "Mulai Analisis Gratis",
        secondary: "Lihat Cara Kerja Kami",
      },
    },
    privacyPage: {
      title: "Kebijakan Privasi",
      lastUpdated: "Terakhir Diperbarui: 15 Maret 2026",
      sections: [
        {
          title: "1. Pengumpulan Informasi",
          content: [
            "Kami mengumpulkan informasi yang Anda berikan secara langsung kepada kami saat Anda mengisi formulir kontak, berlangganan newsletter, atau berkomunikasi dengan kami.",
            "Informasi ini mungkin mencakup nama, alamat email, nomor telepon, nama perusahaan, dan detail relevan lainnya untuk kebutuhan analisis arsitektur sistem."
          ]
        },
        {
          title: "2. Penggunaan Informasi",
          content: [
            "Informasi yang kami kumpulkan digunakan untuk menyediakan, memelihara, dan meningkatkan layanan kami.",
            "Kami juga menggunakan informasi Anda untuk memproses transaksi, mengirimkan pemberitahuan, menanggapi pertanyaan Anda, dan untuk tujuan komunikasi strategis terkait proyek Anda."
          ]
        },
        {
          title: "3. Berbagi Informasi",
          content: [
            "Kami tidak akan menjual, menyewakan, atau menukar informasi pribadi Anda dengan pihak ketiga mana pun tanpa persetujuan Anda, kecuali diwajibkan oleh hukum."
          ]
        },
        {
          title: "4. Keamanan",
          content: [
            "Kami mengambil langkah-langkah yang wajar untuk melindungi informasi Anda dari akses, penggunaan, modifikasi, atau pengungkapan yang tidak sah. Infrastruktur kami dirancang dengan prinsip keamanan yang ketat."
          ]
        },
        {
          title: "5. Hubungi Kami",
          content: [
            "Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami melalui formulir kontak di situs web ini."
          ]
        }
      ]
    },
    termsPage: {
      title: "Syarat Layanan",
      lastUpdated: "Terakhir Diperbarui: 15 Maret 2026",
      sections: [
        {
          title: "1. Penerimaan Syarat",
          content: [
            "Dengan mengakses dan menggunakan situs web Koonang, Anda menyetujui untuk terikat oleh Syarat Layanan ini dan semua hukum dan peraturan yang berlaku."
          ]
        },
        {
          title: "2. Layanan Arsitektur Digital",
          content: [
            "Koonang menyediakan layanan konsultasi, perancangan, dan pengembangan sistem digital. Setiap proyek didasarkan pada blueprint arsitektur yang disepakati bersama.",
            "Estimasi investasi, jadwal, dan ruang lingkup pekerjaan akan dirinci secara spesifik untuk setiap proyek sebelum pekerjaan dimulai."
          ]
        },
        {
          title: "3. Hak Kekayaan Intelektual",
          content: [
            "Blueprint, konsep arsitektur, dan kode yang dikembangkan oleh Koonang merupakan milik Koonang sampai seluruh kewajiban pembayaran diselesaikan, kecuali disepakati lain secara tertulis."
          ]
        },
        {
          title: "4. Batasan Tanggung Jawab",
          content: [
            "Koonang tidak bertanggung jawab atas kerugian langsung, tidak langsung, insidental, atau konsekuensial yang timbul dari penggunaan atau ketidakmampuan untuk menggunakan sistem atau layanan kami."
          ]
        },
        {
          title: "5. Perubahan Syarat",
          content: [
            "Kami berhak memodifikasi Syarat Layanan ini kapan saja. Kami akan memberitahu Anda tentang perubahan signifikan dengan memposting versi baru di situs web."
          ]
        }
      ]
    },
    careersPage: {
      hero: {
        headline: "Bergabung dengan Tim yang Membangun Sistem",
        subheadline: "Kami tidak mencari banyak orang. Kami mencari individu yang mampu berpikir dalam struktur dan membangun dengan presisi.",
        cta: "Lihat Peran yang Dibuka",
      },
      principles: {
        title: "Standar Kerja di koonang",
        desc: "koonang adalah studio arsitektur digital yang berfokus pada kualitas sistem, bukan kuantitas proyek. Kami bekerja dengan pendekatan strategis, modular, dan berbasis analisis.",
        items: [
          "Architecture First",
          "Clean & Scalable Code",
          "Data-Informed Decision",
          "Strategic Collaboration"
        ],
      },
      profile: {
        title: "Profil yang Kami Hargai",
        desc: "Kami lebih menghargai kualitas pemikiran daripada jumlah pengalaman di atas kertas.",
        points: [
          "Berpikir sistemik, bukan parsial",
          "Memahami dampak teknis terhadap bisnis",
          "Mampu bekerja dengan struktur dan dokumentasi",
          "Menghargai presisi dan detail",
          "Nyaman dengan pendekatan AI-assisted workflow"
        ],
        closing: "Kami lebih menghargai kualitas pemikiran daripada jumlah pengalaman di atas kertas.",
      },
      roles: {
        title: "Peluang Kolaborasi",
        items: [
          { title: "Digital System Engineer", desc: "(UI/UX, Frontend, Backend, atau Integrasi)" },
          { title: "Digital Automation Specialist", desc: "" },
          { title: "Research & Data Analyst", desc: "" }
        ],
        note: "Kami membuka peluang berdasarkan kebutuhan proyek dan pertumbuhan sistem. Jika Anda merasa relevan dengan visi kami, kirimkan profil dan portofolio terbaik Anda."
      },
      selection: {
        title: "Proses Seleksi",
        steps: [
          "Review Profil & Portofolio",
          "Diskusi Teknis / Strategis",
          "Evaluasi Problem-Solving Approach",
          "Final Alignment"
        ],
        note: "Kami menilai cara berpikir dan struktur pendekatan Anda terhadap masalah."
      },
      form: {
        title: "Kirimkan Profil Anda",
        desc: "Pilih peran yang paling sesuai dan ceritakan bagaimana Anda bisa berkontribusi.",
        fields: {
          name: "Nama",
          email: "Email",
          link: "LinkedIn / Portfolio",
          expertise: "Bidang Keahlian",
          experience: "Pengalaman Singkat",
          motivation: "Mengapa Ingin Bergabung"
        },
        note: "Kami menghubungi kandidat yang sesuai dengan kebutuhan dan standar kami.",
        submit: "Kirim Profil Anda",
      },
      closing: {
        title: "Bangun Sistem yang Berdampak",
        desc: "Jika Anda tertarik membangun infrastruktur digital yang presisi dan scalable, kami terbuka untuk berdiskusi.",
        ctaPrimary: "Kirim Profil Anda",
        ctaSecondary: "Kembali ke Beranda"
      },
    },
    problem: {
      title: {
        part1: "Website Anda Sudah Online.",
        part2: "Tapi Apakah Sudah Bekerja?",
      },
      desc: "Kebanyakan website hanya menjadi kartu nama digital yang pasif. Tanpa sistem, website adalah biaya, bukan investasi.",
      cards: [
        {
          title: "Traffic Tanpa Konversi",
          desc: "Pengunjung datang tapi pergi tanpa membeli atau menghubungi Anda.",
        },
        {
          title: "Proses Manual",
          desc: "Admin masih sibuk membalas chat berulang dan input data manual.",
        },
        {
          title: "Sulit Di-Scale",
          desc: "Website crash saat traffic tinggi atau fitur sulit dikembangkan.",
        },
      ],
    },
    solution: {
      title: {
        part1: "Kami Tidak Hanya Membuat Website.",
        part2: "Kami Membangun Sistem Digital.",
      },
      desc: "Transformasi dari sekadar \"ada di internet\" menjadi mesin pertumbuhan bisnis yang otonom.",
      steps: ["Website", "Sistem", "Otomasi", "Revenue", "Growth Loop"],
    },
    process: {
      title: {
        part1: "Tahapan Growth Bersama",
        part2: "koonang",
      },
      desc: "Proses terstruktur yang mengubah ide menjadi eksekusi presisi.",
      steps: [
        {
          title: "Input Detail",
          desc: "Ceritakan bisnis Anda, target market, dan goals dalam 5 menit.",
        },
        {
          title: "Analisis AI",
          desc: "AI kami menganalisis kompetitor dan membuat blueprint strategi.",
        },
        {
          title: "Konsultasi Live",
          desc: "Diskusi mendalam dengan strategist untuk finalisasi roadmap.",
        },
        {
          title: "Build & Scale",
          desc: "Implementasi sistem, testing, dan peluncuran growth engine.",
        },
      ],
    },
    blueprint: {
      title: "Preview Blueprint AI",
      desc: "Dapatkan strategi lengkap sebelum kami menulis satu baris kode pun.",
      diagram: "Diagram Arsitektur",
      visualization: "Visualisasi Topologi Sistem",
      strategy: "Strategi Revenue",
      points: [
        "Rencana Optimasi Tingkat Konversi",
        "Alur Nurturing Lead Otomatis",
        "Roadmap SEO & Konten",
      ],
      automation: "Alur Otomasi",
      tags: ["Sinkronisasi CRM", "Email Otomatis", "Payment Gateway"],
      phases: ["Fase 1: Pondasi", "Fase 2: Pertumbuhan", "Fase 3: Skala"],
    },
    comparison: {
      traditional: {
        title: "Agensi Tradisional",
        points: [
          "Fokus pada tampilan visual saja",
          "Biaya development membengkak",
          "Waktu pengerjaan 3-6 bulan",
          "Tidak ada strategi revenue",
          "Maintenance manual & mahal",
        ],
      },
      koonang: {
        points: [
          "Fokus pada sistem & revenue growth",
          "Biaya transparan & efisien",
          "Launch dalam 2-4 minggu",
          "Blueprint strategi bisnis lengkap",
          "Automated maintenance & security",
        ],
      },
    },
    cta: {
      title: {
        part1: "Siap Mengubah Website Anda",
        part2: "Menjadi Mesin Pertumbuhan?",
      },
      button: "Mulai Analisis Sekarang",
    },
    footer: {
      desc: "AI-powered Web Architecture Studio yang merancang sistem digital untuk revenue, automation, dan scalability.",
      contact: {
        phone: "+62 821-2378-2230",
        email: "koonang26@gmail.com",
        instagram: "https://www.instagram.com/koonang.digital?igsh=eWoxajZlMm53NWpk&utm_source=web",
        linkedin: "https://www.linkedin.com/company/koonang-digital-integration-hub/",
      },
      platform: {
        title: "Platform",
        links: ["Arsitektur", "Otomasi", "Investasi", "Demo"],
      },
      company: {
        title: "Perusahaan",
        links: ["Tentang", "Karir", "Kontak"],
      },
      rights: "© 2026 Koonang. Hak cipta dilindungi undang-undang.",
      privacy: "Kebijakan Privasi",
      terms: "Syarat Layanan",
    },
    resultPage: {
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
    wizard: {
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
    },
    approachPage: {
      hero: {
        headline: {
          part1: "Pendekatan Kami: Membangun",
          part2: "Sistem, Bukan Sekadar Website",
        },
        subheadline: "Setiap proyek dimulai dari analisis strategis, bukan dari desain. Kami membangun arsitektur digital yang dirancang untuk revenue, automation, dan scalability.",
        cta: "Lihat Framework Kami",
      },
      philosophy: {
        headline: "Strategi Sebelum Eksekusi",
        principles: [
          {
            title: "Desain Tanpa Strategi",
            desc: "Hanya sekadar tampilan tanpa arah yang jelas.",
          },
          {
            title: "Teknologi Tanpa Arsitektur",
            desc: "Hanya menciptakan kompleksitas yang sulit dikelola.",
          },
          {
            title: "Growth Infrastructure",
            desc: "Website harus menjadi infrastruktur pertumbuhan bisnis.",
          },
        ],
      },
      framework: {
        title: "Framework Proprietary koonang",
        steps: [
          { title: "DISCOVER", desc: "Analisis mendalam tentang model bisnis dan pasar." },
          { title: "DIAGNOSE", desc: "Identifikasi hambatan dan peluang pertumbuhan." },
          { title: "ARCHITECT", desc: "Perancangan sistem digital yang terintegrasi." },
          { title: "OPTIMIZE", desc: "Penyempurnaan alur konversi dan otomasi." },
          { title: "SCALE", desc: "Ekspansi sistem untuk pertumbuhan berkelanjutan." },
        ],
      },
      aiRole: {
        headline: "AI Sebagai Strategic Layer, Bukan Sekadar Tool",
        left: {
          title: "Peran AI dalam Strategi",
          items: [
            "Business Analyzer",
            "Pattern Recognition Engine",
            "Revenue Architect Assistant",
          ],
        },
        right: {
          title: "AI Constellation Pattern",
        },
      },
      corePrinciples: {
        title: "Prinsip Inti",
        items: [
          { title: "Strategy before Design", desc: "Kami tidak mendesain sebelum strategi matang." },
          { title: "Revenue-driven Architecture", desc: "Setiap elemen dirancang untuk menghasilkan nilai." },
          { title: "System Integration First", desc: "Website yang terhubung dengan ekosistem bisnis Anda." },
          { title: "Automation Mindset", desc: "Mengurangi beban operasional melalui teknologi." },
          { title: "Scalable Foundation", desc: "Siap untuk tumbuh bersama bisnis Anda." },
        ],
      },
      closing: {
        headline: "Setiap Website yang Kami Bangun Adalah Sistem Pertumbuhan",
        subheadline: "Pendekatan ini memastikan bahwa website Anda tidak hanya online, tetapi berfungsi sebagai infrastruktur bisnis jangka panjang.",
        cta: "Mulai Analisis Strategis",
      },
    },
    systemPage: {
      hero: {
        headline: "Website Bukan Produk. Website Adalah Sistem.",
        subheadline: "Kami membangun arsitektur digital yang terdiri dari beberapa layer terintegrasi untuk memastikan bisnis Anda berjalan lebih efisien, terukur, dan scalable.",
        cta: "Lihat Arsitektur Sistem",
      },
      definition: {
        headline: "Apa yang Kami Maksud dengan Sistem?",
        content: "Bagi kami, website bukanlah entitas statis yang berdiri sendiri. Sistem adalah ekosistem digital di mana setiap komponen—mulai dari antarmuka pengguna hingga logika otomasi di latar belakang—bekerja secara harmonis untuk mencapai tujuan bisnis yang spesifik.",
      },
      architecture: {
        headline: "Digital Business System Architecture",
        layers: [
          {
            title: "Experience Layer",
            points: ["UX Design", "Interface", "Interaction"],
          },
          {
            title: "Data Layer",
            points: ["Database", "Tracking", "Analytics", "Event Monitoring"],
          },
          {
            title: "Automation Layer",
            points: ["Workflow", "Email Automation", "CRM Integration", "Task Routing"],
          },
          {
            title: "Revenue Layer",
            points: ["Payment System", "Funnel Optimization", "Booking Engine", "Monetization"],
          },
          {
            title: "Intelligence Layer",
            points: ["AI Insight", "Behavior Analysis", "Optimization Loop", "Growth Prediction"],
          },
        ],
      },
      modular: {
        headline: "Sistem Dibangun Secara Modular",
        engines: [
          { title: "Lead Engine", desc: "Sistem penangkapan dan kualifikasi prospek otomatis." },
          { title: "Booking Engine", desc: "Manajemen reservasi dan penjadwalan real-time." },
          { title: "E-commerce Engine", desc: "Arsitektur transaksi dan manajemen inventaris modern." },
          { title: "CRM Engine", desc: "Sinkronisasi data pelanggan lintas platform." },
          { title: "Internal Dashboard", desc: "Panel kendali operasional untuk tim internal." },
          { title: "Automation Workflow", desc: "Logika bisnis yang berjalan 24/7 tanpa intervensi manual." },
          { title: "Analytics Engine", desc: "Pelacakan metrik kunci untuk pengambilan keputusan data-driven." },
        ],
      },
      flows: {
        headline: "Contoh Implementasi Sistem",
        items: [
          {
            title: "Travel Business",
            steps: ["Visitor", "Booking", "Payment", "CRM", "Automation", "Retargeting", "Repeat Purchase"],
          },
          {
            title: "Professional Service",
            steps: ["Visitor", "Qualification Form", "Internal Routing", "Proposal", "Payment", "Case Tracking"],
          },
        ],
      },
      advantage: {
        headline: "Kenapa Sistem Lebih Penting dari Sekadar Desain?",
        traditional: {
          title: "Website Tradisional",
          points: ["Tampilan menarik", "Tidak terintegrasi", "Proses manual", "Tidak scalable"],
        },
        system: {
          title: "Website Berbasis Sistem",
          points: ["Terintegrasi", "Terukur", "Automated", "Revenue-oriented", "Scalable"],
        },
      },
      closing: {
        headline: "Bangun Infrastruktur Digital Anda Sejak Awal",
        subheadline: "Sistem yang tepat akan menjadi fondasi pertumbuhan jangka panjang.",
        cta: "Mulai Bangun Sistem Anda",
      },
    },
    caseStudiesPage: {
      hero: {
        headline: "Studi Kasus: Simulasi Arsitektur Sistem di Berbagai Industri",
        subheadline: "Bagaimana pendekatan koonang diterapkan untuk merancang sistem digital yang scalable, revenue-driven, dan terintegrasi.",
        cta: "Lihat Simulasi Sistem",
      },
      simulations: [
        {
          title: "OTA TRAVEL PLATFORM",
          context: {
            title: "Business Context",
            points: [
              "Penjualan tiket & paket wisata",
              "Integrasi payment gateway",
              "Manajemen mitra",
              "Data pelanggan terstruktur",
              "Repeat booking system"
            ]
          },
          diagnosis: {
            title: "Problem Diagnosis",
            points: [
              "Sistem manual",
              "Tidak ada automation",
              "Data tidak terintegrasi",
              "Conversion rate rendah",
              "Sulit scale"
            ]
          },
          architecture: {
            title: "Arsitektur Sistem Dirancang",
            layers: [
              { title: "Experience Layer", points: ["Smart search", "Dynamic filter", "Mobile-first booking flow"] },
              { title: "Transaction Layer", points: ["Payment integration", "Refund logic", "Multi-currency"] },
              { title: "CRM & Data Layer", points: ["Booking history", "Customer segmentation", "Behavior tracking"] },
              { title: "Automation Layer", points: ["Abandoned booking trigger", "Email campaign", "Promo targeting"] },
              { title: "Intelligence Layer", points: ["Conversion analytics", "Demand trend monitoring", "Revenue dashboard"] }
            ]
          },
          flow: {
            title: "Animated Flow",
            steps: ["User", "Booking", "Payment", "CRM", "Automation", "Repeat Purchase"]
          }
        },
        {
          title: "PROFESSIONAL SERVICE",
          context: {
            title: "Business Context",
            points: [
              "Lead masuk lebih terstruktur",
              "Screening otomatis",
              "Tracking kasus",
              "Integrasi dokumen",
              "Monitoring progress client"
            ]
          },
          diagnosis: {
            title: "Problem Diagnosis",
            points: [
              "Inquiry via WhatsApp tidak terstruktur",
              "Tidak ada lead qualification",
              "Data tersebar",
              "Manual follow-up",
              "Tidak ada tracking performance"
            ]
          },
          architecture: {
            title: "Arsitektur Sistem Dirancang",
            layers: [
              { title: "Lead Qualification Engine", points: ["Form intelligent + scoring"] },
              { title: "Case Management System", points: ["Dashboard internal", "Status tracking"] },
              { title: "Document Intake System", points: ["Secure upload", "Auto categorization"] },
              { title: "Billing & Payment System", points: ["Invoice automation", "Recurring billing"] },
              { title: "Performance Intelligence", points: ["Lead conversion rate", "Service efficiency", "Case duration analytics"] }
            ]
          },
          flow: {
            title: "Flow Simulation",
            steps: ["Visitor", "Qualification", "Internal Routing", "Proposal", "Payment", "Case Tracking", "Reporting"]
          }
        },
        {
          title: "SaaS / MEMBERSHIP PLATFORM",
          context: {
            title: "Business Context",
            points: [
              "User onboarding",
              "Recurring payment",
              "Feature access control",
              "Retention system",
              "Growth analytics"
            ]
          },
          diagnosis: {
            title: "Problem Diagnosis",
            points: [
              "Subscription churn tinggi",
              "Tidak ada behavior tracking",
              "Tidak ada automation retention",
              "Monetisasi belum optimal"
            ]
          },
          architecture: {
            title: "Arsitektur Sistem Dirancang",
            layers: [
              { title: "Onboarding Flow", points: ["Guided activation"] },
              { title: "Subscription Engine", points: ["Recurring billing", "Plan tier"] },
              { title: "Access Control System", points: ["Role & feature gating"] },
              { title: "Retention Automation", points: ["Email trigger", "Inactivity alert"] },
              { title: "Intelligence Layer", points: ["Churn analysis", "LTV tracking", "Feature usage heatmap"] }
            ]
          },
          flow: {
            title: "Flow",
            steps: ["Signup", "Activation", "Subscription", "Usage Tracking", "Retention Automation", "Upsell"]
          }
        }
      ],
      insight: {
        headline: "Setiap Industri Berbeda. Struktur Sistemnya Tidak Sama.",
        content: "Pendekatan koonang selalu dimulai dari analisis model bisnis, revenue logic, dan operational bottleneck. Bukan dari template."
      }
    },
    contactPage: {
      hero: {
        headline: "Mulai Percakapan Strategis Anda",
        subheadline: "Setiap sistem digital yang kuat dimulai dari arsitektur yang tepat. Diskusikan kebutuhan bisnis Anda bersama tim arsitek digital berpengalaman.",
        cta: "Scroll untuk Memulai",
      },
      contact: {
        phone: "+62 821-2378-2230",
        email: "koonang26@gmail.com",
        instagram: "https://www.instagram.com/koonang.digital?igsh=eWoxajZlMm53NWpk&utm_source=web",
        linkedin: "https://www.linkedin.com/company/koonang-digital-integration-hub/",
      },
      consultation: {
        headline: "Konsultasi Eksklusif dengan Digital System Architect",
        description: "Setiap sesi konsultasi ditangani langsung oleh tim dengan pengalaman lebih dari 10 tahun dalam:",
        expertise: [
          "Merancang sistem website berbasis revenue",
          "Membangun automation workflow",
          "Integrasi CRM & data layer",
          "Pengembangan platform booking, e-commerce, dan SaaS",
          "Arsitektur sistem yang scalable dan efisien"
        ],
        affirmation: "Kami tidak menawarkan template. Kami merancang sistem yang disesuaikan dengan struktur bisnis Anda.",
      },
      authority: {
        items: [
          { title: "10+ Tahun Pengalaman", desc: "Web Development, System Architecture, Integrasi Teknologi" },
          { title: "Multi-Industry Exposure", desc: "Travel, Professional Service, SaaS, Digital Platform" },
          { title: "Strategy-First Approach", desc: "Setiap proyek dimulai dari analisis bisnis dan struktur revenue" }
        ],
      },
      form: {
        headline: "Ceritakan Sistem yang Ingin Anda Bangun",
        fields: {
          name: "Nama",
          email: "Email",
          whatsapp: "Nomor WhatsApp",
          business: "Nama Bisnis / Perusahaan",
          industry: "Industri",
          goal: "Tujuan Website",
          challenge: "Tantangan Saat Ini",
          target: "Target 6–12 Bulan"
        },
        note: "Konsultasi bersifat eksklusif dan terbatas setiap bulan untuk menjaga kualitas analisis dan eksekusi.",
        submit: "Kirim Brief Strategis",
        success: {
          title: "Brief Diterima",
          message: "Tim kami akan meninjau brief Anda dan menyusun preliminary strategic analysis sebelum sesi diskusi."
        }
      },
      process: {
        headline: "Apa yang Terjadi Setelah Anda Mengirim Form?",
        steps: ["Review Brief", "AI Preliminary Analysis", "Strategic Consultation", "Architecture Recommendation"]
      }
    },
    architecturePage: {
      hero: {
        headline: "Arsitektur Adalah Fondasi Sistem Digital",
        subheadline: "Tanpa struktur yang tepat, platform tidak akan scalable, efisien, atau berkelanjutan.",
        cta: "Pelajari Cara Kami Merancang Sistem",
      },
      problems: {
        headline: "Mengapa Banyak Website Gagal Bertumbuh?",
        cards: [
          { title: "Tanpa Perencanaan Sistem", desc: "Dibangun tanpa blueprint yang jelas, mengakibatkan struktur yang rapuh." },
          { title: "Scalability Terbatas", desc: "Tidak mempertimbangkan pertumbuhan traffic dan fitur di masa depan." },
          { title: "Workflow Terputus", desc: "Tidak terintegrasi dengan proses bisnis internal Anda." },
          { title: "Data Tidak Terstruktur", desc: "Informasi tersebar dan sulit dianalisis untuk pengambilan keputusan." }
        ],
        closing: "Masalahnya bukan pada desain. Masalahnya pada arsitektur.",
      },
      approach: {
        headline: "Pendekatan System Architecture",
        layers: [
          { title: "Business Logic Layer", desc: "Menerjemahkan aturan bisnis Anda ke dalam logika sistem." },
          { title: "Information Architecture", desc: "Struktur data dan navigasi yang intuitif dan efisien." },
          { title: "Technology Stack", desc: "Pemilihan teknologi yang tepat untuk performa dan keamanan." },
          { title: "Data & Integration Layer", desc: "Menghubungkan sistem dengan ekosistem bisnis eksternal." }
        ],
      },
      blueprint: {
        headline: "Dari Brief Menuju Blueprint",
        steps: ["Business Analysis", "System Mapping", "Data Flow Design", "Scalability Planning", "Documentation & Technical Outline"]
      },
      impact: {
        headline: "Apa Dampaknya untuk Bisnis Anda?",
        outcomes: [
          "Lebih cepat berkembang",
          "Mudah diintegrasikan",
          "Mengurangi technical debt",
          "Efisiensi operasional",
          "Siap scale tanpa rebuild total"
        ]
      },
      closing: {
        headline: "Sistem Kuat Dimulai dari Arsitektur yang Tepat",
        subtext: "Sebelum membangun, rancang dengan presisi.",
        ctaPrimary: "Mulai Analisis AI",
        ctaSecondary: "Diskusikan Arsitektur Anda"
      }
    },
    automationPage: {
      hero: {
        headline: "Otomasi Mengubah Website Menjadi Sistem Kerja",
        subheadline: "Platform digital seharusnya tidak hanya menerima traffic, tetapi menjalankan proses bisnis secara otomatis.",
        cta: "Lihat Cara Sistem Bekerja",
      },
      problems: {
        headline: "Tanpa Otomasi, Tim Anda Bekerja Dua Kali",
        cards: [
          { title: "Follow-up Manual", desc: "Menghubungi setiap lead satu per satu menghabiskan waktu berharga." },
          { title: "Input Data Berulang", desc: "Memindahkan data antar platform secara manual rawan kesalahan." },
          { title: "Proses Booking Manual", desc: "Mengelola reservasi tanpa sistem otomatis menghambat skalabilitas." },
          { title: "Laporan Manual", desc: "Menyusun data performa secara manual memperlambat pengambilan keputusan." }
        ],
        closing: "Waktu habis untuk operasional. Bukan untuk pertumbuhan.",
      },
      framework: {
        headline: "Automation Framework",
        layers: [
          { title: "Lead Capture Layer", desc: "Penangkapan data prospek secara instan dan terstruktur." },
          { title: "Qualification Logic", desc: "Penyaringan otomatis untuk menentukan prioritas prospek." },
          { title: "Workflow Automation", desc: "Eksekusi langkah bisnis tanpa intervensi manusia." },
          { title: "Notification & Follow-up", desc: "Komunikasi tepat waktu melalui berbagai kanal digital." },
          { title: "Reporting & Insight", desc: "Penyajian data performa secara real-time dan otomatis." }
        ],
      },
      scenarios: {
        headline: "Contoh Skenario Otomasi",
        items: [
          {
            title: "Travel Platform",
            steps: ["User booking", "Payment auto-confirm", "Invoice generated", "Email + WhatsApp sent", "CRM updated", "Admin dashboard updated"]
          },
          {
            title: "Professional Service",
            steps: ["User submit brief", "AI analyze", "Lead scored", "Sales notified", "Proposal template generated"]
          },
          {
            title: "E-commerce",
            steps: ["Abandoned cart", "Reminder sequence", "Discount trigger", "Purchase", "Upsell automation"]
          }
        ],
      },
      impact: {
        headline: "Dampak Otomasi pada Operasional",
        outcomes: [
          "Mengurangi pekerjaan manual",
          "Mempercepat respon ke customer",
          "Meningkatkan conversion rate",
          "Data terstruktur real-time",
          "Skalabilitas tanpa menambah tim"
        ]
      },
      integrations: {
        headline: "Integrasi yang Didukung",
        items: ["CRM", "Payment Gateway", "Email Platform", "WhatsApp API", "Analytics", "Internal Dashboard"]
      },
      closing: {
        headline: "Bangun Sistem yang Bekerja untuk Anda",
        subtext: "Biarkan platform menjalankan proses. Tim Anda fokus pada strategi dan pertumbuhan.",
        ctaPrimary: "Mulai Analisis AI",
        ctaSecondary: "Diskusikan Sistem Otomasi"
      }
    },
    aboutPage: {
      hero: {
        headline: "Tentang KOONANG",
        subheadline: "Di era di mana kecepatan dan presisi menentukan arah pertumbuhan bisnis, teknologi bukan lagi sekadar alat — melainkan fondasi.",
        narration: "KOONANG lahir dari kebutuhan akan sistem digital yang tidak hanya berjalan, tetapi bekerja secara strategis. Kami percaya bahwa setiap bisnis memiliki potensi untuk bertumbuh lebih cepat melalui arsitektur teknologi yang tepat, desain yang intuitif, dan eksekusi yang terukur."
      },
      pillars: {
        headline: "Bagian dari Ekosistem KING DAVID SERVICE",
        subheadline: "KOONANG merupakan bagian dari unit bisnis Digital Service dan secara resmi berada dalam ekosistem KING DAVID SERVICE — sebuah grup layanan profesional yang menaungi berbagai lini bisnis berbasis solusi dan inovasi.",
        members: [
          {
            name: "Foundation Manajemen & Struktur",
            title: "Standar Profesionalisme",
            description: "Keberadaan kami di dalam ekosistem KING DAVID SERVICE memastikan bahwa setiap solusi yang kami bangun bukan hanya kreatif, tetapi juga memiliki fondasi manajemen, struktur operasional, dan roadmap jangka panjang yang jelas.",
            focusTitle: "Nilai yang kami bawa:",
            focusItems: [
              "Manajemen profesional",
              "Struktur operasional jelas",
              "Roadmap jangka panjang",
              "Integritas dan tata kelola"
            ],
            closing: "Kami menggabungkan kreativitas teknologi dengan stabilitas organisasi. Inovasi dengan struktur. Kecepatan dengan ketelitian."
          }
        ]
      },
      synergy: {
        headline: "Lebih dari Sekadar Web App",
        narration: "Bagi kami, web application bukan hanya tentang tampilan atau fitur. Ini tentang bagaimana sistem:",
        points: [
          "Mengurangi friksi operasional",
          "Meningkatkan efisiensi kerja",
          "Mengoptimalkan performa digital",
          "Menciptakan pengalaman pengguna yang seamless"
        ],
        closing: "Kami merancang, membangun, dan mengoptimalkan sistem yang scalable, secure, dan SEO-driven — sehingga bisnis tidak hanya tampil digital, tetapi benar-benar bertumbuh secara digital."
      },
      principles: {
        headline: "Filosofi Kami",
        items: [
          {
            title: "Kami tidak membangun sistem untuk hari ini saja",
            desc: "Kami membangun infrastruktur digital untuk pertumbuhan jangka panjang. Setiap proyek dimulai dengan pemahaman mendalam terhadap model bisnis, alur kerja, dan visi klien."
          },
          {
            title: "Dari sana, kami menerjemahkannya ke dalam arsitektur teknologi yang presisi",
            desc: "Mulai dari UX/UI engineering hingga performance optimization, setiap elemen dirancang dengan tujuan pertumbuhan bisnis yang berkelanjutan."
          },
          {
            title: "Sebagai unit Digital Service dari KING DAVID SERVICE",
            desc: "KOONANG beroperasi dengan standar profesionalisme, integritas, dan tata kelola yang kuat."
          }
        ]
      },
      closing: {
        headline: "Membangun Masa Depan Digital",
        subtext: "Kami percaya bahwa masa depan bisnis adalah digital — dan masa depan digital membutuhkan fondasi yang kokoh. KOONANG hadir untuk menjadi mitra strategis dalam transformasi tersebut.",
        ctaPrimary: "Mulai Transformasi Digital Anda",
        ctaSecondary: "Lihat Studi Kasus"
      }
    },
    investmentPage: {
      hero: {
        headline: "Investasi Ditentukan oleh Arsitektur, Bukan Paket",
        subheadline: "Setiap sistem memiliki kompleksitas yang berbeda. Karena itu, kami menggunakan analisis berbasis AI untuk menyusun estimasi yang relevan dan presisi.",
        cta: "Mulai Analisis AI",
      },
      whyNoFixed: {
        headline: "Mengapa Kami Tidak Menampilkan Harga Tetap",
        narration: "Platform digital yang dirancang dengan pendekatan arsitektur tidak dapat disederhanakan menjadi paket generik. Kompleksitas integrasi, automation layer, struktur data, dan kebutuhan skalabilitas menentukan tingkat investasi.",
        points: [
          { title: "Blueprint mendahului estimasi", desc: "Kami harus memahami struktur sistem sebelum dapat menghitung sumber daya yang dibutuhkan." },
          { title: "Integrasi menentukan kompleksitas", desc: "Jumlah dan jenis sistem eksternal yang terhubung sangat mempengaruhi beban kerja teknis." },
          { title: "Skalabilitas mempengaruhi struktur", desc: "Infrastruktur yang dirancang untuk jutaan pengguna berbeda dengan sistem untuk ribuan pengguna." }
        ],
        closing: "Investasi mengikuti kebutuhan sistem, bukan sebaliknya.",
      },
      aiModel: {
        headline: "AI-Based Preliminary Estimation",
        steps: ["Input Detail Bisnis", "AI Analyze System Complexity", "AI Generate Preliminary Scope", "Estimasi Range Disusun"],
        explanation: "Setelah Anda mengirimkan brief, sistem AI kami akan menganalisis kompleksitas kebutuhan berdasarkan struktur bisnis, integrasi, automation layer, dan target pertumbuhan.",
        resultsTitle: "Hasilnya berupa:",
        results: ["Rekomendasi struktur sistem", "Preliminary scope", "Estimasi range investasi", "Arah pengembangan"]
      },
      factors: {
        headline: "Faktor yang Mempengaruhi Estimasi",
        items: [
          { title: "Kompleksitas Arsitektur", desc: "Jumlah layer dan logika bisnis yang harus dibangun." },
          { title: "Jumlah Integrasi", desc: "Koneksi dengan CRM, Payment, API pihak ketiga, dll." },
          { title: "Layer Otomasi", desc: "Kedalaman alur kerja otomatis yang dijalankan sistem." },
          { title: "Volume Data & Traffic", desc: "Kapasitas infrastruktur yang harus disiapkan." },
          { title: "Custom Development", desc: "Fitur unik yang tidak tersedia dalam modul standar." },
          { title: "Timeline Eksekusi", desc: "Kecepatan peluncuran yang diinginkan oleh bisnis." }
        ]
      },
      subscription: {
        headline: "Model Kerja yang Fleksibel",
        narration: "koonang tidak menggunakan model SLA subscription wajib. Setiap sistem dibangun dengan struktur yang jelas dan dapat berdiri secara independen.",
        options: ["Maintenance", "Optimization", "Additional automation", "System expansion"],
        closing: "Kami membangun sistem, bukan mengikat kontrak jangka panjang.",
      },
      qualification: {
        headline: "Siapa yang Cocok Bekerja Sama dengan Kami?",
        bullets: [
          "Bisnis yang ingin membangun sistem jangka panjang",
          "Founder yang berpikir strategis",
          "Perusahaan yang membutuhkan integrasi kompleks",
          "Tim yang ingin meningkatkan efisiensi operasional"
        ],
        closing: "Jika Anda mencari solusi template cepat, pendekatan kami mungkin bukan pilihan yang tepat."
      },
      closing: {
        headline: "Mulai dengan Analisis yang Presisi",
        subtext: "Sebelum berbicara angka, mari pahami arsitektur yang dibutuhkan bisnis Anda.",
        ctaPrimary: "Mulai Analisis AI",
        ctaSecondary: "Diskusikan Kebutuhan Anda"
      }
    },
  },
  en: {
    nav: {
      home: "Home",
      approach: "Approach",
      system: "System",
      caseStudies: "Case Studies",
      pricing: "Pricing",
      demo: "Demo",
      contact: "Contact",
      startAnalysis: "Start Analysis",
    },
    hero: {
      badge: "AI-Powered Web Architecture",
      headline: {
        part1: "Build a Website That",
        part2: "Works for Your Business.",
      },
      subheadline: {
        part1: "Koonang is an AI-powered Web Architecture Studio designing digital systems for",
        revenue: "revenue",
        automation: "automation",
        scalability: "scalability",
      },
      cta: {
        primary: "Start Free Analysis",
        secondary: "See How We Work",
      },
    },
    problem: {
      title: {
        part1: "Your Website is Online.",
        part2: "But Is It Working?",
      },
      desc: "Most websites are just passive digital business cards. Without a system, a website is a cost, not an investment.",
      cards: [
        {
          title: "Traffic Without Conversion",
          desc: "Visitors come but leave without buying or contacting you.",
        },
        {
          title: "Manual Processes",
          desc: "Admins are still busy replying to repetitive chats and manual data entry.",
        },
        {
          title: "Hard to Scale",
          desc: "Website crashes during high traffic or features are hard to develop.",
        },
      ],
    },
    solution: {
      title: {
        part1: "We Don't Just Make Websites.",
        part2: "We Build Digital Systems.",
      },
      desc: "Transforming from just \"being on the internet\" into an autonomous business growth machine.",
      steps: ["Website", "System", "Automation", "Revenue", "Growth Loop"],
    },
    process: {
      title: {
        part1: "Growth Stages with",
        part2: "koonang",
      },
      desc: "A structured process turning ideas into precise execution.",
      steps: [
        {
          title: "Input Details",
          desc: "Tell us about your business, target market, and goals in 5 minutes.",
        },
        {
          title: "AI Analysis",
          desc: "Our AI analyzes competitors and creates a strategy blueprint.",
        },
        {
          title: "Live Consultation",
          desc: "In-depth discussion with strategists to finalize the roadmap.",
        },
        {
          title: "Build & Scale",
          desc: "System implementation, testing, and growth engine launch.",
        },
      ],
    },
    blueprint: {
      title: "AI Blueprint Preview",
      desc: "Get a complete strategy before we write a single line of code.",
      diagram: "Architecture Diagram",
      visualization: "System Topology Visualization",
      strategy: "Revenue Strategy",
      points: [
        "Conversion Rate Optimization Plan",
        "Automated Lead Nurturing Flow",
        "SEO & Content Roadmap",
      ],
      automation: "Automation Flow",
      tags: ["CRM Sync", "Email Auto", "Payment Gateway"],
      phases: ["Phase 1: Foundation", "Phase 2: Growth", "Phase 3: Scale"],
    },
    comparison: {
      traditional: {
        title: "Traditional Agency",
        points: [
          "Focus on visual appearance only",
          "Development costs swell",
          "3-6 months timeline",
          "No revenue strategy",
          "Manual & expensive maintenance",
        ],
      },
      koonang: {
        points: [
          "Focus on system & revenue growth",
          "Transparent & efficient costs",
          "Launch in 2-4 weeks",
          "Complete business strategy blueprint",
          "Automated maintenance & security",
        ],
      },
    },
    cta: {
      title: {
        part1: "Ready to Turn Your Website",
        part2: "Into a Growth Machine?",
      },
      button: "Start Analysis Now",
    },
    footer: {
      desc: "AI-powered Web Architecture Studio building digital systems for revenue, automation, and scalability.",
      contact: {
        phone: "+62 821-2378-2230",
        email: "koonang26@gmail.com",
        instagram: "https://www.instagram.com/koonang.digital?igsh=eWoxajZlMm53NWpk&utm_source=web",
        linkedin: "https://www.linkedin.com/company/koonang-digital-integration-hub/",
      },
      platform: {
        title: "Platform",
        links: ["Architecture", "Automation", "Investment", "Demo"],
      },
      company: {
        title: "Company",
        links: ["About", "Careers", "Contact"],
      },
      rights: "© 2026 Koonang. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    resultPage: {
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
    },
    approachPage: {
      hero: {
        headline: {
          part1: "Our Approach: Building",
          part2: "Systems, Not Just Websites",
        },
        subheadline: "Every project starts with strategic analysis, not design. We build digital architectures designed for revenue, automation, and scalability.",
        cta: "View Our Framework",
      },
      philosophy: {
        headline: "Strategy Before Execution",
        principles: [
          {
            title: "Design Without Strategy",
            desc: "Just a visual without a clear direction.",
          },
          {
            title: "Technology Without Architecture",
            desc: "Only creating complexity that is hard to manage.",
          },
          {
            title: "Growth Infrastructure",
            desc: "Websites must become business growth infrastructure.",
          },
        ],
      },
      framework: {
        title: "koonang Proprietary Framework",
        steps: [
          { title: "DISCOVER", desc: "In-depth analysis of business model and market." },
          { title: "DIAGNOSE", desc: "Identification of obstacles and growth opportunities." },
          { title: "ARCHITECT", desc: "Designing integrated digital systems." },
          { title: "OPTIMIZE", desc: "Refining conversion flows and automation." },
          { title: "SCALE", desc: "Expanding systems for sustainable growth." },
        ],
      },
      aiRole: {
        headline: "AI as a Strategic Layer, Not Just a Tool",
        left: {
          title: "AI's Role in Strategy",
          items: [
            "Business Analyzer",
            "Pattern Recognition Engine",
            "Revenue Architect Assistant",
          ],
        },
        right: {
          title: "AI Constellation Pattern",
        },
      },
      corePrinciples: {
        title: "Core Principles",
        items: [
          { title: "Strategy before Design", desc: "We don't design before the strategy is mature." },
          { title: "Revenue-driven Architecture", desc: "Every element is designed to generate value." },
          { title: "System Integration First", desc: "Websites that connect with your business ecosystem." },
          { title: "Automation Mindset", desc: "Reducing operational burden through technology." },
          { title: "Scalable Foundation", desc: "Ready to grow with your business." },
        ],
      },
      closing: {
        headline: "Every Website We Build is a Growth System",
        subheadline: "This approach ensures that your website is not just online, but functions as long-term business infrastructure.",
        cta: "Start Strategic Analysis",
      },
    },
    systemPage: {
      hero: {
        headline: "Websites are Not Products. Websites are Systems.",
        subheadline: "We build digital architectures consisting of several integrated layers to ensure your business runs more efficiently, measurably, and scalably.",
        cta: "View System Architecture",
      },
      definition: {
        headline: "What Do We Mean by System?",
        content: "To us, a website is not a standalone static entity. A system is a digital ecosystem where every component—from the user interface to the background automation logic—works harmoniously to achieve specific business goals.",
      },
      architecture: {
        headline: "Digital Business System Architecture",
        layers: [
          {
            title: "Experience Layer",
            points: ["UX Design", "Interface", "Interaction"],
          },
          {
            title: "Data Layer",
            points: ["Database", "Tracking", "Analytics", "Event Monitoring"],
          },
          {
            title: "Automation Layer",
            points: ["Workflow", "Email Automation", "CRM Integration", "Task Routing"],
          },
          {
            title: "Revenue Layer",
            points: ["Payment System", "Funnel Optimization", "Booking Engine", "Monetization"],
          },
          {
            title: "Intelligence Layer",
            points: ["AI Insight", "Behavior Analysis", "Optimization Loop", "Growth Prediction"],
          },
        ],
      },
      modular: {
        headline: "Systems Built Modularly",
        engines: [
          { title: "Lead Engine", desc: "Automated lead capture and qualification system." },
          { title: "Booking Engine", desc: "Real-time reservation and scheduling management." },
          { title: "E-commerce Engine", desc: "Modern transaction architecture and inventory management." },
          { title: "CRM Engine", desc: "Cross-platform customer data synchronization." },
          { title: "Internal Dashboard", desc: "Operational control panel for internal teams." },
          { title: "Automation Workflow", desc: "Business logic running 24/7 without manual intervention." },
          { title: "Analytics Engine", desc: "Key metric tracking for data-driven decision making." },
        ],
      },
      flows: {
        headline: "System Implementation Examples",
        items: [
          {
            title: "Travel Business",
            steps: ["Visitor", "Booking", "Payment", "CRM", "Automation", "Retargeting", "Repeat Purchase"],
          },
          {
            title: "Professional Service",
            steps: ["Visitor", "Qualification Form", "Internal Routing", "Proposal", "Payment", "Case Tracking"],
          },
        ],
      },
      advantage: {
        headline: "Why Systems are More Important Than Just Design?",
        traditional: {
          title: "Traditional Website",
          points: ["Attractive appearance", "Not integrated", "Manual processes", "Not scalable"],
        },
        system: {
          title: "System-Based Website",
          points: ["Integrated", "Measurable", "Automated", "Revenue-oriented", "Scalable"],
        },
      },
      closing: {
        headline: "Build Your Digital Infrastructure From the Start",
        subheadline: "The right system will be the foundation for long-term growth.",
        cta: "Start Building Your System",
      },
    },
    caseStudiesPage: {
      hero: {
        headline: "Case Studies: System Architecture Simulation Across Industries",
        subheadline: "How the koonang approach is applied to design scalable, revenue-driven, and integrated digital systems.",
        cta: "View System Simulations",
      },
      simulations: [
        {
          title: "OTA TRAVEL PLATFORM",
          context: {
            title: "Business Context",
            points: [
              "Ticket & tour package sales",
              "Payment gateway integration",
              "Partner management",
              "Structured customer data",
              "Repeat booking system"
            ]
          },
          diagnosis: {
            title: "Problem Diagnosis",
            points: [
              "Manual systems",
              "No automation",
              "Non-integrated data",
              "Low conversion rate",
              "Hard to scale"
            ]
          },
          architecture: {
            title: "Designed System Architecture",
            layers: [
              { title: "Experience Layer", points: ["Smart search", "Dynamic filter", "Mobile-first booking flow"] },
              { title: "Transaction Layer", points: ["Payment integration", "Refund logic", "Multi-currency"] },
              { title: "CRM & Data Layer", points: ["Booking history", "Customer segmentation", "Behavior tracking"] },
              { title: "Automation Layer", points: ["Abandoned booking trigger", "Email campaign", "Promo targeting"] },
              { title: "Intelligence Layer", points: ["Conversion analytics", "Demand trend monitoring", "Revenue dashboard"] }
            ]
          },
          flow: {
            title: "Animated Flow",
            steps: ["User", "Booking", "Payment", "CRM", "Automation", "Repeat Purchase"]
          }
        },
        {
          title: "PROFESSIONAL SERVICE",
          context: {
            title: "Business Context",
            points: [
              "Structured lead intake",
              "Automated screening",
              "Case tracking",
              "Document integration",
              "Client progress monitoring"
            ]
          },
          diagnosis: {
            title: "Problem Diagnosis",
            points: [
              "Unstructured WhatsApp inquiries",
              "No lead qualification",
              "Scattered data",
              "Manual follow-up",
              "No performance tracking"
            ]
          },
          architecture: {
            title: "Designed System Architecture",
            layers: [
              { title: "Lead Qualification Engine", points: ["Intelligent form + scoring"] },
              { title: "Case Management System", points: ["Internal dashboard", "Status tracking"] },
              { title: "Document Intake System", points: ["Secure upload", "Auto categorization"] },
              { title: "Billing & Payment System", points: ["Invoice automation", "Recurring billing"] },
              { title: "Performance Intelligence", points: ["Lead conversion rate", "Service efficiency", "Case duration analytics"] }
            ]
          },
          flow: {
            title: "Flow Simulation",
            steps: ["Visitor", "Qualification", "Internal Routing", "Proposal", "Payment", "Case Tracking", "Reporting"]
          }
        },
        {
          title: "SaaS / MEMBERSHIP PLATFORM",
          context: {
            title: "Business Context",
            points: [
              "User onboarding",
              "Recurring payment",
              "Feature access control",
              "Retention system",
              "Growth analytics"
            ]
          },
          diagnosis: {
            title: "Problem Diagnosis",
            points: [
              "High subscription churn",
              "No behavior tracking",
              "No retention automation",
              "Suboptimal monetization"
            ]
          },
          architecture: {
            title: "Designed System Architecture",
            layers: [
              { title: "Onboarding Flow", points: ["Guided activation"] },
              { title: "Subscription Engine", points: ["Recurring billing", "Plan tier"] },
              { title: "Access Control System", points: ["Role & feature gating"] },
              { title: "Retention Automation", points: ["Email trigger", "Inactivity alert"] },
              { title: "Intelligence Layer", points: ["Churn analysis", "LTV tracking", "Feature usage heatmap"] }
            ]
          },
          flow: {
            title: "Flow",
            steps: ["Signup", "Activation", "Subscription", "Usage Tracking", "Retention Automation", "Upsell"]
          }
        }
      ],
      insight: {
        headline: "Every Industry is Different. System Structures are Not the Same.",
        content: "The koonang approach always starts with an analysis of the business model, revenue logic, and operational bottlenecks. Not from a template."
      }
    },
    contactPage: {
      hero: {
        headline: "Start Your Strategic Conversation",
        subheadline: "Every strong digital system starts with the right architecture. Discuss your business needs with an experienced digital architect team.",
        cta: "Scroll to Start",
      },
      contact: {
        phone: "+62 821-2378-2230",
        email: "koonang26@gmail.com",
        instagram: "https://www.instagram.com/koonang.digital?igsh=eWoxajZlMm53NWpk&utm_source=web",
        linkedin: "https://www.linkedin.com/company/koonang-digital-integration-hub/",
      },
      consultation: {
        headline: "Exclusive Consultation with Digital System Architect",
        description: "Every consultation session is handled directly by a team with over 10 years of experience in:",
        expertise: [
          "Designing revenue-based website systems",
          "Building automation workflows",
          "CRM & data layer integration",
          "Development of booking, e-commerce, and SaaS platforms",
          "Scalable and efficient system architecture"
        ],
        affirmation: "We don't offer templates. We design systems tailored to your business structure.",
      },
      authority: {
        items: [
          { title: "10+ Years Experience", desc: "Web Development, System Architecture, Technology Integration" },
          { title: "Multi-Industry Exposure", desc: "Travel, Professional Service, SaaS, Digital Platform" },
          { title: "Strategy-First Approach", desc: "Every project starts with business analysis and revenue structure" }
        ],
      },
      form: {
        headline: "Tell Us About the System You Want to Build",
        fields: {
          name: "Name",
          email: "Email",
          whatsapp: "WhatsApp Number",
          business: "Business / Company Name",
          industry: "Industry",
          goal: "Website Goal",
          challenge: "Current Challenges",
          target: "6–12 Month Target"
        },
        note: "Consultations are exclusive and limited each month to maintain the quality of analysis and execution.",
        submit: "Send Strategic Brief",
        success: {
          title: "Brief Received",
          message: "Our team will review your brief and prepare a preliminary strategic analysis before the discussion session."
        }
      },
      process: {
        headline: "What Happens After You Submit the Form?",
        steps: ["Review Brief", "AI Preliminary Analysis", "Strategic Consultation", "Architecture Recommendation"]
      }
    },
    architecturePage: {
      hero: {
        headline: "Architecture is the Foundation of Digital Systems",
        subheadline: "Without the right structure, a platform will not be scalable, efficient, or sustainable.",
        cta: "Learn How We Design Systems",
      },
      problems: {
        headline: "Why Do Many Websites Fail to Grow?",
        cards: [
          { title: "No System Planning", desc: "Built without a clear blueprint, resulting in a fragile structure." },
          { title: "Limited Scalability", desc: "Does not consider future traffic growth and features." },
          { title: "Disconnected Workflow", desc: "Not integrated with your internal business processes." },
          { title: "Unstructured Data", desc: "Information is scattered and hard to analyze for decision making." }
        ],
        closing: "The problem is not the design. The problem is the architecture.",
      },
      approach: {
        headline: "System Architecture Approach",
        layers: [
          { title: "Business Logic Layer", desc: "Translating your business rules into system logic." },
          { title: "Information Architecture", desc: "Intuitive and efficient data and navigation structure." },
          { title: "Technology Stack", desc: "Selecting the right technology for performance and security." },
          { title: "Data & Integration Layer", desc: "Connecting the system with the external business ecosystem." }
        ],
      },
      blueprint: {
        headline: "From Brief to Blueprint",
        steps: ["Business Analysis", "System Mapping", "Data Flow Design", "Scalability Planning", "Documentation & Technical Outline"]
      },
      impact: {
        headline: "What is the Impact on Your Business?",
        outcomes: [
          "Faster growth",
          "Easy to integrate",
          "Reducing technical debt",
          "Operational efficiency",
          "Ready to scale without a total rebuild"
        ]
      },
      closing: {
        headline: "Strong Systems Start with the Right Architecture",
        subtext: "Before building, design with precision.",
        ctaPrimary: "Start AI Analysis",
        ctaSecondary: "Discuss Your Architecture"
      }
    },
    automationPage: {
      hero: {
        headline: "Automation Turns Websites Into Work Systems",
        subheadline: "Digital platforms should not just receive traffic, but run business processes automatically.",
        cta: "See How the System Works",
      },
      problems: {
        headline: "Without Automation, Your Team Works Twice",
        cards: [
          { title: "Manual Follow-up", desc: "Contacting every lead one by one wastes valuable time." },
          { title: "Repetitive Data Entry", desc: "Moving data between platforms manually is prone to error." },
          { title: "Manual Booking Process", desc: "Managing reservations without an automated system hinders scalability." },
          { title: "Manual Reporting", desc: "Compiling performance data manually slows down decision making." }
        ],
        closing: "Time is spent on operations. Not on growth.",
      },
      framework: {
        headline: "Automation Framework",
        layers: [
          { title: "Lead Capture Layer", desc: "Instant and structured capture of prospect data." },
          { title: "Qualification Logic", desc: "Automated filtering to determine prospect priority." },
          { title: "Workflow Automation", desc: "Execution of business steps without human intervention." },
          { title: "Notification & Follow-up", desc: "Timely communication through various digital channels." },
          { title: "Reporting & Insight", desc: "Real-time and automated presentation of performance data." }
        ],
      },
      scenarios: {
        headline: "Automation Scenario Examples",
        items: [
          {
            title: "Travel Platform",
            steps: ["User booking", "Payment auto-confirm", "Invoice generated", "Email + WhatsApp sent", "CRM updated", "Admin dashboard updated"]
          },
          {
            title: "Professional Service",
            steps: ["User submit brief", "AI analyze", "Lead scored", "Sales notified", "Proposal template generated"]
          },
          {
            title: "E-commerce",
            steps: ["Abandoned cart", "Reminder sequence", "Discount trigger", "Purchase", "Upsell automation"]
          }
        ],
      },
      impact: {
        headline: "Impact of Automation on Operations",
        outcomes: [
          "Reducing manual work",
          "Speeding up response to customers",
          "Increasing conversion rate",
          "Real-time structured data",
          "Scalability without adding team members"
        ]
      },
      integrations: {
        headline: "Supported Integrations",
        items: ["CRM", "Payment Gateway", "Email Platform", "WhatsApp API", "Analytics", "Internal Dashboard"]
      },
      closing: {
        headline: "Build a System That Works for You",
        subtext: "Let the platform run the processes. Your team focuses on strategy and growth.",
        ctaPrimary: "Start AI Analysis",
        ctaSecondary: "Discuss Automation System"
      }
    },
    aboutPage: {
      hero: {
        headline: "About KOONANG",
        subheadline: "In an era where speed and precision determine business growth direction, technology is no longer just a tool — it's the foundation.",
        narration: "KOONANG was born from the need for digital systems that not only run, but work strategically. We believe every business has the potential to grow faster through the right technology architecture, intuitive design, and measured execution."
      },
      pillars: {
        headline: "Part of the KING DAVID SERVICE Ecosystem",
        subheadline: "KOONANG is part of the Digital Service business unit and officially operates within the KING DAVID SERVICE ecosystem — a professional services group that oversees various solution and innovation-based business lines.",
        members: [
          {
            name: "Management & Structure Foundation",
            title: "Professionalism Standards",
            description: "Our presence within the KING DAVID SERVICE ecosystem ensures that every solution we build is not only creative, but also has a solid management foundation, operational structure, and clear long-term roadmap.",
            focusTitle: "Values we bring:",
            focusItems: [
              "Professional management",
              "Clear operational structure",
              "Long-term roadmap",
              "Integrity and governance"
            ],
            closing: "We combine technology creativity with organizational stability. Innovation with structure. Speed with precision."
          }
        ]
      },
      synergy: {
        headline: "More Than Just a Web App",
        narration: "For us, a web application isn't just about appearance or features. It's about how the system:",
        points: [
          "Reduces operational friction",
          "Increases work efficiency",
          "Optimizes digital performance",
          "Creates seamless user experiences"
        ],
        closing: "We design, build, and optimize systems that are scalable, secure, and SEO-driven — so businesses don't just appear digital, but truly grow digitally."
      },
      principles: {
        headline: "Our Philosophy",
        items: [
          {
            title: "We don't build systems just for today",
            desc: "We build digital infrastructure for long-term growth. Every project starts with a deep understanding of the business model, workflow, and client vision."
          },
          {
            title: "From there, we translate it into precise technology architecture",
            desc: "From UX/UI engineering to performance optimization, every element is designed with the goal of sustainable business growth."
          },
          {
            title: "As a Digital Service unit of KING DAVID SERVICE",
            desc: "KOONANG operates with strong standards of professionalism, integrity, and governance."
          }
        ]
      },
      closing: {
        headline: "Building the Digital Future",
        subtext: "We believe the future of business is digital — and the digital future needs a solid foundation. KOONANG is here to be your strategic partner in that transformation.",
        ctaPrimary: "Start Your Digital Transformation",
        ctaSecondary: "See Case Studies"
      }
    },
    investmentPage: {
      hero: {
        headline: "Investment is Determined by Architecture, Not Packages",
        subheadline: "Every system has different complexities. Therefore, we use AI-based analysis to compile relevant and precise estimates.",
        cta: "Start AI Analysis",
      },
      whyNoFixed: {
        headline: "Why We Don't Display Fixed Prices",
        narration: "Digital platforms designed with an architectural approach cannot be simplified into generic packages. The complexity of integration, automation layers, data structures, and scalability needs determine the level of investment.",
        points: [
          { title: "Blueprint precedes estimation", desc: "We must understand the system structure before we can calculate the required resources." },
          { title: "Integration determines complexity", desc: "The number and type of connected external systems significantly affect technical workload." },
          { title: "Scalability affects system structure", desc: "Infrastructure designed for millions of users differs from systems for thousands." }
        ],
        closing: "Investment follows system needs, not the other way around.",
      },
      aiModel: {
        headline: "AI-Based Preliminary Estimation",
        steps: ["Input Business Details", "AI Analyze System Complexity", "AI Generate Preliminary Scope", "Estimation Range Compiled"],
        explanation: "After you submit your brief, our AI system will analyze the complexity of needs based on business structure, integration, automation layers, and growth targets.",
        resultsTitle: "The results consist of:",
        results: ["System structure recommendations", "Preliminary scope", "Investment range estimation", "Development direction"]
      },
      factors: {
        headline: "Factors Affecting Estimation",
        items: [
          { title: "Architecture Complexity", desc: "Number of layers and business logic to be built." },
          { title: "Number of Integrations", desc: "Connections with CRM, Payment, third-party APIs, etc." },
          { title: "Automation Layer", desc: "Depth of automated workflows run by the system." },
          { title: "Data & Traffic Volume", desc: "Infrastructure capacity that must be prepared." },
          { title: "Custom Development", desc: "Unique features not available in standard modules." },
          { title: "Execution Timeline", desc: "Desired launch speed by the business." }
        ]
      },
      subscription: {
        headline: "Flexible Working Model",
        narration: "koonang does not use a mandatory subscription SLA model. Every system is built with a clear structure and can stand independently.",
        options: ["Maintenance", "Optimization", "Additional automation", "System expansion"],
        closing: "We build systems, not tie long-term contracts.",
      },
      qualification: {
        headline: "Who is Suitable to Work with Us?",
        bullets: [
          "Businesses that want to build long-term systems",
          "Founders who think strategically",
          "Companies that need complex integrations",
          "Teams that want to improve operational efficiency"
        ],
        closing: "If you are looking for a quick template solution, our approach might not be the right choice."
      },
      closing: {
        headline: "Start with Precise Analysis",
        subtext: "Before talking numbers, let's understand the architecture your business needs.",
        ctaPrimary: "Start AI Analysis",
        ctaSecondary: "Discuss Your Needs"
      }
    },
    privacyPage: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: March 15, 2026",
      sections: [
        {
          title: "1. Information Collection",
          content: [
            "We collect information you provide directly to us when you fill out contact forms, subscribe to our newsletter, or communicate with us.",
            "This information may include your name, email address, phone number, company name, and other relevant details required for system architecture analysis."
          ]
        },
        {
          title: "2. Use of Information",
          content: [
            "The information we collect is used to provide, maintain, and improve our services.",
            "We also use your information to process transactions, send notifications, respond to your inquiries, and for strategic communication regarding your projects."
          ]
        },
        {
          title: "3. Information Sharing",
          content: [
            "We will not sell, rent, or trade your personal information to any third parties without your consent, except as required by law."
          ]
        },
        {
          title: "4. Security",
          content: [
            "We take reasonable measures to protect your information from unauthorized access, use, alteration, or disclosure. Our infrastructure is designed with strict security principles."
          ]
        },
        {
          title: "5. Contact Us",
          content: [
            "If you have any questions about this Privacy Policy, please contact us via the contact form on this website."
          ]
        }
      ]
    },
    termsPage: {
      title: "Terms of Service",
      lastUpdated: "Last Updated: March 15, 2026",
      sections: [
        {
          title: "1. Acceptance of Terms",
          content: [
            "By accessing and using the Koonang website, you agree to be bound by these Terms of Service and all applicable laws and regulations."
          ]
        },
        {
          title: "2. Digital Architecture Services",
          content: [
            "Koonang provides digital system consulting, design, and development services. Every project is based on a mutually agreed architecture blueprint.",
            "Investment estimates, timelines, and scope of work will be detailed specifically for each project before work begins."
          ]
        },
        {
          title: "3. Intellectual Property Rights",
          content: [
            "Blueprints, architectural concepts, and code developed by Koonang remain the property of Koonang until all payment obligations are settled, unless otherwise agreed in writing."
          ]
        },
        {
          title: "4. Limitation of Liability",
          content: [
            "Koonang shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our systems or services."
          ]
        },
        {
          title: "5. Changes to Terms",
          content: [
            "We reserve the right to modify these Terms of Service at any time. We will notify you of significant changes by posting the new version on the website."
          ]
        }
      ]
    },
    careersPage: {
      hero: {
        headline: "Join a Team That Builds Systems",
        subheadline: "We are not looking for many people. We are looking for individuals who can think in structures and build with precision.",
        cta: "View Open Roles",
      },
      principles: {
        title: "Working Standards at koonang",
        desc: "koonang is a digital architecture studio that focuses on system quality, not project quantity. We work with a strategic, modular, and analysis-driven approach.",
        items: [
          "Architecture First",
          "Clean & Scalable Code",
          "Data-Informed Decision",
          "Strategic Collaboration"
        ],
      },
      profile: {
        title: "Profiles We Value",
        desc: "We value the quality of thought more than the number of experiences on paper.",
        points: [
          "Think systematically, not partially",
          "Understand technical impact on business",
          "Able to work with structure and documentation",
          "Value precision and detail",
          "Comfortable with AI-assisted workflow approach"
        ],
        closing: "We value the quality of thought more than the number of experiences on paper.",
      },
      roles: {
        title: "Collaboration Opportunities",
        items: [
          { title: "Digital System Engineer", desc: "(UI/UX, Frontend, Backend, or Integration)" },
          { title: "Digital Automation Specialist", desc: "" },
          { title: "Research & Data Analyst", desc: "" }
        ],
        note: "We open opportunities based on project needs and system growth. If you feel relevant to our vision, send your best profile and portfolio."
      },
      selection: {
        title: "Selection Process",
        steps: [
          "Profile & Portfolio Review",
          "Technical / Strategic Discussion",
          "Problem-Solving Approach Evaluation",
          "Final Alignment"
        ],
        note: "We assess your way of thinking and structured approach to problems."
      },
      form: {
        title: "Send Us Your Profile",
        desc: "Choose the most suitable role and tell us how you can contribute.",
        fields: {
          name: "Name",
          email: "Email",
          link: "LinkedIn / Portfolio",
          expertise: "Area of Expertise",
          experience: "Short Experience Summary",
          motivation: "Why You Want to Join"
        },
        note: "We will contact candidates who match our needs and standards.",
        submit: "Send Your Profile",
      },
      closing: {
        title: "Build Systems that Matter",
        desc: "If you are interested in building precise and scalable digital infrastructure, we are open to discussion.",
        ctaPrimary: "Send Your Profile",
        ctaSecondary: "Back to Home"
      },
    }
  },
};

type LanguageProviderProps = {
  children: React.ReactNode;
  defaultLanguage?: Language;
  storageKey?: string;
};

type LanguageProviderState = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageProviderState | undefined>(undefined);

export function LanguageProvider({
  children,
  defaultLanguage = "id",
  storageKey = "koonang-language",
}: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    // Check if we're on the server side
    if (typeof window === "undefined") {
      return defaultLanguage;
    }
    return (localStorage.getItem(storageKey) as Language) || defaultLanguage;
  });

  const value = {
    language,
    setLanguage: (lang: Language) => {
      if (typeof window !== "undefined") {
        localStorage.setItem(storageKey, lang);
      }
      setLanguage(lang);
    },
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
