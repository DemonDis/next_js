import React from 'react';
import Link from 'next/link'
import Diagram from '../components/Diagram';

const Analitic = () => {
    return (
        <div>
            <h2>ANALITIC</h2>
            <Diagram />
            <Link href='/'>HOME</Link>
        </div>
    )
}

export default Analitic;