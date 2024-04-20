import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi"
import { FaLocationDot } from "react-icons/fa6";
import { IoMdClose, IoMdMail } from "react-icons/io"
import { NavMenu, SocialLink } from '../../Data/Navigation';
import { IoCallOutline } from 'react-icons/io5';



const Nav = () => {
    const [MobileOpen, setMobileOpen] = useState(false)
    const [display, setdisplay] = useState(false)




    return (
        <>
            <div className='w-[100%] font-nav fixed top-0 z-50 left-0 right-0 '>
                <div className='bg-[#474747] hidden py-2 px-8 xl:flex flex-row justify-between items-center text-light '>
                    <div className='flex flex-row justify-start items-center gap-4'>
                        <div className='flex flex-row gap-2 text-white items-center text-sm font-light'>
                            <IoCallOutline className='text-xl' />
                            <h3>1234 567 890</h3>
                        </div>
                        <a href="mailto:Kontakt@baadersolution.de">
                            <div className='flex flex-row gap-2 text-white hover:text-gray-200 ease-in-out duration-300 items-center text-sm font-light'>
                                <IoMdMail className='text-xl' />
                                <h3>abc@gmail.com</h3>
                            </div>
                        </a>

                    </div>

                    <div className='flex flex-row gap-6 items-center'>
                        <div className="flex flex-row gap-2">
                            {SocialLink.map((item, index) => (
                                <a href={item.Link} target='_blank' key={index}>
                                    <item.icon className='text-xl text-white hover:text-gray-200 ease-in-out duration-300' />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={`bg-transparent bg-bgnav py-2 z-50 px-4 md:px-8 flex flex-row justify-between items-center text-light`}>
                    <Link to={'/'} onClick={() => {
                        setdisplay(true);
                        setTimeout(() => {
                            setdisplay(false)
                        }, 0);
                    }}>
                        <div className='flex flex-row items-center gap-2'>
                            <img src={'./Logo.png'} alt="" className='w-12' />
                            <h2 className='text-black font-head italic text-xl tracking-widest md:text-3xl md:tracking-wider font-semibold'>Food Guardian</h2>
                        </div>
                    </Link>
                    <div className={`flex flex-row gap-4 md:gap-12 items-center ${display && 'hidden'}`}>
                        <div className='xl:flex flex-row gap-8 items-center hidden'>
                            <div className='xl:flex flex-row gap-4 items-center hidden'>
                                {NavMenu.map((item, index) => (
                                    <a href={item.Link} onClick={() => {
                                        setdisplay(true);
                                        setTimeout(() => {
                                            setdisplay(false)
                                        }, 50);
                                    }}>
                                        <h1 className={`
                                font-normal text-lg py-2 px-4
                                font-pop ease-in-out duration-300
                                ${window.location.pathname === item.Link ? "bg-yellow-400 rounded-3xl" : "text-black"}`
                                        }
                                        >
                                            {item.Name}
                                        </h1>
                                    </a>
                                ))}
                            </div>
                            <div className='xl:flex flex-row gap-2 items-center hidden'>
                                <Link to={'/login'}>
                                    <div className='font-subhead text-lg py-2 px-4 rounded-full border-2 border-yellow-400 hover:bg-yellow-400 ease-in-out duration-300'>
                                        Login
                                    </div>
                                </Link>
                                <Link to={'/sign-up'}>
                                    <div className='font-subhead bg-yellow-400 text-lg py-2 px-4 rounded-full border-2 border-yellow-400 hover:bg-transparent ease-in-out duration-300'>
                                        Sign Up
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='block xl:hidden'>
                            {!MobileOpen && <GiHamburgerMenu className='text-black text-2xl cursor-pointer' onClick={() => { setMobileOpen(!MobileOpen); }} />}
                        </div>
                    </div>
                </div>
            </div>

            {MobileOpen && (
                <div className='fixed xl:hidden z-50 bg-yellow-500 h-[100vh] top-0 right-0 duration-300 ease-in-out'>
                    <div className='w-fit absolute top-2 left-2'>
                        <IoMdClose className='text-white font-subhead text-4xl cursor-pointer' onClick={() => { setMobileOpen(!MobileOpen) }} />
                    </div>
                    <div className='overflow-scroll flex flex-col justify-between h-[100vh] py-10 px-10'>
                        <div className='flex justify-start font-subhead flex-col text-white h-fit pb-10 w-[100%] items-end gap-2'>
                            {NavMenu.map((item, index) => (
                                <a href={item.Link} onClick={() => {
                                    setdisplay(true);
                                    setTimeout(() => {
                                        setdisplay(false)
                                    }, 50);
                                }}>
                                    <h1 className={`
                                font-semibold text-lg px-4
                                font-subhead ease-in-out duration-300
                                ${window.location.pathname === item.Link ? "bg-yellow-400 rounded-3xl" : "text-white"}`
                                    }
                                    >
                                        {item.Name}
                                    </h1>
                                </a>
                            ))}
                        </div>
                        <div className='bg-bgnavtop xl:hidden py-2 flex flex-col items-start gap-8 text-white '>
                            <div className='flex flex-col justify-start items-start gap-4'>
                                <div className='flex flex-row gap-2 text-white items-center text-lg font-semibold'>
                                    <IoCallOutline className='text-2xl' />
                                    <h3>1234 567 890</h3>
                                </div>
                                <a href="mailto:Kontakt@baadersolution.de">
                                    <div className='flex flex-row gap-2 text-white font-semibold hover:text-gray-200 ease-in-out duration-300 items-center text-lg'>
                                        <IoMdMail className='text-2xl' />
                                        <h3>abc@gmail.com</h3>
                                    </div>
                                </a>
                            </div>

                            <div className='flex flex-col gap-4 items-start'>
                                <div className="flex flex-row gap-2">
                                    {SocialLink.map((item, index) => (
                                        <a href={item.Link} target='_blank' key={index}>
                                            <item.icon className='text-xl hover:text-gray-200 ease-in-out duration-300' />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Nav