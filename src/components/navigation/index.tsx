import { tw } from 'twind';
import Button from '@/components/button';

const Navigation = () => {
  return (
    <nav className={tw(`bg-slate-900 border-b border-slate-800 sticky top-0 z-50 backdrop-blur-md bg-opacity-100`)}>
      <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)}>
        <div className={tw(`flex items-center justify-between h-20`)}>
          <div className={tw(`flex items-center`)}>
            <div className={tw(`flex-shrink-0 flex items-center gap-3`)}>
              <div className={tw(`w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20`)}>
                <img className={tw(`h-6 w-6`)} src="logo.svg" alt="logo" width={24} height={24} />
              </div>
              <span className={tw(`text-white font-bold text-xl tracking-tight`)}>Concesionaria AI</span>
            </div>
          </div>
          <div className={tw(`flex items-center`)}>
            <Button primary modifier="px-6 py-2 shadow-lg">Agendá una demo</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
