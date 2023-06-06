import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='flex justify-center my-3'>
            <Link to="/">
                <img className='rounded-xl' src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzhlNDdiNjViOGEwOTMxZmNlNmI1MmZmOWYyNDdhNDZhZmJkNjU2ZiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/8L0Pky6C83SzkzU55a/giphy.gif" alt="" />
            </Link>
        </div>
    );
};

export default NotFound;