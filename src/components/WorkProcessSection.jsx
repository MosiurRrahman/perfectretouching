import Image from 'next/image'
import React from 'react'

const WorkProcessSection = () => {
    return (
        <section className="work-process-section pt-80 pb-80">
            <div className="container">
                <div className="row align-items-start justify-content-between">
                    <div className="col-lg-6 sticky-top" style={{ top: "130px" }}>
                        <div className="service-content section-title">
                            <span>Process</span>
                            <h2>Masterpieces in the Making – Experience Effortless Perfection</h2>
                            <p>A work process that makes your work easy to do without facing any hassle.</p>

                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="process-wrapper">
                            <div className="single-process">
                                <span>01</span>
                                <div className="icon">
                                    <Image src="/assets/img/icons/file.svg" alt="das" width={80} height={50} />
                                </div>
                                <h3>Upload Files with Requirement</h3>
                                <p>Submit the images that you want to be enhanced with the specific instructions of your requirements to give us a clear vision of your imagination.</p>
                            </div>
                            <div className="single-process">
                                <span>02</span>
                                <div className="icon">
                                    <Image src="/assets/img/icons/search-engine-marketing.png" alt="das" width={80} height={50} />
                                </div>
                                <h3>Checking & Analyzing</h3>
                                <p>After receiving the images with descriptive instructions, our team will check and make sure the images are good to edit and analyze the requirements.</p>
                            </div>
                            <div className="single-process">
                                <span>03</span>
                                <div className="icon">
                                    <Image src="/assets/img/icons/atm-card.png" alt="das" width={80} height={50} />
                                </div>
                                <h3>Payment</h3>
                                <p>After reviewing and analyzing, you will receive an invoice. To ensure a smooth workflow, you will be requested to proceed with the payment.</p>
                            </div>
                            <div className="single-process">
                                <span>04</span>
                                <div className="icon">
                                    <Image src="/assets/img/icons/electricity.png" alt="das" width={80} height={50} />
                                </div>
                                <h3>Work & Deliver</h3>
                                <p>After the payment, the main work of editing and retouching will take its place and the final outputs will be delivered on time.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default WorkProcessSection
