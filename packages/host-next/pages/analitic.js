import React from 'react';
import Link from 'next/link'
import Diagram from '../components/Diagram';

import variables from '../styles/variables.module.scss';

const Analitic = () => {
    return (
        <div>
            <h2>ANALITIC</h2>
            <Diagram />
            <h1 style={{ color: variables.primaryColor }}>SCSS modu Next js</h1>
            <h4 className='btn-text'>CSS Next js class</h4>
            <h1 className="text-3xl font-bold underline p-3 ">Hello TAILWIND!</h1>
            <Link href='/monitor'>LOGIN</Link>
        </div>
    )
}

export default Analitic;