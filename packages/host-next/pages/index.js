import dynamic from 'next/dynamic';
import Header2 from '../components/Header';
import Footer from '../components/Footer';

const Page = dynamic(
  async () => {
    return import('../async-pages/index');
  },
  {
    ssr: false,
  },
);

const Header = dynamic(
  async () => {
    return import('../async-pages/components/Header');
  },
  {
    ssr: false,
  },
);

export default function Home() {
  return (
    <div>
        <Header/>
        <Header2/>
          <Page />
        <Footer/>
    </div>
  );
}
