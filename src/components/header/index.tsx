import { tw, css } from 'twind/css';
import Button from '@/components/button';

const headerStyle = css`
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  min-height: calc(100vh - 6rem);
`;

const Header = () => (
  <header className={tw(headerStyle)}>
    <div className={tw(`max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8`)}>
      <div className={tw(`text-center`)}>
        <p className={tw(`text-indigo-400 font-mono text-sm font-semibold tracking-wide uppercase mb-4`)}>
          Powered by Hyppo
        </p>
        <h1 className={tw(`font-sans font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-white mb-6`)}>
          Tu equipo de ventas pierde el 80% del día con leads que no van a comprar.
        </h1>
        <p className={tw(`mt-6 text-lg lg:text-xl text-gray-300 max-w-2xl mx-auto mb-8`)}>
          Centralizamos tu data, automatizamos la calificación con IA y conectamos leads calientes directamente a tus vendedores. Autos + Datos + Automatización = Conversiones.
        </p>
        <div className={tw(`mt-10 flex justify-center items-center gap-4 flex-wrap`)}>
          <Button primary>Agendá una demo</Button>
          <Button>Conocé nuestro sistema</Button>
        </div>
      </div>

      {/* Placeholder para dashboard/imagen hero */}
      <div className={tw(`mt-20 rounded-lg overflow-hidden shadow-2xl border border-gray-700`)}>
        <div className={tw(`w-full bg-gradient-to-br from-gray-900 to-gray-800 h-96 lg:h-96 flex items-center justify-center text-gray-500`)}>
          <span className={tw(`text-center`)}>
            <p className={tw(`text-lg font-semibold mb-2`)}>Dashboard & Chat Bot Preview</p>
            <p className={tw(`text-sm`)}>Imagen placeholder - GoChat IA + Looker Studio</p>
          </span>
        </div>
      </div>
    </div>

    {/* Logo/Partners Section */}
    <div className={tw(`flex justify-center w-full border-t border-gray-700 mt-16`)}>
      <div className={tw(`mt-8 pb-8 w-full`)}>
        <p className={tw(`font-mono uppercase text-center font-medium text-xs text-gray-500 mb-6`)}>De confianza para</p>
        <div className={tw(`flex items-center justify-center mx-auto flex-wrap gap-8`)}>
          <div className={tw(`text-gray-400 text-sm font-semibold`)}>Concesionarias</div>
          <div className={tw(`text-gray-400 text-sm`)}>•</div>
          <div className={tw(`text-gray-400 text-sm font-semibold`)}>Representantes de Marcas</div>
          <div className={tw(`text-gray-400 text-sm`)}>•</div>
          <div className={tw(`text-gray-400 text-sm font-semibold`)}>Growth Leaders</div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;

