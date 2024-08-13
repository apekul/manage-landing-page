import React from "react";
import logoImg from "../assets/images/logo.svg";

const navItems = ["Pricing", "Product", "About Us", "Careers", "Community"];
function Navbar() {
  return (
    <nav className="z-20">
      <ul className="container w-full py-10 mx-auto flex items-center justify-between">
        <li>
          <img src={logoImg} alt="logo" className="logo" />
        </li>
        <li className="flex gap-10">
          {navItems.map((item, index) => (
            <a
              href="/"
              key={index}
              className="text-very-dark-blue hover:text-dark-grayish-blue font-[700] transition-all duration-150"
            >
              {item}
            </a>
          ))}
        </li>
        <li>
          <button className="bg-bright-red px-8 py-3 rounded-full text-white shadow-bright-red shadow-md cursor-pointer hover:brightness-125 duration-150">
            Get Started
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
