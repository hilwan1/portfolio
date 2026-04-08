export type ProjectCategory = 'web' | 'logo' | 'uiux' | 'poster'

export interface Project {
  id: number
  title: string
  description: string
  category: ProjectCategory
  image: string
  gallery?: string[]
  tags: string[]
  year: number
  featured?: boolean
}

export const categoryMeta: Record<ProjectCategory, { label: string; icon: string; color: string; desc: string }> = {
  web: {
    label: 'Web Development',
    icon: 'fa-solid fa-code',
    color: '#38b6ff',
    desc: 'Full-stack web applications & interactive websites built with modern frameworks.',
  },
  logo: {
    label: 'Logo Design',
    icon: 'fa-solid fa-pen-nib',
    color: '#f6c90e',
    desc: 'Brand identities crafted with philosophical foundations, geometry & meaningful symbolism.',
  },
  uiux: {
    label: 'UI/UX Design',
    icon: 'fa-solid fa-object-group',
    color: '#a78bfa',
    desc: 'Mobile & web interfaces designed for intuitive user experience and visual delight.',
  },
  poster: {
    label: 'Poster Design',
    icon: 'fa-solid fa-palette',
    color: '#fb923c',
    desc: 'Print & digital graphic design — event collaterals, social media, and marketing materials.',
  },
}

