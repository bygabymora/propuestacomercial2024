import React from 'react';
import RootLayout from '../components/layout';
import Link from 'next/link';

export default function Home() {
  return (
    <RootLayout title="Formulario Medellín 2023">
      <main className="">
        <div className="flex justify-center items-center w-full pt-5 pb-2 leading-tight ">
          <Link
            href="/formulario"
            className="button button--flex btn-contact mt-3"
          >
            PAGINA DEL FORMULARIO
          </Link>
        </div>
      </main>
    </RootLayout>
  );
}
