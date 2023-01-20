import dynamic from 'next/dynamic';
const ButtonAsync = dynamic(() => import('remote_react/Button'), {ssr: false});
import ButtonSync from 'remote_react/Button';

import variables from '../styles/variables.module.scss';

export default function Home() {
  return (
    <div className="container">
       
      <div>Name: host</div>
      <div>Async</div>
      <ButtonAsync nameBtn={'Async'}/>
      <div>Sync</div>
      <ButtonSync nameBtn={'Sync'}/>
      <h1 style={{ color: variables.primaryColor }}>SCSS Next js</h1>
      <h4 className='btn-text'>CSS Next js class</h4>
      <h1 className="text-3xl font-bold underline p-3">Hello TAILWIND!</h1>
    </div>
  );
}
