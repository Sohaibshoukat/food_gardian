import React from 'react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from 'swiper/react';

const Menu = () => {

    const MenuData = [
        {
            heading: "Fresh and Healthy Salad",
            para: "50 calories",
            price: "20.00",
            image: "image1.png"
        },
        {
            heading: "Fresh and Healthy Salad",
            para: "50 calories",
            price: "20.00",
            image: "image1.png"
        },
        {
            heading: "Fresh and Healthy Salad",
            para: "50 calories",
            price: "20.00",
            image: "image1.png"
        },
        {
            heading: "Fresh and Healthy Salad",
            para: "50 calories",
            price: "20.00",
            image: "image1.png"
        },
        {
            heading: "Fresh and Healthy Salad",
            para: "50 calories",
            price: "20.00",
            image: "image1.png"
        },
        {
            heading: "Fresh and Healthy Salad",
            para: "50 calories",
            price: "20.00",
            image: "image1.png"
        },
        {
            heading: "Fresh and Healthy Salad",
            para: "50 calories",
            price: "20.00",
            image: "image1.png"
        },
        {
            heading: "Fresh and Healthy Salad",
            para: "50 calories",
            price: "20.00",
            image: "image1.png"
        },
        {
            heading: "Fresh and Healthy Salad",
            para: "50 calories",
            price: "20.00",
            image: "image1.png"
        },
        {
            heading: "Fresh and Healthy Salad",
            para: "50 calories",
            price: "20.00",
            image: "image1.png"
        },
        {
            heading: "Fresh and Healthy Salad",
            para: "50 calories",
            price: "20.00",
            image: "image1.png"
        }
    ]

    return (
        <div className='w-[90%] m-auto py-10'>
            <h2 className='font-head font-medium text-4xl md:text-5xl text-center mb-10'>Browse Our Menu</h2>
            <Swiper
                slidesPerView={1}
                spaceBetween={2}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    800: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    }
                }}
                className="mySwiper my-4"
            >
                {MenuData.map((item, index) => (
                    <SwiperSlide>
                        <div className="bg-white rounded-lg flex flex-col gap-4 py-20 px-6 items-center relative">
                            <div className="absolute w-44 h-[100%] -top-0">
                            <img src={`./assets/Food/${item.image}`} alt="" srcset="" className='' />
                            </div>
                            <div className="bg-[#FFD22F]/50 pt-24 text-center rounded-3xl py-4 px-8">
                                <h2 className='text-lg font-head text-gray font-bold'>{item.heading}</h2>
                                <p className='font-head text-base mb-8'>{item.para}</p>
                                <p className='font-subhead'>${item.price}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Menu