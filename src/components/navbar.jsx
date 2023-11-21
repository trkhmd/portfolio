import React from "react";
import { Link } from "react-scroll";
import logo from "../assets/TH.png";


const Navbar = () => {
  return (
    <header className="flex items-center overflow-y-hidden text-slate-300 justify-between  p-6 bg-background">
      <div className="flex items-center ml-6 mt-6 fadeInAndSlideNavbar">
        <a href="#" className="pl-24">
          <img src={logo} alt="logo" className="w-16 h-16" />
        </a>
        </div>
        <nav className="flex ml-auto fadeInAndSlideNavbar mr-16">
          <ul className="flex justify-between">
            <li className="mr-6">
              <Link to="about" smooth={true} duration={1000}
                className="p-2 link link-underline link-underline-black"
              >
                A propos
              </Link>
            </li>
            <li className="mr-6">
              <Link to="experience" smooth={true} duration={1000}
                className="p-2 link link-underline link-underline-black"
              >
                Experience
              </Link>
            </li>
            <li className="mr-6">
              <Link to="projects" smooth={true} duration={1000}
                className="p-2  link link-underline link-underline-black"
              >
                Projets
              </Link>
            </li>
            <li className="mr-6">
                <Link to="contact" smooth={true} duration={1000} 
                className="p-2 link link-underline link-underline-black"
                >
                Contact
                </Link>
            </li>
          </ul>
        </nav>
      
    </header>
  );
};

export default Navbar;
