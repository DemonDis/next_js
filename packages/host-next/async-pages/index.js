import dynamic from 'next/dynamic';
const ButtonAsync = dynamic(() => import('remote_react/Button'), {ssr: false});
const Login = dynamic(() => import('remote_react/Login'), {ssr: false});

export default function Home() {
  return (
    <div className="container m-4">
      <Login/>
      <ButtonAsync nameBtn={'Async'}/>
    </div>
  );
}
