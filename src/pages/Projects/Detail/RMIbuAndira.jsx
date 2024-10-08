import React from "react";
import { Link } from "react-router-dom";

const RMIbuAndira = () => {

  return (
    <>
      <section className="max-w-screen-lg flex flex-col justify-center items-center mx-auto bg-white mt-24 md:mt-32 mb-10 gap-10">
        <div className="flex flex-col justify-center items-center gap-2 md:gap-4">
          <h1 className="text-3xl md:text-7xl text-primary-500 font-bold">
            Rumah Ibu Andira
          </h1>
          <p className="text-xl md:text-4xl">Modern Kitchen</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-6 md:gap-8 w-full">
          <img
            src="/assets/images/projects/rmibuandira/img-1.png"
            alt="img-1"
            className="w-full md:rounded-xl h-[300px] md:h-[600px] object-cover "
          />
          <div className="w-full flex flex-col md:flex-row justify-between gap-6 md:gap-8 font-light">
            <p className="md:w-full text-sm md:text-2xl md:leading-relaxed leading-relaxed px-4 md:px-0 text-justify">
              Modern kitchen with a minimalism design. We bring ideas where
              passion meets joy. Cook is a passion while you can enjoy your
              passion in your beautiful and functionalized kitchen.
            </p>

            <div className="w-full grid grid-cols-2 px-4 md:px-4 text-[12px] md:text-md gap-8">
              <div className="flex items-center gap-4 w-full">
                <img
                  src="/assets/images/projects/icons/location.png"
                  alt="location"
                  className="w-6 h-auto"
                />
                <p>Andara, Jakarta Selatan</p>
              </div>
              <div className="flex items-center gap-4 w-full">
                <img
                  src="/assets/images/projects/icons/category.png"
                  alt="category"
                  className="w-6 h-auto"
                />
                <p>House/ Residence</p>
              </div>
              <div className="flex items-center gap-4 w-full">
                <img
                  src="/assets/images/projects/icons/year.png"
                  alt="year"
                  className="w-6 h-auto"
                />
                <p>2023</p>
              </div>
              <div className="flex items-center gap-4 w-full">
                <img
                  src="/assets/images/projects/icons/area.png"
                  alt="area"
                  className="w-6 h-auto"
                />
                <p>250 sqm</p>
              </div>
            </div>

          </div>
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

export default RMIbuAndira;
