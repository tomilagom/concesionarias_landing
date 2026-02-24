import { tw } from 'twind';

const listItems = [
  {
    title: `Vendedores en WhatsApp a las 3 AM`,
    description: `Tu equipo responde mensajes de leads 24/7 sin saber si van a comprar. Mientras tanto, la competencia automatiza ese trabajo.`,
  },
  {
    title: `Datos fragmentados entre Excel y redes sociales`,
    description: `Meta Ads, Google, WhatsApp, CRM... cada plataforma una isla. No sabes qué auto miró cada cliente ni si está caliente.`,
  },
  {
    title: `Leads que se enfrían mientras esperas`,
    description: `Un prospecto interesado en tu SUV roja espera 24 horas por respuesta de un vendedor. Compra otra marca porque no le respondiste.`,
  },
  {
    title: `Sin personalización en el seguimiento`,
    description: `Envías la misma campaña a todos. No existe segmentación por modelo de auto, presupuesto o intención de compra real.`,
  },
  {
    title: `Escalas contratando más personal`,
    description: `Cada lead nuevo = más vendedores. Tu COGS crece mientras los leads no califican. Es insostenible.`,
  },
  {
    title: `No sabes qué estrategia funciona realmente`,
    description: `Optimizas por clics pero vendes por conversiones. Tus campañas no hablan con tu CRM. Es una caja negra.`,
  },
];

const ListSection = () => (
  <section className={tw(`lg:py-28 pt-20 pb-20 bg-slate-50`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`mb-20 text-center`)}>
        <h2 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase mb-4`)}>
          El Problema Real
        </h2>
        <p className={tw(`text-4xl lg:text-5xl font-bold tracking-tight text-gray-900`)}>
          Tu operación no está hecha para hoy
        </p>
      </div>
      <div className={tw(`grid grid-cols-1 gap-12 lg:gap-16`)}>
        {listItems.map((item, index) => (
          <div className={tw(`flex gap-6`)} key={item.title}>
            <div className={tw(`flex-shrink-0`)}>
              <span
                className={tw(`flex w-12 h-12 items-center justify-center text-lg font-bold rounded-full bg-indigo-600 text-white`)}
              >
                {index + 1}
              </span>
            </div>
            <div>
              <h3 className={tw(`text-xl font-bold text-gray-900 mb-2`)}>{item.title}</h3>
              <p className={tw(`text-gray-600 leading-relaxed`)}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ListSection;
