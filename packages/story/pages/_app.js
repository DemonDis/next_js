import '../styles/globals.css'
import '../styles/globals.scss'

/** @param {import('next/app').AppProps} props */

const App = dynamic(
  async () => {
    return import('../async-pages/_app');
  },
  {
    ssr: false,
  },
);


function MyApp({ Component, pageProps }) {
  return (
    <>
    <App/>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
