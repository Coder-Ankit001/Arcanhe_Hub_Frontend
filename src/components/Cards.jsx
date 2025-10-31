import React from 'react'
import nextIcon from '../assets/next-icon.svg'
import prevIcon from '../assets/prev-icon.svg'
import { IoGridSharp } from "react-icons/io5"
import './Cards.css'
import { useState } from 'react'


const Cards = ({imgs}) => {
    const [slideBar, setSlideBar] = useState("slide-left");
    const [index, setIndex] = useState(0);
    const slides = [
        {
            img1: imgs.img1,
            title1: "Assassins Creed Shadows",
            discount1: "-25%",
            price1: "₹3674",

            img2: imgs.img2,
            title2: "Fort Solis",
            discount2: "-55%",
            price2: "₹837",
            
            img3: imgs.img3,
            title3: "Rim World",
            discount3: "-20%",
            price3: "₹1200",

            img4: imgs.img4,
            title4: "Red Dead Redemption 2",
            discount4: "-75%",
            price4: "₹1249",

            img5: imgs.img5,
            title5: "Rust",
            discount5: "-50%",
            price5: "₹1700",

            img6: imgs.img6,
            title6: "Expedition 33",
            discount6: "-19%",
            price6: "₹2655",
        },
        {
            img1: imgs.img7,
            title1: "Cyberpunk 2077",
            discount1: "-10%",
            price1: "₹3500",

            img2: imgs.img8,
            title2: "Satisfactory",
            discount2: "-30%",
            price2: "₹1120",
            
            img3: imgs.img9,
            title3: "BeamNg Drive",
            discount3: "-20%",
            price3: "₹880",

            img4: imgs.img10,
            title4: "Savage Planet",
            discount4: "-75%",
            price4: "₹524",

            img5: imgs.img11,
            title5: "The Elder Scrolls - Online",
            discount5: "-35%",
            price5: "₹1599",

            img6: imgs.img12,
            title6: "WUCHANG: Fallen Feathers",
            discount6: "-10%",
            price6: "₹2999",
        }
    ]

    const handlePrevSlide = ()=>{
        if(index !== 0){
            setSlideBar("slide-left")
            setIndex(index-1)
        }
    }

    const handleNextSlide = ()=>{
        if(index !== slides.length-1){
            setSlideBar("slide-right")
            setIndex(index+1)
        }
    }
    return (
        <div className='relative z-10 isolate'>
            <div className='text-white h-12 text-2xl font-semibold flex items-center px-20'>{imgs.cardTitle}</div>
            <div className=' max-h-[62vh] w-[80vw] p-4 flex items-center gap-y-5'>
                <div className='min-w-10 flex items-center justify-center'><img src={prevIcon} onClick={handlePrevSlide} alt="previous Icon" className='invert h-40 px-0.5 cursor-pointer' /></div>
                <div className='flex flex-wrap gap-x-5 gap-y-6 justify-center items-center'>
                    <div className='max-h-[27vh] bg-black'>
                        <img src={slides[index].img1} alt="" className='max-w-[22vw] game-cards-img-imgs ' />
                        <div className='flex items-center justify-between my-0.5'>
                            <div className='flex items-center h-10 px-2 text-white text-xl'><IoGridSharp /></div>
                            <div className='flex h-10'>
                                <div className='card-discount-tag w-15 text-center flex items-center justify-center text-xl font-bold text-lime-200'>{slides[index].discount1}</div>
                                <div className='card-price-tag linethrough w-14 text-center flex-col'><div className='line-through h-5 text-gray-500'>₹4900</div><div className='h-5 flex items-center justify-center text-lime-200'>{slides[index].price1}</div></div>
                            </div>
                        </div>
                    </div>
                    <div className='max-h-[27vh] bg-black'>
                        <img src={slides[index].img2} alt="" className='max-w-[22vw] game-cards-img-imgs' />
                        <div className='flex items-center justify-between my-0.5'>
                            <div className='flex items-center h-10 px-2 text-white text-xl'><IoGridSharp /></div>
                            <div className='flex h-10'>
                                <div className='card-discount-tag w-15 text-center flex items-center justify-center text-xl font-bold text-lime-200'>{slides[index].discount2}</div>
                                <div className='card-price-tag linethrough w-14 text-center flex-col'><div className='line-through h-5 text-gray-500'>₹3999</div><div className='h-5 flex items-center justify-center text-lime-200'>{slides[index].price2}</div></div>
                            </div>
                        </div>
                    </div>
                    <div className='max-h-[27vh] bg-black'>
                        <img src={slides[index].img3} alt="" className='max-w-[22vw] game-cards-img-imgs' />
                        <div className='flex items-center justify-between my-0.5'>
                            <div className='flex items-center h-10 px-2 text-white text-xl'><IoGridSharp /></div>
                            <div className='flex h-10'>
                                <div className='card-discount-tag w-15 text-center flex items-center justify-center text-xl font-bold text-lime-200'>{slides[index].discount3}</div>
                                <div className='card-price-tag linethrough w-14 text-center flex-col'><div className='line-through h-5 text-gray-500'>₹2899</div><div className='h-5 flex items-center justify-center text-lime-200'>{slides[index].price3}</div></div>
                            </div>
                        </div>
                    </div>

                    <div className='max-h-[27vh] bg-black'>
                        <img src={slides[index].img4} alt="" className='max-w-[22vw] game-cards-img-imgs' />
                        <div className='flex items-center justify-between my-0.5'>
                            <div className='flex items-center h-10 px-2 text-white text-xl'><IoGridSharp /></div>
                            <div className='flex h-10'>
                                <div className='card-discount-tag w-15 text-center flex items-center justify-center text-xl font-bold text-lime-200'>{slides[index].discount4}</div>
                                <div className='card-price-tag linethrough w-14 text-center flex-col'><div className='line-through h-5 text-gray-500'>₹3999</div><div className='h-5 flex items-center justify-center text-lime-200'>{slides[index].price4}</div></div>
                            </div>
                        </div>
                    </div>

                    <div className='max-h-[27vh] bg-black'>
                        <img src={slides[index].img5} alt="" className='max-w-[22vw] game-cards-img-imgs' />
                        <div className='flex items-center justify-between my-0.5'>
                            <div className='flex items-center h-10 px-2 text-white text-xl'><IoGridSharp /></div>
                            <div className='flex h-10'>
                                <div className='card-discount-tag w-15 text-center flex items-center justify-center text-xl font-bold text-lime-200'>{slides[index].discount5}</div>
                                <div className='card-price-tag linethrough w-14 text-center flex-col'><div className='line-through h-5 text-gray-500'>₹3790</div><div className='h-5 flex items-center justify-center text-lime-200'>{slides[index].price5}</div></div>
                            </div>
                        </div>
                    </div>

                    <div className='max-h-[27vh] bg-black'>
                        <img src={slides[index].img6} alt="" className='max-w-[22vw] game-cards-img-imgs' />
                        <div className='flex items-center justify-between my-0.5'>
                            <div className='flex items-center h-10 px-2 text-white text-xl'><IoGridSharp /></div>
                            <div className='flex h-10'>
                                <div className='card-discount-tag w-15 text-center flex items-center justify-center text-xl font-bold text-lime-200'>{slides[index].discount6}</div>
                                <div className='card-price-tag linethrough w-14 text-center flex-col'><div className='line-through h-5 text-gray-500'>₹4958</div><div className='h-5 flex items-center justify-center text-lime-200'>{slides[index].price6}</div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='min-w-10 flex items-center justify-center'><img src={nextIcon} onClick={handleNextSlide} alt="previous Icon" className='invert h-40 px-0.5 cursor-pointer' /></div>
                </div>
                <div className='flex justify-center'>
                <div className='my-10 bg-white/20 w-[69vw] min-h-[2px] border-0 rounded-xl relative'>
                    <div className={` ${slideBar} w-1/2 bg-white/50 min-h-[3px] border-0 rounded-xl p-[1px]`}></div>
                </div>
            </div>
        </div>
    )
}

export default Cards
