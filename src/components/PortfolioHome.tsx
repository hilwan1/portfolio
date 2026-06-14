'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { projects } from '@/lib/projects';
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Server,
  LayoutTemplate,
  MessageSquare,
  X,
  Send,
  Bot,
  MonitorSmartphone,
  Database,
  PenTool,
  Palette,
  Globe,
  Download,
  Instagram,
  AtSign
} from 'lucide-react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const FadeIn = ({ children, delay = 0, className = "" }: FadeInProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const current = domRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.5 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};


const SPECIALTIES = [
  {
    icon: MonitorSmartphone,
    title: "Front-end Development",
    skills: "React, Next.js, Tailwind CSS, Bootstrap"
  },
  {
    icon: Server,
    title: "Back-end Development",
    skills: "Laravel, CodeIgniter, Node.js, Express"
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    skills: "Figma, Framer, User Flow"
  },
  {
    icon: Database,
    title: "Database Management",
    skills: "MySQL, PostgreSQL"
  },
  {
    icon: Globe,
    title: "API Integration",
    skills: "RESTful API, Postman"
  },
  {
    icon: Palette,
    title: "Graphic Design",
    skills: "Photoshop, Illustrator, CorelDraw"
  }
];

const TESTIMONIALS = [
  {
    name: "Fotomora",
    role: "Klien",
    text: "Menarik untuk bekerjasama"
  },
  {
    name: "Yusuf Maulana",
    role: "Klien",
    text: "hasil logo sangat bagus! akan pesan lagi!"
  },
  {
    name: "Fahmi Sidiq",
    role: "Klien",
    text: "Very talented, understanding, highly recommended. Thank you so much!"
  },
  {
    name: "Imam Sidik",
    role: "Klien",
    text: "Pekerjaan cepat, respon cepat, hasil memuaskan. Bakalan repeat order nih"
  },
  {
    name: "PT. Duta Global Mandiri",
    role: "Klien Perusahaan",
    text: "Mantap.... Balas pesan cepat, sangat gampang berkomunikasi, memberikan solusi dan revisi sesuai dengan permintaan. Recommended."
  }
];

const Hero = () => {
  return (
    <section className="w-full bg-[#0a0a0a]">
      <FadeIn>
        {/* Full-width container with extreme bottom radius */}
        <div className="relative w-full min-h-[95vh] lg:min-h-screen rounded-b-[3rem] md:rounded-b-[5rem] bg-gradient-to-br from-[#ff3300] via-[#991100] to-[#1a0000] overflow-hidden flex flex-col pt-32 pb-16 md:pb-20 px-6 md:px-12 lg:px-20">

          {/* Background Photo with Blur/Gradient Effect */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[700px] aspect-square pointer-events-none z-0">
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a0000] via-transparent to-transparent z-10 rounded-full"></div>
            <img
              src="/foto-gue.png"
              alt="Background Silhouette"
              className="w-full h-full object-cover object-top opacity-70 mix-blend-overlay blur-[6px] rounded-full"
            />
          </div>

          <div className="flex-1 w-full max-w-[1400px] mx-auto flex flex-col justify-center relative z-10">
            {/* Top Left Name Intro */}
            <div className="mb-6 md:mb-12">
              <p className="text-white/80 font-medium tracking-wide uppercase text-xs md:text-sm mb-2">Halo, Saya</p>
              <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Mohammad Hilwan<span className="text-[#ffaa00]">.</span></h1>
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 lg:gap-24">
              {/* Massive Tagline Area */}
              <div className="flex-1">
                <h2 className="text-5xl sm:text-7xl lg:text-[7rem] font-bold text-white tracking-tighter leading-[0.9]">
                  Full-Stack <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Developer</span>
                </h2>
              </div>

              {/* Right Side Description */}
              <div className="w-full lg:w-[400px] flex flex-col gap-8">
                <p className="text-white/80 text-lg md:text-xl font-medium leading-snug">
                  Let's collaborate to build something great.
                </p>
                <div className="flex flex-wrap gap-4 mt-2">
                  <a href="#projects" className="bg-white text-black px-8 py-4 rounded-full text-sm font-bold hover:bg-neutral-200 transition-colors flex items-center gap-2 group">
                    Lihat Proyek <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="/CV-Mohammad-Hilwan-2026.pdf" download="CV-Mohammad-Hilwan-2026.pdf" className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-white/10 transition-colors flex items-center gap-2">
                    <Download className="w-4 h-4" /> Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Columns (Services/Focus Area) inside Hero */}
          <div className="w-full max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mt-20 border-t border-white/10 pt-8 z-10">
            <div>
              <p className="text-[#ffaa00] text-xs font-bold mb-3 tracking-widest">#01</p>
              <p className="text-white/90 text-sm font-medium">Web Development</p>
            </div>
            <div>
              <p className="text-[#ffaa00] text-xs font-bold mb-3 tracking-widest">#02</p>
              <p className="text-white/90 text-sm font-medium">Graphic Designer also</p>
            </div>
            <div>
              <p className="text-[#ffaa00] text-xs font-bold mb-3 tracking-widest">#03</p>
              <p className="text-white/90 text-sm font-medium">Integrasi API</p>
            </div>
            <div>
              <p className="text-[#ffaa00] text-xs font-bold mb-3 tracking-widest">#04</p>
              <p className="text-white/90 text-sm font-medium">Arsitektur Skalabel</p>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Marquee-style Tech Stack Strip directly below the Hero curve */}
      <FadeIn delay={300}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-neutral-500 text-xs md:text-sm font-medium uppercase tracking-wider text-center md:text-left">
            Teknologi Pilihan <br className="hidden md:block" />Dalam Membangun Sistem
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-8 md:gap-16 opacity-70 grayscale">
            <span className="text-white font-bold text-xl flex items-center gap-2"><LayoutTemplate className="w-6 h-6" /> Laravel</span>
            <span className="text-white font-bold text-xl flex items-center gap-2"><Code2 className="w-6 h-6" /> Node.js</span>
            <span className="text-white font-bold text-xl flex items-center gap-2"><Server className="w-6 h-6" /> Next.js</span>
            <span className="text-white font-bold text-xl flex items-center gap-2"><LayoutTemplate className="w-6 h-6" /> React</span>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

