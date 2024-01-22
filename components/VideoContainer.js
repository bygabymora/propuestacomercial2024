import React from 'react';
import RootLayout from '../components/layout';
import { CldVideoPlayer } from 'next-cloudinary';

const VideoContainer = () => {
  return (
    <RootLayout title="Formulario Propuesta Comercial 2024">
      <main className="items-center justify-center flex">
        <div className="w-[80%] lg:w-[60%]">
          <CldVideoPlayer
            id="propuestaComercial2024"
            autoplayMode="always"
            autoplay={true}
            width="960"
            height="544"
            className="rounded-lg shadow-2xl"
            src="https://res.cloudinary.com/do6oloxvt/video/upload/v1705937177/Moraequipos/WhatsApp_Video_2024-01-18_at_5.34.03_PM_xgoczs.mp4"
            logo={{
              imageUrl:
                'https://res.cloudinary.com/do6oloxvt/image/upload/v1705929454/Moraequipos/Moraequipos_minilogo.png',
              onClickUrl:
                'https://propuestacomercial2024.vercel.app/formulario',
            }}
            colors={{
              accent: '#788b9b',
              base: '#8b1414',
              text: '#fff',
            }}
            fontFace="Source Serif Pro"
          />
        </div>
      </main>
    </RootLayout>
  );
};

export default VideoContainer;
