import { tw } from 'twind';
import Button from '@/components/button';

const Navigation = () => {
  return (
    <nav className={tw(`bg-slate-900 border-b border-slate-800 sticky top-0 z-50 backdrop-blur-md bg-opacity-100`)}>
      <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)}>
        <div className={tw(`flex items-center justify-between h-16 md:h-20`)}>
          <div className={tw(`flex items-center`)}>
            <div className={tw(`flex-shrink-0 flex items-center gap-3`)}>
              <div className={tw(`w-10 h-10 md:w-15 md:h-15 bg-white-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20`)}>
                <img className={tw(`h-8 w-8 md:h-12 md:w-12`)} src="logo.svg" alt="logo" width={24} height={24} />
              </div>
              <span className={tw(`text-white font-bold text-lg md:text-xl tracking-tight`)}>ConcesionarIA</span>
            </div>
          </div>
          <div className={tw(`flex items-center`)}>
            <a 
              href="https://crm.hyppo.io/widget/bookings/piorichards-concesionarias-ai" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={tw(`hidden md:inline-flex items-center px-6 py-2 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-500 transition-all font-semibold`)}
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
