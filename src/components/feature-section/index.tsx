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
  <section className={tw(`py-20 bg-slate-900`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`mb-16 text-center`)}>
        <h2 className={tw(`text-base text-indigo-400 font-semibold tracking-wide uppercase mb-4`)}>La Solución</h2>
        <p className={tw(`text-4xl lg:text-5xl font-bold tracking-tight text-white`)}>
          El Sistema Operativo para tu Concesionaria
        </p>
      </div>

      <div className={tw(`grid grid-cols-1 gap-12 mt-16`)}>
        {solutions.map((solution, index) => (
          <div
            key={solution.title}
            className={tw(`bg-slate-800 rounded-lg p-8 lg:p-12 border border-slate-700 hover:border-indigo-500 transition`)}
          >
            <div className={tw(`flex items-start gap-4 mb-6`)}>
              <span className={tw(`flex w-10 h-10 items-center justify-center text-base font-bold rounded-full bg-indigo-600 text-white flex-shrink-0`)}>
                {index + 1}
              </span>
              <div>
                <h3 className={tw(`text-2xl font-bold text-white`)}>{solution.title}</h3>
              </div>
            </div>

            <p className={tw(`text-gray-300 leading-relaxed mb-8 text-lg`)}>{solution.description}</p>

            <div className={tw(`grid grid-cols-1 sm:grid-cols-2 gap-4`)}>
              {solution.benefits.map((benefit) => (
                <div key={benefit} className={tw(`flex items-start gap-3`)}>
                  <Check width={20} height={20} fill="currentColor" className={tw(`h-5 w-5 text-indigo-400 flex-shrink-0 mt-0.5`)} />
                  <span className={tw(`text-gray-200`)}>{benefit}</span>
                </div>
              ))}
            </div>

            {/* Placeholder para diagrama */}
            <div className={tw(`mt-8 rounded-lg bg-slate-700 h-48 flex items-center justify-center text-gray-400`)}>
              <span className={tw(`text-center`)}>
                <p className={tw(`text-sm font-semibold mb-1`)}>Diagrama de Flujo</p>
                <p className={tw(`text-xs`)}>Lead Flow + Integration</p>
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className={tw(`mt-16 bg-indigo-600 rounded-lg p-10 text-center`)}>
        <p className={tw(`text-white text-lg font-semibold mb-2`)}>
          ¿Cómo integran los datos? Así:
        </p>
        <p className={tw(`text-indigo-100`)}>
          Meta Ads → GoChat IA → CDP → Customer.io Journeys → CRM del Vendedor → Venta Confirmada
        </p>
      </div>
    </div>
  </section>
);

export default FeatureSection;
