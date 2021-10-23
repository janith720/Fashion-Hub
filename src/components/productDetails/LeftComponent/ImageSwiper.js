import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import  SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import "swiper/components/pagination/pagination.min.css";
import Image1 from '../../../images/productsImgs/product11.jpg';
import Image2 from '../../../images/productsImgs/product12.jpg';
import ImageMagnifer from './ImageMagnifer';

SwiperCore.use([Pagination]);

const imageArray = [Image1,Image2];

export default function ImageSwiper() {
    return (
        <div>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
                >

                {imageArray.map((val,key) => {
                    return(
                        <SwiperSlide key={key} style={{width: '600px'}}>
                        <ImageMagnifer image={val} />
                    </SwiperSlide>
                    )
                })}    
                
            </Swiper>
        </div>
    )
}
