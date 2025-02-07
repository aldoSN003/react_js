import { useState } from "react";
import Logo from "./assets/Escucha-tec.svg";
import "./index.css";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full h-full">
      <header className="relative flex justify-between items-center text-black py-4 px-8 md:px-32 bg-white drop-shadow-md">
        <a href="">
          <img
            src={Logo}
            alt="Logo"
            className="w-40 hover:scale-105 transition-all"
          />
        </a>

{/* Desktop Menu */}
<ul className="hidden lg:flex items-center gap-12 font-medium text-base">
  <li className="modern-hover hidden md:block">Home</li>
  <li className="modern-hover hidden md:block">About</li>
  
  {/* Inicia Sesión and Regístrate for large devices */}
  <button
    type="button"
    className="hidden lg:block text-gray-900 bg-white border border-[var(--primary-color)] transition-colors duration-500 ease-in-out focus:outline-none font-medium rounded-full text-base px-7 py-2 hover:cursor-pointer hover:text-[var(--primary-color)] hover:scale-105 hover:shadow-md"
  >
    Inicia Sesión
  </button>

  <button
    type="button"
    className="hidden lg:block text-white bg-[var(--primary-color)] transition-colors duration-500 ease-in-out focus:outline-none font-medium rounded-full text-base px-7 py-2 hover:bg-white hover:text-[var(--primary-color)] hover:scale-105 hover:shadow-md hover:cursor-pointer"
  >
    Regístrate
  </button>
</ul>



        {/* Mobile Menu Icon - Hidden on XL Screens */}
        <div className="xl:hidden">
          <i
            className={`bx ${
              isMenuOpen ? "bx-x" : "bx-menu"
            } block text-5xl cursor-pointer`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          ></i>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`absolute left-0 top-full w-full bg-white flex flex-col items-center gap-6 font-semibold text-lg transition-all ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto translate-y-0"
              : "opacity-0 pointer-events-none -translate-y-3"
          }`}
          style={{ transition: "opacity 0.3s ease, transform 0.3s ease" }}
        >
          <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
            Home
          </li>
          <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
            About
          </li>
          <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
            Inicia Sesión
          </li>
          <li className="list-none w-full text-center p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer">
            Regístrate
          </li>
        </div>
      </header>
    </div>
  );
}

export default NavBar;
