import React, { useState } from 'react'
import './navbar.css'
// import { FaCartShopping } from 'react-icons/fa6'
import { BiCart, BiX } from 'react-icons/bi'
import { FaBars } from 'react-icons/fa6'

const Navbar = () => {
    const [toggle, setToggle] = useState(false) 

    const handleClick = () => {
        setToggle((toggle) => !toggle)
    }

    return (
        <div className='wrapper flex justify-between items-center relative'>
            {/* navigation */}
            <div className='text-xl cursor-pointer z-20' onClick={() => handleClick()}>
                {toggle ? <BiX className='group close'/> : <FaBars />}
            </div>
            <div className='sm:hidden visible w-18 h-8 text-3xl font-bold uppercase cursor-pointer mx-4 font-pirata'>
                Logo
            </div>
            <ul className='hidden sm:flex gap-4 uppercase text-sm items-center'>
                <li><a href="/">About Us</a></li>
                <li><a href="/">Categories</a></li>
                <li>
                    <a href="/" className='w-18 h-8 text-3xl font-bold uppercase cursor-pointer mx-4 font-pirata'> 
                        Logo
                    </a>
                </li>
                <li><a href="/">Best Sellers</a></li>
                <li><a href="/">Sales</a></li>
            </ul>
            <div className='text-3xl relative cursor-pointer'>
                <BiCart />
                <div className='h-4 w-4 flex justify-center items-center text-[9px]  absolute -top-2 -right-2 rounded-full bg-fancyColor text-bgColor'>12</div>
            </div>

            {toggle && (
                <ul className={`menu gap-4 justify-center items-center absolute w-screen h-screen top-0 left-0 bg-fancyColor text-bgColor z-10 flex flex-col uppercase font-pirata text-4xl origin-top`}>
                    <li><a href="/">T-shirt</a></li>
                    <li><a href="/">Hoodie</a></li>
                    <li><a href="/">Sweat shirts</a></li>
                    <li><a href="/">Pants</a></li>
                    <li><a href="/">shorts</a></li>
                    <li><a href="/">jerseys</a></li>
                </ul>
            )}
        </div>
    )
}

export default Navbar