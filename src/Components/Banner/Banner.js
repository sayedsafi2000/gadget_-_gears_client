import React, { useContext } from 'react';
import Catagory from './Catagory';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import AdvertiseProducts from './AdvertiseProducts';
import useTitle from '../../Hooks/useTitle';
import { AuthContext } from '../../Context/Authprovider';
const Banner = () => {
    const {loading} = useContext(AuthContext);
    useTitle("Gadget & Gears-Home")
    if (loading) {
        return <div className="text-center">
            <div role="status">
                <svg className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    }
    return (
        <div className='mt-24'>
            <div className='none lg:flex justify-between h-full lg:h-[400px] w-full lg:w-10/12 mx-auto items-center my-14'>
                <div className='w-full lg:w-1/2 '>

                    <img className='lg:w-4/5 lg:h-[400px]' src="banner-photo.png" alt="" />
                </div>


                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    className="w-full lg:w-9/12 rounded-md"
                >
                    <SwiperSlide> <img alt="" src="banner.jpg" className="w-full h-full" /></SwiperSlide>
                    <SwiperSlide><img alt="" src="banner2.jpeg" className="w-full h-full" /></SwiperSlide>
                    <SwiperSlide><img alt="" src="tablet.png" className="w-full h-full" /></SwiperSlide>
                </Swiper>
            </div>
            <div>
                <h2 className='w-10/12 mx-auto bg-base-200 text-3xl border p-3 shadow font-bold mb-10 text-center'>Want to buy a second-hand Phone? <br /><span className='font-extrabold text-4xl text-gray-700'>Come to us</span> <br />We can provide you best phone in your budget </h2>
            </div>
            <div>
                <AdvertiseProducts></AdvertiseProducts>
            </div>
            <div className='mt-20'>
                <Catagory></Catagory>
            </div>
            <div>
                <h2 className="text-3xl text-center mt-10 mb-5 font-bold">Our Buyers Review</h2>
                <div className='w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 '>
                    <div className="card shadow-xl bg-base-200">
                        <figure className="px-10 pt-10">
                            <img src="men.jpeg" alt="Shoes" className="rounded-full w-12 h-12 " />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Devid Gragory</h2>
                            <p>I am very setisfied to buy tab from gedget and gears.</p>
                            <div className="card-actions">
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-200 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="men3.jpeg" alt="Shoes" className="rounded-full w-12 h-12 " />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Matt Mardogh</h2>
                            <p>I am very setisfied to buy tab from gedget and gears.</p>
                            <div className="card-actions">
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-200 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="men4.jpeg" alt="Shoes" className="rounded-full w-12 h-12 " />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Heron Mollah</h2>
                            <p>Not so good,Some fruad are also here.</p>
                            <div className="card-actions">
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;