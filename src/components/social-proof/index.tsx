import { tw } from 'twind';
import Quote from '@/constants/svg/quote.svg';

const testimonials = [
  {
    name: `Juan Brunel`,
    role: `Gerente de Ventas`,
    company: `Concesionaria Toyota`,
    text: `Implementamos GoChat hace 3 meses. Los leads que antes se dormían ahora tienen seguimiento 24/7. Nuestro conversion rate subió 42% sin aumentar publicidad.`,
  },
  {
    name: `María Finnocciaro`,
    role: `Directora de Marketing`,
    company: `Grupo Automotriz AAA`,
    text: `La nueva arquitectura de data cambió nuestro juego. Ahora sabemos exactamente qué auto miró cada cliente y le mandamos la promo correcta en el momento correcto. Cero guesswork.`,
  },
  {
    name: `Juan Carlos Almada`,
    role: `Propietario`,
    company: `Concesionario Independiente`,
    text: `Teníamos datos fragmentados en 5 plataformas diferentes. Hyppo los centralizó todo. Mi equipo ahora ahorra 30+ horas por semana contestando lo mismo.`,
  },
];

const SocialProof = () => (
  <section className={tw(`py-20 bg-gray-50`)}>
    <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)}>
      <div className={tw(`text-center mb-16`)}>
        <h2 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase mb-4`)}>Qué dicen nuestros clientes</h2>
        <p className={tw(`text-4xl lg:text-5xl font-bold text-gray-900`)}>Gerentes que ya ganaron este juego</p>
      </div>

      <div className={tw(`grid grid-cols-1 md:grid-cols-3 gap-8`)}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className={tw(`bg-white rounded-lg p-8 border border-gray-200 shadow-sm hover:shadow-md transition`)}>
            <Quote className={tw(`w-8 h-8 text-indigo-400 mb-4`)} />
            <p className={tw(`text-gray-700 leading-relaxed mb-6 text-sm lg:text-base`)}>"{testimonial.text}"</p>
            <div className={tw(`border-t border-gray-200 pt-6`)}>
              <p className={tw(`font-semibold text-gray-900`)}>{testimonial.name}</p>
              <p className={tw(`text-sm text-indigo-600 font-medium`)}>{testimonial.role}</p>
              <p className={tw(`text-sm text-gray-500`)}>{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={tw(`mt-16 text-center`)}>
        <p className={tw(`text-gray-600 text-lg mb-4`)}>¿Vos también querés estos resultados?</p>
        <a
          href="https://crm.hyppo.io/widget/bookings/piorichards-concesionarias-ai"
          target="_blank"
          rel="noopener noreferrer"
          className={tw(`bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition inline-block`)}
        >
          Hablá con nuestro equipo
        </a>
      </div>
    </div>
  </section>
);

export default SocialProof;
