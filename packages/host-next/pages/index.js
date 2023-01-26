import dynamic from 'next/dynamic';
// import Link from 'next/link';

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
      {/* <Link href='/table'>Home</Link> */}
      <Page/>
    </div>
  );
}