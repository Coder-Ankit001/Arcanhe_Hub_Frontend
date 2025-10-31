import React, { useState, useEffect } from 'react'

import SIMULATION from '../assets/Category_Slider1_img1.jpg'
import CASUAL from '../assets/Category_Slider1_img2.jpg'
import RACING from '../assets/Category_Slider1_img3.jpg'
import F2P from '../assets/Category_Slider1_img4.jpg'
import OPENWORLD from '../assets/Category_Slider2_img1.jpg'
import SOTRYRICH from '../assets/Category_Slider2_img2.jpg'
import VRTITLE from '../assets/Category_Slider2_img3.jpg'
import HORROR from '../assets/Category_Slider2_img4.jpg'
import ANIME from '../assets/Category_Slider3_img1.jpg'
import VISUALNOVEL from '../assets/Category_Slider3_img2.jpg'
import SURVIVAL from '../assets/Category_Slider3_img3.jpg'
import FIGHTING from '../assets/Category_Slider3_img4.jpg'
import PUZZLE from '../assets/Category_Slider4_img1.jpg'
import ROLEPLAYING from '../assets/Category_Slider4_img2.jpg'
import STRATEGY from '../assets/Category_Slider4_img3.jpg'
import COOPERATIVE from '../assets/Category_Slider4_img4.jpg'
import './Categories.css'
import nextIcon from '../assets/next-icon.svg'
import prevIcon from '../assets/prev-icon.svg'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom'

