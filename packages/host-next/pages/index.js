import dynamic from 'next/dynamic';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Page = dynamic(
  async () => {
    return import('../async-pages/index');
  },
  {
    ssr: false,
  },
);

export default function Home() {
  return (
    <div>
        <Header/>
          <Page />
        <Footer/>
    </div>
  );
}
