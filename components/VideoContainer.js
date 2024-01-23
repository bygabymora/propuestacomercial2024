import React, { useEffect, useRef, useState } from 'react';
import RootLayout from '../components/layout';
import Image from 'next/image';
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
        <Image
          src="https://res.cloudinary.com/do6oloxvt/image/upload/v1706031027/2_vprbeq.png"
          alt="Moraequipos"
          className="rounded-lg w-[90%]"
          width={600}
          height={320}
        />
      </div>
      <main className="flex flex-col items-center justify-center h-[65vh] md:h-[75vh] md:mt-5">
        <div className="max-w-3xl mx-auto w-full p-4 relative">
          <video
            ref={videoRef}
            id="propuestaComercial2024"
            className="w-full h-auto rounded-lg shadow-xl"
            volume="0.7"
            controls
          >
            <source src="/images/PropuestaComercial.mp4" type="video/mp4" />
          </video>
          {!isPlaying && (
            <FaCirclePlay
              className="absolute top-1/2 left-1/2 hidden md:block transform -translate-x-1/2 -translate-y-1/2 text-[10rem] text-[#8b1414] cursor-pointer opacity-70"
              onClick={togglePlay}
            />
          )}
        </div>
      </main>
    </RootLayout>
  );
};

export default VideoContainer;
