import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { SocialLink } from '../Data/Navigation'
import AlertContext from '../Context/Alert/AlertContext'
import { BaseAPI } from '../Data/BaseAPI'

const Signup = () => {

    const AletContext = useContext(AlertContext);
    const { showAlert } = AletContext;

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        FirstName: '',
        LastName: '',
        Email: '',
        Phone: '',
        Password: '',
        ConfirmPassword: '',
        Role: ''
    });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRoleChange = (e) => {
        const selectedRole = e.target.name;
        setFormData({ ...formData, Role: selectedRole });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simple client-side validation
        if (formData.Password !== formData.ConfirmPassword) {
            showAlert("Passwords do not match", "danger");
            return;
        }

        // Ensure no fields are empty
        const requiredFields = ['FirstName', 'LastName', 'Email', 'Phone', 'Password', 'ConfirmPassword'];
        const emptyFields = requiredFields.filter(field => !formData[field]);
        if (emptyFields.length > 0) {
            showAlert("All fields are required", "danger");
            return;
        }

        try {
            const response = await fetch(`${BaseAPI}/api/userAuth/createuser`, {
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
                <h1 className='font-para text-4xl md:text-5xl text-center m-auto font-bold text-black max-w-[90%] md:max-w-[70%]'>Sign Up to taste Best food</h1>
            </div>
            <div className="w-[90%] xl:w-[80%] m-auto rounded-3xl shadow-shadow2">
                <div className="flex flex-row-reverse  items-center p-2 md:py-4 md:px-4 justify-between">
                    <div className="bg-[#FFD22F]/50 w-[100%] rounded-2xl lg:basis-[50%] px-6 md:px-14 py-10 md:py-20">
                        <div className="flex flex-col gap-4 font-para">
                            <h2 className=' font-para text-3xl font-bold text-black'>Sign up</h2>
                            <p className='text-lightgray font-para text-lg'>Let’s get you all set up so you can access your personal account.</p>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col md:flex-row justify-between gap-4">
                                    <input
                                        type="text"
                                        placeholder='John'
                                        className='py-3 text-lg px-4 border-2 border-black/30 bg-transparent rounded-lg'
                                        name="FirstName"
                                        value={formData.FirstName}
                                        onChange={handleChange}
                                    />
                                    <input
                                        type="text"
                                        placeholder='Dep'
                                        className='py-3 text-lg px-4 border-2 border-black/30 bg-transparent rounded-lg'
                                        name="LastName"
                                        value={formData.LastName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex flex-col md:flex-row justify-between gap-4">
                                    <input
                                        type="email"
                                        placeholder='abc@gmail.com'
                                        className='py-3 text-lg px-4 border-2 border-black/30 bg-transparent rounded-lg'
                                        name="Email"
                                        value={formData.Email}
                                        onChange={handleChange}
                                    />
                                    <input
                                        type="tel"
                                        placeholder='1234567890'
                                        className='py-3 text-lg px-4 border-2 border-black/30 bg-transparent rounded-lg'
                                        name="Phone"
                                        value={formData.Phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <input
                                    type="password"
                                    placeholder='Password'
                                    className='py-3 text-lg px-4 border-2 border-black/30 bg-transparent rounded-lg'
                                    name="Password"
                                    value={formData.Password}
                                    onChange={handleChange}
                                />
                                <input
                                    type="password"
                                    placeholder='Confirm Password'
                                    className='py-3 text-lg px-4 border-2 border-black/30 bg-transparent rounded-lg'
                                    name="ConfirmPassword"
                                    value={formData.ConfirmPassword}
                                    onChange={handleChange}
                                />
                                <div className='flex flex-col gap-1'>
                                    <label htmlFor="" className='font-para text-lg font-bold'>Role</label>
                                    <div className="flex gap-2">
                                        <label>
                                            <input
                                                type="checkbox"
                                                name='Business'
                                                checked={formData.Role === 'Business'}
                                                onChange={handleRoleChange}
                                            />
                                            Business
                                        </label>
                                        <label>
                                            <input
                                                type="checkbox"
                                                name='Customer'
                                                checked={formData.Role === 'Customer'}
                                                onChange={handleRoleChange}
                                            />
                                            Customer
                                        </label>
                                    </div>
                                </div>
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
                                    Create account
                                </button>
                                <p className='text-black font-bold text-center font-para text-lg'>Already have an account?
                                    <Link to={'/login'}>
                                        <span className='text-gray-500'>
                                            Login
                                        </span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="basis-[50%] w-[90%] m-auto pl-10 h-auto flex-col hidden lg:flex gap-10 relative">
                        <h2 className=' font-para text-4xl text-left font-bold text-black'>Sign Up to get new Deals</h2>
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

export default Signup