import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import AlertContext from '../../../Context/Alert/AlertContext';
import { BaseAPI } from '../../../Data/BaseAPI';
import { convertDateFormat } from '../../../Context/DateFunction';

const DetailComp = ({ Food }) => {


    return (
        <div className='w-[90%] m-auto'>
            <div className="flex justify-center">
                <div className="bg-[#FFBC3F]/40 py-6 px-6 rounded-xl">
                    <img src={`${BaseAPI}/${Food?.Pic}`} alt="" className='w-48 h-48' />
                </div>
            </div>
            <div className="flex flex-row justify-between items-center">
                {Food?.Type == "Donation" && <div className='bg-[#BFE79F] mr-2 rounded-xl border-2 border-[#6EC32A] text-sm text-white font-medium py-1 uppercase px-2'>{Food?.Type}</div>}
            </div>
            <div className="flex flex-col gap-2 my-4 font-para">
                <h2 className='text-3xl font-semibold'>{Food?.FoodTitle}</h2>
                <div className="flex flex-row justify-between">
                    <div className="flex gap-1 items-center">
                        <p className='text-xl font-bold'>{Food?.Rating}</p>
                        <img src="../../assets/Prop/rating.png" alt="" className='w-10 h-10' />
                    </div>
                    <div className='flex flex-row gap-4'>
                        <div className="flex gap-1 items-center">
                            <img src="../../assets/Prop/clock.png" alt="" className='w-6 h-6' />
                            <p>{convertDateFormat(Food?.ExpiryDate)}</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <img src="../../assets/Prop/fire.png" alt="" className='w-6 h-6' />
                            <p>{Food?.Calories}</p>
                        </div>
                    </div>
                </div>
                <div className="my-2">
                    <p>{Food?.Description}</p>
                </div>
            </div>
        </div>
    )
}

export default DetailComp