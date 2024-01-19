import React from 'react';
import ContactUs from '../components/ContactUs';
import RootLayout from '../components/layout';

export default function Home() {
  return (
    <RootLayout title="Formulario Medellín 2023">
      <main className="">
        <div className="">
          <ContactUs />
        </div>
      </main>
    </RootLayout>
  );
}
