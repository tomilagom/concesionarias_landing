import { tw } from 'twind';

const VideoSection = () => (
  <section id="como-funciona" className={tw(`bg-slate-900 py-24 relative overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)}>
      <div className={tw(`flex flex-col lg:flex-row items-center gap-12`)}>
        <div className={tw(`lg:w-1/2 text-left`)}>
          <h2 className={tw(`text-base text-indigo-400 font-semibold tracking-wide uppercase mb-4`)}>
            IA en Acción
          </h2>
          <p className={tw(`text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6`)}>
            Mira cómo Hyppo califica a tus leads en tiempo real
          </p>
          <p className={tw(`text-slate-400 text-lg mb-8 leading-relaxed`)}>
            Nuestra IA no solo responde, sino que entabla una conversación humana para entender qué modelo buscan, su presupuesto y urgencia. 
            <strong> Sin formularios, sin fricción.</strong>
          </p>
          <ul className={tw(`space-y-4`)}>
            <li className={tw(`flex items-start gap-3 text-slate-300`)}>
              <span className={tw(`flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500 bg-opacity-20 flex items-center justify-center text-indigo-400 font-bold text-sm`)}>✓</span>
              <span>Interpretación de lenguaje natural</span>
            </li>
            <li className={tw(`flex items-start gap-3 text-slate-300`)}>
              <span className={tw(`flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500 bg-opacity-20 flex items-center justify-center text-indigo-400 font-bold text-sm`)}>✓</span>
              <span>Detección automática de intención de compra</span>
            </li>
            <li className={tw(`flex items-start gap-3 text-slate-300`)}>
              <span className={tw(`flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500 bg-opacity-20 flex items-center justify-center text-indigo-400 font-bold text-sm`)}>✓</span>
              <span>Agenda directa en tu calendario</span>
            </li>
          </ul>

          <div className={tw(`mt-12`)}>
            <p className={tw(`text-white font-bold mb-6 flex items-center gap-2`)}>
              <span className={tw(`w-8 h-px bg-indigo-500`)}></span>
              Prueba la experiencia real por marca:
            </p>
            <div className={tw(`grid grid-cols-2 sm:grid-cols-3 gap-4`)}>
              {[
                { name: 'KIA', phone: '595981669999', logo: 'kia.png' },
                { name: 'Jeep', phone: '595984133200', logo: 'jeep.png' },
                { name: 'Fiat', phone: '595986111250', logo: 'fiat.png' },
                { name: 'Nissan', phone: '595986685555', logo: 'nissan.png' },
                { name: 'Chery', phone: '595994658749', logo: 'chery.png' }
              ].map((brand) => (
                <a
                  key={brand.name}
                  href={`https://wa.me/${brand.phone}?text=Hola!%20Quiero%20conocer%20más%20sobre%20los%20modelos%20de%20${brand.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={tw(`flex flex-col items-center p-4 bg-slate-800 bg-opacity-50 border border-slate-700 rounded-2xl hover:border-green-500 hover:bg-green-500 hover:bg-opacity-10 transition-all group`)}
                >
                  <div className={tw(`w-full h-16 mb-4 flex items-center justify-center px-2`)}>
                    <img 
                      src={`/images/${brand.logo}`} 
                      alt={`${brand.name} logo`} 
                      className={tw(`max-h-full w-auto object-contain transition-transform group-hover:scale-110`)} 
                    />
                  </div>
                  <div className={tw(`flex items-center gap-2 bg-green-600 px-3 py-1 rounded-full shadow-lg group-hover:scale-105 transition-transform`)}>
                    <svg className={tw(`w-4 h-4 fill-current text-white`)} viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.89 4.44-9.892 9.886-.001 2.125.593 3.456 1.574 5.111l-.973 3.548 3.891-.971zm11.381-7.084c-.301-.15-1.781-.879-2.056-.979-.275-.1-.475-.15-.675.15-.2.3-.775 1.05-.95 1.25-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.488-.891-.794-1.492-1.775-1.667-2.075-.175-.3-.019-.463.13-.612.134-.133.301-.351.451-.526.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.588-.491-.508-.675-.517-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8 0-.375-.275-1.05-1.075-1.05-2.625 0-1.55 1.125-3.05 1.275-3.25.15-.2 2.215-3.383 5.362-4.759.75-.327 1.332-.523 1.789-.668.752-.239 1.435-.205 1.974-.125.6-.09 1.781-.725 2.031-1.425.25-.7.25-1.299.175-1.425-.075-.125-.275-.2-.575-.35z" />
                    </svg>
                    <span className={tw(`text-white text-xs font-bold`)}>WhatsApp</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={tw(`lg:w-1/2 flex justify-center`)}>
          <video
            className={tw(`rounded-3xl w-full max-w-[400px] h-auto shadow-2xl`)}
            autoPlay
            loop
            muted
            playsInline
            poster="/images/video-poster.jpg"
          >
            <source src="/images/gochat-automotive.webm" type="video/webm" />
            Tu navegador no soporta videos.
          </video>
        </div>
      </div>
    </div>
  </section>
);

export default VideoSection;
