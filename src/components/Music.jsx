import React from "react";
import { ArrowLeft } from "./icons";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef } from "react";
import { heavenly,sparks, sunsetz } from "../assets";
import home from '../assets/home.jpg'
import punk from '../assets/punk.jpg'
import gaga from '../assets/gaga.jpg'
import onerepublic from '../assets/onerepublic.jpg'
import cas from '../assets/cas.jpg'

function Music() {
  const navigate = useNavigate();
  // Customize and add your own songs
  const songs = [
    {
      title: "Heavenly",
      artist: "Cigarettes After Sex",
      albumCover: heavenly, 
      left: "5%",
      top: "5%",
    },
    {
      title: "Home",
      artist: "Edith Whisker",
      albumCover: home, 
      left: "40%",
      top: "15%",
    },
    {
      title: "Two Punks in Love",
      artist: "bülow",
      albumCover: punk, 
      left: '15%',
      top: '40%',
    },
    {
      title: "Always Remember This Way",
      artist: "Lady Gaga",
      albumCover: gaga, 
      left: '30%',
      top: '75%',
    },
    {
      title: "Counting Stars",
      artist: "One Republic",
      albumCover: onerepublic, 
      left: '5%',
      top: '65%',
    },
    {
      title: "Sparks",
      artist: "Coldplay",
      albumCover: sparks, 
      left: '25%',
      top: '90%',
    },
    {
      title: "Sesame Syrup",
      artist: "Cigarattes After Sex",
      albumCover: cas, 
      left: '35%',
      top: '50%',
    },
    {
      title: "Sunsetz",
      artist: "Cigarettes After Sex",
      albumCover: sunsetz, 
      left: "10%",
      top: "25%",
    },
  ];
  const containerRef = useRef(null);

  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">
    <div className="w-[90%] max-w-[400px]">
      <h1 className="text-2xl sm:text-2xl font-bold -mb-4 mt-4 drop-shadow-lg text-white text-center">
        Songs that remind me of you
      </h1>

      <div ref={containerRef}  className=" relative w-full h-[40rem] rounded-lg overflow-hidden mt-8 mb-12">
        {songs.map((song, index) => (
          <motion.div
            key={index}
            className="absolute" // Use absolute positioning
            style={{
              left: song.left,
              top: song.top,
            }}
            drag
            dragConstraints={containerRef} // Adjust to container size
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-4 flex items-center gap-4 w-56 h-[4rem]">
              <div className="w-12 h-12 flex-shrink-0">
                <img
                  src={song.albumCover}
                  alt="Album cover"
                  className="w-full h-full rounded-md object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-white font-medium text-sm truncate">
                  {song.title}
                </h2>
                <p className="text-white/70 text-xs truncate">{song.artist}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Button */}
      <div className="flex justify-center w-full mt-4 mb-4">
        <button
          className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
          onClick={() => navigate("/recap")}
        >
          <ArrowLeft /> Previous page
        </button>
      </div>
    </div>
  </div>
  );
}

export default Music;
