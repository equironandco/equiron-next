import {
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiTwitter,
} from "react-icons/fi";
import {
  FaEllipsisV,
  FaCheckCircle,
  FaInstagram,
  FaChalkboardTeacher,
  FaBalanceScale,
  FaUserShield,
  FaStarHalfAlt,
  FaTrophy,
  FaRegHandshake,
  FaRegNewspaper,
  FaCommentAlt,
  FaCalendarAlt,
  FaUserAlt,
  FaWhatsapp,
  FaRegEnvelope,
  FaPen,
  FaCogs,
  FaStreetView,
  FaTiktok,
  FaLinkedin,
} from "react-icons/fa";

import {
  about_jump_left,
  about_jump_right,
  aimtopindo_logo,
  chakra_giri_logo,
  citra_harapan_jaya_permai_logo,
  clients_shape_left,
  clients_shape_right,
  clm_logo,
  dana_paint_logo,
  gaharu_pelayaran_logo,
  hero_about,
  hero_background,
  hero_overlay,
  images_about_1,
  images_about_2,
  images_about_3,
  indo_berkat_logo,
  lliadi_logo,
  logo_equiron_white,
  mitra_galperti_logo,
  pbe_logo,
  process_jump_right,
  process_one,
  pssi_logo,
  publication_image,
  publications_shape_left,
  publications_shape_right,
  semesta_energi_service_logo,
  service_card_1_1,
  service_card_1_2,
  service_card_1_3,
  service_card_1_4,
  service_card_1_5,
  team_member_1,
  team_member_2,
  team_member_3,
  team_member_4,
  teams_bg,
  teams_jump_left,
  tridaya_esa_pakarti_logo,
  warna_warni_logo,
} from "./_equironImages";

export const NAVLINKS = {
  en: [
    {
      to: "about",
      icon: FaEllipsisV,
      name: "ABOUT",
    },
    {
      to: "services",
      icon: FaEllipsisV,
      name: "SERVICES",
    },
    {
      to: "process",
      icon: FaEllipsisV,
      name: "PROCESS",
    },
    // {
    //   to: "teams",
    //   icon: FaEllipsisV,
    //   name: "TEAMS",
    // },
    // {
    //   to: "article",
    //   icon: FaEllipsisV,
    //   name: "PUBLICATIONS",
    // },
    {
      to: "clients",
      icon: FaEllipsisV,
      name: "CLIENTS",
    },
  ],

  id: [
    {
      to: "about",
      icon: FaEllipsisV,
      name: "TENTANG",
    },
    {
      to: "services",
      icon: FaEllipsisV,
      name: "LAYANAN",
    },
    {
      to: "process",
      icon: FaEllipsisV,
      name: "PROSES",
    },
    // {
    //   to: "teams",
    //   icon: FaEllipsisV,
    //   name: "TIM",
    // },
    // {
    //   to: "article",
    //   icon: FaEllipsisV,
    //   name: "PUBLIKASI",
    // },
    {
      to: "clients",
      icon: FaEllipsisV,
      name: "KLIEN",
    },
  ],
};

export const HERO_DATA_EQUIRON = {
  en: {
    hero_image_background: hero_background,
    hero_image_overlay: hero_overlay,
    hero_image_about: hero_about,
    text_small: "Your Guardian in Law",
    big_heading: "Trusted Legal Solutions,",
    big_heading2: "for Your Business and Family",
    description:
      "We bring dedication, expertise, and commitment to deliver the best outcomes",
    button: [
      {
        to: "https://wa.me/+6287772300770",
        nama_button: "CONTACT US",
        icon: FaChalkboardTeacher,
      },
    ],
  },

  id: {
    hero_image_background: hero_background,
    hero_image_overlay: hero_overlay,
    hero_image_about: hero_about,
    text_small: "Penjaga Anda dalam Hukum",
    big_heading: "Solusi Hukum Andal,",
    big_heading2: "untuk Bisnis dan Keluarga Anda",
    description:
      "Kami hadir dengan dedikasi, keahlian, dan komitmen untuk hasil terbaik.",
    button: [
      {
        to: "https://wa.me/+6287772300770",
        nama_button: "HUBUNGI KAMI",
        icon: FaChalkboardTeacher,
      },
    ],
  },
};

