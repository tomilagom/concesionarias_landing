import { tw } from 'twind';
import FadeIn from '@/components/scroll-reveal';

const VideoSection = () => (
  <section id="como-funciona" className={tw(`bg-slate-900 py-24 relative overflow-hidden`)}>
    <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)}>
      <div className={tw(`flex flex-col lg:flex-row items-center gap-12`)}>
        <FadeIn direction="right" className={tw(`lg:w-1/2`)}>
          <div className={tw(`text-left`)}>
            <h2 className={tw(`text-base text-indigo-400 font-semibold tracking-wide uppercase mb-4`)}>
              IA en Acción
            </h2>
            <p className={tw(`text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6`)}>
              Observá la IA en acción: calificación y agendado automático
            </p>
            <p className={tw(`text-slate-300 text-lg mb-8 leading-relaxed`)}>
              Conversaciones naturales que detectan intención de compra, consultan stock y agendan pruebas de manejo en segundos. Menos fricción, más test drives.
            </p>
            <ul className={tw(`space-y-4`)}>
              <li className={tw(`flex items-start gap-3 text-slate-300`)}>
                <span className={tw(`flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500 bg-opacity-20 flex items-center justify-center text-indigo-400 font-bold text-sm`)}>✓</span>
                <span>Respuesta en menos de 3 segundos</span>
              </li>
              <li className={tw(`flex items-start gap-3 text-slate-300`)}>
                <span className={tw(`flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500 bg-opacity-20 flex items-center justify-center text-indigo-400 font-bold text-sm`)}>✓</span>
                <span>Agendado automático de test drives</span>
              </li>
              <li className={tw(`flex items-start gap-3 text-slate-300`)}>
                <span className={tw(`flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500 bg-opacity-20 flex items-center justify-center text-indigo-400 font-bold text-sm`)}>✓</span>
                <span>Criterios de calificación personalizables</span>
              </li>
            </ul>

            <div className={tw(`mt-12`)}>
              <p className={tw(`text-white font-bold mb-6 flex items-center gap-2`)}>
                <span className={tw(`w-8 h-px bg-indigo-500`)}></span>
                Prueba la experiencia real por marca:
              </p>
              <div className={tw(`grid grid-cols-2 sm:grid-cols-3 gap-4`)}>
                {[
                  { name: 'KIA', phone: '595981669999', logo: 'kia.jpg' },
                  { name: 'Jeep', phone: '595984133200', logo: 'jeep.png' },
                  { name: 'Fiat', phone: '595986111250', logo: 'fiat.png' },
                  { name: 'Nissan', phone: '595986685555', logo: 'nissan.png' },
                  { name: 'Chery', phone: '595994658749', logo: 'chery.png' }
                ].map((brand, bIndex) => (
                  <FadeIn key={brand.name} delay={bIndex * 100} direction="up">
                    <a
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
                        <img src="/images/whatsapp-logo.png" className={tw(`w-5 h-5 object-contain brightness-0 invert`)} alt="WhatsApp" />
                        <span className={tw(`text-white text-xs font-bold`)}>WhatsApp</span>
                      </div>
                    </a>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="left" className={tw(`lg:w-1/2 flex justify-center`)}>
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
        </FadeIn>
      </div>
    </div>
  </section>
);

export default VideoSection;
