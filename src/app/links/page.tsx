import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Links | Mohammad Hilwan',
  description: 'Temukan semua tautan untuk memesan layanan, melihat portofolio, dan menghubungi Mohammad Hilwan.',
  openGraph: {
    title: 'Links | Mohammad Hilwan',
    description: 'Temukan semua tautan untuk memesan layanan, melihat portofolio, dan menghubungi Mohammad Hilwan.',
    images: ['/foto-hero.jpeg'],
  },
}

export default function LinksPage() {
  const linkItems = [
    {
      title: 'ORDER (WhatsApp)',
      url: 'https://wa.me/6283865157423',
      icon: 'fa-solid fa-cart-shopping',
      primary: true
    },
    {
      title: 'PORTFOLIO',
      url: 'https://drive.google.com/file/d/18hPz3Wdp19p5zqgpnmIG3qLEccQv_pwF/view?usp=sharing',
      iconText: 'P',
    },
    {
      title: 'FASTWORK',
      url: 'https://fastwork.id/user/mohhilwan',
      icon: 'fa-solid fa-bolt',
    },
    {
      title: 'FIVERR',
      url: 'https://www.fiverr.com/mohhilwan',
      iconText: 'fi',
      iconClass: 'fa-solid fa-f'
    }
  ]

  return (
    <section className="min-h-screen bg-[#0a0a0a] text-white flex justify-center py-16 px-6 font-sans">
      <div className="w-full max-w-[500px] flex flex-col items-center">
        {/* Profile Area */}
        <div className="flex flex-col items-center mb-10 w-full animate-fadeUp">
          <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden mb-5 border-4 border-neutral-800 shadow-xl">
            <Image
              src="/foto-hero.jpeg"
              alt="Mohammad Hilwan"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Mohammad Hilwan</h1>
          <p className="text-neutral-400 font-mono text-xs md:text-sm tracking-wider uppercase">Full-Stack Developer & Graphic Designer</p>

          <div className="flex gap-4 mt-6">
            <a href="https://www.instagram.com/onedesignnn" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-12 h-12 flex items-center justify-center rounded-full bg-[#111111] border border-neutral-800 hover:bg-[#ff5500] hover:border-[#ff5500] hover:-translate-y-1 transition-all shadow-lg text-lg">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/mohhilwan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-12 h-12 flex items-center justify-center rounded-full bg-[#111111] border border-neutral-800 hover:bg-[#ff5500] hover:border-[#ff5500] hover:-translate-y-1 transition-all shadow-lg text-lg">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Links Area */}
        <div className="flex flex-col w-full gap-4 mb-12">
          {linkItems.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center w-full p-4 rounded-[2rem] border overflow-hidden transition-all duration-300 animate-fadeUp ${item.primary
                  ? 'bg-[#ff5500] border-[#ff5500] text-white hover:bg-[#e64d00] hover:-translate-y-1 shadow-[0_4px_24px_rgba(255,85,0,0.3)]'
                  : 'bg-[#111111] border-neutral-800 hover:border-[#ff5500]/50 hover:bg-[#1a1a1a] hover:-translate-y-1 shadow-lg'
                }`}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className={`flex items-center justify-center w-12 h-12 shrink-0 rounded-full bg-[#1a1a1a] text-[#ffaa00] border ${item.primary ? 'border-neutral-700/50' : 'border-neutral-800'} text-lg font-bold group-hover:scale-110 transition-transform`}>
                {item.icon ? (
                  <i className={`${item.icon}`}></i>
                ) : item.iconClass ? (
                  <i className={`${item.iconClass}`}></i>
                ) : (
                  <span>{item.iconText}</span>
                )}
              </div>
              <div className="flex-1 text-center pr-12 font-bold tracking-wide text-sm md:text-base">
                {item.title}
              </div>
            </a>
          ))}
        </div>

        {/* Footer Area of the Links Page */}
        <div className="mt-auto animate-fadeUp" style={{ animationDelay: '0.6s' }}>
          <Link href="/" className="flex items-center gap-2 text-neutral-500 hover:text-[#ff5500] font-semibold text-sm transition-colors">
            <i className="fa-solid fa-arrow-left"></i> Kembali ke Website
          </Link>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        footer { display: none !important; }
      `}} />
    </section>
  )
}
