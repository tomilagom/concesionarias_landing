import { tw } from 'twind';
import FadeIn from '@/components/scroll-reveal';

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
    description: `Un interesado en una Hilux espera 4 horas una respuesta. Cuando tu vendedor contesta, ya cerró trato con la competencia.`,
  },
  {
    title: `Sin personalización en el seguimiento`,
    description: `Envías la misma campaña a todos. No existe segmentación por modelo de auto, presupuesto o intención de compra real.`,
  },
  {
    title: `Vendedores haciendo de secretarios`,
    description: `Tus mejores cerradores pierden 4 horas al día calificando curiosos en WhatsApp en lugar de estar vendiendo en el salón.`,
  },
  {
    title: `No sabes qué estrategia funciona realmente`,
    description: `Optimizas por clics pero vendes por conversiones. Tus campañas no hablan con tu CRM. Es una caja negra.`,
  },
];

const ListSection = () => (
  <section className={tw(`lg:py-28 pt-20 pb-20 bg-white`)}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`mb-20 text-center`)}>
        <h2 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase mb-4`)}>
          Tus dolores de cabeza diarios
        </h2>
        <p className={tw(`text-4xl lg:text-5xl font-bold tracking-tight text-slate-900`)}>
          ¿Por qué tu equipo de ventas no llega al objetivo?
        </p>
      </div>
      <div className={tw(`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`)}>
        {listItems.map((item, index) => (
          <div className={tw(`relative p-8 rounded-2xl border border-slate-100 bg-slate-50 bg-opacity-50 hover:bg-white hover:shadow-xl transition-all group`)} key={item.title}>
            <div className={tw(`mb-6`)}>
              <span
                className={tw(`flex w-12 h-12 items-center justify-center text-lg font-bold rounded-xl bg-indigo-600 text-white shadow-lg group-hover:scale-110 transition-transform`)}
              >
                {index + 1}
              </span>
            </div>
            <div>
              <h3 className={tw(`text-xl font-bold text-slate-900 mb-3`)}>{item.title}</h3>
              <p className={tw(`text-slate-600 leading-relaxed`)}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ListSection;
