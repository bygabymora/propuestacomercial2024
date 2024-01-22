import React from 'react';
import RootLayout from '../components/layout';

const VideoContainer = () => {
  return (
    <RootLayout title="Formulario Propuesta Comercial 2024">
      <main className="flex flex-col items-center justify-center h-[80vh]">
        <div className="w-[80%] lg:w-[60%] relative">
          <video
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
