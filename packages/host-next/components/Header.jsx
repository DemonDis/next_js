import React from 'react';
import Link from 'next/link';
import { Disclosure, Menu, Transition } from '@headlessui/react';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Header = () => {
    return (
        <div>
            <nav>
                <Link href='/' className='mx-2'>LOGIN</Link>
                <Link href='/analitic' className='mx-2'>ANALITIC</Link>
            </nav>
        </div>
    )
};

export default Header;