export const ABOUT_DATA_EQUIRON = {
  about_shape_mockup_data: [
    {
      tech_img: about_jump_right,
      tech_name: "about_jump_right",
      alt: "shape-mockup-about-right",
      class: "right",
    },
    {
      tech_img: about_jump_left,
      tech_name: "about_jump_left",
      alt: "shape-mockup-about-left",
      class: "left",
    },
  ],
  en: {
    about_title:
      "We do more than advise — we stand as your trusted legal partner, always within reach.",
    about_heading:
      "Your Strategic Legal Partner,  <span>Built on Trust,</span> Commitment, and Accessibility.",
    about_desc:
      "is a forward-thinking, full-service law firm dedicated to providing comprehensive legal solutions across various sectors. Founded with a vision to become a trusted legal partner, we serve individuals, businesses, and organizations with professionalism and integrity. Our core values—Trust, Commitment, and Accessibility—are at the heart of everything we do.",
    about_skill_data: [
      {
        icon: FaCheckCircle,
        text: "Trust is the foundation of every legal step we take with our clients.",
      },
      {
        icon: FaCheckCircle,
        text: "Our commitment is reflected in strategic approaches and measurable outcomes.",
      },
      {
        icon: FaCheckCircle,
        text: "Accessibility that matters: we're available when you need us— without barriers.",
      },
      {
        icon: FaCheckCircle,
        text: "We don't just provide solutions—we build partnerships for your success.",
      },
    ],
    about_stats_data: [
      { icon: <FaBalanceScale />, value: "+", label: "Case Done" },
      { icon: <FaUserShield />, value: "6+", label: "Expert Attorneys" },
      { icon: <FaStarHalfAlt />, value: "+", label: "Happy Clients" },
      { icon: <FaTrophy />, value: "+", label: "Award Winning" },
    ],
  },
  id: {
    about_title:
      "Kami hadir bukan sekadar memberi nasihat hukum, tetapi menjadi mitra terpercaya yang selalu dapat diandalkan.",
    about_heading:
      "Mitra Hukum Strategis yang Didorong oleh <span>Kepercayaan,</span> Komitmen, dan Aksesibilitas.",
    about_desc:
      "adalah firma hukum layanan lengkap yang berpikiran maju, didedikasikan untuk menyediakan solusi hukum yang komprehensif di berbagai sektor. Didirikan dengan visi menjadi mitra hukum terpercaya, kami melayani individu, bisnis, dan organisasi dengan profesionalisme dan integritas. Nilai-nilai inti kami—Kepercayaan, Komitmen, dan Aksesibilitas—adalah inti dari semua yang kami lakukan.",
    about_skill_data: [
      {
        icon: FaCheckCircle,
        text: "Kepercayaan adalah dasar dari setiap langkah hukum yang kami ambil bersama klien.",
      },
      {
        icon: FaCheckCircle,
        text: "Komitmen kami tercermin dalam pendekatan strategis dan hasil yang terukur.",
      },
      {
        icon: FaCheckCircle,
        text: "Aksesibilitas nyata: kami hadir saat Anda membutuhkan, tanpa batasan.",
      },
      {
        icon: FaCheckCircle,
        text: "Kami tidak hanya memberi solusi, kami membangun kemitraan menuju kesuksesan Anda.",
      },
    ],
    about_stats_data: [
      { icon: <FaBalanceScale />, value: "+", label: "Kasus Selesai" },
      { icon: <FaUserShield />, value: "6+", label: "Pengacara Ahli" },
      { icon: <FaStarHalfAlt />, value: "+", label: "Klien Puas" },
      { icon: <FaTrophy />, value: "+", label: "Penghargaan" },
    ],
  },
  about_images_one: {
    title: images_about_1,
    alt: "images_about_1",
  },
  about_images_two: {
    title: images_about_2,
    alt: "images_about_1",
  },
  about_images_three: { title: images_about_3, alt: "images_about_1" },
};

