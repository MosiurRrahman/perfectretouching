import Image from 'next/image'
import React from 'react'

const ClientLogo = () => {
    return (
        <section className='client-logo-section'>
            <div className="container">
                <div className="row gy-3">
                    <div className="col-lg-4">
                        <strong>Trusted by 3.3K clients worldwide —</strong>
                    </div>
                    <div className="col-lg-8">
                        <div className="partner-wrap">
                            <div className="marquee light">
                                <div className="marquee__group">

                                    <a href="#"><Image src="/assets/img/clients/img1.webp" alt="jsd" width={100} height={100} /></a>
                                    <a href="#"><Image src="/assets/img/clients/img2.webp" alt="jsd" width={100} height={100} /></a>
                                    <a href="#"><Image src="/assets/img/clients/img3.webp" alt="jsd" width={100} height={100} /></a>
                                    <a href="#"><Image src="/assets/img/clients/img1.webp" alt="jsd" width={100} height={100} /></a>
                                    <a href="#"><Image src="/assets/img/clients/img1.webp" alt="jsd" width={100} height={100} /></a>
                                    <a href="#"><Image src="/assets/img/clients/img2.webp" alt="jsd" width={100} height={100} /></a>
                                    <a href="#"><Image src="/assets/img/clients/img3.webp" alt="jsd" width={100} height={100} /></a>
                                     <a href="#"><Image src="/assets/img/clients/img1.webp" alt="jsd" width={100} height={100} /></a>
                                </div>
                                <div aria-hidden="true" className="marquee__group">
                                    <a href="#"><Image src="/assets/img/clients/img1.webp" alt="jsd" width={100} height={100} /></a>
                                    <a href="#"><Image src="/assets/img/clients/img2.webp" alt="jsd" width={100} height={100} /></a>
                                    <a href="#"><Image src="/assets/img/clients/img3.webp" alt="jsd" width={100} height={100} /></a>
                                    <a href="#"><Image src="/assets/img/clients/img1.webp" alt="jsd" width={100} height={100} /></a>
                                    <a href="#"><Image src="/assets/img/clients/img1.webp" alt="jsd" width={100} height={100} /></a>
                                    <a href="#"><Image src="/assets/img/clients/img2.webp" alt="jsd" width={100} height={100} /></a>
                                    <a href="#"><Image src="/assets/img/clients/img3.webp" alt="jsd" width={100} height={100} /></a>
                                     <a href="#"><Image src="/assets/img/clients/img1.webp" alt="jsd" width={100} height={100} /></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClientLogo
