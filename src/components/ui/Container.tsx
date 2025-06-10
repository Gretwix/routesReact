import React, { useState } from "react";
import Header from "./Header";
import ProductSlider from "./ProductSlider";
import OrderForm from "./OrderForm";

interface HeaderProps {
  collection: string;
  title: string;
  subtitle: string;
  description: string;
  button?: React.ReactNode;
}

interface StaticProductProps {
  id: number;
  //image: string;
  images: string[];
  description: string;
  link: string;
}

interface ContainerProps {
  header?: HeaderProps;
  product?: StaticProductProps;
  showOrderForm?: boolean;
}

export default function Container(props: ContainerProps) {
  //no es necesario pero es solo para evitar errores y validar
  {/* const headerProps = props.headerProps ?? {
    collection: "",
    title: "",
    subtitle: "",
    description: "",
  };

  const productProps = props.productProps ?? {
    id: 0,
    image: "",
    description: "",
    link: "",
  }; */}

  if (!props.header) return null;
  if (!props.product) return null;

    const [selectedImage, setSelectedImage] = useState(props.product.images[0]);

  const handleImageChange = (image: string) => {
    setSelectedImage(image);
  };

  const handleOrderSubmit = (formData: any) => {
    console.log("Order submitted:", formData);
    //send the order to backend
  };

  return (
    <section className="text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <Header {...props.header} />
        <ProductSlider
        images={props.product.images}
          onImageChange={handleImageChange}
        />
        {/* Antes del slider <StaticProduct {...props.productProps} /> */}
        
        {/* Estos dos son los que se usan con el validador <Header {...headerProps} />
        <StaticProduct {...productProps} />
        {/* Antes de agregar el validador <Header {...props.header} /> */}
        {/* Antes de agregar el validador <StaticProduct {...props.product} /> */}
      </div>
      {props.showOrderForm && (
        <div className="container mx-auto px-6 py-12 flex justify-center">
          <OrderForm
            productImage={selectedImage}
            onSubmit={handleOrderSubmit}
          />
        </div>
      )}
    </section>
  );
}
