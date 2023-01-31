import React from 'react';
import Image from 'next/image'

import profilePic from '../../public/assets/texture.jpg'
import profileSvg from '../../public/assets/Arrow.svg'

import Header from '../../components/Header';
import SvgArrow from '../../components/SvgArrow';

import variables from '../../styles/variables.module.scss';

const Monitor = () => {

    return (
        <div>
            <Header/>
            <h1 style={{ color: variables.primaryColor }}>SCSS modul Next js</h1>
            <h4 className='btn-text'>CSS Next js</h4>
            <h1 className="text-3xl font-bold underline p-3 ">TAILWIND</h1>
            <Image
                src={profilePic}
                alt="me"
                width="100%"
                height="100%"
            />
            <Image
                src={profileSvg}
                alt="me"
                width="50"
                height="50"
            />
            <SvgArrow
                size={20}
            />
        </div>
    )
}

export default Monitor;