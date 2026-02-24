import { tw } from 'twind';
import Arrow from '@/constants/svg/arrow.svg';


const benefits = [
  {
    title: `Ahorra 45+ horas por semana`,
    description: `Sin respuestas manuales, sin calificación manual, sin transfer de datos entre sistemas. Tu equipo vendedor se enfoca en vender.`,
    metric: `45+ horas`,
  },
  {
    title: `Atención 24/7 sin costo adicional`,
    description: `Los bots responden a las 3 AM, califican leads mientras tu equipo duerme. Cero leads fríos, cero oportunidades perdidas.`,
    metric: `0 leads`,
    submetric: `perdidos`,
  },
  {
    title: `Escala sin contratar más personal`,
    description: `Cada lead nuevo no requiere un vendedor nuevo. El sistema se expande, no tu nómina. Margen operativo sano.`,
    metric: `∞ leads`,
    submetric: `mismo equipo`,
  },
  {
    title: `Conversion Rate +35-50%`,
    description: `Respuestas rápidas, seguimiento personalizado y calificación automática = más autos vendidos con el mismo tráfico.`,
    metric: `+35-50%`,
    submetric: `conversiones`,
  },
  {
    title: `ROI transparente en Ads`,
    description: `Sabes exactamente cuánto cuesta cada venta real. No gastás dinero en clics que no convierten.`,
    metric: `100%`,
    submetric: `attribution`,
  },
  {
    title: `Decisiones basadas en datos`,
    description: `Tu CDP genera insights automáticos. "El 60% que miró esta SUV compra en 7-10 días". Vende estadística, no intuición.`,
    metric: `360°`,
    submetric: `customer view`,
  },
];

const CasesSection = () => (
  <section className={tw(`relative overflow-hidden`)}>
    <div className={tw(`w-full bg-slate-50 py-28`)}>
      <div className={tw(`max-w-7xl mx-4 lg:mx-auto`)}>
        <div className={tw(`text-center mb-20`)}>
          <h2 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase mb-4`)}>
            Resultados Reales
          </h2>
          <p className={tw(`text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight`)}>
            En números que importan
          </p>
        </div>

        <div className={tw(`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`)}>
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className={tw(
                  `bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group`,
                )}
              >
                <div className={tw(`mb-6`)}>
                  <p className={tw(`text-indigo-600 text-5xl font-extrabold mb-1 tracking-tighter group-hover:scale-105 transition-transform origin-left`)}>{benefit.metric}</p>
                  {benefit.submetric && <p className={tw(`text-slate-500 text-xs font-bold uppercase tracking-widest`)}>{benefit.submetric}</p>}
                </div>

                <h3 className={tw(`text-xl font-bold text-slate-900 mb-3`)}>{benefit.title}</h3>
                <p className={tw(`text-slate-600 leading-relaxed text-sm`)}>{benefit.description}</p>

                <div className={tw(`mt-8 h-2 bg-slate-100 rounded-full overflow-hidden`)}>
                  <div className={tw(`h-full bg-indigo-600 rounded-full animate-pulse`)} style={{ width: `70%` }}></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>

    <div className={tw(`w-full bg-slate-900 py-24 relative overflow-hidden`)}>
      <div className={tw(`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-500`)}></div>
      <div className={tw(`max-w-4xl mx-4 lg:mx-auto text-center relative z-10`)}>
        <h2 className={tw(`text-4xl lg:text-5xl font-extrabold text-white mb-8 tracking-tight`)}>
          ¿Cómo es que tu competencia <br/>ya usa esto?
        </h2>
        <p className={tw(`text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed`)}>
          Agendar una auditoría de tu stack tecnológico es gratis. Te mostramos cuánto dinero pierdes por mes en <span className={tw(`text-white underline decoration-indigo-500 underline-offset-4`)}>trabajo manual</span>.
        </p>
        <button
          className={tw(
            `bg-indigo-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-indigo-500 hover:shadow-2xl transition-all active:scale-95 inline-flex items-center gap-3`,
          )}
        >
          Reservá tu consultoría gratuita
          <Arrow className={tw(`h-5 w-5`)} />
        </button>
      </div>
    </div>
  </section>
);

export default CasesSection;
