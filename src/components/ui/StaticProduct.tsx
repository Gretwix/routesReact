interface StaticProductProps {
  id: number;
  image: string;
  description: string;
  link: string;
}

export default function StaticProduct(props: StaticProductProps) {
  return (
    <figure className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
      <img
        key={props.id}
        src={props.image}
        alt={props.description}
        className="w-full max-w-md object-contain"
      />
    </figure>
  );
}
