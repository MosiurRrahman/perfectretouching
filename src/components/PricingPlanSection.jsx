"use client"
import React, { useState } from 'react';

const PricingPlanSection = () => {
    const [activeTab, setActiveTab] = useState('regular');

    return (
        <section className="pricing-plan-section pt-80 pb-80">
            <div className="container">
                <div className="row gy-5">
                    <div className="col-lg-3">
                        <div className="nav-area wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <ul className="nav nav-pills radio-pill-group" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <label className={`nav-link ${activeTab === 'regular' ? 'active' : ''}`}>
                                        <input
                                            type="radio"
                                            name="plan"
                                            value="regular"
                                            checked={activeTab === 'regular'}
                                            onChange={() => setActiveTab('regular')}
                                        />
                                        <span>regular</span>
                                    </label>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <label className={`nav-link ${activeTab === 'Exporess' ? 'active' : ''}`}>
                                        <input
                                            type="radio"
                                            name="plan"
                                            value="Exporess"
                                            checked={activeTab === 'Exporess'}
                                            onChange={() => setActiveTab('Exporess')}
                                        />
                                        <span>Exporess</span>
                                    </label>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <label className={`nav-link ${activeTab === 'Project' ? 'active' : ''}`}>
                                        <input
                                            type="radio"
                                            name="plan"
                                            value="Project"
                                            checked={activeTab === 'Project'}
                                            onChange={() => setActiveTab('Project')}
                                        />
                                        <span>Project</span>
                                    </label>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <label className={`nav-link ${activeTab === 'Enterprise' ? 'active' : ''}`}>
                                        <input
                                            type="radio"
                                            name="plan"
                                            value="Enterprise"
                                            checked={activeTab === 'Enterprise'}
                                            onChange={() => setActiveTab('Enterprise')}
                                        />
                                        <span>Enterprise</span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-9">
                        <div className="tab-content" id="pills-tabContent">
                            {/* regular Tab */}
                            <div
                                className={`tab-pane fade ${activeTab === 'regular' ? 'show active' : ''}`}
                                id="pills-regular"
                                role="tabpanel"
                            >
                                <div className="pricing-box bg-white border rounded overflow-hidden">
                                    <div className="row g-0">
                                        {/* Left Content */}
                                        <div className="col-lg-8 p-4">
                                            <h4 className="text-danger fw-bold mb-4">Delivery in Just 48 Hours</h4>
                                            <hr />
                                            <div className="row row-cols-1 row-cols-md-2 g-3 mt-4">
                                                <div className="col"><i className="bi bi-kanban" /> Order Management Dashboard</div>
                                                <div className="col"><i className="bi bi-cloud" /> Free Focus Stacking</div>
                                                <div className="col"><i className="bi bi-clock-history" /> Editing As Per Service</div>
                                                <div className="col"><i className="bi bi-clock" /> 24 Hours Delivery</div>
                                                <div className="col"><i className="bi bi-heart" /> Free Revision (Max. Quantity 2)</div>
                                                <div className="col"><i className="bi bi-patch-check" /> Guaranteed Quality</div>
                                                <div className="col"><i className="bi bi-card-list" /> No Minimum Image Cap</div>
                                                <div className="col"><i className="bi bi-x-circle" /> No Subscription Fee</div>
                                                <div className="col"><i className="bi bi-layers" /> Layer File Included</div>
                                                <div className="col"><i className="bi bi-headset" /> 24×7 Live Support</div>
                                            </div>
                                        </div>

                                        {/* Right Pricing Box */}
                                        <div className="col-lg-4 bg-light d-flex align-items-center justify-content-center p-4">
                                            <div className="text-center w-100">
                                                <p className="text-uppercase small mb-1">As Low As</p>
                                                <h1 className="display-5 fw-bold">$0.49</h1>
                                                <p className="text-danger fw-semibold">Image</p>
                                                <a href="#" className="btn btn-success px-4 mt-3">Get Started</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Exporess Tab */}
                            <div
                                className={`tab-pane fade ${activeTab === 'Exporess' ? 'show active' : ''}`}
                                id="pills-Exporess"
                                role="tabpanel"
                            >
                                <div className="pricing-box bg-white border rounded overflow-hidden">
                                    <div className="row g-0">
                                        {/* Left Content */}
                                        <div className="col-lg-8 p-4">
                                            <h4 className="text-danger fw-bold mb-4">Guaranteed Delivery in Just 12 Hours</h4>
                                            <hr />
                                            <div className="row row-cols-1 row-cols-md-2 g-3 mt-4">
                                                <div className="col"><i className="bi bi-kanban" /> Order Management Dashboard</div>
                                                <div className="col"><i className="bi bi-cloud" /> Free Focus Stacking</div>
                                                <div className="col"><i className="bi bi-clock-history" /> Editing As Per Service</div>
                                                <div className="col"><i className="bi bi-clock" /> 24 Hours Delivery</div>
                                                <div className="col"><i className="bi bi-heart" /> Free Revision (Max. Quantity 2)</div>
                                                <div className="col"><i className="bi bi-patch-check" /> Guaranteed Quality</div>
                                                <div className="col"><i className="bi bi-card-list" /> No Minimum Image Cap</div>
                                                <div className="col"><i className="bi bi-x-circle" /> No Subscription Fee</div>
                                                <div className="col"><i className="bi bi-layers" /> Layer File Included</div>
                                                <div className="col"><i className="bi bi-headset" /> 24×7 Live Support</div>
                                            </div>
                                        </div>

                                        {/* Right Pricing Box */}
                                        <div className="col-lg-4 bg-light d-flex align-items-center justify-content-center p-4">
                                            <div className="text-center w-100">
                                                <p className="text-uppercase small mb-1">As Low As</p>
                                                <h1 className="display-5 fw-bold">$0.99</h1>
                                                <p className="text-danger fw-semibold">Image</p>
                                                <a href="#" className="btn btn-success px-4 mt-3">Get Started</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`tab-pane fade ${activeTab === 'Project' ? 'show active' : ''}`}
                                id="pills-Project"
                                role="tabpanel"
                            >
                                <div className="pricing-box bg-white border rounded overflow-hidden">
                                    <div className="row g-0">
                                        {/* Left Content */}
                                        <div className="col-lg-8 p-4">
                                            <h4 className="text-danger fw-bold mb-4">Lowest Price & Rapid Delivery Per 24 Hours</h4>
                                            <hr />
                                            <div className="row row-cols-1 row-cols-md-2 g-3 mt-4">
                                                <div className="col"><i className="bi bi-kanban" /> Order Management Dashboard</div>
                                                <div className="col"><i className="bi bi-cloud" /> Free Focus Stacking</div>
                                                <div className="col"><i className="bi bi-clock-history" /> Editing As Per Service</div>
                                                <div className="col"><i className="bi bi-clock" /> 24 Hours Delivery</div>
                                                <div className="col"><i className="bi bi-heart" /> Free Revision (Max. Quantity 2)</div>
                                                <div className="col"><i className="bi bi-patch-check" /> Guaranteed Quality</div>
                                                <div className="col"><i className="bi bi-card-list" /> No Minimum Image Cap</div>
                                                <div className="col"><i className="bi bi-x-circle" /> No Subscription Fee</div>
                                                <div className="col"><i className="bi bi-layers" /> Layer File Included</div>
                                                <div className="col"><i className="bi bi-headset" /> 24×7 Live Support</div>
                                            </div>
                                        </div>

                                        {/* Right Pricing Box */}
                                        <div className="col-lg-4 bg-light d-flex align-items-center justify-content-center p-4">
                                            <div className="text-center w-100">
                                                <p className="text-uppercase small mb-1">As Low As</p>
                                                <h1 className="display-5 fw-bold">$2000</h1>
                                                <p className="text-danger fw-semibold">Images</p>
                                                <a href="#" className="btn btn-success px-4 mt-3">Get Started</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`tab-pane fade ${activeTab === 'Enterprise' ? 'show active' : ''}`}
                                id="pills-Enterprise"
                                role="tabpanel"
                            >
                                <div className="pricing-box bg-white border rounded overflow-hidden">
                                    <div className="row g-0">
                                        {/* Left Content */}
                                        <div className="col-lg-8 p-4">
                                            <h4 className="text-danger fw-bold mb-4">Guaranteed Delivery in Just 12 Hours</h4>
                                            <hr />
                                            <div className="row row-cols-1 row-cols-md-2 g-3 mt-4">
                                                <div className="col"><i className="bi bi-kanban" /> Order Management Dashboard</div>
                                                <div className="col"><i className="bi bi-cloud" /> Free Focus Stacking</div>
                                                <div className="col"><i className="bi bi-clock-history" /> Editing As Per Service</div>
                                                <div className="col"><i className="bi bi-clock" /> 24 Hours Delivery</div>
                                                <div className="col"><i className="bi bi-heart" /> Free Revision (Max. Quantity 2)</div>
                                                <div className="col"><i className="bi bi-patch-check" /> Guaranteed Quality</div>
                                                <div className="col"><i className="bi bi-card-list" /> No Minimum Image Cap</div>
                                                <div className="col"><i className="bi bi-x-circle" /> No Subscription Fee</div>
                                                <div className="col"><i className="bi bi-layers" /> Layer File Included</div>
                                                <div className="col"><i className="bi bi-headset" /> 24×7 Live Support</div>
                                            </div>
                                        </div>

                                        {/* Right Pricing Box */}
                                        <div className="col-lg-4 bg-light d-flex align-items-center justify-content-center p-4">
                                            <div className="text-center w-100">
                                                <p className="text-uppercase small mb-1">As Low As</p>
                                                <h1 className="display-5 fw-bold">100K</h1>
                                                <p className="text-danger fw-semibold">Image</p>
                                                <a href="#" className="btn btn-success px-4 mt-3">Get Started</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingPlanSection;
