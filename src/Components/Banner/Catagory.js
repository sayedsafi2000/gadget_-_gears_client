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
            <h2 className='text-3xl font-bold text-center my-10'>  Select Your Category</h2>
            <div className=' w-full mx-auto grid grid-cols-1 lg:grid-cols-4 gap-5'>
                {
                    category?.map((category) => 
                        <div key={category._id} className="card card-compact bg-base-300  mx-auto shadow-xl">
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
                    )
                }
            </div>
        </div>
    );
};

export default Catagory;