const AboutMe = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 w-full bg-white text-black flex items-center justify-center">
      <div className="max-w-5xl mx-auto text-center">
        <FadeIn>
          <div className="flex flex-col items-center gap-4 mb-10">
            <p className="text-sm font-bold tracking-widest uppercase text-neutral-400">Let's Connect</p>
            <div className="flex items-center gap-4">
              <a href="https://instagram.com/mohhilwan" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-[#ff5500] hover:border-[#ff5500] hover:text-white transition-all text-neutral-600" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.threads.com/@mohhilwan" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-[#ff5500] hover:border-[#ff5500] hover:text-white transition-all text-neutral-600" aria-label="Threads">
                <AtSign className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/mohammadhilwan" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-[#ff5500] hover:border-[#ff5500] hover:text-white transition-all text-neutral-600" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          <p className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold leading-relaxed md:leading-[1.4] tracking-tight text-black">
            👋 Hello! I'm Mohammad Hilwan, —— a Fresh Graduate with a Diploma Degree (D3) in <span className="uppercase">Informatics Engineering</span> from Universitas Logistik dan
            Bisnis Internasional, graduating with a Very Satisfactory distinction. I have experience in <span className="uppercase">UI/UX Design</span>, <span className="uppercase">Web Development</span>, and <span className="uppercase">Graphic Design</span>, particularly in designing intuitive, responsive, and user-friendly web and mobile application interfaces using user-centered design and design thinking approaches.
          </p>

          <div className="mt-20 w-full">
            <p className="text-sm font-bold tracking-widest uppercase text-neutral-400 mb-8">My Favorite Tracks</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <iframe style={{ borderRadius: '16px' }} src="https://open.spotify.com/embed/track/48BWWtyjFE2le9sIqJitoL?si=c1b9beba95e74f1b?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              <iframe style={{ borderRadius: '16px' }} src="https://open.spotify.com/embed/track/1fDFHXcykq4iw8Gg7s5hG9?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

const Stats = () => {
  const statsData = [
    { label: "Projects Completed", value: 350, suffix: "+" },
    { label: "Happy Clients", value: 300, suffix: "+" },
    { label: "Years Experience", value: 4, suffix: "+" },
    { label: "Lighthouse Score", value: 99, suffix: "+" },
  ];

  return (
    <section className="py-16 px-6 w-full bg-[#ff5500]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-white/20">
        {statsData.map((stat, index) => (
          <FadeIn key={index} delay={index * 150} className="flex flex-col items-center justify-center text-center py-6 md:py-0 px-4 group">
            <h3 className="text-5xl md:text-6xl font-bold text-white mb-3 tracking-tighter group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
            </h3>
            <p className="text-white/90 text-xs md:text-sm font-semibold uppercase tracking-widest leading-relaxed max-w-[150px]">{stat.label}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

const TechStack = () => {
  return (
    <section id="skills" className="py-24 px-6 w-full bg-[#fdfdfd] text-black border-t border-neutral-100">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16 md:mb-20 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black tracking-tight uppercase max-w-4xl leading-tight">
              I SPECIALIZE IN A RANGE OF SKILLS.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SPECIALTIES.map((spec, i) => (
              <div
                key={i}
                className="bg-white border border-neutral-200/60 p-8 md:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-neutral-100 flex items-center justify-center mb-8">
                  <spec.icon className="w-6 h-6 text-neutral-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-black mb-3 tracking-tight">
                  {spec.title}
                </h3>
                <p className="text-neutral-500 font-medium leading-relaxed">
                  {spec.skills}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

const Projects = () => {
  const displayProjects = projects.slice(0, 6);

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto border-t border-neutral-900">
      <FadeIn>
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 max-w-3xl">
              Sistem & Pengalaman Digital Terpilih
            </h2>
          </div>
          <Link href="/projects" className="shrink-0 bg-[#111111] hover:bg-[#1a1a1a] border border-neutral-800 text-white px-8 py-4 rounded-full text-sm font-bold transition-all hover:-translate-y-1 inline-flex items-center gap-2 group">
            More Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayProjects.map((project, index) => (
          <FadeIn key={project.id} delay={index * 150} className="group cursor-pointer">
            <Link href={`/projects/${project.id}`} className="block h-full flex flex-col p-4 md:p-5 rounded-[2rem] bg-[#111111] border border-neutral-800 hover:border-neutral-600 transition-all duration-300">
              <div className="relative w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="flex-1 flex flex-col px-2">
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">{project.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-neutral-800">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-[#1a1a1a] text-[11px] font-semibold text-neutral-300 tracking-wider">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-3 py-1 rounded-full bg-[#1a1a1a] text-[11px] font-semibold text-neutral-500 tracking-wider">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

const TestimonialsSlider = () => {
  return (
    <section className="bg-white w-full py-24 rounded-[3rem] md:rounded-[5rem] overflow-hidden my-12 relative">
      {/* Inline CSS untuk Infinite Scroll yang sangat halus */}
      <style>{`
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - 1.5rem)); } /* 1.5rem adalah gap-6 */
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
        .scroll-container:hover .animate-infinite-scroll {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-[#ff5500] text-sm font-bold tracking-widest uppercase mb-3">Apa Kata Mereka</p>
              <h2 className="text-4xl md:text-6xl font-bold text-black tracking-tight max-w-2xl">
                Kepercayaan Klien Adalah Prioritas Utama.
              </h2>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Kontainer Slider - Akan otomatis berhenti jika di-hover kursor */}
      <div className="flex gap-6 relative overflow-hidden flex-nowrap w-full scroll-container pb-8 pt-4">

        {/* Set Pertama Testimoni */}
        <div className="flex gap-6 animate-infinite-scroll shrink-0 pl-6">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="w-[350px] md:w-[450px] flex-shrink-0 bg-neutral-50 border border-neutral-200 p-8 md:p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <MessageSquare className="w-10 h-10 text-neutral-300 mb-6 group-hover:text-[#ff5500] transition-colors" />
              <p className="text-black text-lg md:text-xl font-medium leading-relaxed mb-8">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white font-bold text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-black text-base">{t.name}</h4>
                  <p className="text-neutral-500 text-sm font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Set Kedua Testimoni (Duplikat untuk efek infinite berulang) */}
        <div className="flex gap-6 animate-infinite-scroll shrink-0" aria-hidden="true">
          {TESTIMONIALS.map((t, idx) => (
            <div key={`dup-${idx}`} className="w-[350px] md:w-[450px] flex-shrink-0 bg-neutral-50 border border-neutral-200 p-8 md:p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <MessageSquare className="w-10 h-10 text-neutral-300 mb-6 group-hover:text-[#ff5500] transition-colors" />
              <p className="text-black text-lg md:text-xl font-medium leading-relaxed mb-8">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white font-bold text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-black text-base">{t.name}</h4>
                  <p className="text-neutral-500 text-sm font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

const AIChatbot = () => {
  return (
    <Link
      href="/chat"
      className="fixed bottom-6 right-6 w-14 h-14 bg-[#ff5500] rounded-full flex items-center justify-center shadow-lg shadow-[#ff5500]/30 text-white hover:scale-110 transition-transform z-50 block"
    >
      <Bot className="w-6 h-6" />
    </Link>
  );
};

export default function PortfolioHome() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-[#ff5500] selection:text-white font-sans overflow-x-hidden">
      <main>
        <Hero />
        <AboutMe />
        <Stats />
        <TechStack />
        <Projects />
        <TestimonialsSlider />
      </main>
      <AIChatbot />
    </div>
  );
}
