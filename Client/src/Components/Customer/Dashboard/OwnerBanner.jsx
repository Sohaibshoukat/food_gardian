import React from 'react'

const OwnerBanner = ({Busines}) => {
    const phoneNumber = Busines?.Phone;
    const message = 'Hello...';
    const whatsappDeepLink = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${message}`;
    const emailAddress = Busines?.Email;
    const emailSubject = 'Inquiry about Listed Food';
    const emailBody = 'Hello...';

    // Function to handle the email button click
    const handleEmailButtonClick = () => {
        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        window.location.href = mailtoLink;
    };

    // Function to handle the button click
    const handleButtonClick = () => {
        window.open(whatsappDeepLink, '_blank');
    };

    return (
        <div className='OwnerBanner rounded-2xl my-6 md:my-10'>
            <div className="flex flex-row justify-between relative">
                <div className="flex flex-col font-para text-white gap-2 pt-16 pb-10 px-4 md:px-10 xl:basis-[40%]">
                    <div>
                        <h1 className='text-2xl font-bold'>{Busines?.FirstName} {Busines?.LastName}</h1>
                        <h3 className='text-xl font-medium'>Owner</h3>
                    </div>
                    <div className="flex flex-row gap-4 items-center">
                        <h2 className='text-xl font-bold'>Contact Owner</h2>
                        <div className="flex flex-row gap-2 items-center">
                            <img src="../../assets/Contact/gmail.png" alt="" className='w-6' onClick={handleEmailButtonClick} />
                            <img src="../../assets/Contact/whatsapp.png" alt="" className='w-6' onClick={handleButtonClick} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OwnerBanner