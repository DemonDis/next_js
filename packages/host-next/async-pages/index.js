// import dynamic from 'next/dynamic';
import {Login, Button} from 'remote_react/ReactComp';
// const Button = dynamic(() => import('remote_react/ReactComp'), {ssr: false});

export default function Home() {
  return (
    <div className="container m-4">
      <Login/>
      <Button nameBtn={'Async'}/>
    </div>
  );
}
