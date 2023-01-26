import React from 'react';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react';

const Header = () => {
    return (
      <Disclosure as="nav" className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
        
              </Disclosure.Button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="block h-8 w-auto lg:hidden"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
                <img
                  className="hidden h-8 w-auto lg:block"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <Link href='/' className={'text-gray-300 hover:bg-gray-700 hover:text-white'}>LOGIN</Link>
                  <Link href='/monitor' className={'text-gray-300 hover:bg-gray-700 hover:text-white'}>MONITOR</Link>
                  <Link href='/analitic' className={'text-gray-300 hover:bg-gray-700 hover:text-white'}>ANALITIC</Link>           
                </div>
              </div>
            </div>

          </div>
        </div>
      </Disclosure>
    )
};

export default Header;