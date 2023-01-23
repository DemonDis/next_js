import React from 'react';
import Link from 'next/link'

const Header = () => {
    return (
        <div>
            <nav>
                <Link href='/'>HOME</Link>
                <Link href='/table'>TABLE</Link>
                <Link href='/analitic'>ANALITIC</Link>
            </nav>
        </div>
    )
};

export default Header;