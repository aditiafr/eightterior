import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center my-12 md:my-28 ">
      <div className="max-w-screen-2xl flex justify-center items-center gap-10 md:gap-28">
        <Link to={`/`}>
          <div className="flex flex-col items-center gap-2 md:gap-4 transition duration-300 hover:scale-110">
            <img
              src="/assets/images/logo.png"
              alt="logo"
              className=" w-16 md:w-36"
            />
            <h1 className="text-primary-500 font-extrabold text-md md:text-4xl">
              Eight<span className="text-second-500">terior</span>
            </h1>
          </div>
        </Link>
        <div className="flex flex-col gap-2 md:gap-4 w-1/2">
          <p className="text-[9px] md:text-xl">PT. Delapan Mitra Interior</p>
          <p className="text-[9px] md:text-xl md:w-[520px]">
            Cibis Nine Building Lantai 11 Jl. TB Simatupang No 2 Cliandak, Pasar
            Minggu Jakarta Selatan 12560
          </p>
          <div className="grid grid-cols-2 gap-y-2 gap-x-6 md:gap-8 mt-2 items-center">
            <a href="mailto: contact@eightterior.co.id">
              <div className="flex gap-1 md:gap-2 items-center transition duration-300 hover:text-primary-500 hover:scale-110">
                <img
                  src="/assets/images/icon/email.png"
                  alt="email"
                  className="w-3 md:w-6 h-3 md:h-6"
                />
                <p className="text-[7px] md:text-xl">contact@eightterior.co.id</p>
              </div>
            </a>
            <a href="https://www.instagram.com/eightterior_jkt/?hl=id">
              <div className="flex gap-1 md:gap-2 items-center transition duration-300 hover:text-primary-500 hover:scale-110">
                <img
                  src="/assets/images/icon/instagram.png"
                  alt="instagram"
                  className="w-3 md:w-6 h-3 md:h-6"
                />
                <p className="text-[7px] md:text-xl">eightterior_jkt</p>
              </div>
            </a>
            <a href="tel:+62 21 50127829">
              <div className="flex gap-1 md:gap-2 items-center transition duration-300 hover:text-primary-500 hover:scale-110">
                <img
                  src="/assets/images/icon/call.png"
                  alt="call"
                  className="w-3 md:w-6 h-3 md:h-6"
                />

                <p className="text-[7px] md:text-xl">+62 21 50127829</p>
              </div>
            </a>
            <a href="https://wa.me/081316535359">
              <div className="flex gap-1 md:gap-2 items-center transition duration-300 hover:text-primary-500 hover:scale-110">
                <img
                  src="/assets/images/icon/phone.png"
                  alt="phone"
                  className="w-3 md:w-6 h-3 md:h-6"
                />
                <p className="text-[7px] md:text-xl">+62 813-1653-5359</p>
              </div>
            </a>
          </div>
        </div>
        <div className="hidden md:flex md:flex-col md:gap-8 text-xl">
          <Link to={`/`}>
            <p className="transition duration-300 hover:text-primary-500 hover:scale-110">Home</p>
          </Link>
          <Link to={`/projects`}>
            <p className="transition duration-300 hover:text-primary-500 hover:scale-110">Projects</p>
          </Link>
          <Link to={`/about`}>
            <p className="transition duration-300 hover:text-primary-500 hover:scale-110">About</p>
          </Link>
          <Link to={`/contact-us`}>
            <p className="transition duration-300 hover:text-primary-500 hover:scale-110">Contact Us</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
