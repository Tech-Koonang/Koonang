const fs = require('fs');

const data = fs.readFileSync('src/components/language-provider.tsx', 'utf8');

let newData = data.replace(
`  careersPage: {
    hero: {`,
`  privacyPage: {
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
    hero: {`);

newData = newData.replace(
`    careersPage: {
      hero: {
        headline: "Bergabung dengan Tim yang Membangun Sistem",`,
`    privacyPage: {
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
            "Dengan mengakses dan menggunakan situs web koonang.io, Anda menyetujui untuk terikat oleh Syarat Layanan ini dan semua hukum dan peraturan yang berlaku."
          ]
        },
        {
          title: "2. Layanan Arsitektur Digital",
          content: [
            "koonang.io menyediakan layanan konsultasi, perancangan, dan pengembangan sistem digital. Setiap proyek didasarkan pada blueprint arsitektur yang disepakati bersama.",
            "Estimasi investasi, jadwal, dan ruang lingkup pekerjaan akan dirinci secara spesifik untuk setiap proyek sebelum pekerjaan dimulai."
          ]
        },
        {
          title: "3. Hak Kekayaan Intelektual",
          content: [
            "Blueprint, konsep arsitektur, dan kode yang dikembangkan oleh koonang.io merupakan milik koonang.io sampai seluruh kewajiban pembayaran diselesaikan, kecuali disepakati lain secara tertulis."
          ]
        },
        {
          title: "4. Batasan Tanggung Jawab",
          content: [
            "koonang.io tidak bertanggung jawab atas kerugian langsung, tidak langsung, insidental, atau konsekuensial yang timbul dari penggunaan atau ketidakmampuan untuk menggunakan sistem atau layanan kami."
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
        headline: "Bergabung dengan Tim yang Membangun Sistem",`);

newData = newData.replace(
`    careersPage: {
      hero: {
        headline: "Join a Team That Builds Systems",`,
`    privacyPage: {
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
            "By accessing and using the koonang.io website, you agree to be bound by these Terms of Service and all applicable laws and regulations."
          ]
        },
        {
          title: "2. Digital Architecture Services",
          content: [
            "koonang.io provides digital system consulting, design, and development services. Every project is based on a mutually agreed architecture blueprint.",
            "Investment estimates, timelines, and scope of work will be detailed specifically for each project before work begins."
          ]
        },
        {
          title: "3. Intellectual Property Rights",
          content: [
            "Blueprints, architectural concepts, and code developed by koonang.io remain the property of koonang.io until all payment obligations are settled, unless otherwise agreed in writing."
          ]
        },
        {
          title: "4. Limitation of Liability",
          content: [
            "koonang.io shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our systems or services."
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
        headline: "Join a Team That Builds Systems",`);

fs.writeFileSync('src/components/language-provider.tsx', newData, 'utf8');
console.log('Done!');
