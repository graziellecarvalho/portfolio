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
      <div className='bg-[#142664] h-screen flex items-center relative '>
      <div>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <div className='hero-container container px-1 mx-auto grid lg:grid-cols-4'>
        <div className='col-span-2 profile-image'>
          <Image
            src="/profile-image.jpg"
            alt="Profile image of Grazielle Carvalho"
            width={250}
            height={250}
            className='block mx-auto rounded-full md:w-96 md:h-96'
          />
        </div>
        <div className='flex flex-col justify-center col-span-2 text-center lg:text-start'>
          {/* TITLE */}
          <h1 className="scroll-m-20 md:text-7xl text-3xl font-extrabold tracking-tight  text-white py-6">
            Hi, call me Ellie
          </h1>
          {/* DESCRIPTION */}
          <div>
            <p className="text-white md:text-4xl text-xl">
              Front-end developer
            </p>
            <p className="text-white md:text-4xl text-xl">
              and UX/UI designer
            </p>
          </div>
          {/* SOCIAL MEDIA */}
          <div className='mt-14 flex justify-center lg:justify-start'>
            <div className='flex md:gap-8 gap-2 items-center'>
              <p className="text-white text-xl">
                Follow me
              </p>
              {socialMockData.map(({ name, icon, url }, idx) => (
                <div className='w-16 h-16 flex items-center justify-center' key={idx}>
                  <a href={url} aria-label={`Follow Ellie on ${name}`} tabIndex={0} target='_blank'>
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