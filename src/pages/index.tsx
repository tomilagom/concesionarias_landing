import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Header from '@/components/header';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import CasesSection from '@/components/cases-section';
import SocialProof from '@/components/social-proof';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <Page>
      <NextSeo
        title="Concesionaria AI - Automatización para Concesionarias"
        description="Automatiza tu concesionaria con IA conversacional, CDP y growth marketing. Califica leads 24/7 y aumenta conversiones sin contratar más personal."
      />
      <Header />
      <main>
        <ListSection />
        <FeatureSection />
        <CasesSection />
        <SocialProof />
      </main>
      <Footer />
    </Page>
  );
}
