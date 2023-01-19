import dynamic from 'next/dynamic';
const RemoteButton = dynamic(() => import('remote/Button'), {
  ssr: false,
});
const RemoteButton2 = dynamic(() => import('remote_app_2/Button'), {
  ssr: false,
});
export default function Home() {
  return (
    <div className="container">
      <div>Name: host</div>
      <RemoteButton />
      <RemoteButton2 />
    </div>
  );
}
