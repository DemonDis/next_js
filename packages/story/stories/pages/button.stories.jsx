// import Button from '../../pages/button'
// import Button from 'host_next/ButtonNext'
import {Button} from 'remote_react/ReactComp'
// const Button = dynamic(() => import('host_next/ButtonNext'), {ssr: false});
// const Button = dynamic(
//   async () => {
//     return import('host_next/ButtonNext');
//   },
//   {
//     ssr: false,
//   },
// );

export default {
  title: 'Pages',
  component: Button
}

export const ButtonPage = () => <Button/>
