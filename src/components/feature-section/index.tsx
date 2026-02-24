import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';

const solutions = [
  {
    title: `GoChat & IA Conversacional`,
    description: `Bots omnicanal (WhatsApp, Instagram) que califican leads 24/7 con preguntas inteligentes sobre modelo, presupuesto e intención. Cuando está listo, deriva automáticamente al vendedor. Fin de las respuestas manuales a las 3 AM.`,
    benefits: [`Calificación automática 24/7`, `Agende visitas al salón`, `WhatsApp + Instagram`, `Integración con CRM`],
  },
  {
    title: `CDP & Customer.io`,
    description: `Centralización total de datos. Sabes exactamente qué auto miró cada cliente, en qué momento, desde qué dispositivo. Envía campañas hiper-personalizadas: "Vimos que te interesó esta SUV roja, acaba de bajar $3K de precio, ¿hablamos?".`,
    benefits: [`Base de datos limpia`, `Segmentación avanzada`, `Viajes de cliente en tiempo real`, `Historial 360° por cliente`],
  },
  {
    title: `Paid Media con Growth Mindset`,
    description: `Meta Ads y Google Ads que hablan con tu CDP. Optimizamos por ventas reales, no por clics. Cada peso invertido se conecta directamente con conversiones confirmadas en tu CRM.`,
    benefits: [`Optimización por conversión`, `Attribution real`, `Presupuesto inteligente`, `ROAS visible`],
  },
];

const FeatureSection = () => (
  <section className={tw(`py-28 bg-slate-900 relative overflow-hidden`)}>
    {/* Background texture */}
    <div className={tw(`absolute inset-0 opacity-10 pointer-events-none`)} style={{ backgroundImage: `radial-gradient(#4f46e5 0.5px, transparent 0.5px)`, backgroundSize: `24px 24px` }}></div>

    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 relative z-10`)}>
      <div className={tw(`mb-20 text-center`)}>
        <h2 className={tw(`text-base text-indigo-400 font-semibold tracking-wide uppercase mb-4`)}>La Solución</h2>
        <p className={tw(`text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6`)}>
          El Sistema Operativo para tu Concesionaria
        </p>
        <p className={tw(`text-slate-400 text-lg max-w-2xl mx-auto`)}>
          Combinamos Inteligencia Artificial con una infraestructura de datos robusta para escalar tus ventas.
        </p>
      </div>

      <div className={tw(`grid grid-cols-1 lg:grid-cols-3 gap-8`)}>
        {solutions.map((solution, index) => (
          <div
            key={solution.title}
            className={tw(`bg-slate-800 bg-opacity-50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 hover:border-indigo-500 transition-all flex flex-col group`)}
          >
            <div className={tw(`flex items-center gap-4 mb-8`)}>
              <span className={tw(`flex w-12 h-12 items-center justify-center text-lg font-bold rounded-2xl bg-indigo-600 text-white flex-shrink-0 shadow-lg`)}>
                {index + 1}
              </span>
              <h3 className={tw(`text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors`)}>{solution.title}</h3>
            </div>

            <p className={tw(`text-slate-400 leading-relaxed mb-8 flex-grow`)}>{solution.description}</p>

            <div className={tw(`space-y-4 mb-8`)}>
              {solution.benefits.map((benefit) => (
                <div key={benefit} className={tw(`flex items-center gap-3 bg-slate-900 bg-opacity-50 p-3 rounded-xl border border-slate-700 border-opacity-50`)}>
                  <Check width={18} height={18} fill="currentColor" className={tw(`text-indigo-400 flex-shrink-0`)} />
                  <span className={tw(`text-slate-300 text-sm font-medium`)}>{benefit}</span>
                </div>
              ))}
            </div>

            <div className={tw(`rounded-xl bg-slate-900 bg-opacity-50 border border-slate-700 h-32 flex items-center justify-center text-slate-500`)}>
              <div className={tw(`text-center`)}>
                <p className={tw(`text-xs font-bold uppercase tracking-widest opacity-50`)}>Visual System</p>
                <div className={tw(`flex gap-1 mt-2 justify-center`)}>
                  <div className={tw(`w-1 h-4 bg-indigo-500 rounded-full animate-bounce`)}></div>
                  <div className={tw(`w-1 h-6 bg-indigo-500 rounded-full animate-bounce`)} style={{ animationDelay: `0.2s` }}></div>
                  <div className={tw(`w-1 h-3 bg-indigo-500 rounded-full animate-bounce`)} style={{ animationDelay: `0.4s` }}></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={tw(`mt-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-1 lg:p-1.5 shadow-2xl`)}>
        <div className={tw(`bg-slate-900 rounded-[calc(1.5rem-4px)] p-8 text-center`)}>
          <p className={tw(`text-indigo-400 text-sm font-bold uppercase tracking-widest mb-4`)}>
            Data Flow Integration
          </p>
          <div className={tw(`flex flex-wrap justify-center items-center gap-3 text-white font-medium`)}>
            <span className={tw(`px-3 py-1 bg-slate-800 rounded-lg border border-slate-700`)}>Meta Ads</span>
            <span className={tw(`text-slate-600`)}>→</span>
            <span className={tw(`px-3 py-1 bg-indigo-900 bg-opacity-50 text-indigo-300 rounded-lg border border-indigo-500 border-opacity-30`)}>GoChat IA</span>
            <span className={tw(`text-slate-600`)}>→</span>
            <span className={tw(`px-3 py-1 bg-slate-800 rounded-lg border border-slate-700`)}>CDP</span>
            <span className={tw(`text-slate-600`)}>→</span>
            <span className={tw(`px-3 py-1 bg-slate-800 rounded-lg border border-slate-700`)}>Customer.io</span>
            <span className={tw(`text-slate-600`)}>→</span>
            <span className={tw(`px-3 py-1 bg-green-900 bg-opacity-50 text-green-300 rounded-lg border border-green-500 border-opacity-30`)}>Venta</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
