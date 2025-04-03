import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Add.css';

// Import images
import slider1 from '../../../Assets/slider/house-heating-concept-modern-home-gas-fired-boiler-energy-cash-savings-3d-rendering_415584-33.jpg';
import slider2 from '../../../Assets/slider/men-s-hand-holds-glass-clear-water-tap-reverse-osmosis-filter-background_179369-577.jpg';
import slider3 from '../../../Assets/slider/sungrow-emea-ceTSHQ0qars-unsplash.jpg';
import slider4 from '../../../Assets/slider/thiru-n-n0gFDrIrTuU-unsplash.jpg';

function Addes() {
    return (
        <div className="slider-container1">
            <Swiper
                loop={true}
                slidesPerView={1}
                spaceBetween={20} // Adds space between slides
                speed={500} // Smooth transition
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    768: { slidesPerView: 2, spaceBetween: 30, centeredSlides: false },
                    1200: { slidesPerView: 3, spaceBetween: 40, centeredSlides: false }
                }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
                className="blog-slider"
            >
                {[slider1, slider2, slider3, slider4].map((image, index) => (
                    <SwiperSlide className='code' key={index}>
                        <img src={image} alt={`Slider ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Addes;