const Categories = () => {
    const [index, setIndex] = useState(0);
    const slides = [
        {
            id: uuidv4(),

            title1: "Open World",
            img1: OPENWORLD,

            title2: "Story-Rich",
            img2: SOTRYRICH,

            title3: "VR-Title",
            img3: VRTITLE,

            title4: "Horror",
            img4: HORROR
        },
        {
            id: uuidv4(),

            title1: "Simulation",
            img1: SIMULATION,

            title2: "Casual",
            img2: CASUAL,

            title3: "Racing",
            img3: RACING,

            title4: "Free To Play",
            img4: F2P
        },
        {
            id: uuidv4(),

            title1: "Anime",
            img1: ANIME,

            title2: "Visual-Novel",
            img2: VISUALNOVEL,

            title3: "Survival",
            img3: SURVIVAL,

            title4: "Fighting",
            img4: FIGHTING
        },
        {
            id: uuidv4(),

            title1: "Puzzle",
            img1: PUZZLE,
            
            title2: "Role-Playing",
            img2: ROLEPLAYING,
            
            title3: "Strategy",
            img3: STRATEGY,
            
            title4: "Co-Operative",
            img4: COOPERATIVE
        },
    ]

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(prevIndex => prevIndex === slides.length - 1 ? 0 : prevIndex + 1);
        }, 3500);

        return () => clearInterval(intervalId);
    }, [index]);


    const handleNextSlide = () => {
        setIndex(index => index === slides.length-1? 0: index + 1)
    }
    const handlePrevSlide = () => {
        setIndex(index => index === 0? slides.length - 1: index - 1)
    }
    const path1 = `/category/${slides[index].title1.replace(/\s+/g, '').toLowerCase()}`
    const path2 = `/category/${slides[index].title2.replace(/\s+/g, '').toLowerCase()}`
    const path3 = `/category/${slides[index].title3.replace(/\s+/g, '').toLowerCase()}`
    const path4 = `/category/${slides[index].title4.replace(/\s+/g, '').toLowerCase()}`
    return (
        <div className='flex flex-col items-center py-5 bg-gradient-to-r overflow-hidden'>
            <h1 className='text-white py-2 px-12 w-full flex justify-between text-xl'>BROWSE BY CATEGORY</h1>
            <div className='flex py-2'>
                <div className='w-10 flex items-center justify-center'>
                    <img src={prevIcon} onClick={handlePrevSlide} alt="previous Icon" className='prev-icon h-40 px-0.5 text-white invert' />
                </div>
                <div className='carousel-bg categories-section-box flex justify-between w-[70vw] relative'>
                    <div className='categories-section-img-box bg-cyan-300 w-53 relative border-0 rounded-xl'>
                        <div className='bg-gradient-to-br from-10% from-cyan-200/80 to-cyan-950/80 hover:bg-gradient-to-br hover:from-10% hover:from-cyan-200/30 hover:to-cyan-950/30 absolute w-full h-full border-0 rounded-xl flex justify-center items-center'>
                            <div className=' text-cyan-600 w-full h-full flex justify-center items-center hover:translate-y-12 transform transition-transform duration-300 ease-in-out will-change-[transform] font-semibold text-xl'><Link to={path1}><div className='categories-section-category-title bg-white h-8 flex justify-center items-center border-0 rounded-sm px-4'>{slides[index].title1}</div></Link></div>
                        </div>
                        <img src={slides[index].img1} alt="" className='categories-section-img-imgs border-0 z-1 rounded-xl w-53' />
                    </div>
                    <div className='categories-section-img-box bg-cyan-300 w-53 relative border-0 rounded-xl'>
                        <div className='bg-gradient-to-br from-10% from-cyan-200/80 to-cyan-950/80 hover:bg-gradient-to-br hover:from-10% hover:from-cyan-200/30 hover:to-cyan-950/30 absolute w-full h-full border-0 rounded-xl flex justify-center items-center'>
                            <div className=' text-cyan-600 w-full h-full flex justify-center items-center hover:translate-y-12 transform transition-transform duration-300 ease-in-out will-change-[transform] font-semibold text-xl'><Link to={path2}><div className='categories-section-category-title bg-white h-8 flex justify-center items-center border-0 rounded-sm px-4'>{slides[index].title2}</div></Link></div>
                        </div>
                        <img src={slides[index].img2} alt="" className='categories-section-img-imgs border-0 z-1 rounded-xl w-53' />
                    </div>
                    <div className='categories-section-img-box bg-cyan-300 w-53 relative border-0 rounded-xl'>
                        <div className='bg-gradient-to-br from-10% from-cyan-200/80 to-cyan-950/80 hover:bg-gradient-to-br hover:from-10% hover:from-cyan-200/30 hover:to-cyan-950/30 absolute w-full h-full border-0 rounded-xl flex justify-center items-center'>
                            <div className=' text-cyan-600 w-full h-full flex justify-center items-center hover:translate-y-12 transform transition-transform duration-300 ease-in-out will-change-[transform] font-semibold text-xl'><Link to={path3}><div className='categories-section-category-title bg-white h-8 flex justify-center items-center border-0 rounded-sm px-4'>{slides[index].title3}</div></Link></div>
                        </div>
                        <img src={slides[index].img3} alt="" className='categories-section-img-imgs border-0 z-1 rounded-xl w-53' />
                    </div>
                    <div className='categories-section-img-box bg-cyan-300 w-53 relative border-0 rounded-xl'>
                        <div className='bg-gradient-to-br from-10% from-cyan-200/80 to-cyan-950/80 hover:bg-gradient-to-br hover:from-10% hover:from-cyan-200/30 hover:to-cyan-950/30 absolute w-full h-full border-0 rounded-xl flex justify-center items-center'>
                            <div className='text-cyan-600 w-full h-full flex justify-center items-center hover:translate-y-12 transform transition-transform duration-300 ease-in-out will-change-[transform] font-semibold text-xl'><Link to={path4}><div className='categories-section-category-title bg-white h-8 flex justify-center items-center border-0 rounded-sm px-4'>{slides[index].title4}</div></Link></div>
                        </div>
                        <img src={slides[index].img4} alt="" className='categories-section-img-imgs border-0 z-1 rounded-xl w-53' />
                    </div>
                </div>
                <div className='w-10 flex items-center justify-center'>
                    <img src={nextIcon} onClick={handleNextSlide} alt="next Icon" className='next-icon h-40 px-0.5 text-white invert' />
                </div>
            </div>

            <div className='flex gap-1'>
                {slides.map((slide, i) => (
                    <button key={slide.id} className={`${i === index ? 'bg-gray-400' : 'bg-gray-100'} button-slider hover:bg-gray-400`}></button>
                ))}
            </div>
        </div>
    )
}

export default Categories
