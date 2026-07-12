import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import GlassPanel from '../components/ui/GlassPanel';
import {PERSONAL_INFO} from '../constants';

const ROLES = ["Frontend Developer", "Full Stack Engineer", "Solution Architect", "Problem Solver"];

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const sectionRef = useRef(null);

  // 1. GSAP Reveal Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.reveal', {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  // 2. Typing Effect Logic
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section ref={sectionRef} id="hero" className="min-h-[90vh] flex items-center px-gutter max-w-container-max mx-auto py-12 md:py-20 lg:flex-row">
      <div className="max-w-3xl">
        <div className="font-mono text-secondary text-[12px] md:text-sm mb-2 md:mb-4 tracking-wider reveal">WELCOME TO MY DIGITAL SPACE</div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-on-surface mb-4 md:mb-6 leading-tight reveal">
          Hi, I'm <span className="gradient-text">Abdul Basith.M</span>
        </h1>
        <div className="h-6 md:h-8 mb-6 md:mb-8 reveal">
          <span className="text-lg md:text-2xl text-on-surface-variant font-mono">
            {displayText}
            <span className="w-2 h-6 bg-secondary inline-block ml-1 animate-pulse" />
          </span>
        </div>
        <p className="text-on-surface-variant text-base md:text-lg max-w-2xl leading-relaxed mb-8 md:mb-12 reveal">
          Crafting modern, scalable, and user-centric web applications with technical precision and architectural elegance.
        </p>
        <div className="flex flex-wrap gap-4 reveal">
          <a href="#projects" className="px-6 py-3 md:px-8 md:py-4 bg-secondary text-sm md:text-base text-surface-dim font-bold rounded-xl hover:brightness-110 transition-all flex items-center gap-2">
            View My Work <span className="material-symbols-outlined">arrow_downward</span>
          </a>
          <a href="#contact" className="px-6 py-3 md:px-8 md:py-4 border border-outline text-sm md:text-base hover:border-secondary hover:text-secondary transition-all rounded-xl flex items-center gap-2">
            Let's Connect
          </a>
        </div>
      </div>

      {/* Terminal Display */}
      <div className="hidden lg:block w-1/2 pl-12 reveal">
        <GlassPanel>
          <div className="bg-surface-variant/50 px-4 py-3 border-b border-outline/30 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="mx-auto text-xs font-mono text-on-surface-variant opacity-60">about_me.json</div>
          </div>
          <div className="p-6 font-mono text-sm leading-relaxed">
                <div className="flex gap-4">
                    <span className="text-on-surface-variant opacity-40">1</span>
                    <span className="text-primary">{'{'}</span>
                </div>
                <div className="flex gap-4">
                    <span className="text-on-surface-variant opacity-40">2</span>
                    <span className="ml-4">
                    <span className="text-secondary">"name"</span>: <span className="text-primary">{PERSONAL_INFO.name}</span>,
                    </span>
                </div>
                <div className="flex gap-4">
                    <span className="text-on-surface-variant opacity-40">3</span>
                    <span className="ml-4">
                    <span className="text-secondary">"role"</span>: <span className="text-primary">{PERSONAL_INFO.role}</span>,
                    </span>
                </div>
                <div className="flex gap-4">
                    <span className="text-on-surface-variant opacity-40">4</span>
                    <span className="ml-4">
                    <span className="text-secondary">"experience"</span>: <span className="text-primary">{PERSONAL_INFO.experience}</span>,
                    </span>
                </div>
                <div className="flex gap-4">
                    <span className="text-on-surface-variant opacity-40">5</span>
                    <span className="ml-4">
                    <span className="text-secondary">"status"</span>: <span className="text-primary">"Building digital experiences..."</span>
                    </span>
                </div>
                <div className="flex gap-4">
                    <span className="text-on-surface-variant opacity-40">6</span>
                    <span className="text-primary">{'}'}</span>
                </div>
                
                <div className="mt-4 flex items-center gap-2">
                    <span className="text-secondary">$</span>
                    <span className="w-2 h-4 bg-secondary animate-pulse" />
                </div>
            </div>
        </GlassPanel>
      </div>
    </section>
  );
};

export default Hero;