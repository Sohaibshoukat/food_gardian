import React, { useContext, useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { IoMdMenu } from 'react-icons/io'
import { MdDeleteOutline } from 'react-icons/md'
import { BaseAPI } from '../../../Data/BaseAPI'
import AlertContext from '../../../Context/Alert/AlertContext'
import { useNavigate } from 'react-router-dom'
import { convertDateFormat } from '../../../Context/DateFunction'

const Home = ({ toggleMenu }) => {

    const [dishes, setDishes] = useState([]);

    const navigate= useNavigate()

    const AletContext = useContext(AlertContext);
    const { showAlert } = AletContext;

    const fetchFoodData = async () => {
        try {
            // Make a GET request to your API to fetch food data
            const response = await fetch(`${BaseAPI}/api/business/food`, {
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

    const handleDeleteTestimonial = async (id) => {
        try {
          const response = await fetch(`${BaseAPI}/api/business/food/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'auth-token': sessionStorage.getItem('gardiantoken'),
            }
          });
          const data = await response.json();
          if (response.ok) {
            showAlert('Deleted Successfully', 'success');
            fetchFoodData();
          } else {
            showAlert(data.message, 'danger');
          }
        } catch (error) {
          showAlert(error.message, 'danger');
        }
      };

    return (
        <div>
            <div className='w-full bg-white py-4 items-center px-6 flex justify-between'>
                <h2 className='text-gray font-bold font-para text-2xl'>Business Dasboard</h2>
                <div className='block lg:hidden' onClick={() => { toggleMenu() }}>
                    <IoMdMenu className='text-2xl' />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 my-10 w-[90%] m-auto">
                {dishes?.map((item, index) => (
                    <div className="bg-yellow-200 font-para rounded-xl py-4 px-4 flex flex-col gap-2 dishbg">
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row items-center w-full justify-between">
                                {item.Type == "Donation" && <div className='bg-[#BFE79F] rounded-full border-2 border-[#6EC32A] text-sm text-white font-medium py-1 uppercase px-2'>{item.Type}</div>}
                                <div className='flex gap-2 text-2xl'>
                                    <FaRegEdit onClick={()=>{navigate(`/business/edit-entry/${item._id}`)}} className='cursor-pointer'/>
                                    <MdDeleteOutline  onClick={()=>{handleDeleteTestimonial(item._id)}} className='cursor-pointer'/>
                                </div>
                            </div>
                            <div>
                                <img src={`${BaseAPI}/${item.Pic}`} alt="" className='w-44 h-44 m-auto rounded-full' />
                            </div>
                            <div className="flex justify-between mb-6 items-center">
                                <div className="flex gap-1 items-center">
                                    <img src="../assets/Prop/rating.png" alt="" className='w-6 h-6' />
                                    <p>{item.Rating}</p>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <img src="../assets/Prop/clock.png" alt="" className='w-6 h-6' />
                                    <p>{convertDateFormat(item.ExpiryDate)}</p>
                                </div>
                                <div className="flex gap-1 items-center">
                                    <img src="../assets/Prop/fire.png" alt="" className='w-6 h-6' />
                                    <p>{item.Calories}</p>
                                </div>
                            </div>
                            <div className="my-4 flex justify-between items-center">
                                <h2 className='font-bold text-xl'>{item.FoodTitle}</h2>
                                <div className="flex flex-row font-semibold text-xl gap-2">
                                    <h2>Price</h2>
                                    <h3 className='text-yellow-400'>${item.Price}</h3>
                                </div>
                            </div>
                            <p className='text-gray-400 font-light text-base mb-6'>{item.Description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home