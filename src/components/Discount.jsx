import React from 'react'
import imgOne from '../assets/discount_section_img1.jpg'
import imgTwo from '../assets/discount_section_img2.jpg'
import imgThree from '../assets/discount_section_img3.jpg'
import imgFour from '../assets/discount_section_img4.jpg'
import { IoGridSharp } from "react-icons/io5";
import './Discount.css'
import nextIcon from '../assets/next-icon.svg'
import prevIcon from '../assets/prev-icon.svg'
const Discount = () => {
    return (
        <div className='discount-section flex flex-col items-center py-5 bg-gradient-to-r'>
            <h1 className='text-white py-2 px-12 w-full flex justify-between'><div className='text-xl'>Discount and Events</div> <button className='p-2 h-6 border-1 border-white rounded-md flex items-center'>Browse More</button></h1>
            <div className='flex py-2 '>
                <div className='w-10 flex items-center justify-center'><img src={prevIcon} alt="previous Icon" className='prev-icon h-40 px-0.5 text-white invert' /></div>
                <div className='offers-carousel-bg carousel-box flex w-[70vw] relative gap-2'>
                    <div className='offers-main-img-box bg-gradient-to-br from-cyan-700 via-cyan-600  to-cyan-700 text-white border-0 rounded-sm h-100'>
                        <img src={imgOne} className='offers-main-img-imgs w-72'/>
                        <div className='pt-4 px-4'>Weekend Deal</div>
                        <p className='px-4 text-sm text-cyan-100'>offer ends at</p>
                        <div className='bg-gradient-to-r from-lime-600 via-lime-500 to-lime-600 w-26 text-center mx-4 my-2'>Upto 70% Off</div>
                    </div>
                    <div className='offers-main-img-box bg-gradient-to-br from-cyan-700 via-cyan-600  to-cyan-700 text-white border-0 rounded-sm h-100'>
                        <img src={imgTwo} className='offers-main-img-imgs w-72'/>
                        <div className='pt-4 px-4'>Weekend Deal</div>
                        <p className='px-4 text-sm text-cyan-100'>offer ends at</p>
                        <div className='bg-gradient-to-r from-lime-600 via-lime-500 to-lime-600 w-26 text-center mx-4 my-2'>Upto 70% Off</div>
                    </div>
                    <div className=''>
                        <div className='pr-2 flex flex-col gap-2'>
                            <div className='offers-side-img-box text-white bg-cyan-200'>
                                <img src={imgThree} className='offers-side-img-imgs h-35' />
                                <div className='flex justify-between p-2'>
                                    <h1 className='flex items-center text-black text-sm'>Today's Deal!</h1>
                                    <div className='flex h-10'>
                                        <div className='bg-gradient-to-r from-lime-600 via-lime-500 to-lime-600 w-15 text-center flex items-center justify-center text-xl font-bold text-lime-200'>-90%</div>
                                        <div className='linethrough bg-gray-500 w-12 text-center flex-col'><div className='line-through h-5 text-gray-700'>$200</div><div className='h-5 flex items-center justify-center text-lime-200'>$100</div></div>
                                    </div>
                                </div>
                            </div>
                            <div className='offers-side-img-box text-white bg-cyan-200'>
                                <img src={imgFour} className='offers-side-img-imgs h-35' />
                                <div className='flex justify-between p-2'>
                                    <h1 className='flex items-center text-black text-sm'>Today's Deal!</h1>
                                    <div className='flex h-10'>
                                        <div className='bg-gradient-to-r from-lime-600 via-lime-500 to-lime-600 w-15 text-center flex items-center justify-center text-xl font-bold text-lime-200'>-90%</div>
                                        <div className='linethrough bg-gray-500 w-12 text-center flex-col'><div className='line-through h-5 text-gray-700'>$200</div><div className='h-5 flex items-center justify-center text-lime-200'>$100</div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-10 flex items-center justify-center'><img src={nextIcon} alt="next Icon" className='next-icon h-40 px-0.5 text-white invert'/></div>
            </div>
            <div className='flex gap-1'>
                <button className='min-h-3 min-w-5 border-0 rounded-sm bg-gray-200 hover:bg-gray-300'></button>
                <button className='min-h-3 min-w-5 border-0 rounded-sm bg-gray-200 hover:bg-gray-300'></button>
                <button className='min-h-3 min-w-5 border-0 rounded-sm bg-gray-200 hover:bg-gray-300'></button>
                <button className='min-h-3 min-w-5 border-0 rounded-sm bg-gray-200 hover:bg-gray-300'></button>
            </div>
        </div>
    )
}

export default Discount
