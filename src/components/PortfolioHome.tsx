'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';
import { BackgroundPaths, AnimatedTitle } from '@/components/ui/background-paths';
import { Button } from '@/components/ui/button';
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

const FOCUS_AREAS = [
  { id: '#01', label: 'Web Development' },
  { id: '#02', label: 'Back-end & Database' },
  { id: '#03', label: 'Integrasi API' },
  { id: '#04', label: 'Arsitektur Skalabel' },
];

const CORE_STACK = [
  { icon: LayoutTemplate, name: 'Laravel' },
  { icon: Code2, name: 'Node.js' },
  { icon: Server, name: 'Next.js' },
  { icon: MonitorSmartphone, name: 'React' },
];

const Hero = () => {
  return (
    <section aria-label="Perkenalan Utama" className="w-full bg-[#0a0a0a]">
      <BackgroundPaths title="Full-Stack Web Developer">
        <div className="max-w-[1360px] mx-auto w-full px-5 sm:px-8 md:px-12 pt-24 sm:pt-28 md:pt-36 pb-8 sm:pb-12 flex-1 flex flex-col justify-between gap-12">
          {/* Editorial Main Stage */}
          <div className="my-auto w-full grid grid-cols-1 lg:grid-cols-12 items-start lg:items-end gap-8 lg:gap-12">
            <div className="lg:col-span-7 xl:col-span-8">
              <p className="font-mono text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-neutral-300 mb-3 sm:mb-5">
                Halo, Saya Mohammad Hilwan<span className="text-[#ff5500]">.</span>
              </p>
              <AnimatedTitle
                title="Full-Stack Web Developer"
                className="text-[2.5rem] sm:text-6xl md:text-7xl xl:text-[5.5rem] font-bold tracking-tighter leading-[0.95]"
              />
            </div>

            <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6 lg:pb-1">
              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
                Merancang dan membangun aplikasi web, sistem informasi manajemen, serta integrasi API yang terukur dengan Laravel, CodeIgniter, dan Next.js.
              </p>

              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3">
                <div className="group relative bg-gradient-to-b from-[#ff5500]/60 to-white/15 p-px rounded-2xl overflow-hidden shadow-lg">
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full sm:w-auto min-h-[52px] rounded-[calc(1rem-1px)] px-7 py-3.5 text-sm sm:text-base font-bold bg-[#141414] hover:bg-[#1c1c1c] text-white transition-all duration-300"
                  >
                    <a href="#projects">
                      <span>Lihat Karya Pilihan</span>
                      <span
                        aria-hidden="true"
                        className="ml-2.5 text-[#ff7733] group-hover:translate-x-1 transition-transform duration-300"
                      >
                        →
                      </span>
                    </a>
                  </Button>
                </div>

                <a
                  href="/CV-ATS-Mohammad-Hilwan.pdf"
                  download="CV-ATS-Mohammad-Hilwan.pdf"
                  className="min-h-[52px] px-6 py-3.5 rounded-2xl border border-white/15 bg-white/[0.04] hover:bg-white/[0.09] text-white text-sm sm:text-base font-semibold inline-flex items-center justify-center gap-2.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5500]"
                >
                  <Download className="w-4 h-4 text-[#ff7733]" />
                  <span>CV</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Discipline & Stack Bar */}
          <div className="w-full border-t border-white/10 pt-6 sm:pt-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 flex-1">
              {FOCUS_AREAS.map((area) => (
                <div key={area.id}>
                  <p className="font-mono text-[#ff7733] text-xs font-bold mb-1 tracking-widest">
                    {area.id}
                  </p>
                  <p className="text-neutral-200 text-xs sm:text-sm font-medium">
                    {area.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-8">
              <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 w-full sm:w-auto">
                Stack Utama:
              </span>
              {CORE_STACK.map((tech) => (
                <span
                  key={tech.name}
                  className="text-neutral-200 font-semibold text-sm flex items-center gap-2"
                >
                  <tech.icon className="w-4 h-4 text-[#ff7733]" />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </BackgroundPaths>
    </section>
  );
};

const ABOUT_SEGMENTS: { text: string; highlight?: boolean }[] = [
  { text: "Hello! I'm Mohammad Hilwan, a Fresh Graduate with a Diploma Degree (D3) in" },
  { text: "Informatics Engineering", highlight: true },
  { text: "from Universitas Logistik dan Bisnis Internasional, graduating with a Very Satisfactory distinction. I have experience in" },
  { text: "Full-Stack Web Development", highlight: true },
  { text: "and" },
  { text: "UI/UX Design,", highlight: true },
  { text: "particularly in designing and developing intuitive, responsive, and user-friendly web applications using user-centered design and design thinking approaches." },
];

const ABOUT_WORDS = ABOUT_SEGMENTS.flatMap((seg) =>
  seg.text.split(' ').map((word) => ({ word, highlight: seg.highlight }))
);

const AboutMe = () => {
  const pRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const updateLines = () => {
      const container = pRef.current;
      if (!container) return;

      const pTop = container.getBoundingClientRect().top;
      const vh = window.innerHeight;
      const start = vh * 0.88;
      const end = vh * 0.68;
      const range = start - end;

      const spans = container.querySelectorAll<HTMLSpanElement>('[data-line-word]');
      spans.forEach((span) => {
        // Words on the same rendered line share the exact same offsetTop
        const lineTop = pTop + span.offsetTop;
        const progress = Math.max(0, Math.min(1, (start - lineTop) / range));
        span.style.opacity = String(progress);
        span.style.transform = `translateY(${(1 - progress) * 16}px)`;
      });
    };

    window.addEventListener('scroll', updateLines, { passive: true });
    window.addEventListener('resize', updateLines, { passive: true });
    updateLines();

    return () => {
      window.removeEventListener('scroll', updateLines);
      window.removeEventListener('resize', updateLines);
    };
  }, []);

  return (
    <section id="about" className="py-24 md:py-32 px-6 w-full bg-white text-black flex items-center justify-center">
      <div className="max-w-5xl mx-auto text-center">
        <FadeIn>
          <div className="flex flex-col items-center gap-4 mb-12">
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
          ref={pRef}
          className="relative text-2xl md:text-3xl lg:text-[2.5rem] font-bold leading-relaxed md:leading-[1.4] tracking-tight text-black"
        >
          {ABOUT_WORDS.map((item, idx) => (
            <span
              key={idx}
              data-line-word
              style={{ opacity: 0, transform: 'translateY(16px)' }}
              className={`inline-block mr-[0.28em] transition-[opacity,transform] duration-100 ease-out will-change-[opacity,transform] ${
                item.highlight ? 'uppercase text-[#c23b00]' : ''
              }`}
            >
              {item.word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};

const Stats = () => {
  const statsData = [
    { label: "Projects Completed", value: 18, suffix: "+" },
    { label: "Happy Clients", value: 7, suffix: "+" },
    { label: "Years Experience", value: 1, suffix: "+" },
    { label: "Lighthouse Score", value: 99, suffix: "+" },
  ];

  return (
    <section className="py-16 px-6 w-full bg-[#ff5500]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {statsData.map((stat, index) => (
          <FadeIn key={index} delay={index * 150} className="flex flex-col items-center justify-center text-center py-6 md:py-0 px-4 group">
            <h3 className="text-5xl md:text-6xl font-bold text-white mb-3 tracking-tighter group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
            </h3>
            <p className="text-white/90 text-xs md:text-sm font-bold uppercase tracking-widest leading-relaxed max-w-[150px]">{stat.label}</p>
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
    </div>
  );
}
