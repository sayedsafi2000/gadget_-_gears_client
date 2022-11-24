import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
const Catagory = () => {
    const [category, setCategory] = useState();
    useEffect(() => {
        fetch("http://localhost:5000/category")
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    return (
        <div>
            <h2 className='text-2xl font-bold text-center my-10'>  Select Your Category</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {
                    category?.map(category => <>
                        <div className="card card-compact w-80 mx-auto shadow-xl">
                            <figure><img src={category.image} alt="phone" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{category.name}</h2>
                                <p>Select your category for your needed product</p>
                                <div className="card-actions justify-center">
                                    <Link to={`/service/${category.category}`}>
                                        <button className="btn bg-gray-600 my-5 text-white">View all {category.name}</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default Catagory;