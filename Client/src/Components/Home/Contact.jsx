import React from 'react'

const Contact = () => {
    return (
        <div className='w-[90%] m-auto flex flex-col gap-6 md:gap-10'>
            <div className="flex flex-col text-center gap-2">
                <h1 className='text-4xl md:text-6xl font-head font-semibold'>Contact Us</h1>
                <p className='md:text-lg font-subhead font-medium max-w-lg m-auto'>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
            </div>
            <div className="max-w-4xl w-[100%] m-auto bg-white shadow-shadowsh py-10 px-6 md:px-10 rounded-xl">
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col justify-between w-[100%] lg:flex-row gap-4">
                        <div className="flex w-[100%] flex-col gap-2">
                            <label htmlFor="" className='font-subhead text-lg font-medium'>Name</label>
                            <input type="text" className='font-subhead text-lg placeholder:text-gray-500 border-2 border-gray-300 bg-transparent rounded-full py-2 px-4' placeholder='Enter Your Name' />
                        </div>
                        <div className="flex w-[100%] flex-col gap-2">
                            <label htmlFor="" className='font-subhead text-lg font-medium'>Email</label>
                            <input type="email" className='font-subhead text-lg placeholder:text-gray-500 border-2 border-gray-300 bg-transparent rounded-full py-2 px-4' placeholder='Enter Your Name' />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className='font-subhead text-lg font-medium'>Subject</label>
                        <input type="text" className='font-subhead text-lg placeholder:text-gray-500 border-2 border-gray-300 bg-transparent rounded-full py-2 px-4' placeholder='Enter Your Subject' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className='font-subhead text-lg font-medium'>Message</label>
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="5"
                            className='font-subhead text-lg placeholder:text-gray-500 border-2 border-gray-300 bg-transparent rounded-3xl py-2 px-4' placeholder='Enter Your Name'
                        ></textarea>
                    </div>
                    <button className='bg-yellow-400 rounded-full py-3 w-[100%] border-2 border-yellow-400 hover:bg-transparent font-subhead font-semibold text-xl ease-in-out duration-300'>
                        Send Now
                    </button>
                </div>
            </div>
            <div className="flex flex-col max-w-4xl m-auto md:flex-row gap-6 font-subhead">
                <div className="flex flex-col gap-3 basis-[30%]">
                    <h2 className='text-lg font-semibold'>Call Us:</h2>
                    <p className='font-medium text-yellow-500 text-xl'>+1-234-567-8900</p>
                </div>
                <div className="flex flex-col gap-3 basis-[30%]">
                    <h2 className='text-lg font-semibold'>Hours:</h2>
                    <div>
                        <p className='font-medium'>Mon-Fri: 11am - 8pm</p>
                        <p className='font-medium'>Sat, Sun: 9am - 10pm</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3 basis-[30%]">
                    <h2 className='text-lg font-semibold'>Our Location:</h2>
                    <p className='font-medium'>123lorem lipsum  is a dummy text which is example</p>
                </div>
            </div>
        </div>
    )
}

export default Contact