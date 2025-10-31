import React, { useState, useEffect, useContext, useRef } from 'react'
import { WishlistContext } from '../context/wishlist'
import { ProfileContext } from '../context/profile'
import axios from 'axios'
import PUBG_Main from '../assets/Slider_Poster1_Main.jpg'
import PUBG_ssOne from '../assets/Slider_Poster1_ss1.jpg'
import PUBG_ssTwo from '../assets/Slider_Poster1_ss2.jpg'
import PUBG_ssThree from '../assets/Slider_Poster1_ss3.jpg'
import PUBG_ssFour from '../assets/Slider_Poster1_ss4.jpg'
import RDR2_Main from '../assets/Slider_Poster2_Main.jpg'
import RDR2_ssOne from '../assets/Slider_Poster2_ss1.jpg'
import RDR2_ssTwo from '../assets/Slider_Poster2_ss2.jpg'
import RDR2_ssThree from '../assets/Slider_Poster2_ss3.jpg'
import RDR2_ssFour from '../assets/Slider_Poster2_ss4.jpg'
import DESTINY_Main from '../assets/Slider_Poster3_Main.jpg'
import DESTINY_ssOne from '../assets/Slider_Poster3_ss1.jpg'
import DESTINY_ssTwo from '../assets/Slider_Poster3_ss2.jpg'
import DESTINY_ssThree from '../assets/Slider_Poster3_ss3.jpg'
import DESTINY_ssFour from '../assets/Slider_Poster3_ss4.jpg'
import DEADBYDAYLIGHT_Main from '../assets/Slider_Poster4_Main.jpg'
import DEADBYDAYLIGHT_ssOne from '../assets/Slider_Poster4_ss1.jpg'
import DEADBYDAYLIGHT_ssTwo from '../assets/Slider_Poster4_ss2.jpg'
import DEADBYDAYLIGHT_ssThree from '../assets/Slider_Poster4_ss3.jpg'
import DEADBYDAYLIGHT_ssFour from '../assets/Slider_Poster4_ss4.jpg'
import UMASUME_Main from '../assets/Slider_Poster5_Main.jpg'
import UMASUME_ssOne from '../assets/Slider_Poster5_ss1.jpg'
import UMASUME_ssTwo from '../assets/Slider_Poster5_ss2.jpg'
import UMASUME_ssThree from '../assets/Slider_Poster5_ss3.jpg'
import UMASUME_ssFour from '../assets/Slider_Poster5_ss4.jpg'
import DELTAFORCE_Main from '../assets/Slider_Poster6_Main.jpg'
import DELTAFORCE_ssOne from '../assets/Slider_Poster6_ss1.jpg'
import DELTAFORCE_ssTwo from '../assets/Slider_Poster6_ss2.jpg'
import DELTAFORCE_ssThree from '../assets/Slider_Poster6_ss3.jpg'
import DELTAFORCE_ssFour from '../assets/Slider_Poster6_ss4.jpg'

