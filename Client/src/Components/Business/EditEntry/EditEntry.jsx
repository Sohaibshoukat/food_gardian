import React, { useContext, useEffect, useState } from 'react'
import { FaCamera } from 'react-icons/fa6'
import { IoMdMenu } from 'react-icons/io'
import AlertContext from '../../../Context/Alert/AlertContext';
import { BaseAPI } from '../../../Data/BaseAPI';
import { useParams } from 'react-router-dom';
import { convertDateFormat } from '../../../Context/DateFunction';

const EditEntry = ({ toggleMenu }) => {

    const {id} =useParams()

    const [formData, setFormData] = useState({
        Image:null,
        ImageUpload:null,
        FoodTitle: '',
        Price: '',
        Description: '',
        ExpiryDate: '',
        Calories: '',
        Rating: '',
        Type: '',
    });

    const AletContext = useContext(AlertContext);
    const { showAlert } = AletContext;


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData({
            ...formData,
            ["Image"]: URL.createObjectURL(file),
            ["ImageUpload"]: file,
        });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData2 = new FormData();
        formData2.append('FoodTitle', formData.FoodTitle);
        formData2.append('Price', formData.Price);
        formData2.append('Description', formData.Description);
        formData2.append('ExpiryDate', formData.ExpiryDate);
        formData2.append('Calories', formData.Calories);
        formData2.append('Rating', formData.Rating);
        formData2.append('Type', formData.Type);
        formData2.append('foodimg',formData.ImageUpload)

            try {
                const response = await fetch(`${BaseAPI}/api/business/food/${id}`, {
                    method: 'PUT',
                    headers: {
                        'auth-token':sessionStorage.getItem('gardiantoken'),
                    },
                    body: formData2,
                });
                const data = await response.json();
                if (response.ok) {
                    showAlert('Food Updated successfully','success');
                } else {
                    showAlert(response.message,'danger');
                }
            } catch (error) {
                showAlert(error.message,'danger');
            }
    };


    const fetchFoodData = async () => {
        try {
            // Make a GET request to your API to fetch food data
            const response = await fetch(`${BaseAPI}/api/business/food/${id}`, {
                method: 'GET',
                headers: {
                    'auth-token': sessionStorage.getItem('gardiantoken'),
                },
            });
            const responseData = await response.json()
            setFormData({
                ...formData,
                Image:`${BaseAPI}/${responseData.Pic}`,
                FoodTitle: responseData.FoodTitle,
                Price: responseData.Price,
                Description: responseData.Description,
                ExpiryDate: convertDateFormat(responseData.ExpiryDate),
                Calories: responseData.Calories,
                Rating: responseData.Rating,
                Type: responseData.Type,
            });
        } catch (error) {
            showAlert(error.message,'danger');
        }
    };

    useEffect(() => {
        fetchFoodData(); // Call the function when component mounts
    }, [])

    return (
        <div>
            <div className='w-full bg-white py-4 items-center px-6 flex justify-between'>
                <h2 className='text-gray font-bold font-para text-2xl'>Business Dasboard</h2>
                <div className='block lg:hidden' onClick={() => { toggleMenu() }}>
                    <IoMdMenu className='text-2xl' />
                </div>
            </div>
            <div className='flex justify-center items-center mt-8'>
                <div className="w-[90%] bg-white m-auto rounded-xl py-8 ">
                    <div className="flex flex-col gap-2 w-[90%] md:w-[80%] m-auto">
                        <div className="relative self-center">
                            <img src={formData.Image? formData.Image :"../assets/dish.png"} alt="" className='w-36 h-36 rounded-full' />
                            <div className="absolute bottom-2 bg-black p-2 rounded-full z-10 right-0">
                                <label htmlFor="fileupload">
                                    <FaCamera className="text-white cursor-pointer" />
                                </label>
                                <input type="file" name='fileupload' id='fileupload' className='opacity-0 absolute' onChange={handleImageChange}/>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 font-para gap-x-10 gap-y-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="">Food Title</label>
                                <input
                                    type="text"
                                    name='FoodTitle'
                                    value={formData.FoodTitle}
                                    onChange={handleChange}
                                    className='border-[1px] border-black/50 rounded-md bg-transparent py-2 px-4'
                                    placeholder='Enter Dish Name'
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="">Price</label>
                                <input
                                    type="num"
                                    name='Price'
                                    value={formData.Price}
                                    onChange={handleChange}
                                    className='border-[1px] border-black/50 rounded-md bg-transparent py-2 px-4'
                                    placeholder='120'
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="">Food Description</label>
                                <input
                                    type="text"
                                    name='Description'
                                    value={formData.Description}
                                    onChange={handleChange}
                                    className='border-[1px] border-black/50 rounded-md bg-transparent py-2 px-4'
                                    placeholder='Enter Dish Details'
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="">Expiry Date</label>
                                <input
                                    type="date"
                                    name='ExpiryDate'
                                    value={formData.ExpiryDate}
                                    onChange={handleChange}
                                    className='border-[1px] border-black/50 rounded-md bg-transparent py-2 px-4'
                                    placeholder='20/12/2024'
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="">Calories</label>
                                <input
                                    type="num"
                                    name='Calories'
                                    value={formData.Calories}
                                    onChange={handleChange}
                                    className='border-[1px] border-black/50 rounded-md bg-transparent py-2 px-4'
                                    placeholder='140'
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="">Rating</label>
                                <input
                                    type="num"
                                    name='Rating'
                                    value={formData.Rating}
                                    onChange={handleChange}
                                    className='border-[1px] border-black/50 rounded-md bg-transparent py-2 px-4'
                                    placeholder='5'
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                            <label htmlFor="">Type</label>
                                <select 
                                    name='Type'
                                    value={formData.Type}
                                    onChange={handleChange}
                                    className='border-[1px] border-black/50 rounded-md bg-transparent py-2 px-4'
                                >
                                    <option value="">Select</option>
                                    <option value="Donation">Donaition</option>
                                    <option value="Sell">Sell</option>
                                </select>
                            </div>
                        </div>
                        <button
                        onClick={handleSubmit}
                            className='bg-[#FFD22F]/60 rounded-xl border-2 py-3 text-xl font-bold  border-[#FFD22F]/60 text-center hover:'
                        >
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditEntry