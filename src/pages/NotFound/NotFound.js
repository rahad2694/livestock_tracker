import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='flex justify-center my-3'>
            <Link to="/">
                <img className='rounded-xl' src="https://www.yogaleela.org/wp-content/uploads/2021/09/CodePen-404-Page.gif" alt="" />
            </Link>
        </div>
    );
};

export default NotFound;