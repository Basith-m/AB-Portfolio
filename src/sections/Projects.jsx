import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS } from '../constants';
import GlassPanel from '../components/ui/GlassPanel';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
        gsap.to('.reveal-project', {
        scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
        });

        // Only set up the sticky switcher on large screens
        if (window.innerWidth >= 1024) {
        PROJECTS.forEach((_, index) => {
            ScrollTrigger.create({
            trigger: `.project-trigger-${index}`,
            start: "top center",
            end: "bottom center",
            onToggle: (self) => self.isActive && setActiveProject(index),
            });
        });
        }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-32 bg-surface relative">
      <div className="max-w-container-max mx-auto px-gutter">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-xl reveal-project opacity-0 translate-y-5">
            <h2 className="text-4xl md:text-5xl font-bold text-on-surface mb-4">Selected Projects</h2>
            <p className="text-on-surface-variant text-lg">A glimpse into some of the complex problems I've solved through code.</p>
          </div>
          <a href="#" className="text-secondary font-bold flex items-center gap-2 reveal-project opacity-0 translate-y-5">
            View Archive <span className="material-symbols-outlined">trending_flat</span>
          </a>
        </div>

        {/* Desktop Sticky Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-16 items-start">
          {/* Left: Sticky Image Preview */}
          <div className="sticky top-[30vh] h-fit aspect-video rounded-[20px] overflow-hidden border border-outline/30 glass-panel shadow-2xl">
            <div className="relative h-full w-full bg-surface-dim">
              {PROJECTS.map((project, index) => (
                <img
                  key={project.id}
                  src={project.image}
                  alt={project.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                    activeProject === index ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: Scrollable Details */}
          <div className="space-y-[40vh] pb-[20vh]">
            {PROJECTS.map((project, index) => (
              <div key={project.id} className={`project-trigger-${index} reveal-project opacity-0 translate-y-10`}>
                <h3 className="text-4xl md:text-3xl font-bold text-on-surface mb-4">{project.title}</h3>
                <p className="text-secondary text-sm font-bold mb-4 uppercase tracking-widest">{project.category}</p>
                <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">{project.description}</p>
                
                {/* Tech Logos */}
                <div className="flex items-center -space-x-2 mb-10">
                  {project.tech.map((t, i) => (
                    <div 
                      key={i} 
                      title={t.name}
                      className="w-12 h-12 rounded-full border-1 border-outline bg-surface-dim flex items-center justify-center p-2.5 shadow-lg"
                      style={{ zIndex: 10 + i }}
                    >
                      <img src={t.icon} alt={t.name} className="w-full h-full object-contain" />
                    </div>
                  ))}
                </div>

                {(project.liveUrl !== "#" || project.githubUrl !== "#") && (
                    <div className="flex gap-4">
                        <a href={project.liveUrl} target='_blank' rel="noopener noreferrer" className="px-6 py-3 bg-surface-variant/50 border border-outline/30 rounded-xl flex items-center gap-2 hover:border-secondary/50 transition-all">
                            <span className="material-symbols-outlined text-xl">open_in_new</span> View
                        </a>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-surface-variant/50 border border-outline/30 rounded-xl flex items-center gap-2 hover:border-secondary/50 transition-all">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg> GitHub
                        </a>
                    </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout (Normal Cards) */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((project) => (
            <GlassPanel key={project.id} className="flex flex-col reveal-project opacity-0 translate-y-10">
            {/* Project Image */}
            <div className="aspect-video overflow-hidden">
                <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover" 
                />
            </div>

            {/* Content Area */}
            <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-bold mb-1 text-on-surface">{project.title}</h4>
                <p className="text-secondary text-xs font-bold mb-4 uppercase tracking-widest">
                {project.category}
                </p>

                {/* Technology Icons Stack (Mobile optimized size) */}
                <div className="flex items-center -space-x-2 mb-6">
                {project.tech.map((t, i) => (
                    <div 
                    key={i} 
                    className="w-10 h-10 rounded-full border-1 border-outline bg-surface-dim flex items-center justify-center p-2 shadow-lg"
                    style={{ zIndex: 10 + i }}
                    >
                    <img src={t.icon} alt={t.name} className="w-full h-full object-contain" />
                    </div>
                ))}
                </div>

                {/* Buttons (Mirrored from Desktop style) */}
                {(project.liveUrl !== "#" || project.githubUrl !== "#") && (
                    <div className="flex gap-3 mt-auto">
                        <a 
                            href={project.liveUrl} 
                            className="flex-1 px-4 py-2.5 bg-surface-variant/50 border border-outline/30 rounded-xl flex items-center justify-center gap-2 hover:border-secondary/50 transition-all text-sm"
                        >
                            <span className="material-symbols-outlined text-lg">open_in_new</span> 
                            View
                        </a>
                        <a 
                            href={project.githubUrl} 
                            className="flex-1 px-4 py-2.5 bg-surface-variant/50 border border-outline/30 rounded-xl flex items-center justify-center gap-2 hover:border-secondary/50 transition-all text-sm"
                        >
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                            </svg> 
                            GitHub
                        </a>
                    </div>
                )}
            </div>
            </GlassPanel>
        ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 pt-12 border-t border-outline/20 text-center reveal-project opacity-0 translate-y-10">
        <p className="text-on-surface-variant mb-8 max-w-2xl mx-auto">
            Want to see more? Explore more projects, contributions, and open-source work on GitHub.
        </p>
        <a 
            href="https://github.com/Basith-m" // Replace with your actual GitHub link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-surface-variant/50 border border-outline/30 rounded-xl font-bold hover:border-secondary hover:text-secondary transition-all group"
        >
            <svg 
            className="w-6 h-6 fill-current transition-colors" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
            >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            View more projects on GitHub
        </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;