import Image from 'next/image'
import React from 'react'

const ServiceSection = () => {
    return (
        <section className='service-section pt-80 pb-80'>
            <div className="container">
                <div className="row align-items-center flex-md-row-reverse">
                    <div className="col-lg-5">
                        <div className="service-content section-title">
                            <span>Portal</span>
                            <h2>Simplified Order Management, Elevated Retouching</h2>
                            <p>At Perfect Retouching, we prioritize client comfort with our efficient CRM system. This seamless management balances speed and quality, ensuring you receive top-notch service without compromise. Experience a smooth collaboration that enhances your workflow!</p>
                            <ul className='service-list'>
                                <li>< i className='bx  bx-send'></i>Personalized Dashboard</li>
                                <li>< i className='bx  bx-send'></i>Multilanguage Interface</li>
                                <li>< i className='bx  bx-send'></i>Easy Order Process</li>
                                <li>< i className='bx  bx-send'></i>
                                    Secure Payment Procedure</li>
                                <li>< i className='bx  bx-send'></i>Real-time updates</li>
                                <li>< i className='bx  bx-send'></i>Global Accessibility</li>
                                <li>< i className='bx  bx-send'></i>27/4 Customer support</li>
                                <li>< i className='bx  bx-send'></i>Flexible Notification Settings</li>
                            </ul>
                            <div className="service-btns">
                                <a href="#" className='primary-btn2'>< i className='bx  bx-check'  ></i> Get a Quote</a>
                                <a href="#" className='primary-btn2'>< i className='bx  bx-chevrons-right'  ></i>
                                    Get Started</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="animate-img">
                            <Image src="/assets/img/services/img1.webp"
                                data-wow-delay="200ms"
                                data-wow-duration="1500ms"
                                className="bottom-left-img wow animate swing center " alt="service" width={150} height={170} layout='' />
                            <Image data-wow-delay="200ms"
                                data-wow-duration="1500ms" className='wow pulse' src="/assets/img/services/img3.webp" alt="service" width={720} height={400} layout='responsive' />
                            <Image data-wow-delay="200ms"
                                data-wow-duration="1500ms"
                                className="top-right-img wow animate swing center " src="/assets/img/services/img2.webp" alt="service" width={170} height={200} layout='' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceSection
