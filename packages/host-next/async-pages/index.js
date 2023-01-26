// import dynamic from 'next/dynamic';
import {Login} from 'remote_react/ReactComp';
import { useRouter } from 'next/router';
// const Button = dynamic(() => import('remote_react/ReactComp'), {ssr: false});

export default function Home() {
    const router = useRouter();
  const navigate = () => router.push('/table');
  return (
    <div className="container m-4">
      <Login
        loginClick={() => navigate()}
      />
    </div>
  );
}
