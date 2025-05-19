"use client"
import Image from 'next/image'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter';
function Banner() {

    return (
        <section className='banner-section pt-80 pb-80'>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="banner-content">
                            <h1>Scale up Your E-commerce Sales with  <span style={{ color: '#FF7A59', fontWeight: '500' }}>
                                <Typewriter
                                    words={['Motion Content', 'Best Images', 'Creative Visuals']}
                                    loop={true}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span></h1>
                            <p>Stir up your online business to vertex level with apex quality and captivating visuals to make a boom.</p>
                            <form>
                                <div className="form-inner">
                                    <input type="text" placeholder="Enter Your Email Address" />
                                    <button type="submit">Get Started!
                                    </button>
                                </div>
                            </form>
                            <div className="row gy-4">
                                <div className="col-lg-6">
                                    <div className="feature-list">
                                        <div className="iocn">
                                            <Image src="/assets/img/icons/manager.png" alt="Fast Delivery" width={100} height={120} />
                                        </div>
                                        <div className="content">
                                            <h6>Dedicated Manager</h6>
                                            <p>
                                                to communicate for business growth.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="feature-list">
                                        <div className="iocn">
                                            <Image src="/assets/img/icons/monitor.png" alt="Fast Delivery" width={80} height={50} />
                                        </div>
                                        <div className="content">
                                            <h6>CRM Workflow</h6>
                                            <p>
                                                for Easy & secure order portal.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="block-expand-categories flex-column flex-lg-row d-flex justify-content-center">
                            <div className="expand-category bg-light" style={{ backgroundImage: 'url("/assets/img/home/model-retouch-home.webp")' }}>
                            </div>
                            <div className="expand-category bg-light" style={{ backgroundImage: 'url("/assets/img/home/jewelry.webp")' }}>
                            </div>
                            <div className="expand-category bg-light" style={{ backgroundImage: 'url("/assets/img/home/product.webp")' }}>
                            </div>
                            <div className="expand-category bg-light" style={{ backgroundImage: 'url("/assets/img/home/ghost-manniquin.webp")' }}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Banner
