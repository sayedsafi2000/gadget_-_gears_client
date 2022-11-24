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
            <div className=' flex justify-between h-[400px] w-10/12 mx-auto items-center my-14'>
                <div className='w-1/2 '>
                    <h2 className='text-xl font-bold mb-10'>Want to buy a second hand Phone? <br />Come to us <br />We can give you best phone in your budget </h2>
                    <img className='w-4/5 h-[400px]' src="banner-photo.png" alt="" />
                </div>
                {/* <div className="carousel w-1/2 shadow-xl">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img alt="" src="banner.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img alt="" src="banner2.jpeg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img alt="" src="banner2.jpeg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img alt='' src="banner2.jpeg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div> */}


                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className="w-9/12 rounded-md"
                >
                    <SwiperSlide> <img alt="" src="banner.jpg" className="w-full h-full" /></SwiperSlide>
                    <SwiperSlide><img alt="" src="banner2.jpeg" className="w-full h-full" /></SwiperSlide>
                    <SwiperSlide><img alt="" src="tablet.png" className="w-full h-full" /></SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                </Swiper>
            </div>
            <div className='mt-20'>
                <Catagory></Catagory>
            </div>
        </div>
    );
};

export default Banner;