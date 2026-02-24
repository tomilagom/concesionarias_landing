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
  <section>
    <div className={tw(`w-full bg-white py-20`)}>
      <div className={tw(`max-w-7xl mx-4 lg:mx-auto`)}>
        <div className={tw(`text-center mb-20`)}>
          <h2 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase mb-4`)}>
            Resultados Reales
          </h2>
          <p className={tw(`text-4xl lg:text-5xl font-bold text-gray-900`)}>
            En números que importan
          </p>
        </div>

        <div className={tw(`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`)}>
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className={tw(
                  `bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-8 border border-slate-200 hover:shadow-lg transition`,
                )}
              >
                <div className={tw(`mb-6`)}>
                  <p className={tw(`text-indigo-600 text-4xl lg:text-5xl font-bold mb-1`)}>{benefit.metric}</p>
                  {benefit.submetric && <p className={tw(`text-gray-600 text-sm uppercase tracking-wide`)}>{benefit.submetric}</p>}
                </div>

                <h3 className={tw(`text-xl font-bold text-gray-900 mb-3`)}>{benefit.title}</h3>
                <p className={tw(`text-gray-600 leading-relaxed`)}>{benefit.description}</p>

                <div className={tw(`mt-6 h-32 bg-gradient-to-r from-indigo-100 to-indigo-50 rounded flex items-center justify-center text-gray-400 text-sm`)}>
                  Chart Placeholder
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>

    <div className={tw(`w-full bg-indigo-600 py-16`)}>
      <div className={tw(`max-w-4xl mx-4 lg:mx-auto text-center`)}>
        <h2 className={tw(`text-4xl lg:text-5xl font-bold text-white mb-6`)}>
          ¿Cómo es que tu competencia ya usa esto?
        </h2>
        <p className={tw(`text-indigo-100 text-lg mb-8`)}>
          Agendar una auditoría de tu stack tecnológico es gratis. Te mostramos cuánto dinero pierdes por mes en manual work.
        </p>
        <button
          className={tw(
            `bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-indigo-50 transition inline-flex items-center gap-2`,
          )}
        >
          Reservá tu consultoría
          <Arrow className={tw(`h-5 w-5`)} />
        </button>
      </div>
    </div>
  </section>
);

export default CasesSection;
