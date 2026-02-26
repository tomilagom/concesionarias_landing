import { tw } from 'twind';

const brands = [
  { name: 'Nissan', logo: '/images/nissan.png' },
  { name: 'Fiat', logo: '/images/fiat.png' },
  { name: 'Jeep', logo: '/images/jeep.png' },
  { name: 'Kia', logo: '/images/kia.jpg' },
  { name: 'Chery', logo: '/images/chery.png' },
  { name: 'Crestanevada', logo: '/images/crestanevada_big.webp' },
  { name: 'Grupo Garden', logo: '/images/Grupo-Garden-Paraguay-2026-02-26_11_42.png' },
];

const BrandsSection = () => (
  <section className={tw(`py-12 bg-white border-b border-gray-100`)}>
    <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)}>
      <p className={tw(`text-left text-sm font-bold text-slate-500 uppercase tracking-widest mb-10`)}>
        Algunos de nuestros clientes:
      </p>
      <div className={tw(`flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-20`)}>
        {brands.map((brand) => (
          <img
            key={brand.name}
            src={brand.logo}
            alt={brand.name}
            className={tw(`h-12 md:h-14 w-auto object-contain`)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default BrandsSection;
