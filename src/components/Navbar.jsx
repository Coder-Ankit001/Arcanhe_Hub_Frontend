import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { ProfileContext } from '../context/profile';
import './Navbar.css'

const Navbar = () => {
    const {profile, setProfile} = useContext(ProfileContext)
    const [hamburg, SetHamburg] = useState(false)
    return (
        <nav className='navbar-box min-h-[15vh] max-w-[100vw] md:p-8 py-12 px-4 relative'>
            <div className='navbar-profiles flex text-white absolute top-2 right-0 px-10'>
                <button className='install-app bg-lime-600 hover:bg-lime-500 mx-2 h-6 w-18'>Install</button>
                <ul className='navbar-login-lang flex gap-3 text-sm text-gray-400'>
                    <li>{profile.username.toLowerCase() === 'random_user_0101'?<Link to='/login' className='hover:text-white'>login</Link>: <span className='text-white text-xs'>{profile.username}</span>}</li>
                    <li>|</li>
                    <li className='hover:text-white'>language-select</li>
                </ul>
            </div>
            <div onClick={()=>SetHamburg(!hamburg)} className='hamburger-icon invert flex items-center text-5xl'><RxHamburgerMenu /></div>
            <div className='navbar-main md:flex justify-center items-center gap-5'>
                <div className="web-app-logo text-white font-bold text-2xl"><Link to='/'>Arcane Hub&trade;</Link></div>
                <ul className='navbar-options flex pt-1 text-white text-xl font-medium gap-5'>
                    <li className="store hover:underline transition-all cursor-pointer">Store</li>
                    <li className="community hover:underline transition-all cursor-pointer">Community</li>
                    <li className="about hover:underline transition-all cursor-pointer">About</li>
                    <li className="help hover:underline transition-all cursor-pointer">Help</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
