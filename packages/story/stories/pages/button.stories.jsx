import { Button } from 'remote_react/ReactComp';
// const Button = React.lazy(() => import('remote_react/ReactComp'));

export default {
  title: 'Pages',
  component: Button
}

export const ButtonPage = () => {
  return (
    <div>
      <Button/>
    </div>
  )
}