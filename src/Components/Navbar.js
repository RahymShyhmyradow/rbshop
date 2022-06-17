import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { RiUserAddLine } from "react-icons/ri";
import { RiHeartLine } from "react-icons/ri";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { TiArrowLeft } from "react-icons/ti";
import logo from '../img/main2.png'
import { useDispatch, useSelector } from 'react-redux';
import { LoggedOut } from '../Features/authSlice';
import { handleDarkTheme } from '../Features/themeSlice';
import { TiWeatherSunny } from "react-icons/ti";
import { motion } from 'framer-motion'
const Navbar = () => {
    const [userShow, setUserShow] = useState(false)
    const [show, setShow] = useState(true)
    const [scrollPos, setScrollPos] = useState(0)
    const [open, setOpen] = useState(false)
    const [showLang, setShowLang] = useState(false)
    const [sortLang, setSortLang] = useState('EN')
    const logged = useSelector((state) => state.auth.logged)
    const dispatch = useDispatch()
    function logit() {
        setScrollPos(window.pageYOffset);
        setShow(document.body.getBoundingClientRect().top > scrollPos * (-1))
    }

    useEffect(() => {
        function watchScroll() {
            window.addEventListener("scroll", logit);
        }
        watchScroll();
        return () => {
            window.removeEventListener("scroll", logit);
        };
    });
    const showUserTab = () => {
        setUserShow(!userShow)
    }
    const openMenu = () => {
        setOpen(true)
    }
    const closeMenu = () => {
        setOpen(false)
    }
    const ShowLang = () => {
        setShowLang(!showLang)
    }
    const cartProducts = useSelector(state => state.cart.cartProducts)
    const [darkTheme, setDarkTheme] = useState(false)
    const handleTheme = () => {
        setDarkTheme(!darkTheme)
        dispatch(handleDarkTheme(darkTheme))
    }
    const theme = useSelector(state => state.theme.theme)
    const logoVariants = {
        visible: {
            opacity: 1,
            transition: {
                delay: 1
            }
        },
        hidden: { opacity: 0 }
    }
    return (
        <div className={!theme ? 'dark' : ''}>
            <div className={show ? 'h_active' : 'h_hidden'} style={{ zIndex: '2000' }}>
                <nav className="border-b px-2 py-3.5 bg-white border-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-700">
                    <div className="container flex flex-wrap justify-between items-center mx-auto">
                        <Link to="/" className="flex items-center">
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                                <motion.img
                                    variants={logoVariants}
                                    initial='hidden'
                                    animate='visible'
                                    className='w-22 h-8 sm:w-36 sm:h-10' src={logo} />
                            </span>
                        </Link>
                        <div className='flex items-center'>
                            <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                                <ul className="mr-10 flex flex-col items-center mt-3 md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium">
                                    <li>
                                        <NavLink to="/" className={(navData) => (navData.isActive ? 'text-blue-700 dark:text-white' : "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700")} aria-current="page">Bas sahypa</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/products" className={(navData) => (navData.isActive ? 'text-blue-700 dark:text-white' : "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700")} aria-current="page">Harytlar</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/about" className={(navData) => (navData.isActive ? 'text-blue-700 dark:text-white' : "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700")} aria-current="page">Biz barada</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/contacts" className={(navData) => (navData.isActive ? 'text-blue-700 dark:text-white' : "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700")} aria-current="page">Habarlasmak</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <ul className="flex items-center space-x-4">
                                <li className='relative'>
                                    <div onClick={() => ShowLang()} className='p-1 hover:bg-gray-50 md:hover:text-blue-700 cursor-pointer'>
                                        {sortLang}
                                    </div>
                                    {showLang &&
                                        <div id="dropdownNavbar" className="absolute mt-3.5 z-10 w-16 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                                <li>
                                                    <p onClick={() => { setSortLang('EN'); setShowLang(false) }} className="cursor-pointer block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">EN</p>
                                                </li>
                                                <li>
                                                    <p onClick={() => { setSortLang('TM'); setShowLang(false) }} className="cursor-pointer block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">TM</p>
                                                </li>
                                            </ul>
                                        </div>
                                    }
                                </li>
                                <li className='relative'>
                                    <div onClick={() => showUserTab()} className='p-1 border border-gray-400 rounded-full hover:bg-gray-50 md:hover:text-blue-700 cursor-pointer'>
                                        <RiUserAddLine className='text-md' />
                                    </div>
                                    {userShow && !logged &&
                                        <div id="dropdownNavbar" className="absolute mt-4 z-10 w-32 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                                <li>
                                                    <Link to="/register" onClick={() => setUserShow(false)} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Agza bolmak</Link>
                                                </li>
                                                <li>
                                                    <Link to="/login" onClick={() => setUserShow(false)} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Girmek</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    }
                                    {userShow && logged &&
                                        <div id="dropdownNavbar" className="absolute mt-4 z-10 w-32 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                                <li>
                                                    <button onClick={() => { setUserShow(false); dispatch(LoggedOut()) }} className="flex items-center justify-center block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><TiArrowLeft className='text-lg mr-2' />Sign Out</button>
                                                </li>
                                            </ul>
                                        </div>
                                    }
                                </li>
                                {/* <li className="hover:text-blue-700 relative cursor-pointer md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                <Link to='/favourite'>
                                    <RiHeartLine className='md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent text-3xl text-gray-400' />
                                    <span className="top-0 left-4 absolute p-2 w-5 h-5 flex items-center justify-center bg-black border-2 border-white dark:border-gray-800 rounded-full text-white text-xs" style={{ fontSize: '10px' }}>{favData.length}</span>
                                </Link>
                            </li> */}
                                <li className="hover:text-blue-700 relative cursor-pointer md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                    <Link to='/cart' >
                                        <MdOutlineShoppingBag className='md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent text-3xl text-gray-400' />
                                        <span className="top-0 left-4 absolute p-2 w-5 h-5 flex items-center justify-center bg-black dark:bg-gray-200 dark:text-black border-2 border-white dark:border-gray-800 rounded-full text-white text-xs" style={{ fontSize: '10px' }}>{cartProducts.length}</span>
                                    </Link>
                                </li>
                                <li className="flex items-center hover:text-blue-700 relative cursor-pointer md:p-0 md:w-auto dark:text-white dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">
                                    <button onClick={() => handleTheme()}>
                                        {darkTheme ? <TiWeatherSunny className='text-xl' /> :
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                            </svg>}
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex hidden sm:block md:hidden justify-center items-center ml-3 text-gray-400 rounded-lg hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500" aria-controls="mobile-menu-2" aria-expanded="false">
                            {/* <span className="sr-only">Open main menu</span> */}
                            {!open ? <MdOutlineMenu onClick={() => openMenu()} className='text-2xl' /> :
                                <MdOutlineClose onClick={() => closeMenu()} className='text-2xl' />}
                        </button>
                    </div>
                    {open &&
                        <div className='fixed h-full w-56 bg-white right-0 top-14'>
                            <ul className="w-full h-full flex flex-col items-center mt-3 md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium">
                                <li>
                                    <NavLink to="/" className={(navData) => (navData.isActive ? 'text-blue-700' : "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700")} aria-current="page">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/products" className={(navData) => (navData.isActive ? 'text-blue-700' : "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700")} aria-current="page">Products</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" className={(navData) => (navData.isActive ? 'text-blue-700' : "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700")} aria-current="page">About</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contacts" className={(navData) => (navData.isActive ? 'text-blue-700' : "block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700")} aria-current="page">Contacts</NavLink>
                                </li>
                            </ul>
                        </div>}
                </nav>
            </div>
        </div>
    )
}

export default Navbar

