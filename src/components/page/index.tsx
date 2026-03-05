import Head from 'next/head';
import Navigation from '@/components/navigation';
import WhatsAppWidget from '@/components/whatsapp-widget';
import { tw } from 'twind';

interface IProps {
  children: React.ReactNode;
}

const Page = ({ children }: IProps) => (
  <div>
    <Head>
      <link rel="icon" href="/logo.png" />
    </Head>
    <div className={tw(`min-h-screen flex flex-col`)}>
      <Navigation />
      {children}
      <WhatsAppWidget />
    </div>
  </div>
);

export default Page;
