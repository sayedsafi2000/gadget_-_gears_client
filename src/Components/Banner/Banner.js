import React from 'react';
import Catagory from './Catagory';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
const Banner = () => {
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
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
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
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
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
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
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
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
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