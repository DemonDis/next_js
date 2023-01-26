import React from 'react';
import Link from 'next/link'
import Header2 from '../components/Header';
import Footer from '../components/Footer';

const Header = dynamic(
  async () => {
    return import('../async-pages/components/Header');
  },
  {
    ssr: false,
  },
);

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
                <Header/>
                <Header2/>
                <Footer/>
            <Link href='/'>Home</Link>
        </div>
    )
}

export default Login;