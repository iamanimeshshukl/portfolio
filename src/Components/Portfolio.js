import React from 'react'
import { AppText } from '../Constants'
import SectionHeading from '../Shared/SectionHeading';
import {robo , img1 ,img2 , img3 , img4} from './../assets/index'

const Portfolio = () => {

  return (
    <div className='mt-5 flex justify-center flex-col'>
        <div className='flex flex-row px-6 md:px-0 items-center justify-center'>

        <SectionHeading firstTitle={AppText.Creative} secondTitle={AppText.Portfolio} />
        <img src={robo} className="w-[70px] ml-5 animate-bounce"/>
        </div>
       <div>
         <div className='grid grid-cols-2 items-center content-center md:grid-cols-3 lg:grid-cols-3
        md:px-24 lg:px-48 p-4 '>
                <div className='p-2 flex flex-col m-2 rounded-lg bg-purple-400
                transition-all ease-in-out group hover:scale-110'>
                  <a href='https://monkeycloth.vercel.app/'> <img src={img1} className="h-[180px] rounded-lg"/>
                    <h1 className='text-[14px] group-hover:scale-110 mt-2 text-center  font-bold text-white'>Monkey</h1>
                    <h1 className='text-[12px] text-white px-6 pb-3'>Explore my full-stack e-commerce project, built with React, Node.js, and MongoDB, offering a seamless shopping experience and robust backend.</h1></a> 
                </div>
                <div className='p-2 flex flex-col m-2 rounded-lg bg-purple-400
                transition-all ease-in-out group hover:scale-110'>
                  <a href=''> <img src={img4} className="h-[180px] rounded-lg"/>
                    <h1 className='text-[14px] group-hover:scale-110 mt-2 text-center  text-white font-bold'>Movie Website</h1>
                    <h1 className='text-[12px] text-white px-6 pb-3'>Discover my full-stack movie website project using React, Node.js, and MongoDB, integrated with the IMDb API for dynamic film data.</h1></a> 
                </div>
                <div className='p-2 flex flex-col m-2 rounded-lg bg-purple-400
                transition-all ease-in-out group hover:scale-110'>
                  <a href='https://sarpmitrachitra.vercel.app/'> <img src={img2} className="h-[180px] rounded-lg"/>
                    <h1 className='text-[14px] group-hover:scale-110 mt-2 text-center text-white font-bold'>Sarpmitra-Chitra</h1>
                    <h1 className='text-[12px] text-white px-6 pb-3'>Explore my full-stack NGO website project, built with HTML, CSS, and JavaScript, designed to support and showcase Snake NGO's mission.</h1></a> 
                </div>
                <div className='p-2 flex flex-col m-2 rounded-lg bg-purple-400
                transition-all ease-in-out group hover:scale-110'>
                  <a href=''> <img src={img3} className="h-[180px] rounded-lg"/>
                    <h1 className='text-[14px] group-hover:scale-110 mt-2 text-center  text-white font-bold'>Portfolio Website</h1>
                    <h1 className='text-[12px] text-white px-6 pb-3'>Showcasing my portfolio built with React and Tailwind CSS, highlighting sleek, responsive designs and interactive features. Explore my work!</h1></a> 
                </div>
            
        </div>
       </div>
    </div>
  )
}

export default Portfolio