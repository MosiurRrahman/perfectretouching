import Image from 'next/image'
import React from 'react'

const BlogSection = () => {
    return (
        <section className="blog-section pt-80 pb-80">
            <div className="container">
                <div className="row gy-5 justify-content-between">
                    <div className="col-lg-3">
                        <div className="blog-section-title">
                            <h2>Our Latest Post</h2>
                            <p>Capture, Create, and Enhance: Pro Photography and Editing Advice</p>
                            <a className='primary-btn2' href="#">View all Posts</a>
                        </div>
                    </div>
                    <div className="col-lg-8 ">
                        <div className="dotted-bg "></div>
                        <div className="row gy-3">
                            <div className="col-xl-4 col-md-6 col-sm-6">
                                <div className="blog-card">
                                    <a href="" className='blog-img'>
                                        <Image src="/assets/img/blog/img1.webp" alt="blog" width={350} height={250} layout="responsive" />
                                    </a>
                                    <div className="blog-content">
                                        <ul className="date-and-time">
                                            <li><a href="#" >April 25, 2025, 4:42 AM</a></li>
                                        </ul>
                                        <h4><a href="#">Master Photoshop Bracelet Jewelry Retouching with These Simple Steps in 2025</a></h4>
                                    </div>

                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 col-sm-6">
                                <div className="blog-card">
                                    <a href="" className='blog-img'>
                                        <Image src="/assets/img/blog/img2.webp" alt="blog" width={350} height={250} layout="responsive" />
                                    </a>
                                    <div className="blog-content">
                                        <ul className="date-and-time">
                                            <li><a href="#" >April 17, 2025, 10:24 AM</a></li>
                                        </ul>
                                        <h4><a href="#">Food Photo Retouching Services to Turn Your Photos Yummy</a></h4>
                                    </div>

                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 col-sm-6">
                                <div className="blog-card">
                                    <a href="" className='blog-img'>
                                        <Image src="/assets/img/blog/img3.webp" alt="blog" width={350} height={250} layout="responsive" />
                                    </a>
                                    <div className="blog-content">
                                        <ul className="date-and-time">
                                            <li><a href="#" >April 5, 2025, 5:24 AM</a></li>
                                        </ul>
                                        <h4><a href="#">9 Diamond Ring Retouching Tips to Perfect Jewelry Photos</a></h4>
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

export default BlogSection
