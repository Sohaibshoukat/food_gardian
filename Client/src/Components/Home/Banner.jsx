import React from 'react'

const Banner = () => {
    return (
        <div className='md:w-[90%] m-auto flex relative md:static flex-col md:flex-row justify-between items-center gap-6'>
                <div className="absolute z-0 h-[100%] overflow-hidden block md:hidden">
                    <img src="./assets/Banner/bannerBg.png" alt="" />
                </div>
            <div className="flex pt-24 pb-10 relative z-10 flex-col gap-6 basis-[45%]">
                <h1 className='font-head text-4xl md:text-5xl xl:text-7xl font-bold text-center'>Best food for <br /> your taste</h1>
                <p className='text-center max-w-lg m-auto font-medium md:text-lg font-subhead'>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>
            </div>
            <div className="basis-[45%] hidden md:block">
                <div className="absolute z-0 h-[100%] overflow-hidden">
                    <img src="./assets/Banner/bannerBg.png" alt="" />
                </div>
                <img src="./assets/Banner/BannerHome.png" alt="" className='w-[85%] pt-24 relative z-10' />
            </div>
        </div>
    )
}

export default Banner