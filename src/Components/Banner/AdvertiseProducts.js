import React from 'react';
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom"
const AdvertiseProducts = () => {

    const { data: advertisementProducts = [] } = useQuery({
        queryKey: ["advertisement"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/advertise-products`,{
                headers: {
                    authorization: `bearer ${localStorage.getItem("accessToken")}`
                }
            })
            const data = res.json()
            return data
        }
    });

    return (
        <div className=' w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 '>
            {
                advertisementProducts.map(ads =>
                    <div className=''>
                        <div className=''>
                            <div key={ads._id} className=" bg-base-200  mx-auto shadow-xl">
                                <h2 className='text-xl text-gray-600 font-bold'>Advertised for {ads.title}</h2>
                                <h2 className='text-sm text-gray-800'>Advertised for {ads.postedTime}</h2>
                                <div className='flex'>
                                    <figure><img className='w-[250px] h-[80%]' src={ads.image} alt="phone" /></figure>
                                    <div className="card-body">
                                        <h2 className="text-md">Original Price:  <span className='text-xs text-gray-600'>${ads.orgPrice}</span> </h2>
                                        <h2 className="text-md">Re-sale Price:  <span className='text-xs text-gray-600'> ${ads.price}</span></h2>
                                        <h2 className="text-md">Contract:  <span className='text-xs text-gray-600'>{ads.phone}</span> </h2>
                                        <h2 className="text-md">Email:  <span className='text-xs text-gray-600'>{ads.userEmail}</span> </h2>
                                        <h2 className="text-md">Location:  <span className='text-xs text-gray-600'>{ads.place}</span> </h2>
                                        <h2 className="text-md"> <span className='text-xs text-gray-600'>{ads.name}</span> </h2>
                                        <p>Select your ads for your needed product</p>
                                        <button className="btn bg-blue-700">Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default AdvertiseProducts;