export const projects: Project[] = [
  /* ── Web Development ── */
  {
    id: 1,
    title: 'B3 dan MOMAHE',
    description: 'Platform Belajar Bersama BBPMP Provinsi Jawa Barat untuk pendaftaran layanan moving class, parenting, penguatan PTK, dan MOMAHE (Mobil Mainan Hebat) untuk pendidikan PAUD.',
    category: 'web',
    image: '/B3 dan MOMAHE/landingpage2.png',
    gallery: [
      '/B3 dan MOMAHE/landingpage.png',
      '/B3 dan MOMAHE/admin.png',
      '/B3 dan MOMAHE/form-input-movingclass.png',
      '/B3 dan MOMAHE/riwayat-pengajuan.png',
      '/B3 dan MOMAHE/status-pengajuan.png',
      '/B3 dan MOMAHE/user-profile.png'
    ],
    tags: ['Laravel', 'MySQL', 'Bootstrap','PHP'],
    year: 2026,
    featured: true,
  },
  {
    id: 2,
    title: 'SIMANTEN BBPMP Provinsi Jawa Barat',
    description: 'SIMANTEN ini adalam Sistem Manajemen Terintegrasi BMN BBPMP Provinsi Jawa Barat yang fungsinya untuk mengelola permintaan barang, bisa melihat status barang tersedia dan bisa mengajukan permintaan kendaraan dinas',
    category: 'web',
    image: '/BMN/cover.png',
    gallery: [
      '/BMN/landingpage.png',
      '/BMN/admin.png',
      '/BMN/form-pengajuan-barang.png',
      '/BMN/form-pengajuan-kendaraan.png',
      '/BMN/barang.png'
    ],
    tags: ['Laravel', 'MySQL', 'Bootstrap','PHP'],
    year: 2025,
    featured: true,
  },
  {
    id: 3,
    title: 'MindCare Chatbot',
    description: 'MindCare adalah chatbot yang dirancang untuk membantu pengguna dalam mengelola kesehatan mental mereka. Chatbot ini menyediakan fitur-fitur seperti konseling, terapi, dan dukungan emosional.',
    category: 'web',
    image: '/Chatbot/landingpage.png',
    gallery: [
      '/Chatbot/landingpage.png',
      '/Chatbot/dashboard.png',
      '/Chatbot/chat.png',
      '/Chatbot/start-chat.png',
      '/Chatbot/riwayat-chat.png',
      '/Chatbot/profile.png'
    ],
    tags: ['CodeIgniter 4', 'MySQL', 'Bootstrap','PHP'],
    year: 2025,
    featured: true,
  },
  {
    id: 4,
    title: 'JNE Warehouse Tracking',
    description: 'JNE Warehouse Tracking adalah sebuah proyek website sistem manajemen gudang dengan teknologi barcode scanner.',
    category: 'web',
    image: '/jne/login.png',
    gallery: [
      '/jne/login.png',
      '/jne/dashboard.png',
      '/jne/inbound.png',
      '/jne/outbound.png',
      '/jne/riwayat-out.png',
      '/jne/barang.png'
    ],
    tags: ['CodeIgniter 4', 'MySQL', 'Bootstrap', 'Barcode Scanner'],
    year: 2025,
    featured: true,
  },

  /* ── Logo Design ── */
  {
    id: 5,
    title: 'Southside Coffee Shop',
    description: 'Southside Coffee Shop adalah sebuah brand logo yang saya rancang dengan modern dan elegant.',
    category: 'logo',
    image: '/southside/southside2.jpg',
    gallery: [
      '/southside/southside.jpg'
    ],
    tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Modern', 'Elegant'],
    year: 2025,
    featured: true,
  },
  {
    id: 6,
    title: 'Kopirasi Coffee Shop',
    description: 'Kopirasi Coffee Shop adalah sebuah brand logo yang saya rancang dengan modern dan elegant.',
    category: 'logo',
    image: '/kopirasi/kopirasi2.jpg',
    gallery: [
      '/kopirasi/kopirasi.jpg'
    ],
    tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Modern', 'Elegant'],
    year: 2025,
    featured: true,
  },
  {
    id: 7,
    title: 'Beautea Cosmetic',
    description: 'Beautea Cosmetic adalah sebuah brand logo yang saya rancang dengan modern dan elegant.',
    category: 'logo',
    image: '/beautea/beautea2.jpg',
    gallery: [
      '/beautea/beautea.jpg'
    ],
    tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Modern', 'Elegant'],
    year: 2025,
    featured: true,
  },
  {
    id: 8,
    title: 'Rap Studio',
    description: 'Rap Studio adalah sebuah brand logo yang saya rancang dengan modern dan elegant.',
    category: 'logo',
    image: '/rap/rap2.jpg',
    gallery: [
      '/rap/rap.jpg'
    ],
    tags: ['Adobe Illustrator', 'Adobe Photoshop', 'Modern', 'Elegant'],
    year: 2025,
    featured: true,
  },

  /* ── UI/UX Design ── */
  {
    id: 9,
    title: 'E-Commerce Astha',
    description: 'E-Commerce Astha adalah sebuah website e-commerce yang dimana saya membuat bagian dari UI Web nya.',
    category: 'uiux',
    image: '/astha/astha.jpg',
    gallery: [
      '/astha/astha.jpg'
    ],
    tags: ['Figma', 'UI Design'],
    year: 2025,
    featured: true,
  },
  {
    id: 10,
    title: 'myAstha',
    description: 'myAstha adalah sebuah website Networking yang dimana saya membuat bagian dari UI Web nya.',
    category: 'uiux',
    image: '/myastha/Frame 1.png',
    gallery: [
      '/myastha/Frame 1.png',
      '/myastha/Frame 2.png',
      '/myastha/Frame 3.png',
      '/myastha/Frame 4.png'
    ],
    tags: ['Figma', 'UI Design'],
    year: 2025,
    featured: true,
  },
  {
    id: 11,
    title: 'Astha Superior',
    description: 'Astha Superior adalah sebuah website Networking yang dimana saya membuat bagian dari UI Web nya.',
    category: 'uiux',
    image: '/asthasuperior/asthasuperior.jpg',
    gallery: [
      '/asthasuperior/asthasuperior.jpg'
    ],
    tags: ['Figma', 'UI Design'],
    year: 2025,
    featured: true,
  },

  /* ── Poster Design ── */
  {
    id: 12,
    title: 'Feed Instagram Design',
    description: 'Desain Feed Instagram dari beberapa brand yang pernah saya kerjakan.',
    category: 'poster',
    image: '/feed/feed1.jpg',
    gallery: [
      '/feed/feed1.jpg',
      '/feed/feed2.jpg',
      '/feed/feed3.jpg',
      '/feed/feed4.jpg',
      '/feed/feed5.jpg',
      '/feed/feed6.jpg',
      '/feed/feed7.jpg'
    ],
    tags: ['Social Media', 'Photoshop', 'Illustrator'],
    year: 2025,
    featured: true,
  },
]
