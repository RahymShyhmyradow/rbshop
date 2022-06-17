import React from 'react'
import { TiThLargeOutline } from "react-icons/ti";
import { TiSocialDribbble } from "react-icons/ti";
import { TiInfoLargeOutline } from "react-icons/ti";
import { TiHomeOutline } from "react-icons/ti";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
const Footer = () => {
    const theme = useSelector(state => state.theme.theme)
    return (
        <div className={!theme ? 'dark':''}>
            <div style={{ zIndex: '2' }} className='border-t fixed bottom-0 w-full h-16 bg-white dark:text-white dark:bg-gray-700 flex justify-center items-center'>
                <div className='hidden sm:block'>
                    created by RB developers
                </div>
                <div className='sm:hidden block flex text-2xl container justify-around'>
                    <NavLink to="/" className={(navData) => (navData.isActive ? 'text-blue-700 dark:text-white' : "block py-1 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700")} aria-current="page"><TiHomeOutline /></NavLink>
                    <NavLink to="/products" className={(navData) => (navData.isActive ? 'text-blue-700 dark:text-white' : "block py-1 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700")} aria-current="page"><TiThLargeOutline /></NavLink>
                    <NavLink to="/about" className={(navData) => (navData.isActive ? 'text-blue-700 dark:text-white' : "block py-1 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700")} aria-current="page"><TiInfoLargeOutline /></NavLink>
                    <NavLink to="/contacts" className={(navData) => (navData.isActive ? 'text-blue-700 dark:text-white' : "block py-1 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700")} aria-current="page"><TiSocialDribbble /></NavLink>
                </div>
            </div>
        </div>
    )
}

export default Footer
