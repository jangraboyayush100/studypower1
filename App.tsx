
import React, { useState, useEffect, useRef } from 'react';
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

// --- Ad Banner Component ---
const AdBanner: React.FC = () => {
  const adContainerRef = useRef<HTMLDivElement>(null);
  const videoAdRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inject the new VAST video ad loader as requested
    if (videoAdRef.current && videoAdRef.current.children.length === 0) {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://js.onclckmn.com/static/onclicka.js';
      // New ad parameters provided by user
      script.setAttribute('data-admpid', '407131');
      script.setAttribute('data-admvast', 'https://bid.onclckstr.com/vast?spot_id=6104233');
      videoAdRef.current.appendChild(script);
    }

    // Inject the specific banner ad into its container
    if (adContainerRef.current && adContainerRef.current.children.length === 0) {
      const configScript = document.createElement('script');
      configScript.innerHTML = `
        atOptions = {
          'key' : '2ae0f34e51b7916a57aeff0ec06cfd8f',
          'format' : 'iframe',
          'height' : 90,
          'width' : 728,
          'params' : {}
        };
      `;
      
      const invokeScript = document.createElement('script');
      invokeScript.type = 'text/javascript';
      invokeScript.src = 'https://www.highperformanceformat.com/2ae0f34e51b7916a57aeff0ec06cfd8f/invoke.js';
      
      adContainerRef.current.appendChild(configScript);
      adContainerRef.current.appendChild(invokeScript);
    }
  }, []);

  return (
    <aside className="reveal stagger-3 w-full flex flex-col items-center mt-12 mb-4 overflow-hidden">
      {/* Updated Video Ad Placement */}
      <div ref={videoAdRef} className="w-full flex justify-center mb-6 min-h-[50px]">
        {/* VAST Video Ad 6104233 will render here */}
      </div>

      <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-2">Advertisement</span>
      <div ref={adContainerRef} className="min-h-[90px] w-full max-w-[728px] flex justify-center bg-slate-50/50 rounded-xl overflow-hidden"></div>
    </aside>
  );
};

// --- Telegram Invitation Popup ---
const TelegramPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-500"></div>
      <div className="relative bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in slide-in-from-top-4 duration-500 border border-blue-100">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all">
          <X className="w-5 h-5" />
        </button>
        <div className="p-8 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-[#229ED9] rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg animate-bounce">
            <Send className="w-8 h-8 -rotate-12 translate-x-0.5 -translate-y-0.5" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Join Our Study Community</h3>
          <p className="text-slate-600 mb-8 px-4">Get daily updates on free batches and premium materials for board exams and competitive coaching.</p>
          <div className="flex flex-col space-y-3 w-full">
            <a href="https://t.me/studyendofficial" target="_blank" rel="noopener noreferrer" className="w-full bg-[#229ED9] text-white py-4 px-6 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 hover:bg-[#1c86ba] transition-all no-underline">
              <span>Join Telegram Now</span> <ArrowRight className="w-5 h-5" />
            </a>
            <button onClick={onClose} className="w-full py-3 px-6 text-slate-500 font-semibold hover:text-slate-800 transition-colors">Maybe later</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Access Popup Component ---
