import React, { useContext, useEffect, useState } from 'react'
import OwnerBanner from '../Dashboard/OwnerBanner'
import { FaSearch } from 'react-icons/fa'
import AlertContext from '../../../Context/Alert/AlertContext'
import { BaseAPI } from '../../../Data/BaseAPI'
import DetailComp from './DetailComp'
import { useParams } from 'react-router-dom'

const Detail = () => {

    const [User, setUser] = useState()
    const [Busines, setBusines] = useState(null)

    const AletContext = useContext(AlertContext);
    const { showAlert } = AletContext;

    const fetchFoodData = async () => {
        try {
            // Make a GET request to your API to fetch food data
            const response = await fetch(`${BaseAPI}/api/userAuth/getuser`, {
                method: 'GET',
                headers: {
                    'auth-token': sessionStorage.getItem('gardiantoken'),
                },
            });
            const responseData = await response.json()
            setUser(responseData.userData); // Update state with fetched data
        } catch (error) {
            showAlert(error.message, 'danger');
        }
    };

    const fetchUser = async (id) => {
        try {
            // Make a GET request to your API to fetch food data
            const response = await fetch(`${BaseAPI}/api/userAuth/getuser/${id}`, {
                method: 'GET',
                headers: {
                    'auth-token': sessionStorage.getItem('gardiantoken'),
                },
            });
            const responseData = await response.json()
            setBusines(responseData.userData); // Update state with fetched data
        } catch (error) {
            showAlert(error.message, 'danger');
        }
    };

    useEffect(() => {
        fetchFoodData(); // Call the function when component mounts
    }, [])

    const {id} =useParams()

    const [Food, setFood] = useState(null);

    const fetchFoodDetail = async () => {
        try {
            // Make a GET request to your API to fetch food data
            const response = await fetch(`${BaseAPI}/api/customer/food/${id}`, {
                method: 'GET',
                headers: {
                    'auth-token': sessionStorage.getItem('gardiantoken'),
                },
            });
            const responseData = await response.json()
            setFood(responseData);
            fetchUser(responseData?.User_id)
        } catch (error) {
            showAlert(error.message,'danger');
        }
    };

    useEffect(() => {
        fetchFoodDetail(); // Call the function when component mounts
    }, [])

    return (
        <div>
            <div className="flex flex-col gap-4 md:flex-row justify-between md:items-center">
                <h2 className='font-para text-3xl font-bold'>Hello, {User?.FirstName} {User?.LastName}</h2>
                <div className="bg-white flex flex-row gap-2 items-center rounded-2xl py-2 px-4">
                    <FaSearch className='text-yellow-400  text-2xl' />
                    <input type="text" className='bg-transparent border-none font-para text-lg text-black active:outline-none' placeholder='Search...' />
                </div>
            </div>

            <OwnerBanner Busines={Busines}/>

            <DetailComp Food={Food}/>
        </div>
    )
}

export default Detail