import { tw } from 'twind';
import Button from '@/components/button';

const Navigation = () => {
  return (
    <nav className={tw(`bg-slate-900 border-b border-slate-800 sticky top-0 z-50 backdrop-blur-md bg-opacity-100`)}>
      <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)}>
        <div className={tw(`flex items-center justify-between h-16 md:h-20`)}>
          <div className={tw(`flex items-center`)}>
            <a href="#" className={tw(`flex-shrink-0 flex items-center gap-3 hover:opacity-80 transition-opacity`)}>
              <img className={tw(`h-10 w-10 md:h-14 md:w-14`)} src="logo.png" alt="logo" width={40} height={40} />
              <span className={tw(`text-white font-bold text-lg md:text-xl tracking-tight`)}>ConcesionarIA</span>
            </a>
          </div>

          <div className={tw(`flex items-center gap-4 md:gap-8`)}>
            <div className={tw(`hidden md:flex items-center gap-8`)}>
              <a href="#como-funciona" className={tw(`text-slate-300 hover:text-white transition-colors font-medium`)}>
                Casos reales
              </a>
              <a href="#que-hacemos" className={tw(`text-slate-300 hover:text-white transition-colors font-medium`)}>
                Qué hacemos
              </a>
            </div>
            <a 
              href="https://crm.hyppo.io/widget/bookings/piorichards-concesionarias-ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={tw(`hidden md:inline-flex items-center px-6 py-2 bg-brand-600 text-white rounded-lg shadow-lg hover:bg-brand-500 transition-all font-semibold`)}
            >
              Agendá una demo
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
