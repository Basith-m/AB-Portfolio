import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../../constants';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = 'hero';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        // 150px offset to trigger the change slightly before reaching the section
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute('id');
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-[100] bg-surface/60 backdrop-blur-md border-b border-on-surface/10 shadow-sm">
      <div className="flex justify-between items-center px-gutter py-3 md:py-4 max-w-container-max mx-auto">
        <a className="text-xl md:text-2xl font-bold text-primary" href="#hero">
          AB<span className="text-secondary">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xs lg:text-sm transition-colors duration-300 ${
                activeSection === link.href.replace('#', '')
                  ? 'text-primary font-bold border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          className="px-5 py-2 md:px-6 md:py-2.5 text-xs md:text-sm bg-primary text-surface-dim rounded-lg hover:opacity-80 transition-all scale-95 active:scale-90"
          href="#resume"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;