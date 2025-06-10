"use client";

import { useState,useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import Link from "next/link";

const images=[
    {src:"/productsPageMedia/bannerProducts1.jpg", link:`/IndivProductsPage/Product1` },
    {src:"/productsPageMedia/bannerProducts2.jpg", link:`/IndivProductsPage/Product2` },
    {src:"/productsPageMedia/bannerProducts3.webp", link:`/IndivProductsPage/Product3` },
    {src:"/productsPageMedia/bannerProducts4.webp", link:`/IndivProductsPage/Product4` },
];

const Banner = () => {
    const [current,setCurrent] =useState(0);
    const nextSlide =()=>setCurrent((prev)=> (prev+1)%images.length);
    const prevSlide=()=>setCurrent((prev)=>(prev -1 +images.length)%images.length);

    useEffect(()=> {
        const interval = setInterval(()=>{
            nextSlide();
        },5000);
        return ()=> clearInterval(interval);
    },[]);
    const swiperHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight:prevSlide,
    trackMouse: true,
    preventScrollOnSwipe:true
});

return (
    <div className="flex items-center justify-center">
    <div className="relative w-1/2 overflow-hidden" {...swiperHandlers}>
        <div className="flex transition-transform duration-500 ease-in-out" style={{transform:`translateX(-${current*100}%)`}}> 
            {images.map((img,index)=>(
                <Link href={img.link} key={index} className="flex-shrink-0 w-full">
                <img src={img.src} alt={`Banner${index+1}`} className="w-full h-full object-cover"/>     
                </Link>
            ))}
        </div>
    <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">←</button>
    <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">→</button>
    </div>
    </div>
);

};

export default Banner;