import { IoGridSharp } from "react-icons/io5"
import './Carousel.css'
import nextIcon from '../assets/next-icon.svg'
import prevIcon from '../assets/prev-icon.svg'
import { v4 as uuidv4 } from 'uuid';
const Carousel = () => {

    const [index, setIndex] = useState(0);
    const slides = [
        {
            key: uuidv4(),
            title: "Red Dead Redemption 2",
            main: RDR2_Main,
            ssOne: RDR2_ssOne,
            ssTwo: RDR2_ssTwo,
            ssThree: RDR2_ssThree,
            ssFour: RDR2_ssFour,
            price: "₹1249",
            top_seller: true,
            release_date: '26/08/2018',
            rating: '4.3',
            genres: ["Open world", "Shooter", "Adventure"]
        },
        {
            key: uuidv4(),
            title: "PUBG BATTLEGROUNDS",
            main: PUBG_Main,
            ssOne: PUBG_ssOne,
            ssTwo: PUBG_ssTwo,
            ssThree: PUBG_ssThree,
            ssFour: PUBG_ssFour,
            price: "Free To Play",
            top_seller: true,
            release_date: '23/03/2017',
            rating: '4.2',
            genres: ["Survival", "Shooter", "FPS"]
        },
        {
            key: uuidv4(),
            title: "Destiny 2",
            main: DESTINY_Main,
            ssOne: DESTINY_ssOne,
            ssTwo: DESTINY_ssTwo,
            ssThree: DESTINY_ssThree,
            ssFour: DESTINY_ssFour,
            price: "Free To Play",
            top_seller: true,
            release_date: '26/08/2018',
            rating: '4.4',
            genres: ["Open world", "Shooter", "Adventure"]
        },
        {
            key: uuidv4(),
            title: "Dead By Daylight",
            main: DEADBYDAYLIGHT_Main,
            ssOne: DEADBYDAYLIGHT_ssOne,
            ssTwo: DEADBYDAYLIGHT_ssTwo,
            ssThree: DEADBYDAYLIGHT_ssThree,
            ssFour: DEADBYDAYLIGHT_ssFour,
            price: "₹1168",
            top_seller: true,
            release_date: '06/09/2017',
            rating: '4.5',
            genres: ["FPS", "MMOG", "Adevnture", "Action-RPG"]
        },
        {
            key: uuidv4(),
            title: "Umasume: Pretty Derby",
            main: UMASUME_Main,
            ssOne: UMASUME_ssOne,
            ssTwo: UMASUME_ssTwo,
            ssThree: UMASUME_ssThree,
            ssFour: UMASUME_ssFour,
            price: "Free To Play",
            top_seller: false,
            release_date: '24/02/2024',
            rating: '4.1',
            genres: ["Social Network", "Simulation", "Racing"]
        },
        {
            key: uuidv4(),
            title: "Delta Force",
            main: DELTAFORCE_Main,
            ssOne: DELTAFORCE_ssOne,
            ssTwo: DELTAFORCE_ssTwo,
            ssThree: DELTAFORCE_ssThree,
            ssFour: DELTAFORCE_ssFour,
            price: "Free To Play",
            top_seller: true,
            release_date: '04/09/2024',
            rating: '4.2',
            genres: ["FPS", "Free To Play", "Adventure"]
        },
    ]

    const value = useContext(WishlistContext)
    const {profile, setProfile} = useContext(ProfileContext)

    const handleWishlist = async() => {
        let exist = value.wishlist.some(item => { return item.title === slides[index].title })
        if (!exist) {
            console.log("Item Added Successfully in Wishlist")
            const newWishlist = [...value.wishlist, slides[index]]
            value.setWishlist(newWishlist)
        }

        else {
            console.log('Item is Already in Wishlist')
        }

        const items = value.wishlist
        const filtered = items.map(
            ({key, title, main, price, top_seller, release_date, rating, genres}) =>
            ({key, title, main, price, top_seller, release_date, rating, genres})
        )
        try{
            let res = await axios.post('http://localhost:3000/wishlist/', {
                username: profile.username,
                data: filtered
            })
            console.log(res.data);
        }
        catch(err){
            console.log('Error!', err);
        }
        
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex(index === slides.length - 1 ? 0 : index + 1)
        }, 3500);

        return () => clearInterval(intervalId);
    }, [index]);

    const handleNextSlide = () => {
        setIndex(index === slides.length - 1 ? 0 : index + 1)
    }
    const handlePrevSlide = () => {
        setIndex(index === 0 ? slides.length - 1 : index - 1)
    }
    return (
        <div className='carousel-body flex flex-col items-center py-5'>
            <h1 className='text-white py-2 px-10 w-full text-xl'>Featured & Recommended</h1>
            <div className='flex py-2'>
                <div className='w-10 flex items-center justify-center'><img src={prevIcon} alt="previous Icon" onClick={handlePrevSlide} className='prev-icon h-40 px-0.5 text-white invert' /></div>
                        <div className='carousel-bg carousel-box flex w-[70vw] relative'>
                            <img src={slides[index].main} className={`carousel-main-poster w-150`} />
                            <div className=''>
                                <div className='slider-title text-xl px-2 py-2 text-white flex justify-between'>{slides[index].title}</div>
                                <div className='carousel-side-imgs p-2 flex flex-wrap gap-4 justify-center'>
                                    <img src={slides[index].ssOne} className='side-img-imgs h-18' />
                                    <img src={slides[index].ssTwo} className='side-img-imgs h-18' />
                                    <img src={slides[index].ssThree} className='side-img-imgs h-18' />
                                    <img src={slides[index].ssFour} className='side-img-imgs h-18' />
                                </div>
                                <div className='px-2 my-2 text-lg text-white '>Now Available</div>
                                <button className='top-seller mx-2 px-1 text-white bg-gray-500 text-sm'>{slides[index].top_seller && <p>Top Seller</p>}</button>
                                <p className='game-cost absolute text-gray-200 text-xs px-2 py-2 bottom-0'>{slides[index].price}</p>
                                <button onClick={handleWishlist} className='bg-gray-400 hover:bg-gray-300 w-24 h-4 px-1 text-black text-xs border-0 rounded-xs font-semibold flex justify-center items-center absolute bottom-2 right-10 cursor-pointer'>Add to Wishlist</button>
                                <div className='absolute px-2 py-2 text-gray-400 bottom-0 right-0'><IoGridSharp /></div>
                            </div>
                        </div>
                <div className='w-10 flex items-center justify-center'><img src={nextIcon} onClick={handleNextSlide} alt="next Icon" className='next-icon h-40 px-0.5 text-white invert' /></div>
            </div>
            <div className='flex gap-1 transition-transform duration-500 ease-in'>
                {slides.map((slide, i) => {
                    return (
                        <button key={slide.key} className={`${i === index ? 'bg-gray-400' : 'bg-gray-100'} button-slider hover:bg-gray-400`}></button>
                    )
                })}
            </div>
        </div>
    )
}

export default Carousel
