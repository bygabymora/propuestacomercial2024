import React from 'react';
import RootLayout from '../components/layout';
import Link from 'next/link';

export default function Home() {
  return (
    <RootLayout title="Formulario Medellín 2023">
      <main className="">
        <div className="contact__container container">
          <Link href="/formulario">PAGINA DEL FORMULARIO</Link>
        </div>
      </main>
    </RootLayout>
  );
}