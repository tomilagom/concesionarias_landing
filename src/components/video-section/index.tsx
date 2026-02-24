import { tw } from 'twind';

const VideoSection = () => (
  <section className={tw(`bg-slate-900 py-24 relative overflow-hidden`)}>
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
