import React from 'react'
import { FaRegClock } from 'react-icons/fa'
import { RiDiscountPercentLine } from "react-icons/ri";
import { MdOutlineShoppingCart } from "react-icons/md";

const About = () => {
    const Data = [
        {
            icon: FaRegClock,
            title: "Delivery within 30 minutes",
        },
        {
            icon: RiDiscountPercentLine,
            title: "Best Offer & Prices",
        },
        {
            icon: MdOutlineShoppingCart,
            title: "Online Services Available",
        }
    ]
    return (
        <div className='w-[90%] m-auto py-6 md:py-20 xl:py-32'>
            <h2 className='font-head font-medium text-4xl md:text-5xl text-center mb-10'>About Us</h2>
            <div className='flex  flex-col justify-between items-center lg:flex-row gap-8'>
                <div className='flex flex-col gap-4 basis-[55%] xl:basis-[40%]'>
                    <h2 className='font-head font-medium text-2xl md:text-3xl xl:text-4xl'>We provide healthy food for your family.</h2>
                    <p className='font-subhead text-base xl:text-lg font-medium'>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</p>
                    <p className='font-subhead text-base xl:text-lg font-medium mb-6'>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                    <button className='font-subhead rounded-full py-3 px-5 border-2 w-fit font-medium border-black bg-transparent text-lg hover:bg-yellow-400 hover:border-yellow-400 ease-in-out duration-300'>More About Us</button>
                </div>
                <div className='basis-[45%]'>
                    <img src="./assets/Banner/AboutBanner.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About