import React from 'react';
import Image from 'next/image';
import ThankYouImage from '../public/images/ThankYouImage.svg';
import ThankYouImage2 from '../public/images/ThankYouImage2.svg';

const ThankYouPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 p-4">
      <div className="text-center ">
        <Image
          src={ThankYouImage}
          alt="Gracias"
          className="mx-auto md:hidden"
        />
        <Image src={ThankYouImage2} alt="Gracias" className="hidden md:block" />
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">
          ¡Gracias por tu interés!
        </h2>
        <p className="text-gray-600 mt-2">
          Hemos recibido tu información y nos pondremos en contacto contigo a la
          brevedad.
        </p>
        <button
          onClick={() => (window.location.href = '/')}
          className="button button--flex btn-contact mt-3"
        >
          Volver a la página principal
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;
