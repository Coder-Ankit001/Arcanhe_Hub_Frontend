import React, { useState, useContext } from 'react'
import { FaCaretDown } from "react-icons/fa"
import imgOne from '../assets/Wishlist_img1.jpg'
import { IoGridSharp } from "react-icons/io5"
import profilePic from '../assets/Wishlist_Avatar.jpeg'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';
import { WishlistContext } from '../context/wishlist'
import './Wishlist.css'
import { ProfileContext } from '../context/profile'

const Wishlist = () => {
    const {profile, setProfile} = useContext(ProfileContext)
    const value = useContext(WishlistContext)

    const [filter, setFilter] = useState([])

    const removeItem = (wish) => {
        const newWishlist = value.wishlist.filter(item => item !== wish)
        value.setWishlist(newWishlist)
        const filtered = filter.filter(item=> item !== wish)
        setFilter(filtered)
    }

    const formatDate = (date = new Date()) => {
        const d = date.getDate().toString().padStart(2, '0');
        const m = (date.getMonth() + 1).toString().padStart(2, '0');
        const y = date.getFullYear();
        return `${d}/${m}/${y}`;
    }

    const handleSearch = (e)=>{
        let title = e.target.value
        const query = title.toLowerCase()
        const findTitle = value.wishlist.filter(item=> item.title.toLowerCase().includes(query))
        if(findTitle) setFilter(findTitle)
    }
    return (
        <div className='content-body min-h-[100vh] w-full flex flex-col items-center pt-45'>
            <div className=' w-[75vw] min-h-[40vh] flex flex-col gap-5'>
                <div className=' text-3xl flex items-center gap-4'>
                    <div className='h-16 w-16 bg-amber-300 shadow-inner bg-cover relative'>
                        <img src={profilePic} alt="" className='' />
                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/40 via-transparent to-black/40" />
                    </div>
                    <div className='text-white'>{`${profile.username}'S WISHLIST`}</div>
                </div>
                <div className=' h-full'>
                    <div className='flex justify-between'>
                        <input type="text" placeholder='Search by name or tag' onChange={handleSearch} className='option-bar w-[53vw] h-10 px-2' />
                        <div className='flex gap-4'>
                            <div role='menu' className='options-bg flex justify-center items-center px-2 invert'>Options<FaCaretDown /></div>
                            <div role='menu' className='options-bg flex justify-center items-center px-2 invert'>Sort by: Your Rank<FaCaretDown /></div>
                        </div>
                    </div>

                    <div className='w-[75vw] card-hr min-h-[1px] my-2'></div>
                    {filter.length !== 0 && filter.map((wish, i)=>{
                        return (
                            <div key={wish.key}>
                                <div className='w-[75vw] card-bg flex items-center justify-between h-40 bg-amber-600'>
                                    <div className='flex justify-center items-center w-10 h-34 border-r-1 border-gray-800/30 text-white text-xl'>{i+1}</div>
                                    <div className='flex max-h-34'>
                                        <div className=' w-[292px] h-34'>
                                            <img src={wish.main} alt="" className='h-34' />
                                        </div>
                                        <div className=' w-150 h-34 px-4'>
                                            <div className='text-2xl text-white mb-2 font-semibold '>{wish.title}</div>
                                            <div className='flex justify-between items-center pr-2'>
                                                <div className=''>
                                                    <div className='flex gap-8 text-sm text-gray-200 font-light'><div className=' w-30 '>Overall Rating: </div><div>{`${wish.rating}/5`}</div></div>
                                                    <div className='flex gap-8 text-sm text-gray-200 font-light'><div className=' w-30 '>Release Date: </div><div>{`${wish.release_date}`}</div></div>
                                                </div>
                                                <button className='bg-gradient-to-l from-blue-500 to-blue-400 p-2 h-10 font-semibold text-lg text-white border-0 rounded-xs flex items-center cursor-pointer'>Add to Library</button>
                                            </div>
                                            <div className='invert text-xl h-9 flex items-center'><IoGridSharp /></div>
                                            <div className=' flex justify-between pr-2 h-5 items-center'>
                                                <div className='flex text-xs gap-2'>
                                                    <div className='text-gray-400 border-1 border-gray-400 rounded-xs flex justify-center items-center min-w-10 px-[4px] hover:bg-gray-300/20 cursor-pointer'>{wish.genres[0]}</div>
                                                    <div className='text-gray-400 border-1 border-gray-400 rounded-xsflex justify-center items-center min-w-10 px-[4px] hover:bg-gray-300/20 cursor-pointer'>{wish.genres[1]}</div>
                                                    <div className='text-gray-400 border-1 border-gray-400 rounded-xs flex justify-center items-center min-w-10 px-[4px] hover:bg-gray-300/20 cursor-pointer'>{wish.genres[2]}</div>
                                                    {wish.genres[3] && <div className='text-gray-400 border-1 border-gray-400 rounded-xs flex justify-center items-center min-w-10 px-[4px] hover:bg-gray-300/20 cursor-pointer'>{wish.genres[3]}</div>}
                                                </div>
                                                <div onClick={() => removeItem(wish)} className='text-xs text-gray-400 flex gap-1'>{`Added on ${formatDate()}`}<div className='text-gray-100 cursor-pointer'>(remove)</div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[75vw] card-hr min-h-[1px] my-2'></div>
                            </div>
                        )
                    })}
                    {filter.length === 0 && value.wishlist.map((wish, i) => {
                        return (
                            <div key={wish.key}>
                                <div className='w-[75vw] card-bg flex items-center justify-between h-40 bg-amber-600'>
                                    <div className='flex justify-center items-center w-10 h-34 border-r-1 border-gray-800/30 text-white text-xl'>{i+1}</div>
                                    <div className='flex max-h-34'>
                                        <div className=' w-[292px] h-34'>
                                            <img src={wish.main} alt="" className='h-34' />
                                        </div>
                                        <div className=' w-150 h-34 px-4'>
                                            <div className='text-2xl text-white mb-2 font-semibold '>{wish.title}</div>
                                            <div className='flex justify-between items-center pr-2'>
                                                <div className=''>
                                                    <div className='flex gap-8 text-sm text-gray-200 font-light'><div className=' w-30 '>Overall Rating: </div><div>{`${wish.rating}/5`}</div></div>
                                                    <div className='flex gap-8 text-sm text-gray-200 font-light'><div className=' w-30 '>Release Date: </div><div>{`${wish.release_date}`}</div></div>
                                                </div>
                                                <button className='bg-gradient-to-l from-blue-500 to-blue-400 p-2 h-10 font-semibold text-lg text-white border-0 rounded-xs flex items-center cursor-pointer'>Add to Library</button>
                                            </div>
                                            <div className='invert text-xl h-9 flex items-center'><IoGridSharp /></div>
                                            <div className=' flex justify-between pr-2 h-5 items-center'>
                                                <div className='flex text-xs gap-2'>
                                                    <div className='text-gray-400 border-1 border-gray-400 rounded-xs flex justify-center items-center min-w-10 px-[4px] hover:bg-gray-300/20 cursor-pointer'>{wish.genres[0]}</div>
                                                    <div className='text-gray-400 border-1 border-gray-400 rounded-xsflex justify-center items-center min-w-10 px-[4px] hover:bg-gray-300/20 cursor-pointer'>{wish.genres[1]}</div>
                                                    <div className='text-gray-400 border-1 border-gray-400 rounded-xs flex justify-center items-center min-w-10 px-[4px] hover:bg-gray-300/20 cursor-pointer'>{wish.genres[2]}</div>
                                                    {wish.genres[3] && <div className='text-gray-400 border-1 border-gray-400 rounded-xs flex justify-center items-center min-w-10 px-[4px] hover:bg-gray-300/20 cursor-pointer'>{wish.genres[3]}</div>}
                                                </div>
                                                <div onClick={() => removeItem(wish)} className='text-xs text-gray-400 flex gap-1'>{`Added on ${formatDate()}`}<div className='text-gray-100 cursor-pointer'>(remove)</div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[75vw] card-hr min-h-[1px] my-2'></div>
                            </div>
                        )
                    })}
                    {value.wishlist.length === 0 &&
                        <div className='w-[75vw] card-bg flex flex-col justify-center items-center gap-y-4 h-40 text-white'>
                            <div className='text-5xl'>Wishlist is Empty!</div>
                            <div className='text-2xl'>Add something to the list</div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Wishlist
