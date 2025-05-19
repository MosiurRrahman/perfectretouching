import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

const Topbar = () => {
    return (
        <section className='topbar'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="language-area">
                            <div className="language-btn">
                                <Image src="https://www.perfectretouching.com/images/flags/en.svg" alt="English" width={20} height={20} />
                                <span>English</span>
                                <i className="bx bxs-chevron-down"></i>
                            </div>

                            <ul className='language-list'>
                                <li>
                                    <a href="#"> <Image src="https://www.perfectretouching.com/images/flags/en.svg" alt="English" width={20} height={20} />
                                        Arabic
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="topbar-right">
                            <ul>
                                <li><a href="#">Quotation</a></li>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#">Sign In</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Topbar
