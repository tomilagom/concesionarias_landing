import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import FadeIn from '@/components/scroll-reveal';

const solutions = [
  {
    title: `Respuesta Inmediata & Calificación`,
    description: `Tus clientes no esperan. Respondemos en segundos por WhatsApp e Instagram, 24/7. La IA califica intenciones de compra, consulta stock y solo deriva leads listos a tus vendedores.`,
    benefits: [`Atención 24/7 sin esperas`, `Consulta de stock real`, `Agenda de Test Drives`, `Filtro de curiosos`],
  },
  {
    title: `Seguimiento Automático de Inventario`,
    description: `No pierdas ventas por falta de seguimiento. Si entra un modelo que buscaba un cliente antiguo, la IA le avisa automáticamente. Reactiva tu base de datos y genera ventas de oportunidades perdidas.`,
    benefits: [`Reactiva base de datos`, `Alertas de stock`, `Seguimiento post-venta`, `Servicio técnico`],
  },
  {
    title: `Inversión Inteligente (ROAS)`,
    description: `Deja de pagar por clics vacíos. Optimizamos tus campañas de Meta y Google Ads buscando compradores reales, no solo curiosos. Conecta tu inversión publicitaria directamente con los contratos firmados.`,
    benefits: [`Optimización por venta`, `Calidad sobre cantidad`, `Reportes claros`, `Menor Costo por Lead`],
  },
];

const FeatureSection = () => (
  <section className={tw(`py-28 bg-slate-900 relative overflow-hidden`)}>
    {/* Background texture */}
    <div className={tw(`absolute inset-0 opacity-10 pointer-events-none`)} style={{ backgroundImage: `radial-gradient(#4f46e5 0.5px, transparent 0.5px)`, backgroundSize: `24px 24px` }}></div>

    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 relative z-10`)}>
      <FadeIn>
        <div className={tw(`mb-20 text-center`)}>
          <h2 className={tw(`text-base text-indigo-400 font-semibold tracking-wide uppercase mb-4`)}>Potencia tu ConcesionarIA</h2>
          <p className={tw(`text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6`)}>
            Tecnología diseñada para Gerentes de Ventas exigentes
          </p>
          <p className={tw(`text-slate-400 text-lg max-w-2xl mx-auto`)}>
            Deja que la IA se encargue de lo repetitivo mientras tu equipo se enfoca en cerrar ventas.
          </p>
        </div>
      </FadeIn>

      <div className={tw(`grid grid-cols-1 lg:grid-cols-3 gap-8`)}>
        {solutions.map((solution, index) => (
          <FadeIn key={solution.title} delay={index * 200}>
            <div
              className={tw(`bg-slate-800 bg-opacity-50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 hover:border-indigo-500 transition-all flex flex-col h-full group`)}
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
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureSection;
