import React from 'react';
import SectionsTitle from '@/components/SectionsTitle';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import skillsMockData from '@/mockData/skillsMockData'
import { inter, goldman } from '@/app/fonts'

import './Skills.css'

function Skills () {
  return (
    <div className='w-full z-10'>
      {topWave()}
      <div className="w-full bg-[#142664] lg:py-16 pb-8">
        <div className={[inter.className, 'container mx-md py-6 flex flex-col lg:flex-row items-center'].join(' ')}>
          <div className="w-full lg:w-1/4">
            <SectionsTitle title="Skills" variant="none" color="white" />
          </div>
          <div className='flex items-center lg:w-3/4 grid md:grid-cols-3 lg:gap-2 gap-4'>
              {skillsMockData.map(({ id, title, items }) => (
                <div className='relative' key={id}>
                  <Card className="h-fit mx-3 rounded-3xl z-10 relative">
                    <CardHeader>
                      <CardTitle className={goldman.className}>{title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {items.map((item, i) => (
                        <CardDescription key={i} className='text-base'>
                          {item}
                        </CardDescription>
                      ))}
                    </CardContent>
                  </Card>
                  <div className={`card-${id}-first z-0`}></div>
                  <div className={`card-${id}-second z-0`}></div>
                  <div className={`card-${id}-third z-0`}></div>
                </div>
              ))}
            </div>
        </div>
      </div>
      {bottomWave()}
    </div>
  )
}

const topWave = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 1439.8 67.3"
    className="isvg-item z-10"
  >
      <path fill="#142664" d="M1440.3-0.1l0.1,67.8L0,67.4l0-56.1c0,0,187,4.1,396.2,20.5C969.6,76.5,1440.3-0.1,1440.3-0.1z" />
  </svg>
)

const bottomWave = () => (
  <div className='z-10 relative'>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      id="Camada_1"
      x="0px"
      y="0px"
      viewBox="0 0 1439.8 115.3"
      className="svg-bottom z-10"
    >
      <style type="text/css"></style>
      <path fill="#00E6B3" className="st0" d="M1440.8,111.6c0,0-439.4,16.8-922.3-20.9C185.2,64.6-1.1,112.6-1.1,112.6L-1,11.3c0,0,188,4.1,397.2,20.5  c573.4,44.7,1044-31.9,1044-31.9L1440.8,111.6z">
      </path>
    </svg>
    <style>{`
      .svg-bottom {
        enable-background: new 0 0 1439.8 115.3;
        position: absolute;
        top: 0;
        transform: translateY(-50%);
      }
    `}</style>
  </div>
);
export default Skills;