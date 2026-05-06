const fs = require('fs');

const data = fs.readFileSync('src/components/language-provider.tsx', 'utf8');

let newData = data.replace(
`  careersPage: {
    hero: {
      kicker: string;
      headline: string;
      subheadline: string;
    };
    principles: {
      title: string;
      desc: string;
      items: { title: string; desc: string }[];
    };
    team: {
      title: string;
      desc: string;
      members: {
        name: string;
        title: string;
        description: string;
        focusTitle: string;
        focusItems: string[];
      }[];
    };
    profile: {
      title: string;
      desc: string;
      points: string[];
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
    };
  };`,
`  careersPage: {
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
  };`);

// ID Translation
newData = newData.replace(
`    careersPage: {
      hero: {
        kicker: "Selective Talent",
        headline: "Bergabung dengan Tim yang Membangun Sistem, Bukan Sekadar Website",
        subheadline: "Kami tidak mencari banyak orang. Kami mencari individu yang mampu berpikir dalam struktur dan membangun dengan presisi.",
      },
      principles: {
        title: "Standar Kerja di koonang",
        desc: "koonang adalah studio arsitektur digital yang berfokus pada kualitas sistem, bukan kuantitas proyek.",
        items: [
          {
            title: "Architecture First",
            desc: "Setiap proyek dimulai dari blueprint dan struktur sistem, bukan dari layer visual semata.",
          },
          {
            title: "Clean & Scalable Build",
            desc: "Kami mengutamakan implementasi yang modular, rapi, dan siap dikembangkan tanpa rebuild total.",
          },
          {
            title: "Data-Informed Decisions",
            desc: "Perubahan dan optimasi dilakukan berdasarkan data dan analisis, bukan asumsi sesaat.",
          },
        ],
      },
      team: {
        title: "Tim Inti di Balik koonang",
        desc: "koonang dibangun di atas kolaborasi strategis antara konsep bisnis, engineering, dan analisis digital.",
        members: [
          {
            name: "David Zaman",
            title: "Conceptor & Business Development",
            description: "Memegang peran konseptual dan arah strategis. Memastikan setiap sistem selaras dengan model bisnis dan struktur revenue.",
            focusTitle: "Fokus utamanya:",
            focusItems: [
              "Business model alignment",
              "Strategic opportunity mapping",
              "Revenue structure design",
            ],
          },
          {
            name: "Dikdik Haris",
            title: "Full Stack Engineer",
            description: "Lebih dari 10 tahun pengalaman membangun sistem dan web architecture dengan pendekatan modular dan scalable.",
            focusTitle: "Fokus utamanya:",
            focusItems: [
              "Frontend & backend architecture",
              "API & system integration",
              "Performance & reliability",
            ],
          },
          {
            name: "Sarah Aprilia",
            title: "Digital Analyst",
            description: "Menghubungkan data, perilaku pengguna, dan performa sistem menjadi insight strategis yang terukur.",
            focusTitle: "Fokus utamanya:",
            focusItems: [
              "Digital behavior analysis",
              "Funnel & conversion mapping",
              "Performance insight",
            ],
          },
        ],
      },
      profile: {
        title: "Profil yang Kami Hargai",
        desc: "Kami menghargai cara berpikir terstruktur, rasa ingin tahu yang tinggi, dan kemampuan menerjemahkan konsep menjadi sistem.",
        points: [
          "Berpikir sistemik dan mampu melihat hubungan antar komponen.",
          "Memahami dampak teknis terhadap hasil bisnis.",
          "Nyaman bekerja dengan dokumentasi dan struktur.",
          "Terbiasa bekerja dengan data, insight, atau experiment.",
        ],
      },
      form: {
        title: "Kirimkan Profil Anda",
        desc: "Jika Anda merasa selaras dengan cara kami bekerja, kirimkan profil singkat dan area kontribusi terbaik Anda.",
        fields: {
          name: "Nama",
          email: "Email",
          link: "LinkedIn / Portfolio / Website",
          expertise: "Bidang Keahlian",
          experience: "Pengalaman Singkat",
          motivation: "Mengapa Ingin Berkolaborasi dengan koonang",
        },
        note: "Kami menghubungi kandidat yang paling relevan dengan kebutuhan dan standar pengembangan kami.",
        submit: "Kirim Profil",
      },
      closing: {
        title: "Bangun Sistem yang Berdampak",
        desc: "Jika Anda tertarik membangun infrastruktur digital yang presisi dan scalable, kami terbuka untuk berdiskusi.",
      },
    }`,
`    careersPage: {
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
    }`);

