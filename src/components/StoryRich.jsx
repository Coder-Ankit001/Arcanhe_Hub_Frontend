import React from 'react'
import heroImg from '../assets/StoryRich_Hero.jpg'
import { CiSearch } from "react-icons/ci";
import { IoGridSharp } from "react-icons/io5"

import imgOne from '../assets/StoryRich_Slider_img1.jpg'
import imgTwo from '../assets/StoryRich_Slider_img2.jpg'
import imgThree from '../assets/StoryRich_Slider_img3.jpg'
import imgFour from '../assets/StoryRich_Slider_img4.jpg'
import imgFive from '../assets/StoryRich_Slider_img5.jpg'
import imgSix from '../assets/StoryRich_Slider_img6.jpg'
import imgSeven from '../assets/StoryRich_Slider_img7.jpg'
import imgEight from '../assets/StoryRich_Slider_img8.jpg'
import imgNine from '../assets/StoryRich_Slider_img9.jpg'
import imgTen from '../assets/StoryRich_Slider_img10.jpg'
import imgEleven from '../assets/StoryRich_Slider_img11.jpg'
import imgTwelve from '../assets/StoryRich_Slider_img12.jpg'

import imgMain from '../assets/StoryRich_Carousel_Main.jpg'

import nextIcon from '../assets/next-icon.svg'
import prevIcon from '../assets/prev-icon.svg'
import mainImg from '../assets/Slider_Poster2_Main.jpg'
import Cards from './Cards';
import './StoryRich.css'

const StoryRich = () => {
    const imgs = {imgOne, imgTwo, imgThree, imgFour, imgFive, imgSix, imgSeven, imgEight, imgNine, imgTen, imgEleven, imgTwelve}
    return (
        <div className='main-bg min-h-[85vh] overflow-y-scroll flex justify-center relative z-0'>
            <img src={heroImg} alt="" className='absolute z-1 h-f' />
            <div className='flex bg-gradient-to-r from-black/80 via-neutral-200/10 to-black/80 h-[85vh] w-full flex-col items-center justify-Start absolute z-10' >
                <div className='search-box bg-page-header mt-8 mb-4 w-[70vw] flex items-center justify-between px-4'>
                    <ul className=' text-white font-bold flex items-center h-8 gap-6'>
                        <li className='search-bar-1'>Your Store</li>
                        <li className='search-bar-1'>Categories</li>
                        <li className='search-bar-1'>Points Shop</li>
                        <li className='search-bar-2'>News</li>
                        <li className='search-bar-2'>Labs</li>
                    </ul>
                    <div className='flex search-option-outer'>
                        <input placeholder='Search' className='search-option text-black/50 bg-cyan-100 opacity-50 h-6 px-2 border-0 border-black rounded-tl-sm rounded-bl-sm' />
                        <button className='search-button-nav search-option-button px-1 text-black border-0 rounded-tr-sm rounded-br-sm'><CiSearch /></button>
                    </div>
                </div>
                <div className='font h-[20vh] text-5xl font-extrabold w-[70vw] flex justify-center items-center text-white my-2'>Story Rich</div>
                <div className=' flex flex-col items-center w-[90vw]'>
                    <div className='flex py-2'>
                        <div className='w-10 flex items-center max-w-[60vw] justify-center'><img src={prevIcon} alt="previous Icon" className='invert h-40 px-0.5 cursor-pointer' /></div>
                        <div className='flex openworld-carouisel-box carousel-bg relative'>
                            <img src={imgMain} className='h-100 max-w-160' />
                            <div className='openworld-carousel-right-side min-w-[30vw] relative'>
                                <div className='openworld-carousel-right-side-title slider-title text-3xl px-2 py-2 text-white'>Hogwart Legacy</div>
                                
                                <div className='openworld-carousel-right-side-status px-2  my-2 text-xl text-white '>Now Available</div>
                                <button className='mx-2 px-1 text-white bg-gray-500 text-sm'>Top Seller</button>
                                <p className='openworld-carousel-right-side-price absolute text-gray-200 text-xl px-2 py-2 bottom-0'>₹3999</p>
                                <div className='absolute px-2 py-2 text-gray-400 bottom-0 right-2'><IoGridSharp /></div>
                            </div>
                        </div>
                        <div className='w-10 flex items-center justify-center'><img src={nextIcon} alt="next Icon" className='invert h-40 px-0.5 cursor-pointer' /></div>
                    </div>
                </div>

                <div className='openworld-category-nav bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-500 mt-8 mb-4 w-[95vw] flex items-center justify-between'>
                    <ul className='category-header text-white font-bold flex items-center w-full h-15 justify-evenly px-6'>
                        <li className='category-text cursor-pointer'>FEATURED</li>
                        <li className='category-text cursor-pointer'>ACTION</li>
                        <li className='category-text cursor-pointer'>ADVENTURE</li>
                        <li className='category-text cursor-pointer'>CASUAL</li>
                        <li className='category-text cursor-pointer'>RPG</li>
                        <li className='category-text cursor-pointer'>SIMULATION</li>
                        <li className='category-text cursor-pointer'>STRATEGY</li>
                        <li className='category-text cursor-pointer'>SPORTS & RACING</li>
                        <li className='category-text cursor-pointer'>CONTROLLER</li>
                        <li className='category-text cursor-pointer'>VR</li>
                    </ul>
                </div>

                <Cards imgs={{
                    cardTitle: "Story Rich",
                    img1: imgOne,
                    img2: imgTwo,
                    img3: imgThree,
                    img4: imgFour,
                    img5: imgFive,
                    img6: imgSix,
                    img7: imgSeven,
                    img8: imgEight,
                    img9: imgNine,
                    img10: imgTen,
                    img11: imgEleven,
                    img12: imgTwelve,
                }} />
            </div>

        </div>
    )
}

export default StoryRich
