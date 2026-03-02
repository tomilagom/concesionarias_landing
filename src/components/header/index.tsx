import { useState, useEffect } from 'react';
import { tw, css } from 'twind/css';
import Button from '@/components/button';

const headerStyle = css`
  background-color: #0f172a;
  background-image: 
    radial-gradient(at 0% 0%, rgba(79, 70, 229, 0.15) 0px, transparent 50%),
    radial-gradient(at 100% 100%, rgba(99, 102, 241, 0.1) 0px, transparent 50%);
  min-height: calc(100vh - 5rem);
  @media (max-width: 768px) {
    min-height: calc(100vh - 4rem);
  }
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

  const words = ['califica leads', 'agenda test drives', 'duplica conversiones', 'nunca duerme'];

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
        <div className={tw(`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500 bg-opacity-10 blur-[120px] rounded-full animate-pulse`)}></div>
        <div className={tw(`absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500 bg-opacity-10 blur-[120px] rounded-full animate-pulse`)} style={{ animationDelay: '2s' }}></div>
      </div>

      <div className={tw(`max-w-7xl mx-auto py-12 md:py-20 px-4 sm:px-6 lg:px-8 relative z-10`)}>
        <div className={tw(`grid lg:grid-cols-2 gap-12 items-center`)}>
          <div className={tw(`text-left`)}>
            <div className={tw(`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500 bg-opacity-10 border border-indigo-500 border-opacity-20 mb-6`)}>
              <span className={tw(`w-2 h-2 rounded-full bg-indigo-400 animate-pulse`)}></span>
              <p className={tw(`text-indigo-400 font-mono text-xs font-bold tracking-widest uppercase`)}>
                Atención inmediata 24/7 con IA
              </p>
            </div>
            <h1 className={tw(`font-sans font-extrabold text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-white mb-8 tracking-tight`)}>
              Tu equipo de ventas <span className={tw(`text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400`)}>{displayText}</span>
              <span className={tw(cursorStyle)}></span>
            </h1>
            <p className={tw(`text-lg lg:text-xl text-slate-300 max-w-xl mb-10 leading-relaxed`)}>
              Responde en segundos, califica intención de compra y agenda pruebas de manejo automáticamente. Menos trabajo manual, más clientes cerrados.
            </p>
            <div className={tw(`flex flex-wrap gap-4`)}>
              <a 
                href="https://crm.hyppo.io/widget/bookings/piorichards-concesionarias-ai" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={tw(`inline-flex items-center px-8 py-4 text-lg bg-indigo-600 text-white rounded-lg shadow-xl hover:bg-indigo-500 hover:scale-105 transition-all font-semibold`)}
              >
                Agendá una demo
              </a>
              <a href="#como-funciona" className={tw(`inline-flex items-center px-8 py-4 text-lg bg-slate-800 border border-slate-700 text-white rounded-lg hover:bg-slate-700 transition-colors`)}>
                Ver cómo funciona
              </a>
            </div>

          <div className={tw(`mt-12 pt-8 border-t border-slate-800`)}>
            <p className={tw(`text-sm text-slate-500 mb-6 font-medium uppercase tracking-wider`)}>Integrado con los líderes</p>
            <div className={tw(`flex flex-wrap gap-8 items-center opacity-80`)}>
              <img className={tw(`h-12 w-auto`)} src="/images/meta-business-partner-logo.png" alt="Meta" />
              <img className={tw(`h-14 w-auto object-contain`)} src="/images/google-ads-ogo.png" alt="Google Ads" />
              <img className={tw(`h-9 w-auto object-contain`)} src="/images/whatsapp-logo.png" alt="WhatsApp" />
              <img className={tw(`h-11 w-auto object-contain`)} src="/images/instagram-logo.png" alt="Instagram" />
            </div>
          </div>
        </div>

        <div className={tw(`relative lg:ml-4`)}>
          <div className={tw(`absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl blur opacity-20`)}></div>
          <div className={tw(`relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 border-opacity-50 bg-slate-900 bg-opacity-50 backdrop-blur-xl`)}>
            <div className={tw(`w-full min-h-[600px] flex flex-col`)}>
              {/* Fake Window Header */}
              <div className={tw(`flex items-center justify-between px-4 py-3 bg-slate-800 bg-opacity-50 border-b border-slate-700 border-opacity-50`)}>
                <div className={tw(`flex gap-2`)}>
                  <div className={tw(`w-3 h-3 rounded-full bg-red-500 bg-opacity-50`)}></div>
                  <div className={tw(`w-3 h-3 rounded-full bg-yellow-500 bg-opacity-50`)}></div>
                  <div className={tw(`w-3 h-3 rounded-full bg-green-500 bg-opacity-50`)}></div>
                </div>
                <div className={tw(`text-[10px] text-slate-500 font-mono uppercase tracking-widest`)}>Agendar Demo</div>
              </div>
              {/* Form Embed */}
              <div className={tw(`flex-1`)}>
                <iframe 
                  id="fluentform" 
                  width="100%" 
                  loading="lazy" 
                  height="600px" 
                  style={{ minHeight: '600px', width: '100%', background: 'transparent' }} 
                  src="https://hyppo.io/?ff_landing=40&embedded=1"
                ></iframe>
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

