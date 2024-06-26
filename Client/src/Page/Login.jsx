import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { SocialLink } from '../Data/Navigation'
import AlertContext from '../Context/Alert/AlertContext'
import { BaseAPI } from '../Data/BaseAPI'

const Login = () => {

    const AletContext = useContext(AlertContext);
    const { showAlert } = AletContext;

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        Email: '',
        Password: '',
    });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Ensure no fields are empty
        const requiredFields = ['Email', 'Password'];
        const emptyFields = requiredFields.filter(field => !formData[field]);
        if (emptyFields.length > 0) {
            showAlert("All fields are required", "danger");
            return;
        }

        try {
            const response = await fetch(`${BaseAPI}/api/userAuth/loginuser`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const responseData = await response.json();

            if (!responseData.success) {
                showAlert(responseData.message, "danger");
                return;
            }

            sessionStorage.setItem("gardiantoken",responseData.AuthToken)
            if(responseData?.Role=="Business"){
                navigate("/business")
            }else{
                navigate("/customer")
            }
            
        } catch (error) {
            showAlert(error.message, 'danger');
        }
    };

    return (
        <>
            <Nav />
            <div className='py-36'>
                <h1 className='font-head text-4xl md:text-5xl text-center m-auto font-bold text-black max-w-[90%] md:max-w-[70%]'>Log in to taste Best food</h1>
            </div>
            <div className="w-[90%] xl:w-[80%] m-auto rounded-3xl shadow-shadow2">
                <div className="flex flex-row-reverse  items-center p-2 md:py-4 md:px-4 justify-between">
                    <div className="bg-[#FFD22F]/50 w-[100%] rounded-2xl lg:basis-[50%] px-6 md:px-14 py-10 md:py-20">
                        <div className="flex flex-col gap-4 font-para">
                            <h2 className=' font-para text-3xl font-bold text-black'>Login</h2>
                            <p className='text-lightgray font-para text-lg'>Login to access your travelwise  account</p>
                            <div className="flex flex-col gap-4">
                                <input
                                    type="email"
                                    placeholder='abc@gmail.com'
                                    className='py-3 text-lg px-4 border-2 border-black/30 bg-transparent rounded-lg'
                                    name="Email"
                                    value={formData.Email}
                                    onChange={handleChange}
                                />
                                <input
                                    type="password"
                                    placeholder='Password'
                                    className='py-3 text-lg px-4 border-2 border-black/30 bg-transparent rounded-lg'
                                    name="Password"
                                    value={formData.Password}
                                    onChange={handleChange}
                                />
                                <div className="flex flex-col gap-2 md:flex-row justify-between md:items-center">
                                    <div className="flex gap-3 items-center">
                                        <input
                                            type="checkbox"
                                            className='w-5 h-5  border-2 border-black/30 bg-transparent rounded-md'
                                        />
                                        <p className='text-black font-medium font-para text-lg'>Remember me</p>
                                    </div>
                                </div>
                                <button 
                                    className='text-white text-lg my-2 md:text-md lg:text-lg font-subhead px-2 py-2 md:px-6 rounded-md bg-yellow-400 hover:text-black hover:bg-transparent border-2 w-full border-yellow-400 duration-300 ease-in-out'
                                    onClick={handleSubmit}
                                >
                                    Login
                                </button>
                                <p className='text-black font-bold text-center font-para text-lg'>Don’t have an account? 
                                    <Link to={'/sign-up'}>
                                        <span className='text-gray-500'>
                                            Sign up
                                        </span>
                                    </Link>
                                </p>
                                <div className='flex flex-col gap-4 my-2'>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="basis-[50%] w-[90%] m-auto pl-10 h-auto flex-col hidden lg:flex gap-10 relative">
                        <h2 className=' font-para text-4xl text-left font-bold text-black'>Login to get new Deals</h2>
                        <img src="./assets/Prop/mainlogin.png" alt="" className='w-[80%] self-start' />
                        <div className="flex flex-row justify-center gap-2">
                            {SocialLink.map((item, index) => (
                                <div className="hover:bg-black group p-2 rounded-full">
                                    <a href={item.Link} target='_blank'>
                                        <item.icon className='text-black group-hover:text-white ease-in-out duration-300 text-2xl' />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Login