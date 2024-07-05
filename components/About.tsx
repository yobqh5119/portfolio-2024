import React from 'react'
import { Button } from './ui/HoverBorder'
import Image from 'next/image'
import ProfilePic from '../assets/profile.jpeg'

const About = () => {
  return (
    <div className='py-20 my-20' id="about">
      <h1 className="heading">
        About {' '}
        <span className='text-purple'>Me</span>
      </h1>
      <div className='grid lg:grid-cols-2 gap-8 mt-20 grid-cols-1'>
        <div className='flex items-center'>
          <p className='leading-loose'>
            I am a frontend engineer with over 5 years of experience. I started my journey as a self-taught engineer after working in retail for about a year after my graduation. I began by watching a lot of learning materials on YouTube, Udemy, and Treehouse, and started building my own portfolio of projects. That led me to my first opportunity as a web developer at Macquarie. <br />

            From there, I kept learning different skills that I didn&apos;t have at that time, such as React, TypeScript, GraphQL, React Query, Jest, React Testing Library, etc., to constantly upgrade my skills as a developer. I went on to work at IKEA as a frontend engineer and then got a chance to work as a frontend engineer at Best Buy Health. Five years have already passed, and I have met great mentors throughout my journey and have learned a ton, but I still have the same motivation, which is to always grow as an engineer.
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <Button borderClassName='rounded-full'>
            <Image src={ProfilePic} alt='profile picture' width={500} height={500} className='rounded-xl' />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default About