import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider';
import Categories from '../Categories/Categories';
import BookingModal from '../DashBoard/BookingModal';

const DisplayCategory = () => {
    const category = useLoaderData();
    return (
        <div className='w-10/12 mx-auto'>
            <h2 className="text-4xl font-bold my-5">Find your products</h2>
            <div className='grid lg:grid-cols-3 gap-6 mx-auto'>
                {
                    category.map(catagories => <>
                        <div key={catagories._id} class="w-full bg-white rounded-lg shadow-xl border-2">
                            <Link href="#">
                                <img className='p-8 w-full  lg:h-[350px] rounded-t-lg' src={catagories.image} alt="" />
                            </Link>

                            <div class="px-5 pb-5">
                                <h5 className="mb-2 text-sm  tracking-tight text-yellow-700 dark:text-white">Item posted on:{catagories.postedTime}</h5>
                                <Link href="#">
                                    <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{catagories.title}</h5>
                                </Link>
                                <div>
                                    <h5 className="mb-2 text-md font-semibold tracking-tight text-gray-900 dark:text-white">Product's Condition: {catagories.condition}</h5>
                                    <h5 className="mb-2 text-md font-semibold tracking-tight text-gray-900 dark:text-white">We will meet :{catagories.place}</h5>
                                    <h5 className="mb-2 text-md font-semibold tracking-tight text-gray-900 dark:text-white">Sellers Name: {catagories.userName}</h5>
                                    <h5 className="mb-2 text-md font-semibold tracking-tight text-gray-900 dark:text-white">Sellers Email: {catagories.userEmail}</h5>
                                    <h5 className="mb-2 text-md font-semibold tracking-tight text-gray-900 dark:text-white">Sellers Phone: {catagories.phone}</h5>
                                    <h5 className="mb-2 text-sm font-semibold tracking-tight text-gray-900 dark:text-white">Original Price: ${catagories.orgPrice}</h5>
                                    <h5 className="mb-2 text-sm font-semibold tracking-tight text-gray-900 dark:text-white">About Phone: {catagories.description}</h5>
                                </div>
                                <div className=" flex items-center justify-between mb-6">
                                    <span className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Re-sale Price ${catagories.price}</span>
                                </div>
                                <label htmlFor="my-modal-4" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">open modal</label>
                            </div>
                            <BookingModal
                                catagories={catagories}
                            ></BookingModal>
                        </div>

                    </>)
                }

            </div>
        </div>
    );
};

export default DisplayCategory;