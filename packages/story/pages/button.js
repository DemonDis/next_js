import { Header } from '../components/Header'
import Head from 'next/head'
// import Button from 'host_next/Button'

export default function CssModules() {
  return (
    <div>
      <Head>
        <title>Button</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
     <div>
        button - 
        {/* <Button/> */}
     </div>
    </div>
  )
}