export const SERVICES_DATA_EQUIRON = {
  en: {
    service_big_heading: "Legal Services We Offer",
    service_desc:
      "At Equiron & Co., we deliver legal services that are strategic, trusted, and accessible. Guided by strong commitment and a deep understanding of our clients' needs, we provide precise, outcome-driven legal solutions. With us, you face legal challenges with clarity—backed by integrity, dedication, and a genuine partnership.",
    service_data_services: [
      {
        icon: service_card_1_1,
        cornerIcon: service_card_1_1,
        cardTitle: "Merger and Acquisitions",
        cardDesc:
          "Strategic legal guidance for seamless mergers, acquisitions, and business transitions.",
      },
      {
        icon: service_card_1_2,
        cornerIcon: service_card_1_2,
        cardTitle: "Banking and Finance",
        cardDesc:
          "Reliable counsel on financial regulations, lending structures, and transactional compliance.",
      },
      {
        icon: service_card_1_3,
        cornerIcon: service_card_1_3,
        cardTitle: "Land and Property",
        cardDesc:
          "Comprehensive support on real estate transactions, land use, and asset protection.",
      },
      {
        icon: service_card_1_4,
        cornerIcon: service_card_1_4,
        cardTitle: "Project Development",
        cardDesc:
          "Legal support from planning to execution, ensuring regulatory and commercial alignment.",
      },
      {
        icon: service_card_1_5,
        cornerIcon: service_card_1_5,
        cardTitle: "Technology, Media & Telecom",
        cardDesc:
          "Insightful legal solutions for innovation-driven sectors in a fast-evolving digital world.",
      },
      {
        icon: service_card_1_1,
        cornerIcon: service_card_1_1,
        cardTitle: "Corporate Compliance Services",
        cardDesc:
          "Helping businesses meet governance standards with clarity and confidence.",
      },
      {
        icon: service_card_1_2,
        cornerIcon: service_card_1_2,
        cardTitle: "Food & Beverage, Anti-Trust & Competition Law",
        cardDesc:
          "Navigating industry regulations while protecting your competitive edge.",
      },
      {
        icon: service_card_1_3,
        cornerIcon: service_card_1_3,
        cardTitle: "Start-Up Company",
        cardDesc:
          "Tailored legal frameworks to support sustainable growth from early stages.",
      },
      {
        icon: service_card_1_4,
        cornerIcon: service_card_1_4,
        cardTitle: "Criminal Law",
        cardDesc:
          "Trusted representation and defense with integrity, discretion, and expertise.",
      },
      {
        icon: service_card_1_5,
        cornerIcon: service_card_1_5,
        cardTitle: "Civil Law",
        cardDesc:
          "Resolving personal and commercial disputes with fairness and efficiency.",
      },
      {
        icon: service_card_1_1,
        cornerIcon: service_card_1_1,
        cardTitle: "Coal & Nickel Mining",
        cardDesc:
          "Legal insight into mining operations, licensing, and environmental compliance.",
      },
    ],
  },
  id: {
    service_big_heading: "Layanan Hukum yang kami Tawarkan",
    service_desc:
      "Di Equiron & Co., kami menghadirkan layanan hukum yang strategis, terpercaya, dan mudah diakses. Didukung oleh komitmen tinggi dan pemahaman mendalam terhadap kebutuhan klien, kami memberikan solusi hukum yang presisi dan berorientasi hasil. Bersama kami, Anda mendapatkan kejelasan dalam menghadapi tantangan hukum— dengan integritas, dedikasi, dan kemitraan yang nyata.",
    service_data_services: [
      {
        icon: service_card_1_1,
        cornerIcon: service_card_1_1,
        cardTitle: "Merger dan Akuisisi",
        cardDesc:
          "Panduan hukum strategis untuk merger, akuisisi, dan transisi bisnis yang lancar.",
      },
      {
        icon: service_card_1_2,
        cornerIcon: service_card_1_2,
        cardTitle: "Perbankan dan Keuangan",
        cardDesc:
          "Konsultasi tepercaya tentang regulasi keuangan, struktur pinjaman, dan kepatuhan transaksi.",
      },
      {
        icon: service_card_1_3,
        cornerIcon: service_card_1_3,
        cardTitle: "Tanah dan Properti",
        cardDesc:
          "Dukungan menyeluruh untuk transaksi properti, penggunaan lahan, dan perlindungan aset.",
      },
      {
        icon: service_card_1_4,
        cornerIcon: service_card_1_4,
        cardTitle: "Pengembangan Proyek",
        cardDesc:
          "Dukungan hukum dari perencanaan hingga pelaksanaan, memastikan kepatuhan dan keselarasan komersial.",
      },
      {
        icon: service_card_1_5,
        cornerIcon: service_card_1_5,
        cardTitle: "Teknologi, Media & Telekomunikasi",
        cardDesc:
          "Solusi hukum cerdas untuk sektor berbasis inovasi di dunia digital yang terus berkembang.",
      },
      {
        icon: service_card_1_1,
        cornerIcon: service_card_1_1,
        cardTitle: "Layanan Kepatuhan Korporasi",
        cardDesc:
          "Membantu bisnis memenuhi standar tata kelola dengan kejelasan dan keyakinan.",
      },
      {
        icon: service_card_1_2,
        cornerIcon: service_card_1_2,
        cardTitle: "Makanan & Minuman, Anti-Monopoli & Hukum Persaingan",
        cardDesc:
          "Menavigasi regulasi industri sambil melindungi keunggulan kompetitif Anda.",
      },
      {
        icon: service_card_1_3,
        cornerIcon: service_card_1_3,
        cardTitle: "Perusahaan Rintisan (Start-Up)",
        cardDesc:
          "Kerangka hukum khusus untuk mendukung pertumbuhan berkelanjutan sejak tahap awal.",
      },
      {
        icon: service_card_1_4,
        cornerIcon: service_card_1_4,
        cardTitle: "Hukum Pidana",
        cardDesc:
          "Perwakilan dan pembelaan terpercaya dengan integritas, kerahasiaan, dan keahlian.",
      },
      {
        icon: service_card_1_5,
        cornerIcon: service_card_1_5,
        cardTitle: "Hukum Perdata",
        cardDesc:
          "Menyelesaikan sengketa pribadi dan komersial dengan adil dan efisien.",
      },
      {
        icon: service_card_1_1,
        cornerIcon: service_card_1_1,
        cardTitle: "Pertambangan Batubara & Nikel",
        cardDesc:
          "Wawasan hukum dalam operasi pertambangan, perizinan, dan kepatuhan lingkungan.",
      },
    ],
  },
};

