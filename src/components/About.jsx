import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <section className='about-section pt-80 pb-80'>
            <div className="container">
                <div className="row gy-4">
                    <div className="col-xl-5 col-lg-5">
                        <div className="section-title">
                            <span>About</span>
                            <h2>Every Pixel, Every Detail – Masterful Retouching</h2>
                            <p>Perfect Retouching offers flawless, professional photo editing and expert image retouching and video editing services, with a commitment to delivering on time, every time. We specialize in enhancing the beauty of every frame, restoring old photos, and capturing the true essence of each image. Trust us to bring your visuals to life with the precision and quality your brand deserves.</p>
                            <ul className='service-list'>
                                <li>
                                    < i className='bx  bx-check-circle'></i>User-friendly Order System
                                </li>
                                <li>
                                    < i className='bx  bx-check-circle'></i>Support within 10 Sec
                                </li>
                                <li>
                                    < i className='bx  bx-check-circle'></i>Support within 10 Sec
                                </li>
                                <li>
                                    < i className='bx  bx-check-circle'></i>Analyze Instructions
                                </li>
                                <li>
                                    < i className='bx  bx-check-circle'></i>Any Order Quantity
                                </li>
                                <li>
                                    < i className='bx  bx-check-circle'></i>Affordable Artistry
                                </li>
                                <li>
                                    < i className='bx  bx-check-circle'></i>No Hidden Charge
                                </li>
                                <li>
                                    < i className='bx  bx-check-circle'></i>Secure Payment
                                </li>
                                <li>
                                    < i className='bx  bx-check-circle'></i>Free Revisions
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7 col-lg-7">
                        <div className="row gy-4">
                            <div className="col-xl-7 col-lg-12 col-md-7">
                                <Image data-wow-delay="200ms"
                                    data-wow-duration="1500ms" className='wow pulse' src="/assets/img/home/home-about.webp" alt="service" width={720} height={400} layout='' />
                            </div>
                            <div className="col-xl-5 col-lg-12 col-md-5">
                                <div className="about-content-right">
                                    <div className="single-content">
                                        <h3> Brand Personality</h3>
                                        <p>We craft striking visuals with photo editing that embody your unique brand personality, establishing a robust identity in the market through superior visual communication.</p>
                                    </div>
                                    <div className="single-content">
                                        <h3>Wallet & Time-Saving</h3>
                                        <p>
                                            Our streamlined professional photo retouching services and rapid turnaround times not only save you time and money but also allow you to concentrate on what matters most for your business priorities.</p>
                                    </div>
                                    <div className="single-content">
                                        <h3>Sales Focused</h3>
                                        <p>
                                            Our team of visual craftsmen and editors skillfully enhance your images with precision and perfection, effortlessly elevating your brand. We deliver captivating visuals that inspire audiences and drive sales.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
