import { tw } from 'twind';

const Footer = () => (
  <footer className={tw(`bg-slate-900 border-t border-slate-700 pt-16 pb-8`)}>
    <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)}>
      <div className={tw(`grid grid-cols-1 md:grid-cols-3 gap-12 mb-12`)}>
        <div>
          <h3 className={tw(`text-white font-bold text-lg mb-4`)}>ConcesionarIA</h3>
          <p className={tw(`text-gray-400 text-sm mb-6`)}>Automatización inteligente para concesionarias.<br />Powered by Hyppo.io</p>
          <div className={tw(`flex gap-4 items-center opacity-50`)}>
            <img className={tw(`h-5 w-auto`)} src="/images/whatsapp-logo.png" alt="WhatsApp" />
            <img className={tw(`h-5 w-auto`)} src="/images/meta-business-partner-logo.png" alt="Meta" />
            <img className={tw(`h-5 w-auto`)} src="/images/instagram-logo.png" alt="Instagram" />
            <img className={tw(`h-5 w-auto`)} src="/images/google-ads-ogo.png" alt="Google Ads" />
          </div>
        </div>
        <div>
          <h4 className={tw(`text-white font-semibold mb-4`)}>Soluciones</h4>
          <ul className={tw(`space-y-2 text-sm text-gray-400`)}><li><a href="#" className={tw(`hover:text-white transition`)}>GoChat IA</a></li><li><a href="#" className={tw(`hover:text-white transition`)}>CDP</a></li><li><a href="#" className={tw(`hover:text-white transition`)}>Growth Marketing</a></li></ul>
        </div>
        <div>
          <h4 className={tw(`text-white font-semibold mb-4`)}>Empresa</h4>
          <ul className={tw(`space-y-2 text-sm text-gray-400`)}><li><a href="https://hyppo.io" target="_blank" rel="noopener noreferrer" className={tw(`hover:text-white transition`)}>Hyppo.io</a></li><li><a href="#" className={tw(`hover:text-white transition`)}>Blog</a></li><li><a href="#" className={tw(`hover:text-white transition`)}>Contacto</a></li></ul>
        </div>
      </div>
      <div className={tw(`border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center`)}>
        <p className={tw(`text-gray-400 text-sm`)}>© 2026 ConcesionarIA. Todos los derechos reservados.</p>
        <div className={tw(`flex gap-6 mt-4 md:mt-0`)}><a href="#" className={tw(`text-gray-400 hover:text-white text-sm transition`)}>Privacidad</a><a href="#" className={tw(`text-gray-400 hover:text-white text-sm transition`)}>Términos</a></div></div>
    </div>
  </footer>
);

export default Footer;
