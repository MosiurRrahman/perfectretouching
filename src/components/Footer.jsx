import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="footer-section pt-80 pb-80">
                <div className="container">
                    <div className="footer-content-wrap">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                        <Link href="">
                                            <Image src="/assets/img/logo-white.png" alt="logo" width={120} height={120} />
                                        </Link>
                                    </div>
                                    <p className='mt-10'>Perfect Retouching offers the best solution for all photo retouching services. We provide Jewellery, Product, Beauty, and Headshot Retouching Services by our expert team at budget price.</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="footer-widget">
                                    <div style={{ background: 'url(/assets/img/world-map.png) no-repeat center center', backgroundSize: '100%' }}>
                                        <strong>Office:</strong>
                                        <div className="footer-content">

                                            <div className="mb-3">
                                                <p className="mb-0">
                                                    Jahangir Tower, Building M5,<br />
                                                    Kafrul, Mirpur,
                                                    Dhaka, Bangladesh
                                                </p>
                                            </div>
                                            <div className="mb-3">
                                                <abbr title="Phone Number"><strong>Phone:</strong></abbr> +1 (647) 799-5131<br />
                                                <abbr title="Email Address"><strong>Email:</strong></abbr> hello@perfectretouching.com
                                            </div>
                                            <ul className="social-list">
                                                <li><a href="https://www.facebook.com/"><i className="bx bxl-facebook"></i></a></li>
                                                <li><a href="https://www.linkedin.com/"><i className="bx bxl-twitter"></i></a></li>
                                                <li><a href="https://www.youtube.com/"><i className="bx bxl-linkedin"></i></a></li>
                                                <li><a href="https://www.instagram.com/"><i className="bx bxl-instagram-alt"></i></a>
                                                </li>
                                            </ul>
                                        </div>



                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-2">
                                <div className="footer-widget">
                                    <div className="widget">
                                        <strong>Retouching Services</strong>
                                        <div className="footer-content">
                                            <ul className='footer-link-list'>
                                                <li>
                                                    <a href="https://www.perfectretouching.com/jewelry-retouching-services">
                                                        <i className='bx  bx-caret-right'></i>
                                                        Jewelry Retouching
                                                    </a>
                                                </li>
                                                <li><a href="https://www.perfectretouching.com/product-image-retouching-services"><i className='bx  bx-caret-right'></i>Product Retouching</a></li>
                                                <li><a href="https://www.perfectretouching.com/model-photo-retouching-services"><i className='bx  bx-caret-right'></i>Model Retouching</a></li>
                                                <li><a href="https://www.perfectretouching.com/headshot-retouching-services"><i className='bx  bx-caret-right'></i>Headshot Retouching</a></li>
                                            </ul>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="footer-widget">
                                    <div className="widget widget_links" id="UsefulLink">
                                        <strong>Editing Services:</strong>
                                        <div className="footer-content">
                                            <ul className='footer-link-list'>
                                                <li><a href="https://www.perfectretouching.com/ghost-mannequin-services"><i className='bx  bx-caret-right'></i>Ghost Mannequin</a></li>
                                                <li><a href="https://www.perfectretouching.com/real-estate-photo-editing-services"><i className='bx  bx-caret-right'></i>Real Estate Editing</a></li>
                                                <li><a href="https://www.perfectretouching.com/creative-graphic-design-services"><i className='bx  bx-caret-right'></i>Creative Graphics</a></li>
                                                <li><a href="https://www.perfectretouching.com/video-editing-services"><i className='bx  bx-caret-right'></i>Video Editing</a></li>
                                            </ul>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-2">
                                <div className="footer-widget widget_links" id="UsefulLink">
                                    <strong>Useful Links:</strong>
                                    <div className="footer-content">
                                        <ul className='footer-link-list'>
                                            <li><a href="https://www.perfectretouching.com/reviews"><i className='bx  bx-caret-right'></i>Reviews</a></li>
                                            <li><a href="https://www.perfectretouching.com/terms-of-service"><i className='bx  bx-caret-right'></i>Terms of Service</a></li>
                                            <li><a href="https://www.perfectretouching.com/privacy-policy"><i className='bx  bx-caret-right'></i>Privacy Policy</a></li>
                                            <li><a href="https://www.perfectretouching.com/sitemap"><i className='bx  bx-caret-right'></i>Sitemap</a></li>
                                        </ul>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <section className='copyrights'>
                <div className="container">
                    <div className="copyrights-content">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <p>Copyrights © 2025 All Rights Reserved by Perfect Retouching Inc.</p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <ul className='copyright-link-list'>
                                    <li><a href="https://www.nextbell.com">
                                        <Image src="/assets/img/nextbell-company-01.png" alt="logo" width={120} height={20} />
                                    </a>
                                    </li>
                                    <li>
                                        <a href="https://www.dmca.com/Protection/Status.aspx?ID=1c3b55c0-94dd-46ec-a6fb-908d1824c085&refurl=https://www.perfectretouching.com/">
                                            <Image src="/assets/img/dmca-badge.png" alt="logo" width={120} height={20} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
