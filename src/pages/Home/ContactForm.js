import React from 'react';

const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit} className='p-5 lg:w-2/6'>
            <input placeholder='Email Address' type="email" className='mb-3 input input-bordered input-md w-full' />
            <input placeholder='Subject' type="text" className='mb-3 input input-bordered input-md w-full' />
            <textarea style={{ height: '100px' }} placeholder='Your Message' className='mb-3 input input-bordered input-md w-full' type="text" />
            <div className='flex justify-center'>
                <input className="btn btn-primary text-white capitalize px-8" type="submit" />
            </div>
        </form>
    );
};

export default ContactForm;