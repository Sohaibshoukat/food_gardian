import React, { useContext, useEffect, useState } from 'react';

import { GrClose } from "react-icons/gr"
import { LuLayoutTemplate } from "react-icons/lu"
import { BsCalendar4Event } from "react-icons/bs"
import { IoIosLogOut } from "react-icons/io"
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { HiOutlineDocumentReport } from "react-icons/hi"
import AlertContext from '../../Context/Alert/AlertContext';
import Home from '../../Components/Business/Dashboard/Home';
import NewEntry from '../../Components/Business/NewEntry/NewEntry';
import EditEntry from '../../Components/Business/EditEntry/EditEntry';



function BusinessDashboard() {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const location = useLocation();

    const AletContext = useContext(AlertContext);
    const { showAlert } = AletContext;

    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // const fetchRadioId = async () => {
    //     try {
    //         const userId = localStorage.getItem('userid'); // Assuming you have stored userId in localStorage
    //         const response = await fetch(`https://backend.uniprecision.com.my/radiologist/getRadioId/${userId}`);
    //         if (response.ok) {
    //             const data = await response.json();
    //             const { radioId } = data;
    //             localStorage.setItem('RadioId', radioId);
    //         } else {
    //             showAlert('Failed to fetch Radio Id', 'danger');
    //         }
    //     } catch (error) {
    //         showAlert('Error fetching Radilogist', 'danger');
    //         navigate("/login")
    //     }
    // };

    // useEffect(() => {
    //     fetchRadioId();
    // }, []);

    const handleLogout = () => {
        sessionStorage.removeItem('gardiantoken')
        navigate('/');
    };

    useEffect(() => {
        if (sessionStorage.getItem('gardiantoken')) {
            return
        } else {
            navigate("/login")
        }
    }, [])


    const tabs = [
        {
            name: 'Dashboard',
            Icon: BsCalendar4Event,
            Link: '/business/',
        },
        {
            name: 'Add New',
            Icon: BsCalendar4Event,
            Link: '/business/new-entry',
        },
    ];


    return (
        <>
            <div className="flex h-screen overflow-hidden bg-gray-200">
                {/* Left Pane  */}
                <div className={`lg:basis-[30%] xl:basis-[15%] z-40 absolute lg:relative w-[80%] md:w-[55%]  h-[100%] ${isMenuOpen && 'hidden'}  lg:block lg:w-auto bg-white`}>
                    <div className={`md:flex flex-col relative top-0 left-0 h-full `}>
                        <div className="flex-col absolute top-[3%] right-[-20%] md:mt-0 lg:hidden">
                            <button
                                type="button"
                                className="p-2 text-black text-4xl md:text-5xl focus:outline-none lg:hidden "
                                onClick={toggleMenu}
                            >
                                <GrClose />
                            </button>
                        </div>
                        <div className="flex basis-[5%] py-6 h-[20%] items-center justify-center pr-2 white">
                            <h2 className='font-para text-2xl font-bold text-black'>Food Gardian</h2>
                        </div>
                        <ul className='pb-4 px-2 md:px-4'>
                            {tabs.map((tab, index) => (
                                <Link to={tab.Link}>
                                    <li
                                        key={index}
                                        className={`
                                        py-4 px-4 rounded-2xl cursor-pointer font-medium text-black text-base
                                        ${location.pathname === tab.Link && 'bg-yellow-400 text-white'}
                                        ${location.pathname === tab.Link ? 'hover:text-black  hover:bg-yellow-400' : 'hover:text-black'}
                                        ease-in-out duration-300`
                                        }
                                    >
                                        <div className='flex flex-row gap-4 items-center'>
                                            <tab.Icon />
                                            {tab.name}
                                        </div>
                                    </li>
                                </Link>
                            ))}

                        </ul>
                        <div
                            type="button"
                            className="absolute flex flex-row items-center gap-4 bottom-0 left-0 w-full px-4 py-4 font-semibold  text-base bg-yellow-400 text-white hover:bg-yellow-500 ease-in-out duration-300"
                            onClick={handleLogout}
                        >
                            <IoIosLogOut className='text-2xl' />
                            Logout
                        </div>
                    </div>
                </div>

                {/* Right pane */}
                <div className="basis-[100%] lg:basis-[68%] xl:basis-[85%] w-[100%]  overflow-y-scroll overflow-x-hidden relative">
                    <Routes>
                        <Route
                            path="/"
                            element={<Home toggleMenu={toggleMenu}/>}>
                        </Route>
                        <Route
                            path="/new-entry"
                            element={<NewEntry toggleMenu={toggleMenu}/>}>
                        </Route>
                        <Route
                            path="/edit-entry/:id"
                            element={<EditEntry toggleMenu={toggleMenu}/>}>
                        </Route>
                    </Routes>
                </div>
            </div>
        </>

    );
}

export default BusinessDashboard;
