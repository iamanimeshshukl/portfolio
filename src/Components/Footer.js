import React from 'react'
import { AppText, socialNetwork } from '../Constants'

const Footer = () => {
  return (
    <div className='bg-black mt-10 p-20 items-center flex flex-col  px-10 md:px-80'>
     <div className='flex gap-4'>
        {socialNetwork.map((item,index)=>(
            <div>
                <img src={item.logo} className="w-[40px]"/>
            </div>
        ))}
        </div>
        <h1 className='text-white text-[15px] mt-4'>{AppText.copywriteText}</h1>
    </div>
  )
}

export default Footer