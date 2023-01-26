import React from 'react';
import Link from 'next/link'

import variables from '../styles/variables.module.scss';

const Table = () => {
    return (
        <div>
            <h1>TABLE</h1>
            <h1 style={{ color: variables.primaryColor }}>SCSS modu Next js</h1>
            <h4 className='btn-text'>CSS Next js class</h4>
            <h1 className="text-3xl font-bold underline p-3 ">Hello TAILWIND!</h1>
            <ul className='my-2'>
                <li className='mx-2'>
                <Link href="/table/first">First Post</Link>
                </li>
                <li className='mx-2'>
                <Link href="/table/second">Second Post</Link>
                </li>
            </ul>
            <Link href='/'>HOME</Link>
        </div>
    )
}

export default Table;