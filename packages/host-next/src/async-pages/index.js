import dynamic from 'next/dynamic';
const RemoteButton = dynamic(() => import('remote_react/Button'), {
  ssr: false,
});
import RemoteButton2 from 'remote_react/Button';

export default function Home() {
  return (
    <div className="container">
      <div>Name: host</div>
      <div>Async</div>
      <RemoteButton nameBtn={'Async'}/>
      <div>Sync</div>
      <RemoteButton2 nameBtn={'Sync'}/>
    </div>
  );
}
