import { createFileRoute } from '@tanstack/react-router'
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";

import productImage from "../assets/tennis-item.png";
import productImage2 from "../assets/tennis02.png";
import productImage3 from "../assets/tennis03.png";
import productImage4 from "../assets/tennis04.png";
import productImage5 from "../assets/tennis05.png";




const btn = (
  <Button
    text="ORDER NOW"
    style="bg-bright-sun-500 text-black font-bold font-montserrat py-3 px-6 rounded-full hover:bg-red-500 hover:text-white transition duration-800 cursor-pointer"
  />
);

const headerProps = {
  collection: "New Collection",
  title: "FASHION",
  subtitle: "SALE",
  description:
    "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  button: btn,
};

const productProps = {
  id: 1,
  images: [
    productImage,
    productImage2,
    productImage3,
    productImage4,
    productImage5
  ],
  //image: productImage,
  description:
    "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
  link: "#",
};


export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Container header={headerProps} product={productProps} showOrderForm={false} />
  )
}
