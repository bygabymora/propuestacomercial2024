import React from 'react';
import RootLayout from '../components/layout';
import Link from 'next/link';
import VideoContainer from '../components/VideoContainer';
import Image from 'next/image';
import Boton from '../public/images/boton.png';

export default function Home() {
  return (
    <RootLayout title="Formulario Medellín 2023">
      <main className="bg-gray-50 pt-2">
        <div className="justify-center items-center w-full pt-2 pb-2 leading-tight">
          <VideoContainer />

          {/* Button container */}
          <div className="fixed bottom-0 left-0 w-full p-2 flex justify-center items-center sm:relative sm:bottom-auto sm:w-auto sm:bg-transparent hide-on-mobile-landscape">
            <Link href="/formulario">
              <Image src={Boton} alt="Cuéntenos sus expectativas." />
            </Link>
          </div>
        </div>
      </main>
    </RootLayout>
  );
}
