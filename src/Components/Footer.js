import React from 'react'
import { AppText, } from '../Constants'
import { facebook, instagram, linkdin, youtube } from '../assets'

const Footer = () => {
  return (
    <div className='bg-black mt-10 p-20 items-center flex flex-col  px-10 md:px-80'>
     <div className='flex gap-4'>
       <a href='https://github.com/iamanimeshshukl'><img src={youtube} className='h-12'></img></a>
       <a href='https://x.com/iamanimeshshukl?t=BdDJnLPbhMbHZjHEUBEitA&s=09'><img src={facebook} className='h-12'></img></a>
       <a href='https://www.instagram.com/animesh.ai?igsh=MWZtdXQzZWJod2ZraA=='><img src={instagram} className='h-12'></img></a>
       <a href='https://www.linkedin.com/in/animesh-shukl?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><img src={linkdin} className='h-12'></img></a>
     
        </div>
        <h1 className='text-white text-[15px] mt-4'>{AppText.copywriteText}</h1>
    </div>
  )
}

export default Footer