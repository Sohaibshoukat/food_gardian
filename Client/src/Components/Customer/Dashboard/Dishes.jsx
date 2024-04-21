import React, { useContext, useEffect, useState } from 'react'
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';
import AlertContext from '../../../Context/Alert/AlertContext';
import { BaseAPI } from '../../../Data/BaseAPI';
import { convertDateFormat } from '../../../Context/DateFunction';

const Dishes = () => {

    const [dishes, setDishes] = useState([]);

    const navigate= useNavigate()

    const AletContext = useContext(AlertContext);
    const { showAlert } = AletContext;

    const fetchFoodData = async () => {
        try {
            // Make a GET request to your API to fetch food data
            const response = await fetch(`${BaseAPI}/api/customer/food`, {
                method: 'GET',
                headers: {
                    'auth-token': sessionStorage.getItem('gardiantoken'),
                },
            });
            const responseData = await response.json()
            setDishes(responseData.food); // Update state with fetched data
        } catch (error) {
            showAlert(error.message,'danger');
        }
    };

    useEffect(() => {
        fetchFoodData(); // Call the function when component mounts
    }, [])
    return (
        <div className='my-10'>
            <div className="flex flex-col justify-between mb-4">
                <h1 className='font-para text-2xl text-black font-bold'>Popular Dishes</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[90%] m-auto">
                {dishes.map((item, index) => (
                    <div className="bg-white font-para  rounded-xl py-4 flex flex-col gap-2 cursor-pointer" onClick={()=>{navigate(`/customer/detail/${item._id}`)}}>
                        <div className="flex flex-row justify-between">
                            <div className="bg-[#EB5757] text-sm text-white rounded-r-xl py-1 px-2">
                                {convertDateFormat(item.ExpiryDate)}
                            </div>
                            {item.Type == "Donation" && <div className='bg-[#BFE79F] mr-2 rounded-full border-2 border-[#6EC32A] text-sm text-white font-medium py-1 uppercase px-2'>{item.Type}</div>}
                        </div>
                        <img src={`${BaseAPI}/${item.Pic}`} alt="" className='w-32 h-32 rounded-full m-auto' />
                        <div className="flex flex-col gap-4 px-4">
                            <Rating name="read-only" value={item.Rating} readOnly />
                            <div className="flex gap-2 justify-between items-center">
                                <div className="flex flex-col gap-2">
                                    <h2 className='font-medium text-xl'>{item.FoodTitle}</h2>
                                    <p className='font-bold text-xl'><span className='text-yellow-500'>$</span>{item.Price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dishes