'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './carousal.css';

let carousalimgs = [
     "./assets/carousalimgs/1.webp",
     "./assets/carousalimgs/2.webp",
     "./assets/carousalimgs/3.webp",
     "./assets/carousalimgs/4.webp",
     "./assets/carousalimgs/5.webp",
     "./assets/carousalimgs/6.webp",
];


export default function Carousal(){
  const [currentImg, setCurrentImg] = useState(carousalimgs[0]);
  let currentIndex = 0;
  useEffect(() => {
     const interval = setInterval(() => {
         currentIndex = (currentIndex + 1) % carousalimgs.length;
         setCurrentImg(carousalimgs[currentIndex]);
     }, 5000);
     return () => clearInterval(interval);
  }, []);
  return (
      <div className='carousalbox' >
             <motion.img className='carousalimg' src={currentImg}  key={currentImg}  initial={{ opacity: 0, y: -100  }} animate={{ opacity: 0.5, y:0 }} transition={{ duration: 1 }}   />
             <div  className='heroText'>NAAAM: The Navodayan Family</div>
        </div>
  );
}
