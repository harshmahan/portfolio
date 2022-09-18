/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link'
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    pageInfo: PageInfo;
}

const Hero = ({ pageInfo }: Props) => {
    const [text, count] = useTypewriter({
        words: [`Hi, My Name is ${pageInfo?.name}`, "Guy-who-loves-Coffee.jsx", "<ButLovesToCodeMore />"],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />
        <img className="relative rounded-full h-32 w-32 mx-auto object-cover" src={urlFor(pageInfo.heroImage).url()} alt=""/> 
        <div className="z-20">
            <h2 className="text-sm uppercase text-gray-500 tracking-[10px]">{pageInfo?.role}</h2>
            <h1 className="text-5xl lg:text-6xl font-semibold px-10">
                <span>{text}</span>
                <Cursor cursorColor='#F7AB0A'/> 
            </h1>
            <div className="pt-5">
                <Link href="#about">
                    <button className="heroButton">About</button>
                </Link>
                <Link href="#experience">
                    <button className="heroButton">Experience</button>
                </Link>
                <Link href="#skills">
                    <button className="heroButton">Skills</button>
                </Link>
                <Link href="#projects">
                    <button className="heroButton">Projects</button>
                </Link>
            </div>
        </div>
        
    </div>
  )
}

export default Hero