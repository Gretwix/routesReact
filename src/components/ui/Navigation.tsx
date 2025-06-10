import {Link} from "@tanstack/react-router"

export default function Navigation(){
    return (
        <nav className="w-full bg-zinc-800/50 backdrop-blur-sm fixed top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link 
            to="/"
            className="text-bright-sun-500 font-anton text-2xl hover:text-bright-sun-400 transition-colors"
          >
            TENNIS STORE
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-8 font-montserrat">
            <Link
              to="/"
              className="text-white hover:text-bright-sun-500 transition-colors"
              activeProps={{ className: "text-bright-sun-500" }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-bright-sun-500 transition-colors"
              activeProps={{ className: "text-bright-sun-500" }}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
    )
}
//<Link
//            to="/"
//            className="text-lime-300"
//            >TENNIS SHOES</Link>
// ejemplo