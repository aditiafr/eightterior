import React from "react";

const Footer = () => {
  return (
    <footer className="max-w-screen-lg flex items-center justify-between mx-6 lg:mx-auto my-12 lg:my-28 ">
      <div className="flex justify-center items-center w-full gap-8 lg:gap-20">
        <div className="flex flex-col items-center gap-2 lg:gap-4">
          <img
            src="/assets/images/logo.png"
            alt="logo"
            className=" w-16 lg:w-28"
          />
          <h1 className="text-primary-500 font-extrabold text-md lg:text-2xl">
            Eight<span className="text-second-500">terior</span>
          </h1>
        </div>
        <div className="flex flex-col w-full gap-2 lg:gap-4">
          <p className="text-[9px] lg:text-lg">PT. Delapan Mitra Interior</p>
          <p className="text-[9px] lg:text-lg">
            Cibis Nine Building Lantai 11 Jl. TB Simatupang No 2 Cliandak, Pasar
            Minggu Jakarta Selatan 12560
          </p>
          <div className="grid grid-cols-2 gap-4 lg:gap-8 mt-2 items-center">
            <div className="flex gap-2 items-center">
              <img
                src="/assets/images/icon/email.png"
                alt="email"
                className="w-3 lg:w-6 h-3 lg:h-6"
              />
              <p className="text-[8px] lg:text-lg">contact@eightterior.co.id</p>
            </div>
            <div className="flex gap-2 items-center">
              <img
                src="/assets/images/icon/instagram.png"
                alt="instagram"
                className="w-3 lg:w-6 h-3 lg:h-6"
              />
              <p className="text-[8px] lg:text-lg">eightterior_jkt</p>
            </div>
            <div className="flex gap-2 items-center">
              <img
                src="/assets/images/icon/call.png"
                alt="call"
                className="w-3 lg:w-6 h-3 lg:h-6"
              />

              <p className="text-[8px] lg:text-lg">+62 21 50127829</p>
            </div>
            <div className="flex gap-2 items-center">
            <img
                src="/assets/images/icon/phone.png"
                alt="phone"
                className="w-3 lg:w-6 h-3 lg:h-6"
              />
              <p className="text-[8px] lg:text-lg">+62 813-1653-5359</p>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex lg:flex-col lg:w-1/2 lg:gap-8">
          <p>Home</p>
          <p>Projects</p>
          <p>About</p>
          <p>Contact Us</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
