import { tw } from 'twind';
import Quote from '@/constants/svg/quote.svg';
import FadeIn from '@/components/scroll-reveal';

const testimonials = [
  {
    name: `Juan Brunel`,
    role: `Gerente de Ventas`,
    company: `Concesionaria Toyota`,
    image: `/images/testimonial-person-1.webp`,
    text: `Implementamos GoChat hace 3 meses. Los leads que antes se dormían ahora tienen seguimiento 24/7. Nuestro conversion rate subió 42% sin aumentar publicidad.`,
  },
  {
    name: `Juan Carlos Almada`,
    role: `Propietario`,
    company: `Grupo Automotriz AAA`,
    image: `/images/testimonial-person-2.webp`,
    text: `La nueva arquitectura de data cambió nuestro juego. Ahora sabemos exactamente qué auto miró cada cliente y le mandamos la promo correcta en el momento correcto. Cero guesswork.`,
  },
  {
    name: `María Finnocciaro`,
    role: `Directora de Marketing`,
    company: `Concesionario Independiente`,
    text: `Teníamos datos fragmentados en 5 plataformas diferentes. Hyppo los centralizó todo. Mi equipo ahora ahorra 30+ horas por semana contestando lo mismo.`,
  },
];

const SocialProof = () => (
  <section className={tw(`py-20 bg-gray-50`)}>
    <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)}>
      <FadeIn>
        <div className={tw(`text-center mb-16`)}>
          <h2 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase mb-4`)}>Qué dicen nuestros clientes</h2>
          <p className={tw(`text-4xl lg:text-5xl font-bold text-gray-900`)}>Gerentes que ya ganaron este juego</p>
        </div>
      </FadeIn>

      <div className={tw(`grid grid-cols-1 md:grid-cols-3 gap-8`)}>
        {testimonials.map((testimonial, index) => (
          <FadeIn key={testimonial.name} delay={index * 200} direction="right">
            <div className={tw(`bg-white rounded-lg p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group h-full`)}>
              <div className={tw(`flex items-center mb-6`)}>
                {testimonial.image ? (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className={tw(`w-12 h-12 rounded-full object-cover mr-4 border-2 border-indigo-100 group-hover:border-indigo-500 transition-colors`)}
                  />
                ) : (
                  <div className={tw(`w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4 group-hover:bg-indigo-200 transition-colors`)}>
                    <span className={tw(`text-indigo-600 font-bold`)}>{testimonial.name[0]}</span>
                  </div>
                )}
                <Quote className={tw(`w-6 h-6 text-indigo-400 ml-auto group-hover:text-indigo-600 transition-colors`)} />
              </div>
              <p className={tw(`text-gray-700 leading-relaxed mb-6 text-sm lg:text-base`)}>"{testimonial.text}"</p>
              <div className={tw(`border-t border-gray-200 pt-6`)}>
                <p className={tw(`font-semibold text-gray-900`)}>{testimonial.name}</p>
                <p className={tw(`text-sm text-indigo-600 font-medium`)}>{testimonial.role}</p>
                <p className={tw(`text-sm text-gray-500`)}>{testimonial.company}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={400}>
        <div className={tw(`mt-16 text-center`)}>
          <p className={tw(`text-gray-600 text-lg mb-4`)}>De 'Info' a test drive en segundos</p>
          <a
            href="https://crm.hyppo.io/widget/bookings/piorichards-concesionarias-ai"
            target="_blank"
            rel="noopener noreferrer"
            className={tw(`bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition inline-block`)}
          >
            Hablá con nuestro equipo
          </a>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default SocialProof;
