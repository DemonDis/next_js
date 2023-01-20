import dynamic from 'next/dynamic';
const RemoteButton = dynamic(() => import('remote_react/Button'), {
  ssr: false,
});
export default function Home() {
  return (
    <div className="container">
      <div>Name: host</div>
      <RemoteButton />
    </div>
  );
}