export const PROCESS_DATA_EQUIRON = {
  en: {
    process_text: "Work Process",
    process_title:
      "Guiding You Through the Law with Trust, Commitment, and Accessibility",
    process_data_works: [
      {
        title: "Consultations",
        desc: `We begin by listening. A scheduled meeting—online or in-person—helps us understand your legal needs. We identify the issues and gather essential documents. Clarity, confidentiality, and professionalism are ensured from the start.`,
        icon: FaRegHandshake,
      },
      {
        title: "Legal Analysis",
        desc: `We conduct a thorough review of the facts and legal context. Our team evaluates risks, rights, and potential outcomes to build a sound legal foundation for your case.`,
        icon: FaPen,
      },
      {
        title: "Strategy Planning",
        desc: `Based on the analysis, we design a tailored legal strategy. We prioritize your goals and propose actions that are realistic, efficient, and legally strong.`,
        icon: FaCogs,
      },
      {
        title: "Executions",
        desc: `We proceed with drafting, filing, negotiating, or representing—based on the agreed plan. All documents and actions are prepared with precision and compliance.`,
        icon: FaRegNewspaper,
      },
      {
        title: "Follow-Up & Support",
        desc: `Legal support doesn’t end after execution. We monitor progress, update clients, and provide further consultation as needed to ensure sustainable outcomes.`,
        icon: FaStreetView,
      },
    ],
  },
  id: {
    process_text: "Proses Kerja",
    process_title:
      "Mengarungi Proses Hukum dengan Kepercayaan, Komitmen, dan Akses Tanpa Batas",
    process_data_works: [
      {
        title: "Konsultasi Awal",
        desc: `Proses dimulai dari mendengarkan kebutuhan hukum Anda melalui pertemuan tatap muka atau daring. Kami mengidentifikasi isu dan mengumpulkan dokumen penting. Kejelasan, kerahasiaan, dan profesionalisme dijaga sejak awal.`,
        icon: FaRegHandshake,
      },
      {
        title: "Analisis Hukum",
        desc: `Kami meninjau fakta dan konteks hukum secara menyeluruh. Tim kami mengevaluasi risiko, hak, dan potensi penyelesaian untuk membangun dasar hukum yang kuat.`,
        icon: FaPen,
      },
      {
        title: "Perencanaan Strategi",
        desc: `Berdasarkan analisis, kami menyusun strategi hukum yang disesuaikan dengan tujuan Anda. Setiap langkah dirancang untuk efisien, legal, dan berorientasi hasil.`,
        icon: FaCogs,
      },
      {
        title: "Pelaksanaan",
        desc: `Kami melaksanakan rencana melalui penyusunan dokumen hukum, pengajuan, negosiasi, atau perwakilan. Semua dilakukan dengan presisi dan kepatuhan terhadap hukum.`,
        icon: FaRegNewspaper,
      },
      {
        title: "Tindak Lanjut & Dukungan",
        desc: `Layanan hukum kami tidak berhenti di pelaksanaan. Kami memantau perkembangan, memberi pembaruan berkala, dan siap memberikan konsultasi lanjutan jika diperlukan.`,
        icon: FaStreetView,
      },
    ],
  },
  process_shape_mockup_data: [
    {
      tech_img: process_jump_right,
      tech_name: "process_jump_right",
      alt: "process_jump_right",
      class: "right",
    },
  ],
  process_one_images: {
    title: process_one,
    alt: "process_one",
  },
};

export const TEAMS_DATA_EQUIRON = {
  en: {
    teams_bg_images: {
      title: teams_bg,
      alt: "teams_bg",
    },
    teams_shape_mockup_data: [
      {
        tech_img: teams_jump_left,
        tech_name: "shape-mockup-teams",
        alt: "teams_jump_left",
        class: "right",
      },
    ],
    teams_text: "Our Teams",
    teams_title: "Dedicated Lawyers, Proven Results",
    teams_members: [
      {
        name: "Smith Miller",
        title: "Attorney",
        image: team_member_1,
        socials: [
          { icon: FaInstagram, url: "https://instagram.com/smithmiller" },
          { icon: FiTwitter, url: "https://twitter.com/smithmiller" },
          { icon: FiLinkedin, url: "https://linkedin.com/in/smithmiller" },
          { icon: FiPhone, url: "tel:+628111111111" },
        ],
      },
      {
        name: "Samira Dsuza",
        title: "Senior Partner",
        image: team_member_2,
        socials: [
          { icon: FaInstagram, url: "https://instagram.com/samira" },
          { icon: FiTwitter, url: "https://twitter.com/samira" },
          { icon: FiLinkedin, url: "https://linkedin.com/in/samira" },
          { icon: FiPhone, url: "tel:+628122222222" },
        ],
      },
      {
        name: "Michel Phelps",
        title: "Chief Justice",
        image: team_member_3,
        socials: [
          { icon: FaInstagram, url: "https://instagram.com/phelps" },
          { icon: FiTwitter, url: "https://twitter.com/phelps" },
          { icon: FiLinkedin, url: "https://linkedin.com/in/phelps" },
          { icon: FiPhone, url: "tel:+628133333333" },
        ],
      },
      {
        name: "Sarah Rahma",
        title: "Legal Advisor",
        image: team_member_4,
        socials: [
          { icon: FaInstagram, url: "https://instagram.com/sarahrahma" },
          { icon: FiTwitter, url: "https://twitter.com/sarahrahma" },
          { icon: FiLinkedin, url: "https://linkedin.com/in/sarahrahma" },
          { icon: FiPhone, url: "tel:+628144444444" },
        ],
      },
    ],
  },

  id: {
    teams_bg_images: {
      title: teams_bg,
      alt: "latar_tim",
    },
    teams_shape_mockup_data: [
      {
        tech_img: teams_jump_left,
        tech_name: "shape-mockup-tim",
        alt: "tim_lompat_kiri",
        class: "right",
      },
    ],
    teams_text: "Tim Kami",
    teams_title: "Pengacara Berdedikasi, Hasil Terbukti",
    teams_members: [
      {
        name: "Smith Miller",
        title: "Pengacara",
        image: team_member_1,
        socials: [
          { icon: FaInstagram, url: "https://instagram.com/smithmiller" },
          { icon: FiTwitter, url: "https://twitter.com/smithmiller" },
          { icon: FiLinkedin, url: "https://linkedin.com/in/smithmiller" },
          { icon: FiPhone, url: "tel:+628111111111" },
        ],
      },
      {
        name: "Samira Dsuza",
        title: "Mitra Senior",
        image: team_member_2,
        socials: [
          { icon: FaInstagram, url: "https://instagram.com/samira" },
          { icon: FiTwitter, url: "https://twitter.com/samira" },
          { icon: FiLinkedin, url: "https://linkedin.com/in/samira" },
          { icon: FiPhone, url: "tel:+628122222222" },
        ],
      },
      {
        name: "Michel Phelps",
        title: "Kepala Hakim",
        image: team_member_3,
        socials: [
          { icon: FaInstagram, url: "https://instagram.com/phelps" },
          { icon: FiTwitter, url: "https://twitter.com/phelps" },
          { icon: FiLinkedin, url: "https://linkedin.com/in/phelps" },
          { icon: FiPhone, url: "tel:+628133333333" },
        ],
      },
      {
        name: "Sarah Rahma",
        title: "Penasihat Hukum",
        image: team_member_4,
        socials: [
          { icon: FaInstagram, url: "https://instagram.com/sarahrahma" },
          { icon: FiTwitter, url: "https://twitter.com/sarahrahma" },
          { icon: FiLinkedin, url: "https://linkedin.com/in/sarahrahma" },
          { icon: FiPhone, url: "tel:+628144444444" },
        ],
      },
    ],
  },
};

