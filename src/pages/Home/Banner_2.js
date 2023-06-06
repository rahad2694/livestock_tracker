import React from 'react';
import careimg from './../../assets/images/treatment.png'

const Banner_2 = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-white lg:px-12 lg:w-3/4 mx-auto mb-24">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/GvZByKN/GIF.gif" alt='' className="max-w-sm w-3/4 rounded-lg mb-6 lg:mb-0" />
                    <div className='mx-4 lg:ml-6'>
                        <h1 className="lg:text-4xl text-5xl font-bold">Monitor multiple Live-stocks in  a single screen</h1>
                        <p className="py-6 text-sm">Both in the mobile app and the web app has the feature to add multiple livestocks, so that the owner has access to all of his domestic animals in a shorter view.</p>
                        <button className="btn btn-primary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner_2;