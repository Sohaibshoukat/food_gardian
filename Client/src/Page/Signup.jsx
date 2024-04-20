import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { SocialLink } from '../../Data/Navigation'

const Signup = () => {
    return (
        <>
            <Nav />
            <div className='py-36'>
                <h1 className='font-para text-4xl md:text-5xl text-center m-auto font-bold text-black max-w-[90%] md:max-w-[70%]'>Sign Up to taste Best food</h1>
            </div>
            <div className="w-[90%] xl:w-[80%] m-auto rounded-3xl shadow-shadow2">
                <div className="flex flex-row-reverse  items-center p-2 md:py-4 md:px-4 justify-between">
                    <div className="bg-[#FFD22F]/50 w-[100%] rounded-2xl lg:basis-[50%] px-6 md:px-14 py-10 md:py-20">
                        <div className="flex flex-col gap-4 font-para">
                            <h2 className=' font-para text-3xl font-bold text-black'>Sign up</h2>
                            <p className='text-lightgray font-para text-lg'>Let’s get you all set up so you can access your personal account.</p>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col md:flex-row justify-between gap-4">
                                    <input
                                        type="text"
                                        placeholder='John'
                                        className='py-3 text-lg px-4 border-2 border-black/30 bg-transparent rounded-lg'
                                    />
                                    <input
                                        type="text"
                                        placeholder='Dep'
                                        className='py-3 text-lg px-4 border-2 border-black/30 bg-transparent rounded-lg'
                                    />
                                </div>
                                <div className="flex flex-col md:flex-row justify-between gap-4">
                                    <input
                                        type="email"
                                        placeholder='abc@gmail.com'
                                        className='py-3 text-lg px-4 border-2 border-black/30 bg-transparent rounded-lg'
                                    />
                                    <input
                                        type="tel"
                                        placeholder='1234567890'
                                        className='py-3 text-lg px-4 border-2 border-black/30 bg-transparent rounded-lg'
                                    />
                                </div>
                                <input
                                    type="password"
                                    placeholder='******'
                                    className='py-3 text-lg px-4 border-2 border-black/30 bg-transparent rounded-lg'
                                />
                                <input
                                    type="password"
                                    placeholder='******'
                                    className='py-3 text-lg px-4 border-2 border-black/30 bg-transparent rounded-lg'
                                />
                                <div className="flex flex-col gap-2 md:flex-row justify-between md:items-center">
                                    <div className="flex gap-3 items-center">
                                        <input
                                            type="check"
                                            className='w-5 h-5  border-2 border-black/30 bg-transparent rounded-md'
                                        />
                                        <p className='text-black font-medium font-para text-lg'>Remember me</p>
                                    </div>
                                    {/* <p className='text-gray font-medium font-para text-lg'>
                                        <Link to={'/forget-password'}>
                                            Forgot Password
                                        </Link>
                                    </p> */}
                                </div>
                                <button className='text-white text-lg my-2 md:text-md lg:text-lg font-subhead px-2 py-2 md:px-6 rounded-md bg-yellow-400 hover:text-black hover:bg-transparent border-2 w-full border-yellow-400 duration-300 ease-in-out'>Create account</button>
                                <p className='text-black font-bold text-center font-para text-lg'>Already have an account?
                                    <Link to={'/login'}>
                                        <span className='text-gray-500'>
                                            Login
                                        </span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="basis-[50%] w-[90%] m-auto pl-10 h-auto flex-col hidden lg:flex gap-10 relative">
                        <h2 className=' font-para text-4xl text-left font-bold text-black'>Sign Up to get new Deals</h2>
                        <img src="./assets/Prop/mainlogin.png" alt="" className='w-[80%] self-start' />
                        <div className="flex flex-row justify-center gap-2">
                            {SocialLink.map((item, index) => (
                                <div className="hover:bg-black group p-2 rounded-full">
                                    <a href={item.Link} target='_blank'>
                                        <item.icon className='text-black group-hover:text-white ease-in-out duration-300 text-2xl' />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Signup