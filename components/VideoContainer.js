import React, { useEffect, useRef, useState } from 'react';
import RootLayout from '../components/layout';
import Image from 'next/image';
import Banner from '../public/images/banner.svg';
import { FaCirclePlay } from 'react-icons/fa6';

const VideoContainer = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);

      videoElement.addEventListener('play', handlePlay);
      videoElement.addEventListener('pause', handlePause);

      // Optional: Autoplay the video on load
      videoElement.play();

      return () => {
        videoElement.removeEventListener('play', handlePlay);
        videoElement.removeEventListener('pause', handlePause);
      };
    }
  }, []);

  return (
    <RootLayout title="Formulario Propuesta Comercial 2024">
      <div className="flex justify-center items-center w-full leading-tight sticky top-0 sm:hidden">
        <Image src={Banner} alt="Moraequipos" className="rounded-lg w-[90%]" />
      </div>
      <main className="flex flex-col items-center sm:mt-10 justify-center h-[65vh] md:h-[75vh] md:mt-5">
        <div className="w-[90%] sm:w-[55%] md:w-[60%] relative">
          <video
            ref={videoRef}
            id="propuestaComercial2024"
            width="960"
            height="544"
            className="rounded-lg shadow-xl"
            controls
          >
            <source src="/images/PropuestaComercial.mp4" type="video/mp4" />
          </video>
          {!isPlaying && (
            <FaCirclePlay
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[5rem] md:text-[10rem] text-[#8b1414] cursor-pointer "
              onClick={togglePlay}
            />
          )}
        </div>
      </main>
    </RootLayout>
  );
};

export default VideoContainer;
