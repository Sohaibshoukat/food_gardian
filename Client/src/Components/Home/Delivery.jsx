import React from 'react'
import { FaRegClock } from 'react-icons/fa'
import { RiDiscountPercentLine } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";

const Delivery = () => {
    const Data=[
        {
            icon:FaRegClock,
            title:"Delivery within 30 minutes",
        },
        {
            icon:RiDiscountPercentLine,
            title:"Best Offer & Prices",
        },
        {
            icon:MdOutlineShoppingCart,
            title:"Online Services Available",
        }
    ]
  return (
    <div className='w-[90%] m-auto flex pt-10 md:pt-32 pb-10 xl:py-32 flex-col-reverse justify-between items-center lg:flex-row gap-8'>
        <div className='basis-[50%] xl:basis-[45%]'>
            <img src="./assets/Banner/deliveryBanner.png" alt="" />
        </div>
        <div className='flex flex-col gap-4 basis-[50%] xl:basis-[40%]'>
            <h2 className='font-head font-medium text-2xl md:text-3xl xl:text-4xl'>Fastest Food Delivery  </h2>
            <p className='font-subhead md:text-lg font-medium mb-3 md:mb-6'>Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop. </p>
            <div className="flex flex-col gap-2">
                {Data.map((item,index)=>(
                    <div className="flex flex-row items-center gap-2" key={index}>
                        <div className="bg-yellow-400 rounded-full p-2">
                            <item.icon className='text-white text-xl'/>
                        </div>
                        <p className='font-subhead md:text-lg'>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Delivery