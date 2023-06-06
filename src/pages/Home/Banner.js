import React from 'react';
import Cards from './Cards';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-white lg:px-12 my-8 lg:my-0">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                    <img src="https://i.ibb.co/jzwrrt3/carousel1-removebg-preview.png" alt="Chair of doctor" className="lg:w-2/4 w-11/12 rounded-lg" />
                    <div className='lg:w-2/4 mx-4 lg:mx-auto mt-12 lg:mt-0'>
                        <h1 className="text-4xl font-bold lg:w-3/4 mx-auto">Your domestics are always under your eye</h1>
                        <p className="py-6">Our Live Stock tracking device will make your life easy and enable you to track your livestock with just one click!</p>
                        <button className="btn btn-primary text-white bg-gradient-to-r from-secondary to-primary mx-auto">Get Started</button>
                    </div>
                </div>
            </div>
            <Cards></Cards>
        </div>
    );
};

export default Banner;