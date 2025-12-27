
import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Users, 
  Award, 
  ArrowRight, 
  Star, 
  MapPin, 
  CheckCircle, 
  GraduationCap, 
  Zap,
  Shield,
  Server,
  Clock,
  Key,
  PlayCircle,
  Send,
  X
} from 'lucide-react';
import { Institution, Feature } from './types';

// --- Telegram Invitation Popup ---

const TelegramPopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-500"></div>
      <div className="relative bg-white w-full max-w-md rounded-[2rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in slide-in-from-top-4 duration-500 border border-blue-100">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-all"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="p-8 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-[#229ED9] rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-blue-200 animate-bounce">
            <Send className="w-8 h-8 -rotate-12 translate-x-0.5 -translate-y-0.5" />
          </div>
          
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Join our Community!</h3>
          <p className="text-slate-600 mb-8 px-4">
            Get instant updates on new batches, free study materials, and connect with thousands of students on Telegram.
          </p>
          
          <div className="flex flex-col space-y-3 w-full">
            <a 
              href="https://t.me/studypowerofficial"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="w-full bg-[#229ED9] text-white py-4 px-6 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 hover:bg-[#1c86ba] transition-all shadow-md active:scale-95"
            >
              <span>I will join now</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <button 
              onClick={onClose}
              className="w-full py-3 px-6 text-slate-500 font-semibold hover:text-slate-800 transition-colors"
            >
              Maybe later
            </button>
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
          <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mb-6 text-blue-600 shadow-inner group">
            <Key className="w-10 h-10 group-hover:rotate-12 transition-transform" />
          </div>
          <h2 className="text-3xl font-black text-slate-900 mb-2">Access Required</h2>
          <p className="text-slate-500 font-medium mb-8">Generate a temporary key to continue to NEXT TOPPERS</p>
          
          <div className="grid grid-cols-2 gap-4 w-full mb-8">
            <div className="bg-slate-50 p-4 rounded-2xl flex flex-col items-center border border-slate-100 transition-all hover:shadow-md">
              <div className="w-10 h-10 bg-red-50 text-red-500 rounded-xl flex items-center justify-center mb-3">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-700">Protected</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl flex flex-col items-center border border-slate-100 transition-all hover:shadow-md">
              <div className="w-10 h-10 bg-green-50 text-green-500 rounded-xl flex items-center justify-center mb-3">
                <Server className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-700">Dedicated</span>
            </div>
          </div>

          <div className="space-y-4 w-full">
            <a 
              href="https://youtu.be/5nQhCNvzUlQ?si=JyhnHDGTHRdb8f31"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 py-4 px-6 rounded-2xl border-2 border-slate-100 text-slate-700 font-bold hover:bg-slate-50 transition-all active:scale-95 group no-underline"
            >
              <PlayCircle className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
              <span>Watch Tutorial</span>
            </a>
            <a 
              href="https://arolinks.com/9UdDC3"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="w-full bg-blue-600 text-white py-5 px-6 rounded-2xl font-black text-xl flex items-center justify-center space-x-3 hover:bg-blue-700 shadow-xl shadow-blue-200 active:scale-95 transition-all no-underline"
            >
              <Key className="w-6 h-6" />
              <span>Generate Key</span>
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center space-x-2 bg-slate-50 px-4 py-3 rounded-full border border-slate-100 w-full">
            <Clock className="w-4 h-4 text-slate-400" />
            <p className="text-[11px] text-slate-500 font-medium leading-tight">
              Watch the tutorial if you're unsure how to proceed to avoid errors!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Helper Components ---

const Header = () => (
  <header className="sticky top-0 z-50 glass-effect border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 bg-white rounded-lg overflow-hidden border border-slate-200 group-hover:scale-110 transition-transform duration-300">
            <img 
              src="https://image2url.com/r2/bucket2/images/1766847123234-270b374c-5853-49b8-97b7-3c2d74096756.jpeg" 
              alt="Study Power Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800">Study<span className="text-blue-600">Power</span></span>
        </div>
        <nav className="hidden md:flex space-x-8 font-medium text-slate-600">
          <a href="#hero" className="hover:text-blue-600 transition-all hover:scale-105">Home</a>
          <a href="#institutions" className="hover:text-blue-600 transition-all hover:scale-105">Institutions</a>
          <a href="#features" className="hover:text-blue-600 transition-all hover:scale-105">Features</a>
          <a href="#contact" className="hover:text-blue-600 transition-all hover:scale-105">Contact</a>
        </nav>
        <div className="w-20 md:hidden"></div> 
      </div>
    </div>
  </header>
);

const FeatureCard: React.FC<{ feature: Feature; index: number }> = ({ feature, index }) => (
  <div 
    className={`p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group animate-fade-in-up`}
    style={{ animationDelay: `${(index + 1) * 150}ms`, opacity: 0 }}
  >
    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700">
      {React.cloneElement(feature.icon as React.ReactElement<any>, { className: "w-7 h-7" })}
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
    <p className="text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors">{feature.description}</p>
  </div>
);

const InstitutionCard: React.FC<{ inst: Institution; onClick: () => void }> = ({ inst, onClick }) => (
  <div className="relative group cursor-pointer animate-fade-in-up" onClick={onClick}>
    {/* Floating Star Badge */}
    <div className="absolute -top-3 -right-3 z-20 w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center shadow-lg shadow-blue-400/50 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
      <Star className="w-5 h-5 text-white fill-white" />
    </div>

    {/* The Main Badge Container */}
    <div className="flex items-center space-x-6 bg-[#0f172a] p-6 rounded-[2.5rem] border border-blue-900/30 shadow-2xl transition-all duration-500 hover:shadow-blue-500/20 hover:border-blue-500/50 w-full max-w-md mx-auto hover:scale-[1.02] active:scale-95">
      {/* Logo Container */}
      <div className="flex-shrink-0 w-24 h-24 bg-white rounded-[1.5rem] flex items-center justify-center overflow-hidden border border-blue-900/30 group-hover:border-blue-500/50 transition-all duration-500 group-hover:scale-110 shadow-inner">
        <img 
          src={inst.image} 
          alt={inst.name} 
          className="w-full h-auto max-h-full object-contain p-1 transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Text Info */}
      <div className="flex-grow">
        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors truncate">
          {inst.name}
        </h3>
        <p className="text-slate-400 text-lg group-hover:text-slate-200 transition-colors">Click to explore</p>
        <div className="flex items-center text-slate-500 text-sm mt-1">
          <MapPin className="w-3 h-3 mr-1" />
          {inst.location}
        </div>
      </div>

      {/* Arrow Icon */}
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-500/10 group-hover:bg-blue-500/20 transition-all">
          <ArrowRight className="w-8 h-8 text-blue-500 group-hover:translate-x-2 transition-transform duration-300" />
        </div>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showTelegram, setShowTelegram] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTelegram(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const institutions: Institution[] = [
    { 
      id: '1', 
      name: 'NEXT TOPPERS', 
      image: 'https://image2url.com/r2/bucket2/images/1766847418219-b72a0d7e-3d81-4df5-957f-fd5d79fb9f57.png', 
      location: 'India', 
      rating: 5.0 
    }
  ];

  const features: Feature[] = [
    { 
      title: 'Global Certifications', 
      description: 'Get recognized globally with certifications from top-tier institutions around the world.',
      icon: <Award className="w-6 h-6" />
    },
    { 
      title: 'Interactive Learning', 
      description: 'Engage with expert tutors and a collaborative community of learners in real-time.',
      icon: <BookOpen className="w-6 h-6" />
    },
    { 
      title: 'Career Placement', 
      description: 'Benefit from our vast network of industry partners for internship and job opportunities.',
      icon: <Users className="w-6 h-6" />
    },
    { 
      title: 'Modern Curriculum', 
      description: 'Access updated study materials aligned with current industry standards and requirements.',
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const handleExploreClick = () => {
    const section = document.getElementById('institutions');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isAnyPopupOpen = showPopup || showTelegram;

  return (
    <div className={`min-h-screen relative ${isAnyPopupOpen ? 'overflow-hidden' : ''}`}>
      {showPopup && <AccessPopup onClose={() => setShowPopup(false)} />}
      {showTelegram && <TelegramPopup onClose={() => setShowTelegram(false)} />}
      
      <Header />

      <main className={`transition-all duration-700 ${isAnyPopupOpen ? 'blur-lg grayscale pointer-events-none opacity-50' : ''}`}>
        {/* Hero Section */}
        <section id="hero" className="relative pt-20 pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 text-center lg:text-left">
                <div className="animate-fade-in-up">
                  <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] uppercase">
                    EMPOWER YOU STUDY BY <span className="gradient-text">FREE BATCHES!</span>
                  </h1>
                </div>
                <div className="animate-fade-in-up delay-100 opacity-0 fill-mode-forwards">
                  <p className="text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                    Connect with the world's most prestigious institutions and unlock your potential with our modern learning ecosystem.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up delay-200 opacity-0 fill-mode-forwards">
                  <button 
                    onClick={handleExploreClick}
                    className="group w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
                  >
                    <span>Explore Courses</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
              <div className="relative group animate-fade-in-up delay-300 opacity-0 fill-mode-forwards">
                <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl animate-float">
                  <img 
                    src="https://images.unsplash.com/photo-1523050335192-ce11558cd97d?auto=format&fit=crop&q=80&w=800" 
                    alt="Education Learning" 
                    className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none"></div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl flex items-center space-x-4 max-w-xs transform -rotate-2 hover:rotate-0 hover:scale-110 transition-all cursor-pointer border border-blue-100 animate-fade-in-up delay-400">
                  <div className="bg-green-100 p-3 rounded-full text-green-600 animate-pulse">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-lg">Verified Success</div>
                    <div className="text-sm text-slate-500">98% Career Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Institutions Section */}
        <section id="institutions" className="py-24 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-100/50 rounded-full blur-3xl -ml-36 -mb-36"></div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Partner Institution</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Explore high-quality learning materials and accredited programs from NEXT TOPPERS.
              </p>
            </div>
            <div className="flex justify-center px-4">
              {institutions.map(inst => (
                <InstitutionCard 
                  key={inst.id} 
                  inst={inst} 
                  onClick={() => setShowPopup(true)} 
                />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 animate-fade-in-up">
                <h2 className="text-4xl font-black text-slate-900 leading-tight">
                  Why Study Power for Modern Students
                </h2>
                <p className="text-lg text-slate-600">
                  Our platform isn't just a database; it's a launchpad for your career. We combine technology, pedagogy, and industry connections.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  {features.map((f, i) => (
                    <div key={i} className="flex items-start space-x-3 group cursor-default">
                      <div className="mt-1 text-blue-600 bg-blue-50 p-1.5 rounded-lg group-hover:scale-125 transition-transform duration-300">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <span className="font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">{f.title}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, i) => (
                  <FeatureCard key={i} feature={feature} index={i} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="bg-slate-900 text-slate-400 py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
              <div className="animate-fade-in-up">
                <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
                <ul className="space-y-4">
                  <li><a href="#hero" className="hover:text-blue-500 transition-all hover:translate-x-1 block">Home</a></li>
                  <li><a href="#institutions" className="hover:text-blue-500 transition-all hover:translate-x-1 block">Institutions</a></li>
                  <li><a href="#features" className="hover:text-blue-500 transition-all hover:translate-x-1 block">Features</a></li>
                </ul>
              </div>
              <div className="animate-fade-in-up delay-100 opacity-0 fill-mode-forwards">
                <h4 className="text-white font-bold text-lg mb-6">Support</h4>
                <ul className="space-y-4">
                  <li><a href="#" className="hover:text-blue-500 transition-all hover:translate-x-1 block">Help Center</a></li>
                  <li><a href="#" className="hover:text-blue-500 transition-all hover:translate-x-1 block">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-blue-500 transition-all hover:translate-x-1 block">Privacy Policy</a></li>
                </ul>
              </div>
              <div className="animate-fade-in-up delay-200 opacity-0 fill-mode-forwards">
                <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
                <p className="mb-4 hover:text-white transition-colors cursor-pointer">support@studypower.com</p>
              </div>
            </div>
            <div className="pt-8 border-t border-slate-800 text-center animate-fade-in-up delay-300 opacity-0 fill-mode-forwards">
              <p>© {new Date().getFullYear()} Study Power. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
