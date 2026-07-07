import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FeatureCard from '../components/ui/FeatureCard';
import TechBadge from '../components/ui/TechBadge';
import { STATS, TECH_STACK, ABOUT_TEXT } from '../constants';

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
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      {/* Part 1: Performance Focus */}
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
                {ABOUT_TEXT.mainBio}
              </p>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
                {ABOUT_TEXT.subBio}
              </p>
              
              {/* Refactored Stats with Icons */}
              <div className="grid grid-cols-3 gap-4 md:gap-8 mt-10">
                {STATS.map((stat) => (
                  <div key={stat.label} className="text-center md:text-left">
                    <div className={`w-10 h-10 rounded-lg bg-${stat.color}/10 flex items-center justify-center text-${stat.color} mb-3 mx-auto md:mx-0`}>
                      <span className="material-symbols-outlined text-2xl">{stat.icon}</span>
                    </div>
                    <div className={`text-${stat.color} text-2xl md:text-3xl font-bold font-mono`}>
                      {stat.value}
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-on-surface-variant mt-2 font-bold">
                      {stat.label}
                    </div>
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

      {/* Part 2: Detailed About Me & Stack */}
      <section className="py-32 bg-surface relative overflow-hidden" id="about-me">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #8b949e 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="max-w-container-max mx-auto px-gutter relative z-10">
          <div className="text-center mb-16 reveal-about opacity-0 translate-y-5">
            <div className="text-secondary font-mono text-sm tracking-[0.3em] uppercase mb-4">About</div>
            <h2 className="text-4xl md:text-6xl font-bold text-on-surface">About Me</h2>
            <div className="w-24 h-1 bg-secondary mx-auto mt-6" />
          </div>

          <div className="max-w-4xl mx-auto reveal-about opacity-0 translate-y-5">
            <div className="glass-panel p-8 md:p-16 rounded-[40px] border-outline/50 shadow-2xl">
              <div className="space-y-8 text-on-surface-variant text-lg md:text-xl leading-relaxed text-center">
                <p>{ABOUT_TEXT.detailedBioPrimary}</p>
                <p>{ABOUT_TEXT.detailedBioSecondary}</p>
              </div>

              {/* Technologies Section */}
              <div className="mt-16 pt-12 border-t border-outline/30">
                <div className="text-center mb-10">
                  <h3 className="text-xl font-bold text-on-surface mb-2">Technologies I Work With</h3>
                  <div className="w-12 h-0.5 bg-secondary mx-auto" />
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  {TECH_STACK.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>
              </div>
              {/* Detailed stats grid removed as per requirement */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;