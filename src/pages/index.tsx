import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import BrandsSection from '@/components/brands-section';
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
        title="ConcesionarIA - IA para concesionarias: califica, agenda y vende"
        description="Convierte consultas en ventas: respuesta instantánea, calificación inteligente y agendado automático de test drives. Integraciones con WhatsApp, CRM y campañas publicitarias para duplicar leads cualificados."
      />
      <Header />
      <main>
        <BrandsSection />
        <ListSection />
        <VideoSection />
        <FeatureSection />
        <CasesSection />
        <SocialProof />
      </main>
      <Footer />
    </Page>
  );
}
