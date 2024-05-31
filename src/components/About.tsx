import React from 'react';
import SectionsTitle from '@/components/SectionsTitle';
import aboutMockData from '@/mockData/aboutMockData'
import { inter} from '@/app/fonts'

function About () {
  return (
    <div className={[inter.className, 'container mx-md py-6 md: py-16 flex flex-col lg:flex-row items-center'].join(' ')}>
      <div className="w-full lg:w-1/4">
        <SectionsTitle variant='primary' title={aboutMockData.title} />
      </div>
      <div className="col-span-3 w-full lg:w-3/4">
        <div className='flex flex-col gap-4 text-lg' dangerouslySetInnerHTML={{ __html: aboutMockData.content }}></div>
      </div>
    </div>
  )
}

export default About;