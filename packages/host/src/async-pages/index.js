import dynamic from 'next/dynamic';
const RemoteButton = dynamic(() => import('remote/Button'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: host</div>
      <div>Type: SSR</div>
      <div>Framework: next</div>
      <div>Language: JavaScript</div>
      <div>CSS: Tailwind</div>
      <RemoteButton />
    </div>
  );
}
