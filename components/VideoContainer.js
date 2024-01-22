import React, { useEffect, useRef } from 'react';
import RootLayout from '../components/layout';
import Image from 'next/image';
import Banner from '../public/images/banner.svg';

const VideoContainer = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
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
        </div>
      </main>
    </RootLayout>
  );
};

export default VideoContainer;
