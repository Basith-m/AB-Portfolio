import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FeatureCard from '../components/ui/FeatureCard';
import TechBadge from '../components/ui/TechBadge';
import { STATS, TECH_STACK } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.reveal-about', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      {/* Part 1: Performance Focused */}
      <section className="py-32 bg-surface-dim/50" id="about">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 reveal-about opacity-0 translate-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                Performance First
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-on-surface mb-8 leading-tight">
                Passionate about <span className="text-primary">Performance</span>
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
                With over 2 years of professional experience, I specialize in building highly responsive web applications.
              </p>
              
              <div className="grid grid-cols-3 gap-4 md:gap-8 mt-10">
                {STATS.map((stat) => (
                  <div key={stat.label} className="text-center md:text-left">
                    <div className="text-secondary text-3xl md:text-4xl font-bold font-mono">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-widest text-on-surface-variant mt-2 font-bold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2 reveal-about opacity-0 translate-y-5">
              <div className="relative p-8 md:p-12 bg-surface-variant/30 rounded-[40px] border border-outline/30 overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/10 blur-[100px] rounded-full" />
                
                <div className="grid grid-cols-2 gap-6 relative z-10">
                  <FeatureCard icon="speed" title="Fast Delivery" color="secondary" />
                  <FeatureCard icon="architecture" title="Clean Code" color="primary" />
                  <FeatureCard icon="devices" title="Responsive" color="primary" />
                  <FeatureCard icon="groups" title="User Centric" color="secondary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 2: Detailed About Me */}
      <section className="py-32 bg-surface relative overflow-hidden" id="about-me">
        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          <div className="text-center mb-16 reveal-about opacity-0 translate-y-5">
            <div className="text-secondary font-mono text-sm tracking-[0.3em] uppercase mb-4">About</div>
            <h2 className="text-4xl md:text-6xl font-bold text-on-surface">About Me</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6" />
          </div>

          <div className="max-w-4xl mx-auto reveal-about opacity-0 translate-y-5">
            <div className="glass-panel p-8 md:p-16 rounded-[40px] border-outline/50 shadow-2xl">
              <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed text-center mb-12">
                I'm a software developer with <span className="text-secondary font-bold">2+ years</span> of experience, 
                specializing in building scalable, enterprise-grade web applications.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                {TECH_STACK.map((tech) => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;