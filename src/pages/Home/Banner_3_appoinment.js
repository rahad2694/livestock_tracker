import React from 'react';

const Banner_3_appoinment = () => {
    return (
        <div className='pt-10'>
            <div className="hero my-10 bg-white bg-[url('/src/assets/images/appointment.png')] bg-cover">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/wczfjp4/IMG-1697-removebg-preview.png" alt='' className="w-2/4 hidden lg:block mt-[-140px]" />
                    <div className='text-white px-2 lg:px-0 lg:py-0 py-8'>
                        <h1 className='text-secondary font-semibold my-4'>Appointment</h1>
                        <h1 className="text-3xl font-bold">Make an Expert appointment Today</h1>
                        <p className="py-6 text-sm">A dynamic customer support team is ready to welcome you at our office and provide you with all the relevant information and an opportunity for on spot booking!</p>
                        <button className="btn btn-primary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner_3_appoinment;