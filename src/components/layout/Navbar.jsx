import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { NAV_LINKS } from '../../constants';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolid, setIsSolid] = useState(false); 
  const menuRef = useRef(null);
  const linkRef = useRef([]);

  // Scroll Spy logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let current = 'hero';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) current = section.getAttribute('id');
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
  if (!isMenuOpen) {
    setIsMenuOpen(true);
    setIsSolid(true);
  } else {
    setIsMenuOpen(false);
  }
};

  // Hybrid Animation: Fade-In Opening + Shutter-Up Closing
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      
      // THE PERFECT OPENING (Fade + Drop)
      gsap.to(menuRef.current, {
        y: 0,
        yPercent: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power4.out",
        pointerEvents: "auto"
      });

      gsap.fromTo(linkRef.current, 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, delay: 0.2, ease: "power2.out" }
      );
    } else {
      document.body.style.overflow = 'unset';
      
      // FADE LINKS FIRST
      gsap.to(linkRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.2,
        stagger: 0.02,
        ease: "power2.in"
      });

      // THE SHUTTER CLOSING (Slide Up)
      gsap.to(menuRef.current, {
        yPercent: -100,
        duration: 0.6,
        delay: 0.1,
        ease: "expo.inOut",
        onComplete: () => {
          setIsSolid(false);
          // RESET: Secretly move it back to top position for the next fade-in
          gsap.set(menuRef.current, { y: -20, yPercent: 0, opacity: 0 });
        }
      });
    }
  }, [isMenuOpen]);

  return (
    <nav className={`fixed top-0 w-full z-[999] border-b border-on-surface/10 transition-colors duration-500 ${
      isSolid ? 'bg-surface' : 'bg-surface/60 backdrop-blur-md shadow-sm'
    }`}>
      <div className="flex justify-between items-center px-gutter py-3 md:py-4 max-w-container-max mx-auto relative z-[1001]">
        
        <a className="text-xl md:text-2xl font-bold text-primary" href="#hero" onClick={() => setIsMenuOpen(false)}>
          AB<span className="text-secondary">.</span>
        </a>

        {/* Desktop Links */}
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

        <div className="flex items-center gap-5">
          <a
            className="px-5 py-2 md:px-6 md:py-2.5 text-xs md:text-sm bg-primary text-surface-dim font-semibold rounded-lg md:rounded-xl hover:opacity-80 transition-all scale-95 active:scale-90"
            href="/resume.pdf"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Resume
          </a>

          {/* Custom Animated Hamburger */}
          <button 
            className="md:hidden flex flex-col gap-1.5 z-[1001] p-2"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <div className={`w-6 h-0.5 bg-on-surface transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 bg-on-surface transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <div className={`w-6 h-0.5 bg-on-surface transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        ref={menuRef}
        className="fixed inset-0 bg-surface z-[990] md:hidden flex flex-col items-center justify-center gap-6 opacity-0 pointer-events-none translate-y-[-20px]"
      >
        {NAV_LINKS.map((link, index) => (
          <a
            key={link.name}
            ref={el => linkRef.current[index] = el}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            className={`text-lg font-semibold tracking-[0.2em] uppercase transition-colors ${
              activeSection === link.href.replace('#', '')
                ? 'text-primary'
                : 'text-on-surface-variant'
            }`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;