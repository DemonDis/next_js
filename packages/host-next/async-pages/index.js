import dynamic from 'next/dynamic';
const ButtonAsync = dynamic(() => import('remote_react/Button'), {ssr: false});

export default function Home() {
  return (
    <div className="container m-4">
      <div>Name: host</div>
      <div>Btn REACT</div>
      <ButtonAsync nameBtn={'Async'}/>
    </div>
  );
}
