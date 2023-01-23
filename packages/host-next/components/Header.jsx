import React from 'react';
import Link from 'next/link'

const Header = () => {
    return (
        <div>
            <nav>
                <Link href='/' className='mx-2'>HOME</Link>
                <Link href='/table' className='mx-2'>TABLE</Link>
                <Link href='/analitic' className='mx-2'>ANALITIC</Link>
            </nav>
        </div>
    )
};

export default Header;