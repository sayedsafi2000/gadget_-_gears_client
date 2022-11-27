import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import useTitle from '../../Hooks/useTitle';
const Catagory = () => {
    const [category, setCategory] = useState();
    useEffect(() => {
        axios.get("https://gadget-and-gears-server.vercel.app/category")
        .then(data=>{
            setCategory(data.data)
        })
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
                                    <Link to={`/service/${category._id}`}>
                                        <button className="btn bg-blue-700 my-5 text-white">View all {category.name}</button>
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