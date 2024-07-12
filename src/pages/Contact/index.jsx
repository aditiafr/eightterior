import React from "react";
import { BiSolidPhone } from "react-icons/bi";
import { BiEnvelope } from "react-icons/bi";
import { BiMobileAlt } from "react-icons/bi";

const Contact = () => {
  return (
    <>
      <section
        className="h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/images/contact/bg-img-1.png')",
        }}
      >
        <div className="max-w-screen-xl h-screen mx-auto flex items-center">
          <div className="flex flex-col text-left gap-4">
            <h1 className="text-8xl text-primary-500 font-bold">Reach Us</h1>
            <h1 className="text-8xl text-second-500 font-bold">at Anytime!</h1>
          </div>
        </div>
      </section>

      <section className="w-full bg-white flex justify-center items-center my-28">
        <div className="grid grid-cols-3 gap-20">
          <div className="flex flex-col gap-1 text-primary-500 items-center">
            <BiSolidPhone className="text-8xl" />
            <h1 className="text-2xl font-bold">Phone</h1>
            <p className="text-lg">+62 21 50127829</p>
          </div>
          <div className="flex flex-col gap-1 text-primary-500 items-center">
            <BiEnvelope className="text-8xl" />
            <h1 className="text-2xl font-bold">Email</h1>
            <p className="text-lg">contact@eightterior.co.id</p>
          </div>
          <div className="flex flex-col gap-1 text-primary-500 items-center">
            <BiMobileAlt className="text-8xl" />
            <h1 className="text-2xl font-bold">Mobile</h1>
            <p className="text-lg">+62 813-1653-5359</p>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center items-center">
        <div className="relative max-w-screen-xl">
          <img src="/assets/images/contact/img-1.png" alt="img-1.png" />
          <div className="absolute bg-primary-500 inset-0 bg-opacity-50 rounded-2xl"></div>
          <div className="absolute flex flex-col gap-4 bottom-14 left-14 text-white">
            <h2 className="text-4xl">Follow us on Instagram!</h2>
            <h2 className="text-4xl font-bold">@eightterior_jkt</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
