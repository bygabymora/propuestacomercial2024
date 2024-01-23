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
          {/* Updated Tailwind classes */}
          <div className="m-1 mt-2 p-1 items-center justify-center flex sticky bottom-0 hide-on-mobile-landscape">
            <Link href="/formulario">
              <Image src={Boton} alt="Cuéntenos sus expectativas." />
            </Link>
          </div>
        </div>
      </main>
    </RootLayout>
  );
}
