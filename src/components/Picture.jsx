import React from 'react'
import pito1 from '../assets/pito1.jpg'
import pito2 from '../assets/pito2.jpg'
import satu from '../assets/2018.jpg'
import dua from '../assets/2019.jpg'
import tiga from '../assets/lovee.jpg'
import empat from '../assets/2021.jpg'
import lima from '../assets/2024.jpg'
import enam from '../assets/2025.jpg'
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import { ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'

function Picture() {
  const navigate = useNavigate();

  const pictures = [
    { Image: satu, title: 'May 24, 2018', description: "As broke uni students, our go-to hangout spot was the local burjo. And of all the places, Malatax was our favorite. Cheap, near UGM, and always there when we needed a late-night meal or just a place to chill."},   
    { Image: dua, title: 'Aug 28, 2019', description: "This year, you finally started making money! This is when we took a trip to Bandung.all because you were a panelist at some physics-nuclear conference that. You took me to a dog house(?)That’s still my favorite part of the trip❤️"},   
    { Image: tiga, title: 'May 23, 2020', description: "This was during COVID. I had just started a new job, but then my salary got cut by 80%, and I was stuck in my kost, unsure of what to do. But then, you came to visit me :') That meant everything."},   
    { Image: empat, title: 'May 9, 2021', description: "It was still COVID this year, but finally, you landed your first programming job in Jakarta! 🎉After you first moved, we finally tried public transportation, since we were so used to riding your motorbike everywhere 😊🚇"},   
    { Image: pito1, title: 'May 3, 2022', description: "Now, we both finally made money! 😆✨ I switched to programming too, following your path, and it felt like we were finally leveling up together. And with that, we took our first big trip together, Balii! 🌴✈️ "},   
    { Image: pito2, title: 'June 26, 2023', description: "Our first overseas trip together! ✈️🌏 We traveled around ASEAN, before you left for the US:') It was our way of making the most of our time together, before distance became our new challenge."},
    { Image: lima, title: 'March 3, 2024', description: "My visa got rejected twice, and honestly, it was frustrating. I missed you so much, and the distance felt even harder to bear. So, we decided to meet in the middle, Istanbul."},
    { Image: enam, title: '2025', description: "We’ve been through so much.. from late-night burjo hangouts to traveling across ASEAN, from Bali to Istanbul. Every trip has been special in its own way. But now, it’s time to plan the next adventure. So… where to next? 💕🌍"},   
  ];

  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">
      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
          Our Pictures
        </h1>
        <Carousel>
          {pictures.map(({ Image, title, description }, index) => ( // Fixed index issue
            <ImageCard
              key={index} 
              imageUrl={Image}  // Make sure ImageCard accepts `imageUrl`
              altText="Placeholder image"
              title={title}
              description={description}
            />
          ))}
        </Carousel>

        <div className="flex justify-center w-full mt-12">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate('/recap')}
          >
            <ArrowLeft /> Previous page
          </button>
        </div>
      </div>
    </div>
  )
}

export default Picture
