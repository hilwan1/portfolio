export type ProjectCategory = 'fullstack' | 'frontend' | 'backend'

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
  fullstack: {
    label: 'Full-Stack Web App',
    icon: 'layers',
    color: '#38b6ff',
    desc: 'Aplikasi web dinamis dengan integrasi database, manajemen state, dan logika backend yang kompleks.',
  },
  frontend: {
    label: 'Front-End Development',
    icon: 'code',
    color: '#a78bfa',
    desc: 'Antarmuka web interaktif yang responsif dan berkinerja tinggi menggunakan framework modern.',
  },
  backend: {
    label: 'Back-End & API',
    icon: 'server',
    color: '#fb923c',
    desc: 'Pengembangan server, perancangan database, dan integrasi API yang aman dan skalabel.',
  },
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Abadi Rent',
    description: 'Sistem informasi persewaan mobil (car rental) berbasis web yang terintegrasi dengan manajemen inventaris armada kendaraan, perhitungan harga otomatis, dan sistem invoicing untuk mempercepat proses administrasi.',
    category: 'fullstack',
    image: '/web/abadirent.jpg',
    gallery: [
      '/web/abadirent.jpg'
    ],
    tags: ['Laravel', 'MySQL', 'Bootstrap', 'PHP', 'Invoicing System'],
    year: 2026,
    featured: true,
  },
  {
    id: 2,
    title: 'Belajar Bersama BBPMP',
    description: 'Platform digital BBPMP Provinsi Jawa Barat untuk pendaftaran moving class, parenting, penguatan PTK, dan MOMAHE (Mobil Mainan Hebat) untuk pendidikan anak usia dini secara terpadu.',
    category: 'fullstack',
    image: '/web/belajarbersamabbpmp.jpg',
    gallery: [
      '/web/belajarbersamabbpmp.jpg'
    ],
    tags: ['Laravel', 'MySQL', 'Bootstrap', 'PHP', 'Layanan Publik'],
    year: 2025,
    featured: true,
  },
  {
    id: 3,
    title: 'MindCare Chatbot',
    description: 'Aplikasi web asisten kesehatan mental interaktif (chatbot) berbasis kecerdasan buatan untuk membantu konseling psikologis awal secara real-time dan memberikan rujukan informasi medis terpercaya.',
    category: 'fullstack',
    image: '/web/mindcarechatbot.jpg',
    gallery: [
      '/web/mindcarechatbot.jpg'
    ],
    tags: ['CodeIgniter 4', 'MySQL', 'Bootstrap', 'AI API', 'Chatbot'],
    year: 2025,
    featured: true,
  },
  {
    id: 4,
    title: 'Design Studio Portfolio',
    description: 'Website portofolio interaktif dan modern yang dirancang khusus untuk agensi desain grafis guna memamerkan karya kreatif mereka dengan tata letak minimalis dan estetika tinggi.',
    category: 'frontend',
    image: '/web/portofoliodesign.jpg',
    gallery: [
      '/web/portofoliodesign.jpg'
    ],
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Responsive'],
    year: 2026,
    featured: true,
  },
  {
    id: 5,
    title: 'SIMANTEN BBPMP Jawa Barat',
    description: 'Sistem Manajemen Terintegrasi BMN (Barang Milik Negara) BBPMP Provinsi Jawa Barat untuk mengelola persediaan barang, inventaris aset kantor, serta permintaan peminjaman armada kendaraan dinas secara otomatis.',
    category: 'fullstack',
    image: '/web/SIMANTEN.jpg',
    gallery: [
      '/web/SIMANTEN.jpg'
    ],
    tags: ['Laravel', 'MySQL', 'Bootstrap', 'PHP', 'Manajemen Aset'],
    year: 2025,
    featured: true,
  },
  {
    id: 6,
    title: 'Dashboard SIMPEG BBPMP Jabar',
    description: 'Sistem Informasi Manajemen Kepegawaian internal BBPMP Provinsi Jawa Barat untuk mempermudah pemantauan rekam data staf, manajemen absensi, pengarsipan berkas dinas, dan visualisasi absensi pegawai.',
    category: 'frontend',
    image: '/web/DashboardSIMPEG.jpg',
    gallery: [
      '/web/DashboardSIMPEG.jpg'
    ],
    tags: ['Laravel', 'MySQL', 'Bootstrap', 'PHP', 'SIMPEG'],
    year: 2025,
    featured: true,
  },
  {
    id: 7,
    title: 'E-Commerce Warung Pacitan',
    description: 'Platform toko online (e-commerce) lokal untuk pemasaran kuliner dan kerajinan khas Pacitan, dilengkapi sistem manajemen katalog produk, keranjang belanja terintegrasi, dan kalkulasi total ongkos pengiriman.',
    category: 'fullstack',
    image: '/web/ecommercewarungpacitan.jpg',
    gallery: [
      '/web/ecommercewarungpacitan.jpg'
    ],
    tags: ['Laravel', 'MySQL', 'Bootstrap', 'PHP', 'E-Commerce'],
    year: 2025,
    featured: true,
  },
  {
    id: 8,
    title: 'Hook Agency Dashboard',
    description: 'Dashboard analitik interaktif untuk memantau performa agensi pemasaran kreatif, melacak target bulanan, mengelola data klien (CRM), serta memantau status pengerjaan proyek secara berkala.',
    category: 'frontend',
    image: '/web/DashboardHookAgency.jpg',
    gallery: [
      '/web/DashboardHookAgency.jpg'
    ],
    tags: ['Laravel', 'MySQL', 'Bootstrap', 'PHP', 'Dashboard'],
    year: 2026,
    featured: true,
  },
  {
    id: 9,
    title: 'Astha E-Commerce Hub',
    description: 'Website e-commerce modern dengan halaman beranda yang dinamis dan katalog produk interaktif untuk meningkatkan pengalaman berbelanja pengguna secara intuitif.',
    category: 'fullstack',
    image: '/web/EcommerceAstha.jpg',
    gallery: [
      '/web/EcommerceAstha.jpg',
      '/web/landingpageastha.jpg'
    ],
    tags: ['Laravel', 'PHP', 'Bootstrap', 'MySQL', 'E-Commerce'],
    year: 2025,
    featured: true,
  },
  {
    id: 10,
    title: 'CEKResiIn Portal',
    description: 'Aplikasi web pencarian dan pelacakan resi ekspedisi pengiriman paket terintegrasi (courier tracking portal) yang menghubungkan API data logistik pihak ketiga secara real-time.',
    category: 'fullstack',
    image: '/web/CEKResiIn.jpg',
    gallery: [
      '/web/CEKResiIn.jpg'
    ],
    tags: ['PHP Native', 'Bootstrap', 'API Tracking'],
    year: 2025,
    featured: true,
  },
  {
    id: 11,
    title: 'Task Checklist Dashboard',
    description: 'Aplikasi manajemen tugas harian yang intuitif dengan visualisasi tingkat kemajuan pekerjaan (progress tracking), fitur checklist interaktif, serta pengorganisasian tugas berdasarkan prioritas.',
    category: 'frontend',
    image: '/web/DashboardTaskChecklist.jpg',
    gallery: [
      '/web/DashboardTaskChecklist.jpg'
    ],
    tags: ['Laravel', 'PHP', 'Bootstrap', 'State Management'],
    year: 2025,
    featured: true,
  },
]
