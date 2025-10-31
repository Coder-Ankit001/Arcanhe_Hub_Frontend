import React from 'react'
import {useEffect} from 'react';
import './Dashboard.css'
import { CiSearch } from "react-icons/ci";
import Carousel from './Carousel';
import Discount from './Discount';
import Categories from './Categories';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='content-body min-h-[85vh] overflow-y-scroll flex gap-20'>
            <div className='w-[18vw]'>
                <div className="relative m-5 h-35 w-30">
                    <div className="absolute top-0 left-0 transform rotate-[-10deg] bg-gradient-to-br from-cyan-900 to-cyan-700 text-white rounded-lg shadow-lg p-3 w-full border border-cyan-400/40 backdrop-blur-sm">
                        <div className="text-base font-bold tracking-wider">$25 Gift Card</div>
                        <div className="text-xl mt-1">🎁</div>
                        <div className="text-xs opacity-80 mt-1">Perfect for starters</div>
                    </div>

                    <div className="absolute top-1 left-1 transform rotate-[-5deg] bg-gradient-to-br from-cyan-800 to-cyan-600 text-white rounded-lg shadow-lg p-3 w-full border border-cyan-300/40 backdrop-blur-sm">
                        <div className="text-base font-bold tracking-wider">$50 Gift Card</div>
                        <div className="text-xl mt-1">🎁</div>
                        <div className="text-xs opacity-80 mt-1">More value, more fun</div>
                    </div>

                    <div className="absolute top-2 left-2 bg-gradient-to-br from-cyan-700 to-cyan-500 text-white rounded-lg shadow-lg p-3 w-full border border-cyan-200/40 backdrop-blur-sm">
                        <div className="text-base font-bold tracking-wider">$100 Gift Card</div>
                        <div className="text-xl mt-1">🎁</div>
                        <div className="text-xs opacity-80 mt-1">Best for gifting</div>
                    </div>
                </div>

                <div className='categories  p-6'>
                    <h1 className='font-bold'>BROWSE CATEGORIES</h1>
                    <ul className='categories-content text-sm font-bold'>
                        <li className='hover:text-cyan-600'>Top Sellers</li>
                        <li className='hover:text-cyan-600'>New Releases</li>
                        <li className='hover:text-cyan-600'>Upcoming</li>
                        <li className='hover:text-cyan-600'>Specials</li>
                        <li className='hover:text-cyan-600'>VR Titles</li>
                        <li className='hover:text-cyan-600'>Controller-Friendly</li>
                        <li className='hover:text-cyan-600'>Great on Deck</li>
                    </ul>
                </div>
                <div className='categories p-6'>
                    <h1 className='font-bold'>BROWSE BY GENRE</h1>
                    <ul className='categories-content text-sm font-bold'>

                        <div className='hover:text-cyan-600'>Free To Play</div>
                        <div className='hover:text-cyan-600'>Early Access</div>
                        <div className='hover:text-cyan-600'>Action</div>
                        <div className='hover:text-cyan-600'>Adventure</div>
                        <div className='hover:text-cyan-600'>Casual</div>
                        <div className='hover:text-cyan-600'>Indie</div>
                        <div className='hover:text-cyan-600'>Massively Multiplayer</div>
                        <div className='hover:text-cyan-600'>Racing</div>
                        <div className='hover:text-cyan-600'>RPG</div>
                        <div className='hover:text-cyan-600'>Simulation</div>
                        <div className='hover:text-cyan-600'>Sports</div>
                        <div className='hover:text-cyan-600'>Strategy</div>
                    </ul>
                </div>
            </div>

            <div className='flex flex-col items-center relative' >
                <div className='bg-gradient-to-t from-gray-400 to-gray-100 absolute right-10 top-4 text-xs font-semibold p-1 border-0 rounded-xs'><Link to='/wishlist'>Wishlist</Link></div>
                <div className='bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500 my-14 w-[70vw] flex items-center justify-between px-4'>
                    <ul className=' text-white font-bold flex items-center h-8 gap-6'>
                        <li>Your Store</li>
                        <li>Categories</li>
                        <li>Points Shop</li>
                        <li>News</li>
                        <li>Labs</li>
                    </ul>
                    <div className='flex'>
                        <input placeholder='Search' className=' text-black search-button-nav opacity-50 h-6 px-2 border-black rounded-tl-sm rounded-bl-sm' />
                        <button className='search-button-nav px-1 text-black border-0 rounded-tr-sm rounded-br-sm font-bold'><CiSearch /></button>
                    </div>
                </div>
                <Carousel />
                <Discount/>
                <Categories/>
                <div className='sign-in-bottom bg-amber-300 w-[70vw] min-h-[25vh] flex flex-col items-center justify-between p-5 mb-8'>
                    <h1 className='text-lg text-white font-semibold'>Sign in to view personalized recommendations</h1>
                    <button className='bg-gradient-to-t from-lime-800 to-lime-300 w-23 h-10 border-0 rounded-sm text-lime-200 cursor-pointer'><Link to='/login'>Sign-in</Link></button>
                    <div className='flex gap-1 text-white'>Or<div className='font-semibold cursor-pointer'>sign-up</div>and join steam for free</div>

                </div>
            </div>
        </div>
    )
}

export default Dashboard
