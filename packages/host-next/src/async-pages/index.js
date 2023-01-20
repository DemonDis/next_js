import dynamic from 'next/dynamic';
const ButtonAsync = dynamic(() => import('remote_react/Button'), {ssr: false});
import ButtonSync from 'remote_react/Button';

export default function Home() {
  return (
    <div className="container">
      <div>Name: host</div>
      <div>Async</div>
      <ButtonAsync nameBtn={'Async'}/>
      <div>Sync</div>
      <ButtonSync nameBtn={'Sync'}/>
    </div>
  );
}
