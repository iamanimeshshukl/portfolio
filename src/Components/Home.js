import React from 'react'
import './../Constants'
import { AppText } from './../Constants'
import './../assets'
import { homeImage } from './../assets'
import './Home.css'
import Typewriter from 'typewriter-effect';
import Social from './Social'
const Home = () => {
  return (
    <div className='flex p-[20px] md:px-20 justify-between flex-col md:flex-row'>
<div className='flex w-full flex-row  justify-end'>
        <div className='flex w-full flex-col  items-start content-end'>
            <h1 className='text-[35px] md:text-[40px] font-bold '>{AppText.hello}</h1>
            <div className='flex'>
            <h1 className='text-[35px]  md:text-[40px] font-bold mr-3'>{AppText.Iam}</h1>
            {/* <h1 className='text-[40px]  md:text-[60px] font-bold  text-purple-600'>{AppText.RahulSanap}</h1> */}
            <Typewriter
  options={{
    strings: [AppText.RahulSanap, AppText.FrontedDeveloper,AppText.UIUXDesigner,AppText.BackendDeveloper],
    autoStart: true,
    loop: true,
    
  }}
/>
</div>
<div>
  <h1 className='my-5 text-gray-400'>I’m Animesh Shukla, studying Electrical Engineering at HBTU Kanpur, with a keen interest in Technology and Innovation.</h1>
</div>

<div
  class="max-w-32 bg-transparent items-center justify-center flex border-2 border-sky-500 shadow-lg hover:bg-sky-500 text-sky-500 hover:text-white duration-300 cursor-pointer active:scale-[0.98]"
>
  <button class="px-5 py-2"><a class="" href="">Resume</a></button>
</div>

            <br></br>
            <Social />
        </div>
        
        </div>
        <div className=' w-full flex justify-center'>
          <img src={homeImage}  className="w-[200px] md:w-[300px]"/>
        </div>
    </div>
  )
}

export default Home