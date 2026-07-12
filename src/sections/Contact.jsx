import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { PERSONAL_INFO } from '../constants';
import GlassPanel from '../components/ui/GlassPanel';
import emailjs from '@emailjs/browser';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.reveal-contact', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message
    };

    try {
        await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
        
    } catch (error) {
        console.error('FAILED...', error);
        setStatus('idle');
        alert("Something went wrong. Please try again.");
    }
  };

const contactItems = [
  { 
    label: 'Email Me', 
    value: PERSONAL_INFO.email, 
    href: `mailto:${PERSONAL_INFO.email}`,
    icon: 'mail', 
    color: 'primary' 
  },
  { 
    label: 'Location', 
    value: PERSONAL_INFO.location, 
    href: null,
    icon: 'location_on', 
    color: 'secondary' 
  },
  { 
    label: 'Phone', 
    value: PERSONAL_INFO.phone, 
    href: `tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`,
    icon: 'call', 
    color: 'secondary' 
  },
];

  return (
    <section ref={sectionRef} className="py-12 md:py-20 bg-surface-dim/50" id="contact">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
          
          {/* Left Column: Info */}
          <div className="reveal-contact opacity-0 translate-y-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">
              Let's build something <span className="gradient-text">exceptional</span> together.
            </h2>
            <p className="text-on-surface-variant text-base md:text-lg leading-relaxed mb-8 md:mb-12">
              I'm currently available for freelance projects or full-time opportunities. 
              If you have a project that needs a technical touch, let's talk.
            </p>
            
            <div className="space-y-6 md:space-y-8">
              {contactItems.map((item) => (
                <div key={item.label} className="flex items-start gap-4 md:gap-6">
                  <div className={`w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-xl md:rounded-2xl bg-${item.color}/10 flex items-center justify-center text-${item.color}`}>
                    <span className="material-symbols-outlined !text-2xl md:!text-3xl">{item.icon}</span>
                  </div>
                  <div>
                    <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-on-surface-variant">{item.label}</div>
                     {item.href ? (
                        <a 
                            href={item.href} 
                            className="text-base md:text-lg break-all font-bold text-on-surface hover:text-secondary transition-colors"
                        >
                            {item.value}
                        </a>
                        ) : (
                        <div className="text-base md:text-lg break-all font-bold text-on-surface">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <GlassPanel className="p-6 md:p-12 reveal-contact opacity-0 translate-y-10 shadow-2xl shadow-primary/5">
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] ml-1">Full Name</label>
                  <input 
                    required
                    type="text"
                    placeholder="Abdul Basith"
                    className="w-full bg-surface-variant/30 border border-outline/10 focus:border-secondary/50 focus:ring-0 transition-all rounded-xl p-3.5 md:p-4 text-on-surface text-sm md:text-base outline-none placeholder:text-on-surface-variant/30"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] ml-1">Email Address</label>
                  <input 
                    required
                    type="email"
                    placeholder="abdul@example.com"
                    className="w-full bg-surface-variant/30 border border-outline/10 focus:border-secondary/50 focus:ring-0 transition-all rounded-xl p-3.5 md:p-4 text-on-surface text-sm md:text-base outline-none placeholder:text-on-surface-variant/30"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] ml-1">Your Message</label>
                <textarea 
                  required
                  rows="6"
                  placeholder="Tell me about your project..."
                  className="w-full bg-surface-variant/30 border border-outline/10 focus:border-secondary/50 focus:ring-0 transition-all rounded-xl p-3.5 md:p-4 text-on-surface text-sm md:text-base outline-none placeholder:text-on-surface-variant/30"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              
              <button 
                type="submit"
                disabled={status !== 'idle'}
                className="w-full py-3.5 md:py-4 bg-secondary/10 border border-secondary/30 text-secondary font-bold rounded-xl hover:bg-secondary/20 hover:border-secondary/60 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group disabled:opacity-50"
              >
                <span className="tracking-widest uppercase text-sm">
                  {status === 'idle' && 'Send Message'}
                  {status === 'sending' && 'Sending...'}
                  {status === 'success' && 'Message Sent!'}
                </span>
                <span className={`material-symbols-outlined group-hover:translate-x-1 transition-transform ${status === 'success' ? 'hidden' : ''}`}>
                  send
                </span>
              </button>
            </form>
          </GlassPanel>

        </div>
      </div>
    </section>
  );
};

export default Contact;