// import Button from '../components/Button';
import React, { Fragment, Suspense } from 'react';
import dynamic from 'next/dynamic';
const RemoteButton = dynamic(() => import('remote/Button'), {
  ssr: false,
});

// const RemoteTitle = dynamic(
//   () => {
//     return import('remote/Button');
//   },
//   { ssr: false },
// );

export default function Home() {
  return (
    <div style={{ padding: '2%' }}>
      <h1>Next JS and React</h1>
      <h2>Host - Button</h2>
      {/* <Button /> */}
      <h2>Client - Button</h2>
      <RemoteButton />
      {/* <RemoteTitle /> */}
    </div>
  );
}