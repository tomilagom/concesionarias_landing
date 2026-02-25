import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import VideoSection from '@/components/video-section';
import CasesSection from '@/components/cases-section';
import SocialProof from '@/components/social-proof';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <Page>
      <NextSeo
        title="ConcesionarIA - Tu equipo de ventas IA experto en autos"
        description="Convierte consultas en ventas reales. Nuestra IA califica leads, agenda test drives y reactiva tu base de datos automáticamente. Ideal para gerentes de ventas exigentes."
      />
      <Header />
      <main>
        <ListSection />
        <FeatureSection />
        <VideoSection />
        <CasesSection />
        <SocialProof />
      </main>
      <Footer />
    </Page>
  );
}
