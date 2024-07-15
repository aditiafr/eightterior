import React, { useEffect, useState } from "react";
import { BiSolidPhone } from "react-icons/bi";
import { BiEnvelope } from "react-icons/bi";
import { BiMobileAlt } from "react-icons/bi";
import Loading from "../../components/Loading";

const Contact = () => {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000) // Simulasi waktu loading, ganti dengan logika loading resource sebenarnya

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <section
        className="h-80 md:h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/about/bg-img-1.png')" }}
      >
        <div className="max-w-screen-xl h-full md:mx-auto flex items-center max-md:px-4">
          <div className="flex flex-col text-left md:gap-4">
            <h1 className="text-4xl md:text-8xl text-primary-500 font-bold">Reach Us</h1>
            <h1 className="text-4xl md:text-8xl text-second-500 font-bold">at Anytime!</h1>
          </div>
        </div>
      </section>

      <section className="w-full bg-white flex justify-center items-center my-14 md:my-28 max-md:px-4">
        <div className="grid grid-cols-3 gap-8 md:gap-20">
          <a href="tel:+62 21 50127829">
            <div className="flex flex-col gap-1 text-primary-500 items-center transition duration-300 hover:scale-110">
              <BiSolidPhone className="text-5xl md:text-8xl" />
              <h1 className="md:text-2xl font-bold">Phone</h1>
              <p className="text-[10px] md:text-lg">+62 21 50127829</p>
            </div>
          </a>
          <a href="mailto: contact@eightterior.co.id">
            <div className="flex flex-col gap-1 text-primary-500 items-center transition duration-300 hover:scale-110">
              <BiEnvelope className="text-5xl md:text-8xl" />
              <h1 className="md:text-2xl font-bold">Email</h1>
              <p className="text-[10px] md:text-lg">contact@eightterior.co.id</p>
            </div>
          </a>
          <a href="https://wa.me/081316535359">
            <div className="flex flex-col gap-1 text-primary-500 items-center transition duration-300 hover:scale-110">
              <BiMobileAlt className="text-5xl md:text-8xl" />
              <h1 className="md:text-2xl font-bold">Mobile</h1>
              <p className="text-[10px] md:text-lg">+62 813-1653-5359</p>
            </div>
          </a>
        </div>
      </section >

      <section className="w-full flex justify-center items-center max-md:px-4">
        <div className="relative max-w-screen-xl">
          <img src="/assets/images/contact/img-1.png" alt="img-1.png" />
          <div className="absolute bg-primary-500 inset-0 bg-opacity-50 rounded-md md:rounded-2xl"></div>
          <div className="absolute flex flex-col md:gap-4 bottom-4 md:bottom-14 left-4 md:left-14 text-white">
            <h2 className="text-sm md:text-4xl">Follow us on Instagram!</h2>
            <a href="https://www.instagram.com/eightterior_jkt/?hl=id">
              <h2 className="text-sm md:text-4xl font-bold transition duration-300 hover:scale-110">@eightterior_jkt</h2>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