export const PUBLICATIONS_DATA_EQUIRON = {
  en: {
    publications_text: "Publications",
    publications_title: "Our Publications & Update",
    publications_articles: [
      {
        author: "Smith Miller",
        title: "Steps to Pursue a Career as a Legal Project Manager.",
        image: publication_image,
        date: "22 Sep, 2025",
        comments: "2 Comments",
        icons: {
          user: FaUserAlt,
          calendar: FaCalendarAlt,
          comment: FaCommentAlt,
        },
      },
      {
        author: "Samira",
        title: "Top 10 Legal Tech Trends in 2025.",
        image: publication_image,
        date: "18 Sep, 2025",
        comments: "4 Comments",
        icons: {
          user: FaUserAlt,
          calendar: FaCalendarAlt,
          comment: FaCommentAlt,
        },
      },
      {
        author: "Michel",
        title: "How Legal Frameworks Shape Business Success.",
        image: publication_image,
        date: "14 Sep, 2025",
        comments: "5 Comments",
        icons: {
          user: FaUserAlt,
          calendar: FaCalendarAlt,
          comment: FaCommentAlt,
        },
      },
      {
        author: "Sarah",
        title: "Understanding Contract Law in Modern Business.",
        image: publication_image,
        date: "10 Sep, 2025",
        comments: "8 Comments",
        icons: {
          user: FaUserAlt,
          calendar: FaCalendarAlt,
          comment: FaCommentAlt,
        },
      },
      {
        author: "David",
        title: "The Importance of Due Diligence in Legal Practice.",
        image: publication_image,
        date: "05 Sep, 2025",
        comments: "3 Comments",
        icons: {
          user: FaUserAlt,
          calendar: FaCalendarAlt,
          comment: FaCommentAlt,
        },
      },
    ],
    publications_shape_mockup_data: [
      {
        tech_img: publications_shape_right,
        tech_name: "publications_shape_right",
        alt: "publications-shape-right",
        class: "right",
      },
      {
        tech_img: publications_shape_left,
        tech_name: "publications_shape_left",
        alt: "publications-shape-left",
        class: "left",
      },
    ],
  },

  id: {
    publications_text: "Publikasi",
    publications_title: "Publikasi & Pembaruan Kami",
    publications_articles: [
      {
        author: "Smith Miller",
        title: "Langkah Menjadi Manajer Proyek Hukum yang Sukses.",
        image: publication_image,
        date: "22 Sep, 2025",
        comments: "2 Komentar",
        icons: {
          user: FaUserAlt,
          calendar: FaCalendarAlt,
          comment: FaCommentAlt,
        },
      },
      {
        author: "Samira",
        title: "10 Tren Teknologi Hukum Teratas di Tahun 2025.",
        image: publication_image,
        date: "18 Sep, 2025",
        comments: "4 Komentar",
        icons: {
          user: FaUserAlt,
          calendar: FaCalendarAlt,
          comment: FaCommentAlt,
        },
      },
      {
        author: "Michel",
        title: "Bagaimana Kerangka Hukum Mempengaruhi Keberhasilan Bisnis.",
        image: publication_image,
        date: "14 Sep, 2025",
        comments: "5 Komentar",
        icons: {
          user: FaUserAlt,
          calendar: FaCalendarAlt,
          comment: FaCommentAlt,
        },
      },
      {
        author: "Sarah",
        title: "Memahami Hukum Kontrak dalam Bisnis Modern.",
        image: publication_image,
        date: "10 Sep, 2025",
        comments: "8 Komentar",
        icons: {
          user: FaUserAlt,
          calendar: FaCalendarAlt,
          comment: FaCommentAlt,
        },
      },
      {
        author: "David",
        title: "Pentingnya Uji Tuntas dalam Praktik Hukum.",
        image: publication_image,
        date: "05 Sep, 2025",
        comments: "3 Komentar",
        icons: {
          user: FaUserAlt,
          calendar: FaCalendarAlt,
          comment: FaCommentAlt,
        },
      },
    ],
    publications_shape_mockup_data: [
      {
        tech_img: publications_shape_right,
        tech_name: "publications_shape_right",
        alt: "publikasi-bentuk-kanan",
        class: "right",
      },
      {
        tech_img: publications_shape_left,
        tech_name: "publications_shape_left",
        alt: "publikasi-bentuk-kiri",
        class: "left",
      },
    ],
  },
};

