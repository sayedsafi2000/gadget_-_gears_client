import React from 'react';
import { Link } from 'react-router-dom';
const Error404 = () => {
    return (
        <div className='w-9/12 mx-auto text-center my-10'>
            <h2 className='text-5xl font-extrabold text-red-700'>404 Not found</h2>

            <img className='w-1/2 mx-auto' src="error.png" alt="" />
            <button className='p-5 hover:bg-red-800 duration-200 hover:text-white text-red-900 border-2 rounded-xl border-red-800 mb-10'>
                <Link to={"/"}>Back To Home Page</Link>
            </button>
        </div>
    );
};

export default Error404;