// EN Translation
newData = newData.replace(
`    careersPage: {
      hero: {
        kicker: "Selective Talent",
        headline: "Join a Team That Builds Systems, Not Just Websites",
        subheadline:
          "We are not looking for many people. We are looking for individuals who can think in structures and build with precision.",
      },
      principles: {
        title: "Working Standards at koonang",
        desc:
          "koonang is a digital architecture studio that focuses on system quality, not project quantity.",
        items: [
          {
            title: "Architecture First",
            desc: "Every project starts from system blueprint and structure, not surface-level visuals.",
          },
          {
            title: "Clean & Scalable Build",
            desc: "We prioritize modular, maintainable implementations that can grow without a total rebuild.",
          },
          {
            title: "Data-Informed Decisions",
            desc: "Changes and optimizations are driven by analysis and evidence, not guesswork.",
          },
        ],
      },
      team: {
        title: "Core Team Behind koonang",
        desc:
          "koonang is built on strategic collaboration between business concepts, engineering, and digital analysis.",
        members: [
          {
            name: "David Zaman",
            title: "Conceptor & Business Development",
            description:
              "Holds the conceptual and strategic direction. Ensures every system aligns with the business model and revenue structure.",
            focusTitle: "Focus",
            focusItems: [
              "Business model alignment",
              "Strategic opportunity mapping",
              "Revenue structure design",
            ],
          },
          {
            name: "Dikdik Haris",
            title: "Full Stack Engineer",
            description:
              "Over 10 years of experience building systems and web architecture with a modular and scalable approach.",
            focusTitle: "Focus",
            focusItems: [
              "Frontend & backend architecture",
              "API & system integration",
              "Performance & reliability",
            ],
          },
          {
            name: "Sarah Aprilia",
            title: "Digital Analyst",
            description:
              "Connects data, user behavior, and system performance into measurable strategic insight.",
            focusTitle: "Focus",
            focusItems: [
              "Digital behavior analysis",
              "Funnel & conversion mapping",
              "Performance insight",
            ],
          },
        ],
      },
      profile: {
        title: "Profiles We Value",
        desc:
          "We appreciate structured thinking, strong curiosity, and the ability to translate concepts into systems.",
        points: [
          "Thinks in systems and sees relationships between components.",
          "Understands how technical decisions impact business outcomes.",
          "Comfortable working with documentation and clear structure.",
          "Used to working with data, insight, or experiments.",
        ],
      },
      form: {
        title: "Send Us Your Profile",
        desc:
          "If you feel aligned with the way we work, send a short profile and where you can contribute best.",
        fields: {
          name: "Name",
          email: "Email",
          link: "LinkedIn / Portfolio / Website",
          expertise: "Area of Expertise",
          experience: "Short Experience Summary",
          motivation: "Why You Want to Collaborate with koonang",
        },
        note: "We will reach out to candidates most relevant to our current needs and system roadmap.",
        submit: "Submit Profile",
      },
      closing: {
        title: "Build Systems that Matter",
        desc:
          "If you are interested in building precise and scalable digital infrastructure, we are open to potential collaboration.",
      },
    }`,
`    careersPage: {
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
    }`);

fs.writeFileSync('src/components/language-provider.tsx', newData, 'utf8');
console.log('Patch complete!');
