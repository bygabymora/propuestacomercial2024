import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    formulario: { type: String, required: true },
    nombre: { type: String, required: true },
    telefono: { type: String, required: true },
    ciudad: { type: String, required: true },
    empresa: { type: String, required: true },
    email: { type: String, required: true },
    cantidadDeAnalizadores: { type: String, required: true },
    consciente: { type: String, required: true },
    hayCiudades: { type: String, required: true },
    ciudadEspecial: { type: String, required: true },
    deseaRecibirOferta: { type: String, required: true },
    condicionesDeseadas: { type: String, required: false },
    contactoTelefonico: { type: String, required: true },
  },

  {
    timestamps: true,
  }
);

const Contact =
  mongoose.models.Contact || mongoose.model('Contact', contactSchema);
export default Contact;
