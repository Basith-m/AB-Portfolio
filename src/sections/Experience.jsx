import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EXPERIENCE } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const ExperienceItem = ({ item }) => {
  return (
    <div className="relative pl-8 md:pl-12 pb-10 md:pb-12 last:pb-0 reveal-exp opacity-0">
      {/* Timeline Dot */}
      <div 
        className={`absolute -left-[10px] top-0 w-5 h-5 rounded-full bg-${item.color} border-4 border-surface z-10 shadow-[0_0_15px_rgba(76,215,246,0.3)]`} 
      />
      
      {/* Date */}
      <div className={`text-[12px] md:text-sm text-${item.color} font-bold mb-1 md:mb-2 uppercase tracking-widest font-mono`}>
        {item.period}
      </div>

      {/* Content Card */}
      <div className="group">
        <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2 text-on-surface group-hover:text-secondary transition-colors">
          {item.role}
        </h3>
        <div className="flex items-center gap-2 text-on-surface-variant text-base md:text-lg mb-4 md:mb-6">
          <span className="material-symbols-outlined text-base md:text-lg">business</span>
          <span className="font-medium">{item.company}</span>
        </div>

        <ul className="text-on-surface-variant space-y-3 md:space-y-4 text-base md:text-lg mb-6 md:mb-8">
          {item.description.map((point, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className={`text-${item.color} mt-1 md:mt-1.5 material-symbols-outlined !text-[18px] shrink-0`}>
                arrow_forward
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <span 
              key={tech} 
              className={`px-3 py-1 rounded-full bg-${item.color}/10 border border-${item.color}/20 text-${item.color} text-xs font-bold`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.reveal-exp', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.3,
        ease: 'power2.out',
      });

      // 2. Growing Line Animation
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 15%', // Starts growing when container hits top of viewport
            end: 'bottom 85%', // Stops when container bottom leaves
            scrub: 0.5, // Smoothly follows scroll
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-12 md:py-20 bg-surface-dim/50 overflow-hidden" id="experience" ref={sectionRef}>
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-on-surface reveal-exp">
                Professional Journey
            </h2>
            <div className="w-16 md:w-24 h-[2px] md:h-1 bg-secondary mx-auto mt-4 md:mt-6 reveal-exp"></div>
        </div>
        
        <div className="max-w-3xl mx-auto relative" ref={containerRef}>
          {/* Static Background Line */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-outline/20 origin-top" />
          
          {/* Animated "Growing" Line */}
          <div 
            ref={lineRef}
            className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-secondary to-primary origin-top z-0" 
            style={{ height: '100%' }} // Initial height full, but scaleY handles the "growth"
          />

          {/* Items */}
          <div className="relative z-10">
            {EXPERIENCE.map((item, index) => (
              <ExperienceItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;