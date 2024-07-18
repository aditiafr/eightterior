import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Loading from "../../../components/Loading";

const Hotel = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulasi waktu loading, ganti dengan logika loading resource sebenarnya

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <section className="max-w-screen-lg flex flex-col justify-center items-center mx-auto bg-white mt-24 md:mt-32 mb-10 gap-10">
        <div className="flex flex-col justify-center items-center gap-2 md:gap-4">
          <h1 className="text-4xl md:text-7xl text-primary-500 font-bold">
            Hotel GAIA
          </h1>
          <p className="text-xl md:text-4xl">Industrial Hotel</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-6 md:gap-8 w-full">
          <img
            src="/assets/images/projects/hotel/img-1.jpg"
            alt="img-1"
            className="w-full md:rounded-xl h-[300px] md:h-[600px] object-cover "
          />
          <div className="w-full flex flex-col md:flex-row justify-between gap-6 md:gap-8">
            <p className="md:w-full text-sm md:text-2xl md:leading-relaxed leading-relaxed px-4 md:px-0 text-justify font-light">
              Industrial hotel style with an edgy sophistication. We bring ideas
              where raw beauty meets comfort. Experience the perfect blend of
              industrial charm and modern luxury in your stylish and
              functionalized space.
            </p>

            <div className="w-full grid grid-cols-2 px-4 md:px-4 text-sm md:text-md gap-8">
              <div className="flex items-center gap-4 w-full">
                <img
                  src="/assets/images/projects/icons/location.png"
                  alt="location"
                  className="w-6 h-auto"
                />
                <p>Jl. Dr. Setiabudi No.430, Bandung, Jawa Barat 40143</p>
              </div>
              <div className="flex items-center gap-4 w-full">
                <img
                  src="/assets/images/projects/icons/category.png"
                  alt="category"
                  className="w-6 h-auto"
                />
                <p>Hospitality</p>
              </div>
              <div className="flex items-center gap-4 w-full">
                <img
                  src="/assets/images/projects/icons/year.png"
                  alt="year"
                  className="w-6 h-auto"
                />
                <p>2023 - 2025</p>
              </div>
              <div className="flex items-center gap-4 w-full">
                <img
                  src="/assets/images/projects/icons/area.png"
                  alt="area"
                  className="w-6 h-auto"
                />
                <p>Full building</p>
              </div>
            </div>

            <div className="flex flex-col justify-around px-4 md:px-0 gap-6">
              <div className="flex text-[12px] md:text-lg justify-between w-full gap-3 md:gap-0">

              </div>
              <div className="flex text-[12px] md:text-lg justify-between w-full gap-3 md:gap-0">

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 md:px-0">
        <div className="max-w-screen-lg mx-auto flex flex-col gap-16 mb-20">
          <img
            src="/assets/images/projects/hotel/img-2.jpg"
            alt="img-2"
            className="w-full md:rounded-xl h-[300px] md:h-[600px] object-cover rounded-xl"
          />
          <img
            src="/assets/images/projects/hotel/img-5.jpg"
            alt="img-5"
            className="w-full md:rounded-xl h-[300px] md:h-[600px] object-cover rounded-xl"
          />
        </div>
      </section>

      <section
        className="relative md:min-h-screen h-full bg-cover bg-center flex flex-col justify-center items-center gap-4 py-12 px-4"
        style={{ backgroundImage: "url('/assets/images/home/bg-img-2.png')" }}
      >
        <div className="absolute inset-0 bg-blue-800 opacity-80 z-0"></div>
        <div className="relative z-10 flex flex-col items-center gap-4 md:gap-16 text-white">
          <h2 className="text-2xl md:text-[64px] font-bold">Interested?</h2>
          <p className="text-center text-[9px] md:text-2xl px-6 md:w-[950px] font-light">
            Reach us if you have any questions regarding anything related to our
            services, we will help you to find the solutions for your needs!
          </p>
          <Link to={`/contact-us`}>
            <button className="bg-white text-primary-500 w-28 md:w-52 h-8 md:h-14 rounded-lg text-[10px] md:text-sm hover:font-bold">
              CONTACT US
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Hotel;