const AccessPopup: React.FC<{ onClose: () => void; institutionName?: string; keyUrl?: string }> = ({ onClose, institutionName, keyUrl }) => {
  const finalKeyUrl = keyUrl || 'https://arolinks.com/9UdDC3';
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-500"></div>
      <div className="relative bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in slide-in-from-bottom-8 duration-500 border border-slate-100">
        <div className="p-8 md:p-10 flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mb-6 text-blue-600 group">
            <Key className="w-10 h-10 group-hover:rotate-12 transition-transform" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-2">Access Premium Content</h2>
          <p className="text-slate-500 font-medium mb-8">Generate a key to unlock premium materials for {institutionName || 'your studies'}.</p>
          <div className="grid grid-cols-2 gap-4 w-full mb-8">
            <div className="bg-slate-50 p-4 rounded-2xl flex flex-col items-center border border-slate-100">
              <Shield className="w-5 h-5 text-red-500 mb-2" />
              <span className="text-xs font-bold text-slate-700">Safe Access</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl flex flex-col items-center border border-slate-100">
              <Server className="w-5 h-5 text-green-500 mb-2" />
              <span className="text-xs font-bold text-slate-700">Fast Servers</span>
            </div>
          </div>
          <div className="space-y-4 w-full">
            <a href="https://youtu.be/5nQhCNvzUlQ?si=JyhnHDGTHRdb8f31" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center space-x-2 py-4 px-6 rounded-2xl border-2 border-slate-100 text-slate-700 font-bold hover:bg-slate-50 transition-all no-underline">
              <PlayCircle className="w-6 h-6 text-blue-600" />
              <span>Tutorial Guide</span>
            </a>
            <a href={finalKeyUrl} target="_blank" rel="noopener noreferrer" onClick={onClose} className="w-full bg-blue-600 text-white py-5 px-6 rounded-2xl font-black text-xl flex items-center justify-center space-x-3 hover:bg-blue-700 shadow-xl transition-all no-underline btn-shine">
              <Key className="w-6 h-6" />
              <span>Get Access Key</span>
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
    { name: 'Home', href: '#institutions' },
    { name: 'Free Batches', href: '#institutions' },
    { name: 'Features', href: '#institutions' }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'py-3 glass-effect shadow-md' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-10 h-10 bg-white rounded-lg overflow-hidden border border-slate-200 group-hover:scale-110 transition-transform">
                <img src="https://image2url.com/r2/bucket3/images/1766856611788-b73eb973-25d0-4dcf-82e4-0578778f7cf3.jpeg" alt="Study End Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-xl md:text-2xl font-bold tracking-tight text-slate-800">Study<span className="text-blue-600">End</span></span>
            </div>
            <nav className="hidden md:flex space-x-8 font-bold text-slate-600">
              {navLinks.map(link => (
                <a key={link.name} href={link.href} className="hover:text-blue-600 transition-all">{link.name}</a>
              ))}
            </nav>
            <button onClick={() => setIsMenuOpen(true)} className="md:hidden p-2 text-slate-800" aria-label="Open Menu">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>
      <div className={`fixed inset-0 z-[101] md:hidden transition-all duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
        <nav className={`absolute top-0 right-0 h-full w-[80%] bg-white shadow-2xl p-8 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center mb-10">
            <span className="text-2xl font-bold">Study<span className="text-blue-600">End</span></span>
            <button onClick={() => setIsMenuOpen(false)}><X className="w-6 h-6" /></button>
          </div>
          <div className="flex flex-col space-y-6">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-slate-800">{link.name}</a>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};

const App: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedInst, setSelectedInst] = useState<string | undefined>();
  const [selectedKeyUrl, setSelectedKeyUrl] = useState<string | undefined>();
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
    { 
      id: '1', 
      name: 'NEXT TOPPERS', 
      image: 'https://image2url.com/r2/bucket2/images/1766847418219-b72a0d7e-3d81-4df5-957f-fd5d79fb9f57.png', 
      location: 'India', 
      rating: 5.0,
      keyUrl: 'https://arolinks.com/9UdDC3'
    },
    { 
      id: '2', 
      name: 'PadhLeak AI', 
      image: 'https://image2url.com/r2/bucket3/images/1766891300283-73e45d54-416b-4f42-b802-a95f1f76ada6.jpg', 
      location: 'India', 
      rating: 5.0,
      keyUrl: 'https://arolinks.com/iYuPfU'
    }
  ];

  const handleInstClick = (inst: Institution) => {
    setSelectedInst(inst.name);
    setSelectedKeyUrl(inst.keyUrl);
    setShowPopup(true);
  };

  const features: Feature[] = [
    { title: 'IIT JEE NEET Materials', description: 'Free elite study materials for competitive exams.', icon: <Award /> },
    { title: 'Interactive Learning', description: 'Modern adaptive technology for better results.', icon: <BookOpen /> },
    { title: 'Expert Guidance', description: 'Mentorship paths from top educators.', icon: <Users /> },
    { title: 'PadhLeak AI Assistant', description: 'AI-driven learning tools for every student.', icon: <Zap /> }
  ];

  return (
    <div className={`min-h-screen relative ${showPopup || showTelegram ? 'overflow-hidden' : ''}`}>
      {showPopup && <AccessPopup onClose={() => setShowPopup(false)} institutionName={selectedInst} keyUrl={selectedKeyUrl} />}
      {showTelegram && <TelegramPopup onClose={() => setShowTelegram(false)} />}
      <Header />
      <main className={`transition-all duration-700 ${showPopup || showTelegram ? 'blur-lg grayscale opacity-50 pointer-events-none' : ''}`}>
        
        <section id="hero" className="pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="text-center lg:text-left space-y-8">
                <div className="reveal-left">
                  <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-slate-900 leading-none tracking-tighter uppercase mb-6">
                    FREE BATCHES <span className="gradient-text">STUDY MATERIALS</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-slate-500 font-bold max-w-xl mx-auto lg:mx-0">Empowering future toppers with free board and competitive materials.</p>
                </div>
                <div className="reveal-left stagger-1 flex flex-col items-center lg:items-start space-y-8">
                  <button onClick={() => document.getElementById('institutions')?.scrollIntoView({ behavior: 'smooth' })} className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-xl hover:bg-blue-700 shadow-xl transition-all btn-shine">
                    Get Free Materials
                  </button>
                  <div className="reveal stagger-2 max-w-xs md:max-w-md w-full">
                    <img src="https://image2url.com/r2/bucket2/images/1766848831959-f2e38353-54b8-4da2-80d4-31b0f648cf61.jpg" alt="Free Educational Batch Promotion" className="w-full h-auto rounded-3xl shadow-lg border border-slate-100" />
                  </div>
                </div>
              </div>
              <div className="reveal-right hidden lg:block">
                <img src="https://images.unsplash.com/photo-1523050335192-ce11558cd97d?auto=format&fit=crop&q=80&w=1000" className="rounded-[4rem] shadow-2xl animate-float" alt="Online Education and Study" />
              </div>
            </div>
          </div>
        </section>

        <section id="institutions" className="py-24 md:py-40 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-7xl font-black uppercase mb-16 reveal">Partner Institutions</h2>
            <div className="flex flex-col items-center gap-8">
              {institutions.map(inst => (
                <article key={inst.id} className="reveal w-full max-w-2xl px-4" onClick={() => handleInstClick(inst)}>
                  <div className="group relative cursor-pointer bg-[#0f172a] p-6 md:p-8 rounded-[2.5rem] border border-blue-900/30 shadow-2xl transition-all hover:scale-[1.02]">
                    <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8">
                      <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center overflow-hidden border border-slate-800">
                        <img src={inst.image} alt={`${inst.name} Logo - Educational Partner`} className="w-full h-auto p-2" />
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
                </article>
              ))}
            </div>
            <AdBanner />
          </div>
        </section>

        <section id="features" className="py-24 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="sr-only">Platform Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((f, i) => (
                <div key={i} className="reveal stagger-1 p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {React.cloneElement(f.icon as React.ReactElement<any>, { className: "w-7 h-7" })}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{f.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="bg-[#0a0f1d] text-slate-500 py-24 text-center md:text-left">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
               <div className="flex items-center space-x-3 justify-center md:justify-start">
                  <img src="https://image2url.com/r2/bucket3/images/1766856611788-b73eb973-25d0-4dcf-82e4-0578778f7cf3.jpeg" className="w-10 h-10 rounded-lg" alt="Study End White Logo" />
                  <span className="text-2xl font-bold text-white">StudyEnd</span>
               </div>
               <p>The best educational resource provider for free study batches, notes, and AI learning tools. Join the movement.</p>
            </div>
            <div className="flex flex-col items-center md:items-end justify-center space-y-4">
               <div className="flex space-x-4">
                  <a href="https://t.me/studyendofficial" target="_blank" rel="noopener noreferrer" className="text-white p-3 bg-slate-800 rounded-xl hover:bg-blue-600 transition-all" aria-label="Join our Telegram Channel"><Send /></a>
               </div>
               <p className="text-sm font-bold">© {new Date().getFullYear()} Study End - All Rights Reserved.</p>
            </div>
          </div>
        </footer>

        {showScrollTop && (
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-10 right-10 w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-2xl transition-all hover:scale-110" aria-label="Scroll to top">
            <ChevronUp />
          </button>
        )}
      </main>
    </div>
  );
};

export default App;
