'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';
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
  Terminal,
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

const TypingEffect = ({ html, className = "", speed = 15 }: { html: string, className?: string, speed?: number }) => {
  const [displayedHtml, setDisplayedHtml] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const domRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.4 });

    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let index = 0;
    const interval = setInterval(() => {
      if (index >= html.length) {
        clearInterval(interval);
        setDisplayedHtml(html);
        setIsFinished(true);
        return;
      }
      if (html[index] === '<') {
        while (index < html.length && html[index] !== '>') {
          index++;
        }
        index++;
      } else if (html[index] === '&') {
        while (index < html.length && html[index] !== ';') {
          index++;
        }
        index++;
      } else {
        index++;
      }
      setDisplayedHtml(html.substring(0, index));
    }, speed);
    return () => clearInterval(interval);
  }, [isVisible, html, speed]);

  return (
    <p ref={domRef} className={className} dangerouslySetInnerHTML={{ __html: displayedHtml + (isFinished ? '' : '<span class="animate-pulse inline-block w-[0.15em] h-[1em] bg-black ml-1 align-text-bottom opacity-70"></span>') }} />
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
    skills: "Figma, Framer, User Flow, Wireframing"
  },
  {
    icon: Database,
    title: "Database Management",
    skills: "MySQL, PostgreSQL, MongoDB"
  },
  {
    icon: Globe,
    title: "API Integration",
    skills: "RESTful API, GraphQL, Third-party APIs"
  },
  {
    icon: Terminal,
    title: "DevOps & Deployment",
    skills: "Git, cPanel, VPS, Vercel, Netlify"
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
            <Image
              src="/foto-gue.png"
              alt="Background Silhouette"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-cover object-top opacity-70 mix-blend-overlay blur-[1px] rounded-full"
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
                  <a href="/CV-ATS-Mohammad-Hilwan.pdf" download="CV-ATS-Mohammad-Hilwan.pdf" className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full text-sm font-bold hover:bg-white/10 transition-colors flex items-center gap-2">
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
              <p className="text-white/90 text-sm font-medium">Back-end & Database</p>
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
  const textRef = useRef<HTMLParagraphElement>(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!textRef.current) return;
      const rect = textRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start fading in when the element's top passes 85% of viewport height from the top.
      // Be fully visible (opacity = 1) when the element's top reaches 40% of viewport height.
      const start = windowHeight * 0.85;
      const end = windowHeight * 0.40;

      let currentOpacity = 0;
      if (rect.top < start) {
        currentOpacity = (start - rect.top) / (start - end);
      }

      currentOpacity = Math.max(0, Math.min(1, currentOpacity));
      setOpacity(currentOpacity);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll(); // Initial run

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section id="about" className="py-24 md:py-32 px-6 w-full bg-white text-black flex items-center justify-center">
      <div className="max-w-5xl mx-auto text-center">
        <FadeIn>
          <div className="flex flex-col items-center gap-4 mb-10">
            <p className="text-sm font-bold tracking-widest uppercase text-neutral-600">Let's Connect</p>
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
        </FadeIn>

        <p
          ref={textRef}
          className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold leading-relaxed md:leading-[1.4] tracking-tight text-black transition-all duration-500 ease-out"
          style={{
            opacity: opacity,
            transform: `translateY(${(1 - opacity) * 15}px)`,
          }}
        >
          👋 Hello! I'm Mohammad Hilwan, —— a Fresh Graduate with a Diploma Degree (D3) in <span className="uppercase text-[#ff5500]">Informatics Engineering</span> from Universitas Logistik dan Bisnis Internasional, graduating with a Very Satisfactory distinction. I have experience in <span className="uppercase text-[#ff5500]">Full-Stack Web Development</span> and <span className="uppercase text-[#ff5500]">UI/UX Design</span>, particularly in designing and developing intuitive, responsive, and user-friendly web applications using user-centered design and design thinking approaches.
        </p>
      </div>
    </section>
  );
};

const Stats = () => {
  const statsData = [
    { label: "Projects Completed", value: 12, suffix: "+" },
    { label: "Happy Clients", value: 6, suffix: "+" },
    { label: "Years Experience", value: 1, suffix: "+" },
    { label: "Lighthouse Score", value: 99, suffix: "+" },
  ];

  return (
    <section className="py-16 px-6 w-full bg-neutral-50 border-y border-neutral-200">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
        {statsData.map((stat, index) => (
          <FadeIn key={index} delay={index * 150} className="flex flex-col items-center justify-center text-center py-6 md:py-0 px-4 group">
            <h3 className="text-5xl md:text-6xl font-bold text-[#ff5500] mb-3 tracking-tighter group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
            </h3>
            <p className="text-neutral-600 text-xs md:text-sm font-bold uppercase tracking-widest leading-relaxed max-w-[150px]">{stat.label}</p>
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
                className="bg-white border border-neutral-200/60 p-8 md:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:bg-[#ff5500] hover:border-[#ff5500] hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-neutral-100 group-hover:bg-white/20 flex items-center justify-center mb-8 transition-colors duration-300">
                  <spec.icon className="w-6 h-6 text-neutral-600 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-black group-hover:text-white mb-3 tracking-tight transition-colors duration-300">
                  {spec.title}
                </h3>
                <p className="text-neutral-500 group-hover:text-white/80 font-medium leading-relaxed transition-colors duration-300">
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
          <ProjectCard key={project.id} project={project} index={index} />
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
              <p className="text-[#cc4400] text-sm font-bold tracking-widest uppercase mb-3">Apa Kata Mereka</p>
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
      aria-label="Tanya AI Chatbot"
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