export const CLIENTS_DATA_EQUIRON = {
  en: {
    clients_text: "Clients",
    clients_title: "Our Featured Clients",
  },
  id: {
    clients_text: "Klien",
    clients_title: "Klien Unggulan Kami",
  },

  clients_data_client: [
    {
      name: "PSSI",
      title: "pssi_logo",
      image: pssi_logo,
    },
    // {
    //   name: "Chakra Giri",
    //   title: "chakra_giri_logo",
    //   image: chakra_giri_logo,
    // },
    // {
    //   name: "Dana Paint",
    //   title: "dana_paint_logo",
    //   image: dana_paint_logo,
    // },
    {
      name: "CLM",
      title: "clm_logo",
      image: clm_logo,
    },
    // {
    //   name: "Gaharu Pelayaran",
    //   title: "gaharu_pelayaran_logo",
    //   image: gaharu_pelayaran_logo,
    // },
    {
      name: "Citra Harapan Jaya Permai",
      title: "citra_harapan_jaya_permai_logo",
      image: citra_harapan_jaya_permai_logo,
    },
    {
      name: "Lliadi",
      title: "lliadi_logo",
      image: lliadi_logo,
    },
    {
      name: "AIMTOPINDO",
      title: "aimtopindo_logo",
      image: aimtopindo_logo,
    },
    {
      name: "Indo Berkat",
      title: "indo_berkat_logo",
      image: indo_berkat_logo,
    },
    {
      name: "Mitra Galperti",
      title: "mitra_galperti_logo",
      image: mitra_galperti_logo,
    },
    {
      name: "PBE",
      title: "pbe_logo",
      image: pbe_logo,
    },
    // {
    //   name: "Semesta Energi Service",
    //   title: "semesta_energi_service_logo",
    //   image: semesta_energi_service_logo,
    // },
    {
      name: "Tridaya Esa Pakarti",
      title: "tridaya_esa_pakarti_logo",
      image: tridaya_esa_pakarti_logo,
    },
    // {
    //   name: "Warna Warni",
    //   title: "warna_warni_logo",
    //   image: warna_warni_logo,
    // },
  ],
  clients_shape_mockup_data: [
    {
      tech_img: clients_shape_right,
      tech_name: "clients_shape_right",
      alt: "clients-shape-right",
      class: "right",
    },
    {
      tech_img: clients_shape_left,
      tech_name: "clients_shape_left",
      alt: "clients-shape-left",
      class: "left",
    },
  ],
};

