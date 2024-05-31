"use client"

import React, { useState } from 'react';
import Image from "next/image";
import { goldman } from '@/app/fonts';
import './Hero.css'
import socialMockData from '../mockData/socialmockData'

function Hero () {
  const [focusedIcon, setFocusedIcon] = useState('')
  return (
      <div className={[goldman.className, "mx-auto w-full"].join(' ')}>
        <div className='bg-[#172554] h-screen flex items-center relative '>
        <div>
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div>
        <div className='hero-container container mx-auto grid grid-cols-4'>
          <div className='col-span-2 profile-image'>
            <Image
              src="/profile-image.jpg"
              alt="Profile image of Grazielle Carvalho"
              width={450}
              height={450}
              priority
              className='block mx-auto rounded-full'
            />
          </div>
          <div className='flex flex-col justify-center col-span-2'>
            {/* TITLE */}
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-white py-6">
              Hi, call me Ellie
            </h1>
            {/* DESCRIPTION */}
            <div>
              <p className="text-white text-3xl">
                Front-end developer
              </p>
              <p className="text-white text-3xl">
                and UX/UI designer
              </p>
            </div>
            {/* SOCIAL MEDIA */}
            <div className='mt-14'>
              <div className='flex gap-8 items-center'>
                <p className="text-white text-xl">
                  Follow me
                </p>
                {socialMockData.map(({ name, icon, url }, idx) => (
                  <div className='w-16 h-16 flex items-center justify-center'>
                    <a href={url} aria-label={`Follow Ellie on ${name}`} tabIndex={0}>
                      <Image
                        key={idx}
                        src={`/${icon}-icon${focusedIcon === icon ? '-active' : ''}.png`}
                        alt={`${name} icon`}
                        width={focusedIcon === icon ? 50 : 40}
                        height={focusedIcon === icon ? 50 : 40}
                        className={`block transition-all duration-400 ease-in-out transform ${
                          focusedIcon === icon ? 'scale-110' : 'scale-100'
                        }`}
                        onMouseOver={() => setFocusedIcon(icon)}
                        onMouseLeave={() => setFocusedIcon('')}
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    
  )
}

export default Hero;