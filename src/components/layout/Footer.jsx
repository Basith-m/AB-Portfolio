import { PERSONAL_INFO, SOCIAL_LINKS } from '../../constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-dim border-t border-outline-variant py-10 md:py-12">
      <div className="flex flex-col md:flex-row justify-between items-center px-gutter max-w-container-max mx-auto font-mono text-sm">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <a className="text-xl md:text-2xl font-bold text-primary mb-2 block" href="#hero">
            AB<span className="text-secondary">.</span>
          </a>
          <p className="text-on-surface-variant text-xs md:text-sm">
            © {currentYear} {PERSONAL_INFO.name}. Built with technical precision.
          </p>
        </div>
        
        <div className="flex items-center gap-6 md:gap-8">
          {SOCIAL_LINKS.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant text-[10px] md:text-xs hover:text-secondary transition-colors uppercase tracking-widest font-bold"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;