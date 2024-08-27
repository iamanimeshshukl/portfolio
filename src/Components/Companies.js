import React from 'react'
import SectionHeading from '../Shared/SectionHeading'
import './../Constants'
import { AppText, CompanyImage } from './../Constants'
const Companies = () => {
  return (
    <div id='companies' className='bg-purple-200 p-5'>
        <div className='flex justify-center items-center flex-col'>
        <SectionHeading firstTitle={ AppText.CompaniesI} secondTitle={AppText.WorkedFor} />
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 m-3'>
            {CompanyImage.map((item,index)=>(
                <div className='m-3 transition-all ease-in-out hover:scale-110'>
                    <img src={item.imageUrl} className="h-[80px] w-full" />
                </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default Companies