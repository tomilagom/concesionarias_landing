import { useState, useEffect } from 'react';
import { tw, css } from 'twind/css';
import Button from '@/components/button';

const headerStyle = css`
  background-color: #0f172a;
  background-image: 
    radial-gradient(at 0% 0%, rgba(79, 70, 229, 0.15) 0px, transparent 50%),
    radial-gradient(at 100% 100%, rgba(99, 102, 241, 0.1) 0px, transparent 50%);
  min-height: calc(100vh - 5rem);
  display: flex;
  align-items: center;
`;

const cursorStyle = css`
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  display: inline-block;
  width: 3px;
  height: 1em;
  background-color: #818cf8;
  margin-left: 4px;
  vertical-align: middle;
  animation: blink 1s step-end infinite;
`;

const Header = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['pierde el 80%', 'gana el 100%'];

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex % words.length];
      
      if (isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        setTypingSpeed(50);
      } else {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && displayText === currentWord) {
        setTypingSpeed(2000); // Pause at the end
        setIsDeleting(true);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setWordIndex((prev) => prev + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex, typingSpeed]);

  return (
    <header className={tw(headerStyle, `relative overflow-hidden`)}>
      {/* Decorative background elements */}
      <div className={tw(`absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none`)}>
        <div className={tw(`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500 bg-opacity-10 blur-[120px] rounded-full`)}></div>
        <div className={tw(`absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500 bg-opacity-10 blur-[120px] rounded-full`)}></div>
      </div>

      <div className={tw(`max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 relative z-10`)}>
        <div className={tw(`grid lg:grid-cols-2 gap-12 items-center`)}>
          <div className={tw(`text-left`)}>
            <div className={tw(`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500 bg-opacity-10 border border-indigo-500 border-opacity-20 mb-6`)}>
              <span className={tw(`w-2 h-2 rounded-full bg-indigo-400 animate-pulse`)}></span>
              <p className={tw(`text-indigo-400 font-mono text-xs font-bold tracking-widest uppercase`)}>
                Powered by Hyppo IA
              </p>
            </div>
            <h1 className={tw(`font-sans font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-white mb-8 tracking-tight`)}>
              Tu equipo de ventas <span className={tw(`text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400`)}>{displayText}</span>
              <span className={tw(cursorStyle)}></span> del día.
            </h1>
            <p className={tw(`text-lg lg:text-xl text-slate-400 max-w-xl mb-10 leading-relaxed`)}>
              Dejá de perseguir leads fríos. Centralizamos tu data y usamos IA para calificar prospectos 24/7. Tus vendedores solo hablan con quienes <span className={tw(`text-white font-semibold`)}>realmente quieren comprar</span>.
            </p>
            <div className={tw(`flex flex-wrap gap-4`)}>
              <Button primary modifier="px-8 py-4 text-lg shadow-xl hover:scale-105 transition-transform">
                Agendá una demo
              </Button>
              <Button modifier="px-8 py-4 text-lg bg-slate-800 border-slate-700 text-white hover:bg-slate-700 transition-colors">
                Ver cómo funciona
              </Button>
            </div>

          <div className={tw(`mt-12 pt-8 border-t border-slate-800`)}>
            <p className={tw(`text-sm text-slate-500 mb-4 font-medium uppercase tracking-wider`)}>Integrado con los líderes</p>
            <div className={tw(`flex gap-6 items-center grayscale opacity-50`)}>
              <span className={tw(`text-white font-bold text-lg`)}>WhatsApp</span>
              <span className={tw(`text-white font-bold text-lg`)}>Meta</span>
              <span className={tw(`text-white font-bold text-lg`)}>Google Ads</span>
            </div>
          </div>
        </div>

        <div className={tw(`relative lg:ml-4`)}>
          <div className={tw(`absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl blur opacity-20`)}></div>
          <div className={tw(`relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 border-opacity-50 bg-slate-900 bg-opacity-50 backdrop-blur-xl`)}>
            <div className={tw(`w-full h-[450px] flex flex-col`)}>
              {/* Fake Window Header */}
              <div className={tw(`flex items-center gap-2 px-4 py-3 bg-slate-800 bg-opacity-50 border-b border-slate-700 border-opacity-50`)}>
                <div className={tw(`w-3 h-3 rounded-full bg-red-500 bg-opacity-50`)}></div>
                <div className={tw(`w-3 h-3 rounded-full bg-yellow-500 bg-opacity-50`)}></div>
                <div className={tw(`w-3 h-3 rounded-full bg-green-500 bg-opacity-50`)}></div>
                <div className={tw(`ml-4 h-4 w-32 bg-slate-700 bg-opacity-50 rounded-full`)}></div>
              </div>
              {/* Content Placeholder */}
              <div className={tw(`flex-1 p-6 flex flex-col gap-4`)}>
                <div className={tw(`flex gap-4`)}>
                  <div className={tw(`w-1/3 h-24 bg-indigo-500 bg-opacity-10 rounded-xl border border-indigo-500 border-opacity-20`)}></div>
                  <div className={tw(`w-2/3 h-24 bg-slate-800 bg-opacity-50 rounded-xl`)}></div>
                </div>
                <div className={tw(`flex-1 bg-slate-800 bg-opacity-30 rounded-xl border border-slate-700 border-opacity-30 p-4`)}>
                  <div className={tw(`flex flex-col gap-2`)}>
                    <div className={tw(`h-4 w-3/4 bg-slate-700 bg-opacity-50 rounded-full`)}></div>
                    <div className={tw(`h-4 w-1/2 bg-slate-700 bg-opacity-50 rounded-full`)}></div>
                    <div className={tw(`mt-4 flex gap-2`)}>
                      <div className={tw(`w-8 h-8 rounded-full bg-indigo-500 bg-opacity-20`)}></div>
                      <div className={tw(`flex-1 h-20 bg-indigo-500 bg-opacity-5 rounded-r-xl rounded-bl-xl border border-indigo-500 border-opacity-10`)}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  );
};

export default Header;

