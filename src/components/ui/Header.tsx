//clase para definir el header y todos sus elementos

interface HeaderProps {
  collection: string;
  title: string;
  subtitle: string;
  description: string;
  button?: React.ReactNode;
}

export default function Header(props: HeaderProps) {
  return (
    <div className="w-full md:w-1/2 text-center space-y-6">
      <header className="-rotate-10 table mx-auto">
        <h2 className="text-5xl font-spartwell text-left -mb-4 ml-1.5 relative z-10 text-white">
          {props.collection}
        </h2>
        <div className="text-5xl md:text-6xl">
          <p className="text-bright-sun-500 font-anton text-8xl">
            {props.title}
          </p>
          <p className="text-white font-anton text-9xl text-right">
            {props.subtitle}
          </p>
        </div>
      </header>

      <p className="text-white md:text-lg md:px-22 leading-5 font-montserrat">
        {props.description}
      </p>

      {props.button ? props.button : ""}
    </div>
  );
}
