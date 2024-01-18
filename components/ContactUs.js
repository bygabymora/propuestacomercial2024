import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Banner from '../public/images/banner.png';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { getError } from '../utils/error.js';
import axios from 'axios';

const ContactUs = () => {
  const phoneNumber = '573202193192';
  const form = useRef();
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/newcontact', {
        formulario: 'Premio',
        nombre: name,
        telefono: phone,
        ciudad: city,
        empresa: company,
        email: email,
      });

      form.current.reset();
      toast.success('');
      // Una vez enviado el correo, redirigir a WhatsApp
      redirectToWhatsApp();

      // Limpiar los campos del formulario
      setName('');
      setPhone('');
      setCity('');
      setCompany('');
    } catch (err) {
      toast.error(getError(err));
    }
  };

  const redirectToWhatsApp = () => {
    const whatsappMessage = `¡Hola Moraequipos! Los vi en el Congreso Internacional del CNB en Medellín soy *${name}* y quiero mi premio. *El envío de este mensaje es necesario para poder procesar la entrega.*`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    router.push(url);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const tab = <>&nbsp;&nbsp;</>;

  return (
    <div className=" contact__container text-center">
      <Image src={Banner} alt="Moraequipos presente"></Image>
      <h3 className="contact__title">Por favor ingresa tus datos</h3>
      <form
        className="contact__form text-center"
        ref={form}
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <div className="contact__form-div">
          <label className="contact__form-tag">Nombre Completo*</label>
          <input
            type="text"
            name="user_name"
            className="contact__form-input"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        <div className="contact__form-div">
          <label className="contact__form-tag">Teléfono*</label>
          <input
            type="text"
            name="user_phone"
            className="contact__form-input"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            required
          />
        </div>
        <div className="contact__form-div">
          <label className="contact__form-tag">Ciudad*</label>
          <input
            type="text"
            name="user_city"
            className="contact__form-input"
            onChange={(e) => setCity(e.target.value)}
            value={city}
            required
          />
        </div>
        <div className="contact__form-div">
          <label className="contact__form-tag mb-2">Empresa {tab}</label>
          <input
            type="text"
            name="user_company"
            className="contact__form-input"
            onChange={(e) => setCompany(e.target.value)}
            value={company}
          />
        </div>
        <div className="contact__form-div">
          <label className="contact__form-tag">Email*</label>
          <input
            type="email"
            name="user_email"
            className="contact__form-input"
            onChange={handleEmailChange}
            value={email}
            required
          />
        </div>
        <div class="privacy-checkbox">
          <input type="checkbox" id="dataConsent" name="dataConsent" required />
          {tab}
          <label for="dataConsent">
            Aceptas el tratamiento de datos y el envío de promociones
            (Moraequipos no entregará tus datos a terceros en ningún momento).
          </label>
        </div>

        <br />
        <button className="button button--flex btn-contact" type="submit">
          <span className=" text-white">¡Quiero mi premio!</span>
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
