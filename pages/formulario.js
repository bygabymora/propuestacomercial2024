import React from 'react';
import ContactUs from '../components/ContactUs';
import RootLayout from '../components/layout';

export default function Formulario() {
  return (
    <RootLayout title="Formulario Propuesta Comercial 2024">
      <main className="">
        <div className="">
          <ContactUs />
        </div>
      </main>
    </RootLayout>
  );
}
