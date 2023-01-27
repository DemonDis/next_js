import ButtonSt from '../../pages/button'
// import Button from 'host_next/Button'

export default {
  title: 'Pages',
  component: ButtonSt
}

export const ButtonPage = () => {
  return (
    <div>
      <div>BUTTON</div>
      {/* <Button/> */}
      <ButtonSt/>
    </div>
  )
}