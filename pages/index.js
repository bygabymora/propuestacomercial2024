import React from 'react';
import RootLayout from '../components/layout';
import Link from 'next/link';
import VideoContainer from '../components/VideoContainer';
import Image from 'next/image';
import Boton from '../public/images/boton.png';

export default function Home() {
  return (
    <RootLayout title="Propuesta Comercial 2024">
      <main className="bg-gray-50 pt-2">
        <div className="justify-center items-center w-full pt-2 pb-2 leading-tight">
          <VideoContainer />

          {/* Button container */}
          <div className=" p-2 flex justify-center items-center sm:relative sm:bottom-auto sm:w-auto sm:bg-transparent hide-on-mobile-landscape">
            <Link href="/formulario">
              <Image
                src={Boton}
                alt="Cuéntenos sus expectativas."
                className="w-[300px] "
              />
            </Link>
            <div className="fixed bottom-0 left-0 w-full flex justify-center items-center leading-tight sm:hidden">
              <Image
                src="https://res.cloudinary.com/do6oloxvt/image/upload/v1706816338/Dise%C3%B1o_sin_t%C3%ADtulo_2_pow0h7.png"
                alt="Moraequipos"
                className="rounded-b-lg w-[90%] mb-5 "
                width={600}
                height={320}
              />
            </div>
          </div>
        </div>
      </main>
    </RootLayout>
  );
}