export const CONTACT_DATA_EQUIRON = {
  en: {
    contact_text: "Have Any Questions?",
    contact_title: "Get in Touch with Us",
    contact_form_title: "Submit Your Inquiry",
    contact_form_desc:
      "<b>Note: </b>Send us a message or request a consultation—we're happy to assist you as our valued client. Thank you.",
    contact_form_inputs: [
      {
        type: "radio",
        title_fields: "Request Type",
        value: "request_type",
        value_radio: [
          { label: "Individual", value: "Individual" },
          { label: "Company", value: "Company" },
        ],
      },
      {
        label: "Name",
        placeholder: "Your Name",
        value: "name",
        type: "text",
      },
      {
        label: "Phone Number",
        placeholder: "Phone Number",
        value: "phone",
        type: "number",
      },
      {
        label: "Email",
        placeholder: "Email",
        value: "email",
        type: "text",
      },
      {
        label: "Practice Area",
        placeholder: "Practice Area",
        value: "area_praktek",
        value_select: [
          { name: "Merger and Acquisitions", value: "Merger and Acquisitions" },
          { name: "Banking and Finance", value: "Banking and Finance" },
          { name: "Land and Property", value: "Land and Property" },
          { name: "Project Development", value: "Project Development" },
          {
            name: "Technology, Media & Telecom",
            value: "Technology, Media & Telecom",
          },
          {
            name: "Corporate Compliance Services",
            value: "Corporate Compliance Services",
          },
          {
            name: "Food & Beverage, Anti-Trust & Competition Law",
            value: "Food & Beverage, Anti-Trust & Competition Law",
          },
          { name: "Start-Up Company", value: "Start-Up Company" },
          { name: "Criminal Law", value: "Criminal Law" },
          { name: "Civil Law", value: "Civil Law" },
          { name: "Coal & Nickel Mining", value: "Coal & Nickel Mining" },
        ],
        type: "select",
      },
      {
        label: "Your Message",
        placeholder: "Your Message",
        value: "message",
        type: "textarea",
      },
    ],
    contact_note: {
      label: "Other Notes:",
      text: "Reply to your inquiry will be sent via the phone number you provide. Please ensure it's active and correct.",
    },
    contact_success_info:
      "Info: Please check your WhatsApp for follow-up messages.",
    contact_button: "Send Consultation",
    contact_title_address: "Address Information",
    contact_title_contact: "Contact Information",
    contact_title_address_data: [
      {
        title: "Head Office",
        address:
          "Jalan Pengasinan No. 3 Jatimulya, Bekasi, West Java 17115, Indonesia",
        information: [
          {
            label: "Email:",
            value: "equironandco@gmail.com",
            href: "mailto:equironandco@gmail.com",
          },
          {
            label: "Phone Number:",
            value: "6287772300770",
            href: "https://wa.me/6287772300770",
          },
        ],
        maps: {
          href: "https://maps.app.goo.gl/vHPkHfv3Z8CuRhh9A",
          text: "Open in Maps",
        },
      },
    ],
  },

  id: {
    contact_text: "Ada Pertanyaan?",
    contact_title: "Hubungi Kami",
    contact_form_title: "Kirimkan Pertanyaan Anda",
    contact_form_desc:
      "<b>Keterangan : </b>Kirimkan pesan atau konsultasi kepada kami, senang melayani anda sebagai klien kami. Terima kasih.",
    contact_form_inputs: [
      {
        type: "radio",
        title_fields: "Tipe Request",
        value: "request_type",
        value_radio: [
          { label: "Individu", value: "Individu" },
          { label: "Perusahaan", value: "Perusahaan" },
        ],
      },
      {
        label: "Nama",
        placeholder: "Nama",
        value: "name",
        type: "text",
      },
      {
        label: "No. Handphone",
        placeholder: "No. Handphone",
        value: "phone",
        type: "number",
      },
      {
        label: "Email",
        placeholder: "Email",
        value: "email",
        type: "text",
      },
      {
        label: "Area Praktek",
        placeholder: "Area Praktek",
        value: "area_praktek",
        value_select: [
          { name: "Merger and Acquisitions", value: "Merger and Acquisitions" },
          { name: "Banking and Finance", value: "Banking and Finance" },
          { name: "Land and Property", value: "Land and Property" },
          { name: "Project Development", value: "Project Development" },
          {
            name: "Technology, Media & Telecom",
            value: "Technology, Media & Telecom",
          },
          {
            name: "Corporate Compliance Services",
            value: "Corporate Compliance Services",
          },
          {
            name: "Food & Beverage, Anti-Trust & Competition Law",
            value: "Food & Beverage, Anti-Trust & Competition Law",
          },
          { name: "Start-Up Company", value: "Start-Up Company" },
          { name: "Criminal Law", value: "Criminal Law" },
          { name: "Civil Law", value: "Civil Law" },
          { name: "Coal & Nickel Mining", value: "Coal & Nickel Mining" },
        ],
        type: "select",
      },
      {
        label: "Pesan Anda",
        placeholder: "Pesan Anda",
        value: "message",
        type: "textarea",
      },
    ],
    contact_note: {
      label: "Catatan Lain :",
      text: "Pesan balasan dari konsultasi akan dikirim melalui No. HP yang Anda masukkan, jadi pastikan aktif dan benar.",
    },
    contact_success_info:
      "Informasi: Silakan cek pesan WhatsApp secara berkala.",
    contact_button: "Kirim Pesan Konsultasi",
    contact_title_address: "Informasi Alamat",
    contact_title_contact: "Informasi Kontak",
    contact_title_address_data: [
      {
        title: "Kantor Pusat",
        address:
          "Jalan Pengasinan No. 3 Jatimulya, Bekasi, Jawa Barat 17115, Indonesia",
        information: [
          {
            label: "Email :",
            value: "equironandco@gmail.com",
            href: "mailto:equironandco@gmail.com",
          },
          {
            label: "No. Handphone :",
            value: "6287772300770",
            href: "https://wa.me/6287772300770",
          },
        ],
        maps: {
          href: "https://maps.app.goo.gl/vHPkHfv3Z8CuRhh9A",
          text: "Buka Maps",
        },
      },
    ],
  },

  contact_media_sosial: [
    {
      icon: FaWhatsapp,
      label: "Whatsapp",
      title: "6287772300770",
      to: "https://wa.me/6287772300770",
    },
    {
      icon: FiPhone,
      label: "Telepon",
      title: "+6287772300770",
      to: "https://wa.me/+6287772300770",
    },
    {
      icon: FiMail,
      label: "Email",
      title: "equironandco@gmail.com",
      to: "mailto:equironandco@gmail.com",
    },
    {
      icon: FiInstagram,
      label: "Instagram",
      title: "@equironandco",
      to: "https://www.instagram.com/equironandco/",
    },
    {
      icon: FaTiktok,
      label: "Tiktok",
      title: "@equiron.and.co",
      to: "https://www.tiktok.com/@equiron.and.co",
    },
    {
      icon: FaLinkedin,
      label: "Linkedin",
      title: "equiron-and-co",
      to: "https://id.linkedin.com/in/equiron-and-co-487497368",
    },
  ],
};

