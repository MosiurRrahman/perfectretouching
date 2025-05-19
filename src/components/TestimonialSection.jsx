"use client"
import Image from 'next/image'
import React, { useMemo, useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Autoplay,
    EffectFade,
    Navigation,
    Pagination,
} from "swiper";
import Counter from '@/utils/Counter';
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);
const TestimonialSection = () => {
     const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const settings = useMemo(() => {
        return {
            slidesPerView: 1,
            speed: 1500,
            spaceBetween: 24,
            pagination: {
                // el: ".swiper-pagination1",
                clickable: true,
            },
            // autoplay: {
            //     delay: 2500, // Autoplay duration in milliseconds
            //     disableOnInteraction: false,
            //     pauseOnMouseEnter: true,
            // },
            navigation: {
                nextEl: ".testimonial-slider-next",
                prevEl: ".testimonial-slider-prev",
            },

        };
    }, []);
    return (
        <section className='testimonial-section pt-80 pb-80'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="counter-wrapper">
                            <h2>Trust, Transparency, Transformation.</h2>
                            <p className='sub-title'>Having the essence of trust with professional work transparency. </p>
                            <p className='no-more'>Know More</p>
                            <h2 className='mt-0'>Rethink, Rebuilt, Retouch - Unleash Your Brand’s Potential</h2>
                            <div className="counter-list">
                                <div className="row justify-content-between">
                                    <div className="col-lg-6 col-6 mt-30">
                                        <div className="single-counter">
                                            <div className="content">
                                                <div className="number">
                                                    <Counter
                                                        start={0}
                                                        end={120}
                                                        speed={10}
                                                        forwardedRef={ref1}
                                                        as="strong"
                                                        className="counter"
                                                    />
                                                    <span>+</span>
                                                </div>
                                                <p>Designers</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-6 mt-30">
                                        <div className="single-counter">
                                            <div className="content">
                                                <div className="number">
                                                    <Counter
                                                        start={0}
                                                        end={333}
                                                        speed={0.0}
                                                        forwardedRef={ref2}
                                                        as="strong"
                                                        className="counter"
                                                    />
                                                    <span>+</span>
                                                </div>
                                                <p>Clients</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-6 mt-30">
                                        <div className="single-counter">
                                            <div className="content">
                                                <div className="number">
                                                    <Counter
                                                        start={0}
                                                        end={313}
                                                        speed={0.0}
                                                        forwardedRef={ref3}
                                                        as="strong"
                                                        className="counter"
                                                    />
                                                    <span>+</span>
                                                </div>
                                                <p>Projects</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-6 mt-30">
                                        <div className="single-counter">
                                            <div className="content">
                                                <div className="number">
                                                    <Counter
                                                        start={0}
                                                        end={313}
                                                        speed={0.0}
                                                        forwardedRef={ref4}
                                                        as="strong"
                                                        className="counter"
                                                    />
                                                    <span>+</span>
                                                </div>
                                                <p>Designers</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <p className='description'>From commercial photo editing to portrait photo editing, get impactful and best photo editing services from a reputable photo editing company. Custom photo editing services that will fix old photos through color correction services, smoothening, and other techniques to provide the perfect photo restoration service.</p>

                        </div>
                    </div>
                    <div className="col-lg-6">
                        <Swiper {...settings} className="swiper testimonial-slider">
                            <div className="swipper-wrapper">
                                <SwiperSlide className="swiper-slide">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="testimonial-card-wrap">
                                                <div className="left-card">
                                                    <div className="testimonial-card ">
                                                        <Image src="/assets/img/reviews/auth1.webp" alt="Testimonial"
                                                            className='auth-img' width={70} height={70} />
                                                        <div className="content">
                                                            <ul className='review-list'>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                            </ul>
                                                            <p>Excellent photo retouching
                                                                service! Fast, detailed, and professional. Transformed images
                                                                beautifully, enhancing every detail!</p>
                                                            <h6>Burdeens Jewelry Ltd</h6>
                                                            <small>Les Joyaux Daure</small>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="right-cards">
                                                    <div className="testimonial-card small">
                                                        <Image src="/images/testimonial/1.jpg" alt="Testimonial" width={100} height={100} />
                                                        <div className="content">
                                                            <ul className='review-list'>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                            </ul>
                                                            <p>Excellent photo retouching
                                                                service! Fast, detailed, and professional. Transformed images
                                                                beautifully, enhancing every detail!</p>
                                                            <h6>Burdeens Jewelry Ltd</h6>
                                                            <small>Les Joyaux Daure</small>
                                                        </div>
                                                    </div>
                                                    <div className="testimonial-card small">
                                                        <Image src="/images/testimonial/1.jpg" alt="Testimonial" width={100} height={100} />
                                                        <div className="content">
                                                            <ul className='review-list'>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                            </ul>
                                                            <p>Excellent photo retouching
                                                                service! Fast, detailed, and professional. Transformed images
                                                                beautifully, enhancing every detail!</p>
                                                            <h6>Burdeens Jewelry Ltd</h6>
                                                            <small>Les Joyaux Daure</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="testimonial-card-wrap">
                                                <div className="left-card">
                                                    <div className="testimonial-card ">
                                                        <Image src="/assets/img/reviews/auth1.webp" alt="Testimonial"
                                                            className='auth-img' width={70} height={70} />
                                                        <div className="content">
                                                            <ul className='review-list'>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                            </ul>
                                                            <p>Excellent photo retouching
                                                                service! Fast, detailed, and professional. Transformed images
                                                                beautifully, enhancing every detail!</p>
                                                            <h6>Burdeens Jewelry Ltd</h6>
                                                            <small>Les Joyaux Daure</small>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="right-cards">
                                                    <div className="testimonial-card small">
                                                        <Image src="/images/testimonial/1.jpg" alt="Testimonial" width={100} height={100} />
                                                        <div className="content">
                                                            <ul className='review-list'>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                            </ul>
                                                            <p>Excellent photo retouching
                                                                service! Fast, detailed, and professional. Transformed images
                                                                beautifully, enhancing every detail!</p>
                                                            <h6>Burdeens Jewelry Ltd</h6>
                                                            <small>Les Joyaux Daure</small>
                                                        </div>
                                                    </div>
                                                    <div className="testimonial-card small">
                                                        <Image src="/images/testimonial/1.jpg" alt="Testimonial" width={100} height={100} />
                                                        <div className="content">
                                                            <ul className='review-list'>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                            </ul>
                                                            <p>Excellent photo retouching
                                                                service! Fast, detailed, and professional. Transformed images
                                                                beautifully, enhancing every detail!</p>
                                                            <h6>Burdeens Jewelry Ltd</h6>
                                                            <small>Les Joyaux Daure</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="testimonial-card-wrap">
                                                <div className="left-card">
                                                    <div className="testimonial-card ">
                                                        <Image src="/assets/img/reviews/auth1.webp" alt="Testimonial"
                                                            className='auth-img' width={70} height={70} />
                                                        <div className="content">
                                                            <ul className='review-list'>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                            </ul>
                                                            <p>Excellent photo retouching
                                                                service! Fast, detailed, and professional. Transformed images
                                                                beautifully, enhancing every detail!</p>
                                                            <h6>Burdeens Jewelry Ltd</h6>
                                                            <small>Les Joyaux Daure</small>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="right-cards">
                                                    <div className="testimonial-card small">
                                                        <Image src="/images/testimonial/1.jpg" alt="Testimonial" width={100} height={100} />
                                                        <div className="content">
                                                            <ul className='review-list'>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                            </ul>
                                                            <p>Excellent photo retouching
                                                                service! Fast, detailed, and professional. Transformed images
                                                                beautifully, enhancing every detail!</p>
                                                            <h6>Burdeens Jewelry Ltd</h6>
                                                            <small>Les Joyaux Daure</small>
                                                        </div>
                                                    </div>
                                                    <div className="testimonial-card small">
                                                        <Image src="/images/testimonial/1.jpg" alt="Testimonial" width={100} height={100} />
                                                        <div className="content">
                                                            <ul className='review-list'>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                                <li><i className='bi bi-star-fill'></i></li>
                                                            </ul>
                                                            <p>Excellent photo retouching
                                                                service! Fast, detailed, and professional. Transformed images
                                                                beautifully, enhancing every detail!</p>
                                                            <h6>Burdeens Jewelry Ltd</h6>
                                                            <small>Les Joyaux Daure</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>
                        </Swiper>
                        <div className="slider-btn-grp">
                            <div className="slider-btn testimonial-slider-prev" style={{ cursor: "pointer" }}>
                                <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M11.002 13.0005C10.002 10.5005 5.00195 8.00049 2.00195 7.00049C5.00195 6.00049 9.50195 4.50049 11.002 1.00049" strokeWidth="1.5" strokeLinecap="round" />
                                    </g>
                                </svg>
                            </div>
                            <div className="slider-btn testimonial-slider-next" style={{ cursor: "pointer" }}>
                                <svg width={14} height={14} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M2.99805 13.0005C3.99805 10.5005 8.99805 8.00049 11.998 7.00049C8.99805 6.00049 4.49805 4.50049 2.99805 1.00049" strokeWidth="1.5" strokeLinecap="round" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialSection
