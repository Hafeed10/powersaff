import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Add.css';

// Import Swiper modules
import { EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';

// Import images
import slider1 from '../../../Assets/slider/house-heating-concept-modern-home-gas-fired-boiler-energy-cash-savings-3d-rendering_415584-33.jpg';
import slider2 from '../../../Assets/slider/men-s-hand-holds-glass-clear-water-tap-reverse-osmosis-filter-background_179369-577.jpg';
import slider3 from '../../../Assets/slider/sungrow-emea-ceTSHQ0qars-unsplash.jpg';
import slider4 from '../../../Assets/slider/thiru-n-n0gFDrIrTuU-unsplash.jpg';

function Addes() {
    useEffect(() => {
        new Swiper(".blog-slider", {
            loop: true,
            slidesPerView: 1,
            speed: 800, // Smooth transition
            effect: "coverflow",
            coverflowEffect: {
                rotate: 30,
                stretch: 10,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            },
            mousewheel: {
                invert: false,
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false, // Keeps autoplay running even if user interacts
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    centeredSlides: true,
                },
                1200: {
                    slidesPerView: 3,
                    centeredSlides: true,
                }
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                type: "bullets" // Better UI than fraction
            },
            modules: [EffectCoverflow, Autoplay, Pagination] // Ensure modules are loaded
        });
    }, []);

    return (
        <section className="Am-img-slider-container">
            <div className="swiper blog-slider">
                <div className="swiper-wrapper">
                    {[
                        {
                            title: "Water Purifier",
                            image: slider2,
                            imdb: "IMDB 6.5/10",
                            description: "A water purifier removes impurities to provide clean drinking water."
                        },
                        {
                            title: "Solar Water Heater",
                            image: slider1,
                            imdb: "IMDB 7.5/10",
                            description: "Uses solar energy to heat water efficiently."
                        },
                        {
                            title: "Solar Panel",
                            image: slider3,
                            imdb: "IMDB 8.2/10",
                            description: "Converts sunlight into electricity using photovoltaic (PV) cells."
                        },
                        {
                            title: "Solar LED Street Light",
                            image: slider4,
                            imdb: "IMDB 7.8/10",
                            description: "A self-sustaining outdoor lighting system powered by solar energy."
                        },
                    ].map((item, index) => (
                        <div className="swiper-slide" key={index}>
                            <div className="blog-slider__imgs">
                                <img className="back-image" alt={item.title} src={item.image} />
                                <div className="movie-image-container">
                                    <img className="movie-image blog-slider__img" alt={item.title} src={item.image} />
                                    <div className="overly">
                                        <a href="#" title="-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                                                preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                                <path fill="currentColor"
                                                    d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-slider__content">
                                <h2 className="blog-slider__title">{item.title}</h2>
                                <p className="blog-slider__text">{item.description}</p>
                                <span className="blog-slider__rate">{item.imdb}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </section>
    );
}

export default Addes;
