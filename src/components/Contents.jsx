import React, { useState } from 'react'
import './Contents.css'
import { CiSearch } from "react-icons/ci";
import Carousel from './Carousel';
import Discount from './Discount';
import Categories from './Categories';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Contents = () => {
    const [searches, setSearches] = useState([]);
    const [searchQuery, setSearchQuery] = useState('')
    const API_Key = "4f9d6b376e8b407b8886d8d4c6958414"
    const url = "https://api.rawg.io/api/games"

    const getData = async (e) => {
        
        let query = e.target.value;
        setSearchQuery(query);

        if(query.length === 0){
            setSearches([]);
            return;
        }
        try {
            let res = await axios(`${url}`, {
                params: {
                    key: API_Key,
                    search: query,
                    page_size: 5,
                }
            })
            let data = []
            for (let i = 0; i < 5; i++) {
                let bg = res.data.results[i].background_image;
                let name = res.data.results[i].name;
                let rating = res.data.results[i].rating;
                let gameid = res.data.results[i].id;
                data.push({
                    id: gameid,
                    bg: bg,
                    title: name,
                    rating: rating
                })
            }

            setSearches(data)
            console.log(res.data.results[0]);
            console.log(res.data.results[1].name);
            console.log(res.data.results[2].name);
            console.log(res.data.results[3].name);
            console.log(res.data.results[4].name);
        }
        catch (err) {
            console.log("Error: ", err);
        }

    }
    return (
        <div className='content-body min-h-[85vh] overflow-y-scroll flex gap-20'>
            <div className='left-half w-[18vw] relative'>
                <div className="gift-card relative m-5 h-35 w-30">
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

            <div className='right-half flex flex-col items-center relative' >
                <div className='bg-gradient-to-t from-gray-300 to-gray-200 hover:from-gray-200 hover:to-gray-100 absolute right-10 top-4 text-xs font-semibold p-1 px-2'><Link to='/wishlist'>Wishlist</Link></div>
                <div className='search-box bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500 my-14 w-[70vw] flex items-center justify-between px-4 relative z-1'>
                    <ul className='text-white font-bold flex items-center h-8 gap-6'>
                        <li className='search-bar-1'>Your Store</li>
                        <li className='search-bar-1'>Categories</li>
                        <li className='search-bar-1'>Points Shop</li>
                        <li className='search-bar-2'>News</li>
                        <li className='search-bar-2'>Labs</li>
                    </ul>
                    <div className='flex search-option-outer hover:border-1 hover:border-cyan-900 border-0 rounded-sm'>
                        <input placeholder='Search' value={searchQuery} onChange={getData} className='search-option text-white search-button-nav opacity-50 h-6 px-2 border-black rounded-tl-sm rounded-bl-sm focus:outline-none' />
                        <button className='search-button-nav search-option-button px-1 text-black border-0 rounded-tr-sm rounded-br-sm font-bold'><CiSearch /></button>
                    </div>
                    {searchQuery.length !== 0 && searches.length>0 &&
                    <div className={`absolute z-10 top-8 right-0 bg-gray-700 w-100 p-2 flex flex-wrap gap-2 my-2`}>
                        {searches.map((search, i) => {
                            return (
                                <div key={search.id} className='hover:bg-gray-100 hover:text-gray-600 text-white flex gap-2 items-center'>
                                    <div className='h-19 w-30 px-1 flex justify-center items-center'><img src={search.bg} alt="" className='h-17 w-34' /></div>
                                    <div className='h-18 w-64 px-1 flex flex-col justify-between'>
                                        <h1 className='text-sm font-semibold'>{search.title}</h1>
                                        <div className='text-sm pb-1'>{`Ratings: ${search.rating}/5`}</div>
                                    </div>
                                </div>
                            )
                        }
                        )}
                    </div>
                    }

                </div>
                <Carousel />
                <Discount />
                <Categories />
                <div className='sign-in-bottom contents-sign-in-bottom bg-amber-300 w-[70vw] h-[25vh] flex flex-col items-center justify-between p-5 mb-8'>
                    <h1 className='text-lg contents-sign-in-bottom-header text-white font-semibold'>Sign in to view personalized recommendations</h1>
                    <button className='w-23 h-10 contents-sign-in-bottom-button bg-gradient-to-t from-lime-800 to-lime-300 hover:from-lime-700 hover:to-lime-200 border-0 rounded-sm text-lime-100 cursor-pointer'><Link to='/login'>Sign-in</Link></button>
                    <div className='flex gap-1 text-white'>Or<div className='font-semibold cursor-pointer'>sign-up</div>and join steam for free</div>

                </div>
            </div>
        </div>
    )
}

export default Contents
