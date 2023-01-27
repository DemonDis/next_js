import dynamic from 'next/dynamic';
import localFont from '@next/font/local';

import '../styles/index.css';
import '../styles/index.scss';

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

const myFont = localFont({ src: '../styles/fonts/Proxima/ProximaNovaCond-Black.woff2' });
// const myFont = localFont({ src: '../styles/fonts/Inkulinati/Inkulinati-Regular.otf' });
// const myFont = localFont({ src: '../styles/fonts/Truth/Truth.ttf' });

console.log(__webpack_share_scopes__);
const App = dynamic(
  async () => {
    return import('../async-pages/_app');
  },
  {
    ssr: false,
  },
);

function Home(props) {
  return (
    <main className={myFont.className}>
      <App {...props} className={myFont.className}/>
    </main>
  )
}

export default Home;
