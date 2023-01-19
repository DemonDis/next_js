import dynamic from 'next/dynamic';
const RemoteButton = dynamic(() => import('remote/Button'), {
  ssr: false,
});
export default function Home() {
  return (
    <div class="container">
      <div>Name: host</div>
      <div>Type: SSR</div>
      <div>Framework: next</div>
      <div>Language: JavaScript</div>
      <div>CSS: CSS</div>
      <RemoteButton />
    </div>
  );
}
