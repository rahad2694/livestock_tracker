import React from 'react';
import quote from './../../assets/icons/quote.svg'
import image1 from './../../assets/images/people1.png';
import image2 from './../../assets/images/people2.png';
import image3 from './../../assets/images/people3.png';
import IndividualReview from './IndividualReview';


const PatientReview = () => {
    const reviewData = [
        { id: 1, text: 'The Best Device along with a helpful customer support team! Happy purchase! Highly Recommended!', img: image1, name: 'Winson Herry', address: 'Mecklenburg, Germany' },
        { id: 2, text: 'They were so helpful that, they sent an expert in my house to set up the devices and help me using the softwares!', img: image2, name: 'Valina Terresa', address: 'Bavaria, Germany' },
        { id: 3, text: 'The Best in their category! Such a professional team! They provide help at wide range of locations!', img: image3, name: 'Natalia Gorchev', address: 'Texas, USA' },
    ]
    return (
        <section className='lg:px-12 mx-4 px-4 mt-20 mb-32'>
            <div className='flex justify-between mt-6 mb-10'>
                <div>
                    <h1 className='text-secondary font-semibold my-2'>Testimonial</h1>
                    <h1 className="text-3xl text-accent">What Our Customers Says</h1>
                </div>
                <div className='flex justify-end'>
                    <img className='w-2/4' src={quote} alt="" />
                </div>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-12 lg:px-8 px-4'>
                {
                    reviewData.map(review => <IndividualReview key={review.id} review={review}></IndividualReview>)
                }
            </div>
        </section>
    );
};

export default PatientReview;