import React from 'react';

const Services = () => {
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-x-4 lg:px-12 gap-y-12 lg:gap-y-0 my-12  w-11/12 lg:w-full mx-auto rounded-lg text-center'>
            <div className='p-8 shadow-lg rounded-xl'>
                <div className='flex justify-center mb-4 h-48 w-48 mx-auto'>
                    <img src="https://m.media-amazon.com/images/I/610l+XePS4L.jpg" alt="" />
                </div>
                <h1 className='font-semibold my-2'>Tracking Device</h1>
                <h1 className='text-sm w-3/4 mx-auto'>The Device which will enable you to track your Livestock!</h1>
            </div>

            <div className='p-8 shadow-lg rounded-xl'>
                <div className='flex justify-center mb-4 h-48 w-48 mx-auto'>
                    <img src="https://play-lh.googleusercontent.com/KwSi-1A54xJt1P5R9pIDdEV6FOJ_AMUHflQMiK7PP9kjzbd8woMJwxzk9fBb0CWQ8qib" alt="" />
                </div>
                <h1 className='font-semibold my-2'>Software Support</h1>
                <h1 className='text-sm w-3/4 mx-auto'>We will provide you with all the necessary software and support.</h1>
            </div>

            <div className='p-8 shadow-lg rounded-xl'>
                <div className='flex justify-center mb-4 h-48 w-48 mx-auto'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM-NBPLzCZlJmwRQVkQIxPQgp9CTMTY4Lubw&usqp=CAU" alt="" />
                </div>
                <h1 className='font-semibold my-2'>After Sales Service</h1>
                <h1 className='text-sm w-3/4 mx-auto'>We will provide a technical team to visit and help customers along with a call center support.</h1>
            </div>
        </div>
    );
};

export default Services;