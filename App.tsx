
import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Users, 
  Award, 
  ArrowRight, 
  Star, 
  MapPin, 
  CheckCircle, 
  Zap,
  Shield,
  Server,
  Clock,
  Key,
  PlayCircle,
  Send,
  X,
  Menu,
  ChevronUp
} from 'lucide-react';
import { Institution, Feature } from './types';

// --- Improved Scroll Reveal Hook ---
const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

// --- Telegram Invitation Popup ---
const TelegramPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-500"></div>
      <div className="relative bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in slide-in-from-top-4 duration-500 border border-blue-100">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="p-8 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-[#229ED9] rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg animate-bounce">
            <Send className="w-8 h-8 -rotate-12 translate-x-0.5 -translate-y-0.5" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Join our Community!</h3>
          <p className="text-slate-600 mb-8 px-4">Join 50,000+ students on Telegram for exclusive materials and support.</p>
          <div className="flex flex-col space-y-3 w-full">
            <a href="https://t.me/studypowerofficial" target="_blank" rel="noopener noreferrer" className="w-full bg-[#229ED9] text-white py-4 px-6 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 hover:bg-[#1c86ba] transition-all no-underline">
              <span>Join Now</span> <ArrowRight className="w-5 h-5" />
            </a>
            <button onClick={onClose} className="w-full py-3 px-6 text-slate-500 font-semibold hover:text-slate-800 transition-colors">Maybe later</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Access Popup Component ---
const AccessPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-500"></div>
      <div className="relative bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in slide-in-from-bottom-8 duration-500 border border-slate-100">
        <div className="p-8 md:p-10 flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mb-6 text-blue-600 group">
            <Key className="w-10 h-10 group-hover:rotate-12 transition-transform" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-2">Access Required</h2>
          <p className="text-slate-500 font-medium mb-8">Generate a temporary key to continue to NEXT TOPPERS</p>
          <div className="grid grid-cols-2 gap-4 w-full mb-8">
            <div className="bg-slate-50 p-4 rounded-2xl flex flex-col items-center border border-slate-100">
              <Shield className="w-5 h-5 text-red-500 mb-2" />
              <span className="text-xs font-bold text-slate-700">Protected</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl flex flex-col items-center border border-slate-100">
              <Server className="w-5 h-5 text-green-500 mb-2" />
              <span className="text-xs font-bold text-slate-700">Dedicated</span>
            </div>
          </div>
          <div className="space-y-4 w-full">
            <a href="https://youtu.be/5nQhCNvzUlQ?si=JyhnHDGTHRdb8f31" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center space-x-2 py-4 px-6 rounded-2xl border-2 border-slate-100 text-slate-700 font-bold hover:bg-slate-50 transition-all no-underline">
              <PlayCircle className="w-6 h-6 text-blue-600" />
              <span>Watch Tutorial</span>
            </a>
            <a href="https://arolinks.com/9UdDC3" target="_blank" rel="noopener noreferrer" onClick={onClose} className="w-full bg-blue-600 text-white py-5 px-6 rounded-2xl font-black text-xl flex items-center justify-center space-x-3 hover:bg-blue-700 shadow-xl transition-all no-underline btn-shine">
              <Key className="w-6 h-6" />
              <span>Generate Key</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Institutions', href: '#institutions' },
    { name: 'Features', href: '#features' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'py-3 glass-effect shadow-md' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-10 h-10 bg-white rounded-lg overflow-hidden border border-slate-200 group-hover:scale-110 transition-transform">
                <img src="https://image2url.com/r2/bucket2/images/1766850601939-0dbf8c14-bd17-4a0e-9be0-0a9a34581864.jpeg" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-xl md:text-2xl font-bold tracking-tight text-slate-800">Study<span className="text-blue-600">Power</span></span>
            </div>
            <nav className="hidden md:flex space-x-8 font-bold text-slate-600">
              {navLinks.map(link => (
                <a key={link.name} href={link.href} className="hover:text-blue-600 transition-all">{link.name}</a>
              ))}
            </nav>
            <button onClick={() => setIsMenuOpen(true)} className="md:hidden p-2 text-slate-800">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-[101] md:hidden transition-all duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
        <div className={`absolute top-0 right-0 h-full w-[80%] bg-white shadow-2xl p-8 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center mb-10">
            <span className="text-2xl font-bold">Study<span className="text-blue-600">Power</span></span>
            <button onClick={() => setIsMenuOpen(false)}><X className="w-6 h-6" /></button>
          </div>
          <nav className="flex flex-col space-y-6">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-slate-800">{link.name}</a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

const FeatureCard: React.FC<{ feature: Feature; index: number }> = ({ feature, index }) => (
  <div className="reveal stagger-1 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group">
    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
      {React.cloneElement(feature.icon as React.ReactElement<any>, { className: "w-7 h-7" })}
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
    <p className="text-slate-500 leading-relaxed">{feature.description}</p>
  </div>
);

const InstitutionCard: React.FC<{ inst: Institution; onClick: () => void }> = ({ inst, onClick }) => (
  <div className="reveal w-full max-w-2xl px-4" onClick={onClick}>
    <div className="group relative cursor-pointer bg-[#0f172a] p-6 md:p-8 rounded-[2.5rem] border border-blue-900/30 shadow-2xl transition-all hover:scale-[1.02]">
      <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8">
        <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center overflow-hidden border border-slate-800">
          <img src={inst.image} alt={inst.name} className="w-full h-auto p-2" />
        </div>
        <div className="flex-grow text-center sm:text-left">
          <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-blue-400">{inst.name}</h3>
          <p className="text-slate-400 flex items-center justify-center sm:justify-start"><MapPin className="w-4 h-4 mr-2" /> {inst.location}</p>
        </div>
        <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
          <ArrowRight className="w-6 h-6 text-blue-500 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showTelegram, setShowTelegram] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useScrollReveal();

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    const timer = setTimeout(() => setShowTelegram(true), 5000);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const institutions: Institution[] = [
    { id: '1', name: 'NEXT TOPPERS', image: 'https://image2url.com/r2/bucket2/images/1766847418219-b72a0d7e-3d81-4df5-957f-fd5d79fb9f57.png', location: 'India', rating: 5.0 }
  ];

  const features: Feature[] = [
    { title: 'Global Certifications', description: 'Recognized by top institutions.', icon: <Award /> },
    { title: 'Interactive Learning', description: 'Real-time collaborative study.', icon: <BookOpen /> },
    { title: 'Expert Guidance', description: 'Direct mentorship paths.', icon: <Users /> },
    { title: 'Modern Adaptive Tech', description: 'AI-driven learning tools.', icon: <Zap /> }
  ];

  return (
    <div className={`min-h-screen relative ${showPopup || showTelegram ? 'overflow-hidden' : ''}`}>
      {showPopup && <AccessPopup onClose={() => setShowPopup(false)} />}
      {showTelegram && <TelegramPopup onClose={() => setShowTelegram(false)} />}
      <Header />
      <main className={`transition-all duration-700 ${showPopup || showTelegram ? 'blur-lg grayscale opacity-50 pointer-events-none' : ''}`}>
        
        {/* Hero Section */}
        <section id="hero" className="pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="text-center lg:text-left space-y-8">
                <div className="reveal-left">
                  <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-slate-900 leading-none tracking-tighter uppercase mb-6">
                    EMPOWER YOUR <span className="gradient-text">FUTURE STUDY</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-slate-500 font-bold max-w-xl mx-auto lg:mx-0">Free batches and premium materials for everyone.</p>
                </div>
                <div className="reveal-left stagger-1 flex flex-col items-center lg:items-start space-y-8">
                  <button onClick={() => document.getElementById('institutions')?.scrollIntoView({ behavior: 'smooth' })} className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-xl hover:bg-blue-700 shadow-xl transition-all btn-shine">
                    Explore Courses
                  </button>
                  {/* Requested New Image below button */}
                  <div className="reveal stagger-2 max-w-xs md:max-w-md w-full">
                    <img src="https://image2url.com/r2/bucket2/images/1766848831959-f2e38353-54b8-4da2-80d4-31b0f648cf61.jpg" alt="Explore Promotion" className="w-full h-auto rounded-3xl shadow-lg border border-slate-100" />
                  </div>
                </div>
              </div>
              <div className="reveal-right hidden lg:block">
                <img src="https://images.unsplash.com/photo-1523050335192-ce11558cd97d?auto=format&fit=crop&q=80&w=1000" className="rounded-[4rem] shadow-2xl animate-float" alt="Hero" />
              </div>
            </div>
          </div>
        </section>

        {/* Institutions */}
        <section id="institutions" className="py-24 md:py-40 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-7xl font-black uppercase mb-16 reveal">Partner Institution</h2>
            <div className="flex justify-center">
              {institutions.map(inst => <InstitutionCard key={inst.id} inst={inst} onClick={() => setShowPopup(true)} />)}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="py-24 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((f, i) => <FeatureCard key={i} feature={f} index={i} />)}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="bg-[#0a0f1d] text-slate-500 py-24 text-center md:text-left">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16">
            <div className="space-y-6">
               <div className="flex items-center space-x-3 justify-center md:justify-start">
                  <img src="https://image2url.com/r2/bucket2/images/1766850601939-0dbf8c14-bd17-4a0e-9be0-0a9a34581864.jpeg" className="w-10 h-10 rounded-lg" alt="Footer Logo" />
                  <span className="text-2xl font-bold text-white">StudyPower</span>
               </div>
               <p>Empowering global education for everyone.</p>
            </div>
            <div>
               <h4 className="text-white font-bold mb-6">Contact</h4>
               <p>support@studypower.com</p>
            </div>
            <div className="flex space-x-4 justify-center md:justify-start">
               <a href="https://t.me/studypowerofficial" className="text-white p-3 bg-slate-800 rounded-xl hover:bg-blue-600 transition-all"><Send /></a>
            </div>
          </div>
        </footer>

        {showScrollTop && (
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-10 right-10 w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-2xl transition-all hover:scale-110">
            <ChevronUp />
          </button>
        )}
      </main>
    </div>
  );
};

export default App;
