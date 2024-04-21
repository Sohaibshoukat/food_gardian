import React, { useContext, useEffect, useState } from 'react';
import { GrClose } from "react-icons/gr"
import { LuLayoutTemplate } from "react-icons/lu"
import { BsCalendar4Event } from "react-icons/bs"
import { MdContentCopy, MdOutlineFeed } from "react-icons/md"
import { IoIosLogOut } from "react-icons/io"
import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { HiOutlineDocumentReport } from "react-icons/hi"
import AlertContext from '../../Context/Alert/AlertContext';
import Home from '../../Components/Customer/Dashboard/Home';
import { IoCloseSharp } from 'react-icons/io5';
import { FaFacebook, FaInstagram, FaShareNodes, FaTwitter, FaWhatsapp } from 'react-icons/fa6';
import Detail from '../../Components/Customer/Detail/Detail';



function CustomerDashboard() {

    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const [model, setmodel] = useState(false)

    const location = useLocation();

    const navigate = useNavigate();

    const AletContext = useContext(AlertContext);
    const { showAlert } = AletContext;


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

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
            Link: '/customer/'
        }
    ];


    const handleCopyLink = () => {
        // Function to copy current URL to clipboard
        navigator.clipboard.writeText(window.location.href);
        // You can add a notification or any feedback here
        console.log("Link copied to clipboard:", window.location.href);
    };

    const handleSocialMediaClick = (socialMedia) => {
        // Function to open social media with copied link
        const shareUrl = `https://example.com/share?url=${encodeURIComponent(window.location.href)}`;
        switch (socialMedia) {
            case 'facebook':
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`);
                break;
            case 'instagram':
                window.open(`https://www.instagram.com/sharer.php?u=${encodeURIComponent(shareUrl)}`);
                break;
            case 'whatsapp':
                window.open(`https://wa.me/?text=${encodeURIComponent(shareUrl)}`);
                break;
            case 'twitter':
                window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`);
                break;
            default:
                break;
        }
    };


    return (
        <>
            {model
                &&
                <div className='fixed w-[100vw] h-[100vh] z-50 flex justify-center items-center'>
                    <div className="bg-black/50 absolute w-[100vw] h-[100vh] z-30" onClick={() => { setmodel(false) }}></div>
                    <div className="bg-black font-para rounded-lg relative z-40 w-[50%] h-fit py-6 px-8">
                        <div className="flex flex-row justify-between items-center">
                            <h2 className='text-white text-xl font-semibold'>Share This Link</h2>
                            <div className="flex flex-row gap-6 items-center">
                                <div className="flex gap-2 items-center text-yellow-400 font-bold cursor-pointer" onClick={handleCopyLink}>
                                    <MdContentCopy className='text-xl' />
                                    <h2>Copy Link</h2>
                                </div>
                                <IoCloseSharp className='text-white text-2xl' onClick={() => { setmodel(false) }} />
                            </div>
                        </div>
                        <div className='flex flex-col gap-6 my-8'>
                            <div className="bg-yellow-400 w-fit rounded-xl text-white font-para text-lg font-semibold flex flex-row gap-4 p-2">
                                <FaShareNodes className='text-white text-2xl' />
                                Share to your favriote platform
                            </div>
                            <div className="flex gap-4 mx-8 text-white text-4xl">
                                <FaFacebook onClick={() => handleSocialMediaClick('facebook')} className="cursor-pointer" />
                                <FaInstagram onClick={() => handleSocialMediaClick('instagram')} className="cursor-pointer" />
                                <FaWhatsapp onClick={() => handleSocialMediaClick('whatsapp')} className="cursor-pointer" />
                                <FaTwitter onClick={() => handleSocialMediaClick('twitter')} className="cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>
            }
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
                        <div className='my-4 rounded-2xl gradientyellow self-end py-4 px-4 mx-4'>
                            <h2 className='text-white font-para text-xl mb-4 font-bold'>Chat with Charities and orphanage</h2>
                            <button
                                className='bg-white text-black hover:text-white font-bold border-2 border-white hover:bg-transparent py-2 px-4 rounded-lg ease-in-out duration-300'
                                onClick={() => { setmodel(true) }}
                            >Share</button>
                        </div>
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
                    <div className='py-6 px-8'>
                        <Routes>
                            <Route path="/" element={<Home toggleMenu={toggleMenu} />}></Route>
                            <Route path="/detail/:id" element={<Detail toggleMenu={toggleMenu} />}></Route>
                        </Routes>
                    </div>
                </div>
            </div>
        </>

    );
}

export default CustomerDashboard;
