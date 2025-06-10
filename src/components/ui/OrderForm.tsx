// Importamos React y el hook useState para manejar el estado del formulario
import React, { useState } from "react";
// Importamos un botón reutilizable que se usará al final del formulario
import Button from "./Button";

// Definimos qué propiedades (props) espera recibir el componente
interface OrderFormProps {
  productImage: string; // URL de la imagen del producto a mostrar
  onSubmit: (formData: OrderFormData) => void; // Función que se ejecutará al enviar el formulario
}

// Definimos la estructura de los datos del formulario
interface OrderFormData {
  size: string;
  quantity: number;
  name: string;
  email: string;
  address: string;
}

// Componente principal que se exporta por defecto
export default function OrderForm({ productImage, onSubmit }: OrderFormProps) {
  // Creamos un estado para guardar los datos del formulario
  const [formData, setFormData] = useState<OrderFormData>({
    size: "",
    quantity: 1,
    name: "",
    email: "",
    address: "",
  });

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Evita que se recargue la página
    onSubmit(formData); // Llama a la función que nos pasaron por props con los datos del formulario
  };

  // Función que actualiza el estado cada vez que el usuario escribe o selecciona algo
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target; // Extrae el nombre y valor del campo
    // Actualiza el estado del formulario
    setFormData((prev) => ({
      ...prev,
      [name]: name === "quantity" ? parseInt(value) || 1 : value,
    }));
  };

  // Lo que se muestra en pantalla
  return (
    <div className="w-full md:w-1/2 bg-zinc-800/50 p-8 rounded-2xl backdrop-blur-sm">
      
      {/* Encabezado con imagen del producto y título */}
      <div className="flex items-center gap-6 mb-8">
        <div className="w-40 h-40 rounded-xl overflow-hidden bg-zinc-700 flex-shrink-0 p-2">
          <img
            src={productImage}
            alt="Selected Tennis Shoes"
            className="w-full h-full object-contain"
          />
        </div>
        <h2 className="text-4xl font-anton text-bright-sun-500">ORDER NOW</h2>
      </div>

      {/* Formulario con campos de entrada */}
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Primera fila: talla y cantidad */}
        <div className="grid grid-cols-2 gap-4">
          
          {/* Selección de talla */}
          <div>
            <label className="block text-white font-montserrat mb-2">Size</label>
            <select
              name="size"
              value={formData.size}
              onChange={handleInputChange}
              className="w-full bg-zinc-700 text-white font-montserrat p-3 rounded-lg focus:ring-2 focus:ring-bright-sun-500 focus:outline-none"
              required
            >
              <option value="">Select Size</option>
              <option value="7">US 7</option>
              <option value="8">US 8</option>
              <option value="9">US 9</option>
              <option value="10">US 10</option>
              <option value="11">US 11</option>
            </select>
          </div>

          {/* Campo de cantidad */}
          <div>
            <label className="block text-white font-montserrat mb-2">Quantity</label>
            <input
              type="number"
              name="quantity"
              min="1"
              value={formData.quantity}
              onChange={handleInputChange}
              className="w-full bg-zinc-700 text-white font-montserrat p-3 rounded-lg focus:ring-2 focus:ring-bright-sun-500 focus:outline-none"
              required
            />
          </div>
        </div>

        {/* Campo para nombre completo */}
        <div>
          <label className="block text-white font-montserrat mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full bg-zinc-700 text-white font-montserrat p-3 rounded-lg focus:ring-2 focus:ring-bright-sun-500 focus:outline-none"
            required
          />
        </div>

        {/* Campo para correo electrónico */}
        <div>
          <label className="block text-white font-montserrat mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full bg-zinc-700 text-white font-montserrat p-3 rounded-lg focus:ring-2 focus:ring-bright-sun-500 focus:outline-none"
            required
          />
        </div>

        {/* Campo para dirección de envío */}
        <div>
          <label className="block text-white font-montserrat mb-2">Shipping Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full bg-zinc-700 text-white font-montserrat p-3 rounded-lg focus:ring-2 focus:ring-bright-sun-500 focus:outline-none h-24"
            required
          />
        </div>

        {/* Botón para enviar el formulario */}
        <Button
          text="PLACE ORDER"
          style="w-full bg-bright-sun-500 text-black font-bold font-montserrat py-4 px-6 rounded-lg hover:bg-red-500 hover:text-white transition duration-800 cursor-pointer"
        />
      </form>
    </div>
  );
}