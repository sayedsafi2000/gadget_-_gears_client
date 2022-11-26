import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider';
import Categories from '../Categories/Categories';
import BookingModal from '../DashBoard/BookingModal';

const DisplayCategory = () => {
    const category = useLoaderData();
    const { loading,user } = useContext(AuthContext);
    const [booking, setBooking] = useState(null);
    
    if (loading) {
        return <div class="text-center">
            <div role="status">
                <svg class="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    }
    return (
        <div className='w-10/12 mx-auto'>
            <h2 className="text-4xl font-bold my-5">FIND YOUR BEST PRODUCTS</h2>
            <div className='grid lg:grid-cols-3 gap-6 mx-auto'>
                {
                    category.map(catagories => <div
                        key={catagories._id}
                        setBooking={setBooking}
                    >

                        <div class="w-full bg-white rounded-lg shadow-xl border-2">
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
                                    <div>
                                        <h5 className="mb-2 text-md font-semibold tracking-tight text-gray-900 dark:text-white">Sellers Name: {catagories.userName}</h5>
                                        {
                                            user?.verify && <p>ok</p>
                                        }
                                    </div>
                                    <h5 className="mb-2 text-md font-semibold tracking-tight text-gray-900 dark:text-white">Sellers Email: {catagories.userEmail}</h5>
                                    <h5 className="mb-2 text-md font-semibold tracking-tight text-gray-900 dark:text-white">Sellers Phone: {catagories.phone}</h5>
                                    <h5 className="mb-2 text-sm font-semibold tracking-tight text-gray-900 dark:text-white">Original Price: ${catagories.orgPrice}</h5>
                                    <h5 className="mb-2 text-sm font-semibold tracking-tight text-gray-900 dark:text-white">About Phone: {catagories.description}</h5>
                                </div>
                                <div className=" flex items-center justify-between mb-6">
                                    <span className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Re-sale Price ${catagories.price}</span>
                                </div>
                                <label onClick={() => setBooking(catagories)} htmlFor="my-modal-4" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">open modal</label>

                            </div>
                        </div>
                    </div>)
                }
                <BookingModal
                    booking={booking}
                    catagories={category}
                ></BookingModal>
            </div>
        </div>
    );
};

export default DisplayCategory;