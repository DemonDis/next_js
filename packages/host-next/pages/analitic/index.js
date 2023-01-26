import React from 'react';
import Link from 'next/link'

import Diagram from '../../components/Diagram';
import Header from '../../components/Header';

import variables from '../../styles/variables.module.scss';

const Analitic = () => {
    return (
        <div>
            <Header/>
            <h2>ANALITIC</h2>
            <Diagram />
            <h1 style={{ color: variables.primaryColor }}>SCSS modu Next js</h1>
            <h4 className='btn-text'>CSS Next js class</h4>
            <h1 className="text-3xl font-bold underline p-3 ">Hello TAILWIND!</h1>
        </div>
    )
}

export default Analitic;