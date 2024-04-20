import React from 'react'
import { NavMenu, SocialLink } from '../../Data/Navigation'

const Footer = () => {
    const Data = [
        "img1.png", "img2.png", "img3.png", "img4.png",
    ]
    return (
        <div className='bg-[#FFD22F]/60 py-10 px-10 md:px-32 mt-8'>
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className='flex flex-col gap-3 basis-[33.3%]'>
                    <div className='flex flex-row items-center gap-2'>
                        <img src={'./Logo.png'} alt="" className='w-12' />
                        <h2 className='text-black font-head italic text-2xl md:tracking-wider font-semibold'>Food Guardian</h2>
                    </div>
                    <p className='font-subhead font-semibold text-base md:text-lg'>In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
                    <div className="flex flex-row gap-2">
                        {SocialLink.map((item, index) => (
                            <div className="bg-yellow-400 p-2 rounded-full">
                                <a href={item.Link} target='_blank'>
                                    <item.icon className='text-white' />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-4 basis-[33.3%%]">
                    <h2 className='font-subhead text-lg font-semibold'>Quick Link</h2>
                    <div className="flex flex-row lg:flex-col gap-2">
                        {NavMenu.map((item, index) => (
                            <a href={item.Link}>
                                <h1 className={`
                                font-normal font-subhead ease-in-out duration-300
                                ${window.location.pathname === item.Link ? "bg-yellow-400 rounded-3xl" : "text-black"}`
                                }
                                >
                                    {item.Name}
                                </h1>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-4 basis-[33.3%]">
                    <h2 className='font-subhead text-lg font-semibold'>Follow Us On Instagram</h2>
                    <div className="grid grid-cols-2 gap-3">
                        {Data.map((item,index)=>(
                            <img src={`./assets/Footer/${item}`} alt="" className='rounded-xl w-[100%] h-[100%]' key={index}/>
                        ))}
                    </div>
                </div>
            </div>
            <p className='font-subhead text-sm text-black mt-12 text-center'>Copyright © 2024 Food Gardian. All Rights Reserved</p>
        </div>
    )
}

export default Footer