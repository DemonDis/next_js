import Login from '../components/Login';
import { useRouter } from 'next/router';
// import dynamic from 'next/dynamic';

// const Page = dynamic(
//   async () => {
//     return import('../async-pages/index');
//   },
//   {
//     ssr: false,
//   },
// );

export default function Home() {
  const router = useRouter();
  const navigate = () => router.push('/monitor');
  return (
    <div>
      {/* <Page/> */}
      <Login
        loginClick={() => navigate()}
      />
    </div>
  );
}