export const FOOTER_DATA_EQUIRON = {
  en: {
    footer_text: "Our Services",
    footer_data_services: [
      [
        { name: "Merger and Acquisitions", value: "Merger and Acquisitions" },
        { name: "Banking and Finance", value: "Banking and Finance" },
      ],
      [
        { name: "Land and Property", value: "Land and Property" },
        { name: "Project Development", value: "Project Development" },
      ],
      [
        {
          name: "Technology, Media & Telecom",
          value: "Technology, Media & Telecom",
        },
        {
          name: "Corporate Compliance Services",
          value: "Corporate Compliance Services",
        },
      ],
      [
        {
          name: "Food & Beverage, Anti-Trust & Competition Law",
          value: "Food & Beverage, Anti-Trust & Competition Law",
        },
        { name: "Start-Up Company", value: "Start-Up Company" },
      ],
      [
        { name: "Criminal Law", value: "Criminal Law" },
        { name: "Civil Law", value: "Civil Law" },
      ],
      [{ name: "Coal & Nickel Mining", value: "Coal & Nickel Mining" }],
    ],
    footer_logo_equiron: {
      img: logo_equiron_white,
      alt: "logo_equiron_white",
    },
    footer_company_desc:
      "Equiron & Co. is a forward-thinking, full-service law firm dedicated to providing comprehensive legal solutions across various sectors.",
    footer_social_media: [
      {
        to: "https://www.instagram.com/equironandco/",
        label: "Instagram",
        icon: FaInstagram,
      },
      { to: "mailto:equironandco@gmail.com", label: "Email", icon: FiMail },
      { to: "tel:+6287772300770", label: "Phone", icon: FiPhone },
      {
        to: "https://www.tiktok.com/@equiron.and.co",
        label: "Tiktok",
        icon: FaTiktok,
      },
      {
        to: "https://id.linkedin.com/in/equiron-and-co-487497368",
        label: "Linkedin",
        icon: FaLinkedin,
      },
    ],
    footer_contact_info: [
      {
        icon: FiMapPin,
        label: "Location",
        desc: "Jalan Pengasinan No. 3 Jatimulya, Bekasi, Jawa Barat 17115, Indonesia",
      },
      {
        icon: FiPhone,
        label: "Phone",
        desc: "+62 8777-230-0770",
      },
      {
        icon: FaRegEnvelope,
        label: "Email",
        desc: "equironandco@gmail.com",
      },
    ],
    footer_whatsapp: {
      value: "6287772300770",
      href: "https://wa.me/6287772300770",
      text: "Contact Us via Whatsapp",
    },
  },

  id: {
    footer_text: "Layanan Kami",
    footer_data_services: [
      [
        { name: "Merger dan Akuisisi", value: "Merger and Acquisitions" },
        { name: "Perbankan dan Keuangan", value: "Banking and Finance" },
      ],
      [
        { name: "Pertanahan dan Properti", value: "Land and Property" },
        { name: "Pengembangan Proyek", value: "Project Development" },
      ],
      [
        {
          name: "Teknologi, Media & Telekomunikasi",
          value: "Technology, Media & Telecom",
        },
        {
          name: "Layanan Kepatuhan Korporat",
          value: "Corporate Compliance Services",
        },
      ],
      [
        {
          name: "Makanan & Minuman, Anti-Monopoli & Hukum Persaingan",
          value: "Food & Beverage, Anti-Trust & Competition Law",
        },
        { name: "Perusahaan Rintisan", value: "Start-Up Company" },
      ],
      [
        { name: "Hukum Pidana", value: "Criminal Law" },
        { name: "Hukum Perdata", value: "Civil Law" },
      ],
      [
        {
          name: "Pertambangan Batubara & Nikel",
          value: "Coal & Nickel Mining",
        },
      ],
    ],
    footer_logo_equiron: {
      img: logo_equiron_white,
      alt: "logo_equiron_white",
    },
    footer_company_desc:
      "Equiron & Co. adalah firma hukum penuh visi ke depan yang menyediakan solusi hukum menyeluruh di berbagai sektor.",
    footer_social_media: [
      {
        to: "https://www.instagram.com/equironandco/",
        label: "Instagram",
        icon: FaInstagram,
      },
      { to: "mailto:equironandco@gmail.com", label: "Email", icon: FiMail },
      { to: "tel:+6287772300770", label: "Phone", icon: FiPhone },
      {
        to: "https://www.tiktok.com/@equiron.and.co",
        label: "Tiktok",
        icon: FaTiktok,
      },
      {
        to: "https://id.linkedin.com/in/equiron-and-co-487497368",
        label: "Linkedin",
        icon: FaLinkedin,
      },
    ],
    footer_contact_info: [
      {
        icon: FiMapPin,
        label: "Lokasi",
        desc: "Jalan Pengasinan No. 3 Jatimulya, Bekasi, Jawa Barat 17115, Indonesia",
      },
      {
        icon: FiPhone,
        label: "Telepon",
        desc: "+62 8777-230-0770",
      },
      {
        icon: FaRegEnvelope,
        label: "Email",
        desc: "equironandco@gmail.com",
      },
    ],
    footer_whatsapp: {
      value: "6287772300770",
      href: "https://wa.me/6287772300770",
      text: "Hubungi Kami via Whatsapp",
    },
  },
};
