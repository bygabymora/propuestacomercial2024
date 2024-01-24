import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { getError } from '../utils/error.js';
import axios from 'axios';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();
  const router = useRouter();
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [telefono, setTelefono] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [cantidadDeAnalizadores, setCantidadDeAnalizadores] = useState(0);
  const [consciente, setConsciente] = useState('Sí');
  const [hayCiudades, setHayCiudades] = useState('Sí');
  const [ciudadEspecial, setCiudadEspecial] = useState('');
  const [deseaRecibirOferta, setDeseaRecibirOferta] = useState('Sí');
  const [condicionesDeseadas, setCondicionesDeseadas] = useState('');
  const [contactoTelefonico, setContactoTelefonico] = useState('Sí');

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/newcontact', {
        formulario: 'Propuesta Comercial',
        nombre,
        email,
        empresa,
        telefono,
        ciudad,
        cantidadDeAnalizadores,
        consciente,
        hayCiudades,
        ciudadEspecial,
        deseaRecibirOferta,
        condicionesDeseadas,
        contactoTelefonico,
      });

      form.current.reset();
      toast.success('Formulario enviado con éxito');

      setNombre('');
      setEmpresa('');
      setTelefono('');
      setCiudad('');
      setEmail('');
      setCantidadDeAnalizadores(0);
      setConsciente('true');
      setHayCiudades('true');
      setCiudadEspecial('');
      setDeseaRecibirOferta('true');
      setCondicionesDeseadas('');
      setContactoTelefonico('true');
      setTimeout(() => {
        router.push('/gracias');
      }, 2000);
    } catch (err) {
      toast.error(getError(err));
    }
  };

  const sendEmail = () => {
    const formData = new FormData();

    formData.append('user_name', nombre);
    formData.append('user_email', email);
    formData.append('user_company', empresa);
    formData.append('user_phone', telefono);
    formData.append('user_city', ciudad);
    formData.append('user_quantity', cantidadDeAnalizadores);
    formData.append('consciente', consciente);
    formData.append('hayCiudades', hayCiudades);
    formData.append('special_city', ciudadEspecial);
    formData.append('deseaRecibirOferta', deseaRecibirOferta);
    formData.append('condicionesDeseadas', condicionesDeseadas);
    formData.append('contactoTelefonico', contactoTelefonico);

    emailjs
      .sendForm(
        'service_grtjjzp',
        'template_nqt1u2d',
        form.current,
        'LuJZSocJe5a_St7dQ'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className=" m-x2 text-center  bg-gray-50 p-4">
      <div className="flex justify-center items-center w-full pt-5 pb-2 leading-tight ">
        <Image
          src="https://res.cloudinary.com/do6oloxvt/image/upload/v1706038754/Banner_j0ufni.jpg"
          alt="Moraequipos"
          className="rounded-lg w-[90%] md:w-[90%]"
          width={1200}
          height={240}
        />
      </div>

      <h3 className="contact__title">Por favor ingrese sus datos</h3>
      <form
        className=""
        ref={form}
        onSubmit={(e) => {
          submitHandler(e);
          sendEmail();
        }}
      >
        <div className="w-full px-3 pt-5 grid grid-cols-1 md:grid-cols-6 pb-2 leading-tight border rounded shadow ">
          <div className="contact__form-div mb-3">
            <label className="contact__form-tag  bg-gray-50 p-4">Nombre*</label>
            <input
              type="text"
              name="user_name"
              className="contact__form-input"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
              required
            />
          </div>
          <div className="contact__form-div mb-3">
            <label className="contact__form-tag  bg-gray-50">Teléfono*</label>
            <input
              type="text"
              name="user_phone"
              className="contact__form-input"
              onChange={(e) => setTelefono(e.target.value)}
              value={telefono}
              required
            />
          </div>
          <div className="contact__form-div mb-3">
            <label className="contact__form-tag  bg-gray-50">Ciudad*</label>
            <input
              type="text"
              name="user_city"
              className="contact__form-input"
              onChange={(e) => setCiudad(e.target.value)}
              value={ciudad}
              required
            />
          </div>

          <div className="contact__form-div mb-3">
            <label className="contact__form-tag  bg-gray-50 ">Empresa*</label>
            <input
              type="text"
              name="user_company"
              className="contact__form-input"
              onChange={(e) => setEmpresa(e.target.value)}
              value={empresa}
            />
          </div>
          <div className="contact__form-div mb-3 col-span-1 md:col-span-2">
            <label className="contact__form-tag  bg-gray-50">Email*</label>
            <input
              type="email"
              name="user_email"
              className="contact__form-input"
              onChange={handleEmailChange}
              value={email}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 my-2">
          <div className="w-full px-3 py-2 flex flex-col gap-2 mt-2 leading-tight border rounded shadow  ">
            <div className="w-full px-3 py-2 mt-2 leading-tight border rounded shadow h-[100%]">
              <label className="my-3">
                ¿Aproximadamente cuántos analizadores de química sanguínea que
                funcionan con agua, tiene instalados su organización a nivel
                nacional?
              </label>
              <select
                name="user_quantity"
                className="w-full px-2 py-2 my-3 focus:bg-gray-100 leading-tight text-sm text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                onChange={(e) => setCantidadDeAnalizadores(e.target.value)}
                value={cantidadDeAnalizadores}
              >
                <option value="">Seleccione una opción...</option>
                <option value="Menos de 10">Menos de 10</option>
                <option value="11-30">11-30</option>
                <option value="31-50">31-50</option>
                <option value="51-100">51-100</option>
                <option value="Más de 100">Más de 100</option>
              </select>
            </div>

            <div className="w-full px-3 py-2 mt-2 leading-tight border rounded shadow h-[100%]">
              <label className="">
                ¿Es consciente de que la calidad del agua puede estar afectando
                el desempeño de los analizadores de química sanguínea?
              </label>
              <div className="flex flex-col gap-2 mt-2">
                <div>
                  <input
                    type="radio"
                    name="consciente"
                    value="Sí"
                    checked={consciente === 'Sí'}
                    onChange={() => setConsciente('Sí')}
                  />{' '}
                  Sí
                </div>
                <div>
                  <input
                    type="radio"
                    name="consciente"
                    value="No"
                    checked={consciente === 'No'}
                    onChange={() => setConsciente('No')}
                  />{' '}
                  No
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-3 py-2 flex flex-col gap-2 mt-2 leading-tight border rounded shadow">
            <div className="w-full px-3 py-2 my-2 leading-tight border rounded shadow h-[100%]">
              <label className="">
                ¿Hay ciudades donde la estabilidad de los analizadores de
                química sanguínea se complica por la calidad del agua?
              </label>
              <div className="flex flex-col gap-2 my-2">
                <div>
                  <input
                    type="radio"
                    name="hayCiudades"
                    value="Sí"
                    checked={hayCiudades === 'Sí'}
                    onChange={() => setHayCiudades('Sí')}
                  />{' '}
                  Sí
                </div>
                <div>
                  <input
                    type="radio"
                    name="hayCiudades"
                    value="No"
                    checked={hayCiudades === 'No '}
                    onChange={() => setHayCiudades('No')}
                  />{' '}
                  No
                </div>
              </div>

              <div className="contact__form-div mb-3 flex flex-col md:flex-row">
                <label className="">¿Alguna ciudad en específico?</label>
                <input
                  type="text"
                  name="special_city"
                  className="w-full px-2 py-2 my-3 focus:bg-gray-100 leading-tight text-sm text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  value={ciudadEspecial}
                  onChange={(e) => setCiudadEspecial(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="w-full px-3 py-2 mt-2 leading-tight border rounded shadow h-[100%]">
              <label className="">
                ¿Le gustaría obtener una oferta ajustada específicamente a sus
                necesidades?
              </label>
              <div className="flex flex-col gap-2 mt-2">
                <div>
                  <input
                    type="radio"
                    name="deseaRecibirOferta"
                    value="Sí"
                    checked={deseaRecibirOferta === 'Sí'}
                    onChange={() => setDeseaRecibirOferta('Sí')}
                  />{' '}
                  Sí
                </div>
                <div>
                  <input
                    type="radio"
                    name="deseaRecibirOferta"
                    value="No"
                    checked={deseaRecibirOferta === 'No'}
                    onChange={() => setDeseaRecibirOferta('No')}
                  />{' '}
                  No
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-3 py-2 flex flex-col gap-2 mt-2 leading-tight border rounded shadow">
            <div className="w-full px-3 py-2 my-2 leading-tight border rounded shadow h-[100%] ">
              <label className="">
                ¿Cuáles son las condiciones que usted desearía para una alianza
                comercial?
              </label>
              <textarea
                name="condicionesDeseadas"
                className="w-full px-2 py-2 my-3 focus:bg-gray-100 leading-tight text-sm text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                value={condicionesDeseadas}
                onChange={(e) => setCondicionesDeseadas(e.target.value)}
              />
            </div>
            <div className="w-full px-3 py-2 my-2 leading-tight border rounded shadow h-[100%] ">
              <label className="">
                ¿Desea que le contactemos telefónicamente o personalmente para
                analizar los temas de una posible alianza comercial entre
                nuestras empresas?
              </label>
              <div className="flex flex-col gap-2 mt-2">
                <div>
                  <input
                    type="radio"
                    name="contactoTelefonico"
                    value="Sí"
                    checked={contactoTelefonico === 'Sí'}
                    onChange={() => setContactoTelefonico('Sí')}
                  />{' '}
                  Sí
                </div>
                <div>
                  <input
                    type="radio"
                    name="contactoTelefonico"
                    value="No"
                    checked={contactoTelefonico === 'No'}
                    onChange={() => setContactoTelefonico('No')}
                  />{' '}
                  No
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="button button--flex btn-contact mt-3" type="submit">
          <span className="text-white">Enviar</span>
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
