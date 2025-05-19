"use client"
import Image from 'next/image'
import React, { useEffect, useReducer, useRef } from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const initialState = {
    activeMenu: "",
    activeSubMenu: "",
    isSidebarOpen: false,
    isLeftSidebarOpen: false,
    isRightSidebar: false,
    isLang: false,
};
function reducer(state, action) {
    switch (action.type) {
        case "TOGGLE_MENU":
            return {
                ...state,

                activeMenu: state.activeMenu === action.menu ? "" : action.menu,
                activeSubMenu:
                    state.activeMenu === action.menu ? state.activeSubMenu : "",
            };
        case "TOGGLE_SUB_MENU":
            return {
                ...state,
                activeSubMenu:
                    state.activeSubMenu === action.subMenu ? "" : action.subMenu,
            };
        case "TOGGLE_SIDEBAR":
            return {
                ...state,
                isSidebarOpen: !state.isSidebarOpen,
            };
        case "setScrollY":
            return { ...state, scrollY: action.payload };
        case "TOGGLE_LEFT_SIDEBAR":
            return {
                ...state,
                isLeftSidebarOpen: !state.isLeftSidebarOpen,
            };
        case "TOGGLE_LANG":
            return {
                ...state,
                isLang: !state.isLang,
            };
        case "TOGGLE_RIGHTSIDEBAR":
            return {
                ...state,
                isRightSidebar: !state.isRightSidebar,
            };
        default:
            return state;
    }
}


const Header = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const headerRef = useRef(null);
    const pathname = usePathname()
    const handleScroll = () => {
        const { scrollY } = window;
        dispatch({ type: "setScrollY", payload: scrollY });
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const toggleMenu = (menu) => {
        dispatch({ type: "TOGGLE_MENU", menu });
    };

    const toggleRightSidebar = () => {
        dispatch({ type: "TOGGLE_RIGHTSIDEBAR" });
    };
    const toggleSubMenu = (subMenu) => {
        dispatch({ type: "TOGGLE_SUB_MENU", subMenu });
    };
    const toggleSidebar = () => {
        console.log("click");

        dispatch({ type: "TOGGLE_MENU", menu: "" });
        dispatch({ type: "TOGGLE_SUB_MENU", subMenu: "" });
        dispatch({ type: "TOGGLE_SIDEBAR" });
    };
    return (
        <header className={`header-area ${state.scrollY > 20 ? "sticky" : ""}`}>
            <div className="container d-flex flex-nowrap align-items-center justify-content-between">
                <div className="company-logo">
                    <Link href="/" ><Image src="/assets/img/logov2.png" alt="image" width={120} height={20} /></Link>
                </div>
                <div className="menu-wrap">
                    <div className={`main-menu ${state.isSidebarOpen ? "show-menu" : ""}`}>
                        <div className="mobile-logo-area d-lg-none d-flex align-items-center justify-content-between">
                            <Link href="/" className="mobile-logo-wrap">
                               <Image src="/assets/img/logov2.png" alt="image" width={120} height={20} />
                            </Link>
                            <div className="menu-close-btn" onClick={toggleSidebar}>
                                <i className="bi bi-x" />
                            </div>
                        </div>
                        <ul className="menu-list">
                            <li className='active'><Link href="/"> Home </Link></li>
                            <li className="menu-item-has-children position-inherit">
                                <Link href="/" className="drop-down">Services
                                </Link>
                                <i onClick={() => toggleMenu("Services")} className={`bi bi-${state.activeMenu === "Services" ? "dash" : "plus"} dropdown-icon`} />
                                <div className={`mega-menu2 ${state.activeMenu === "Services" ? "d-block" : ""}`} >
                                    <div className="container">
                                        <div className="row gy-4 align-items-lg-center justify-content-between">
                                            <div className="col-lg-4">
                                                <div className="service-body">
                                                    <div className="service-left">
                                                        <h4>Service</h4>
                                                        <p>Choose retouching services you need</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="service-body">
                                                    <ul className='service-list'>
                                                        <li>
                                                            <a href="#">
                                                                <svg width="9" height="10" viewBox="0 0 9 10" xmlns="http://www.w3.org/2000/svg"><path d="M1.14288 9.28577C1.85717 7.50005 5.4286 5.71434 7.57145 5.00005C5.4286 4.28577 2.21431 3.21434 1.14288 0.714339" stroke-width="1.5" stroke-linecap="round"></path></svg>
                                                                Jewelry Retouching
                                                            </a>
                                                        </li>


                                                        <li><a href="#"><svg width="9" height="10" viewBox="0 0 9 10" xmlns="http://www.w3.org/2000/svg"><path d="M1.14288 9.28577C1.85717 7.50005 5.4286 5.71434 7.57145 5.00005C5.4286 4.28577 2.21431 3.21434 1.14288 0.714339" stroke-width="1.5" stroke-linecap="round"></path></svg> Product Retouching</a></li>
                                                        <li><a href="#"><svg width="9" height="10" viewBox="0 0 9 10" xmlns="http://www.w3.org/2000/svg"><path d="M1.14288 9.28577C1.85717 7.50005 5.4286 5.71434 7.57145 5.00005C5.4286 4.28577 2.21431 3.21434 1.14288 0.714339" stroke-width="1.5" stroke-linecap="round"></path></svg> Model Retouching </a></li>
                                                        <li><a href="#"><svg width="9" height="10" viewBox="0 0 9 10" xmlns="http://www.w3.org/2000/svg"><path d="M1.14288 9.28577C1.85717 7.50005 5.4286 5.71434 7.57145 5.00005C5.4286 4.28577 2.21431 3.21434 1.14288 0.714339" stroke-width="1.5" stroke-linecap="round"></path></svg> Headshot Retouching</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="service-body">
                                                    <ul className='service-list'>
                                                        <li><a href="#"><svg width="9" height="10" viewBox="0 0 9 10" xmlns="http://www.w3.org/2000/svg"><path d="M1.14288 9.28577C1.85717 7.50005 5.4286 5.71434 7.57145 5.00005C5.4286 4.28577 2.21431 3.21434 1.14288 0.714339" stroke-width="1.5" stroke-linecap="round"></path></svg> Ghost Mannequin</a></li>
                                                        <li><a href="#"><svg width="9" height="10" viewBox="0 0 9 10" xmlns="http://www.w3.org/2000/svg"><path d="M1.14288 9.28577C1.85717 7.50005 5.4286 5.71434 7.57145 5.00005C5.4286 4.28577 2.21431 3.21434 1.14288 0.714339" stroke-width="1.5" stroke-linecap="round"></path></svg> Real Estate Editing</a></li>
                                                        <li><a href="#"><svg width="9" height="10" viewBox="0 0 9 10" xmlns="http://www.w3.org/2000/svg"><path d="M1.14288 9.28577C1.85717 7.50005 5.4286 5.71434 7.57145 5.00005C5.4286 4.28577 2.21431 3.21434 1.14288 0.714339" stroke-width="1.5" stroke-linecap="round"></path></svg> Creative Graphics</a></li>
                                                        <li><a href="#"><svg width="9" height="10" viewBox="0 0 9 10" xmlns="http://www.w3.org/2000/svg"><path d="M1.14288 9.28577C1.85717 7.50005 5.4286 5.71434 7.57145 5.00005C5.4286 4.28577 2.21431 3.21434 1.14288 0.714339" stroke-width="1.5" stroke-linecap="round"></path></svg> Video Editing</a></li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li><Link href="/"> about </Link></li>
                            <li><Link href="/"> Blog </Link></li>
                            <li><Link href="/"> Contact </Link></li>

                        </ul>
                        <div className="btn-and-contact-area d-lg-none ">
                            <Link href="/" className="fancy-button">
                            <span className="text">SCHEDULE A CALL</span>
                            <span className="icon-wrapper">
                                <i className="bx bx-phone-call"></i>
                            </span>
                        </Link>
                        <Link href="/" className="fancy-button two">
                            <span className="icon-wrapper">
                                <i className="bx bx-phone-call"></i>
                            </span>
                            <span className="text">FREE TRIAL</span>
                        </Link>
                        </div>
                    </div>
                    <div className="nav-right">

                        <Link href="/" className="fancy-button">
                            <span className="text">SCHEDULE A CALL</span>
                            <span className="icon-wrapper">
                                <i className="bx bx-phone-call"></i>
                            </span>
                        </Link>
                        <Link href="/" className="fancy-button two">
                            <span className="icon-wrapper">
                                <i className="bx bx-phone-call"></i>
                            </span>
                            <span className="text">FREE TRIAL</span>
                        </Link>

                        <div className="sidebar-button mobile-menu-btn" onClick={toggleSidebar}>
                            <svg width={20} height={18} viewBox="0 0 20 18" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.29445 2.8421H10.5237C11.2389 2.8421 11.8182 2.2062 11.8182 1.42105C11.8182 0.635903 11.2389 0 10.5237 0H1.29445C0.579249 0 0 0.635903 0 1.42105C0 2.2062 0.579249 2.8421 1.29445 2.8421Z" />
                                <path d="M1.23002 10.421H18.77C19.4496 10.421 20 9.78506 20 8.99991C20 8.21476 19.4496 7.57886 18.77 7.57886H1.23002C0.550421 7.57886 0 8.21476 0 8.99991C0 9.78506 0.550421 10.421 1.23002 10.421Z" />
                                <path d="M18.8052 15.1579H10.2858C9.62563 15.1579 9.09094 15.7938 9.09094 16.5789C9.09094 17.3641 9.62563 18 10.2858 18H18.8052C19.4653 18 20 17.3641 20 16.5789C20 15.7938 19.4653 15.1579 18.8052 15.1579Z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header
