import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {

  return (
    <>
      <section className="w-full mt-24 mb-12 md:mt-28 px-4 md:px-0">
        <h1 className="text-[44px] md:text-[150px] text-primary-500 font-bold w-full text-center">
          SATISF<span className="text-second-500">ACTION</span>
        </h1>
        <div className="max-w-screen-xl flex flex-col justify-center items-center mx-auto gap-8 mt-4 md:mt-0">
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 md:gap-20">
            <p className="w-full text-sm md:text-3xl leading-relaxed md:leading-relaxed text-justify font-light">
              Customer satisfaction is our main objective. We prioritize
              functional design yet still keep an eye on its aesthetic aspects.
              Find your needs from our recent projects.
            </p>
            <div className="flex text-center justify-between w-full md:justify-end md:gap-20 md:w-[1000px]">
              <div className="flex flex-col gap-4">
                <h2 className="text-4xl md:text-6xl text-primary-500 font-bold">
                  50+
                </h2>
                <p className="text-xl md:text-2xl">Happy Client</p>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-4xl md:text-6xl text-second-500 font-bold">
                  50+
                </h2>
                <p className="text-xl md:text-2xl">Project Finished</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full my-12 md:my-20 px-4 md:px-0">
        <div className="max-w-screen-xl bg-[#F2F2F2] flex flex-col justify-center items-center mx-auto gap-4 md:gap-8 p-6 md:p-12 rounded-xl mb-6 md:mb-10">
          <img
            src="/assets/images/projects/rmibuandira/img-1.png"
            alt="img-1"
            className="rounded-xl w-full md:h-[580px] h-56 object-cover"
          />
          <div className="flex gap-4 mt-2 md:mt-6 w-full justify-between">
            <div className="md:flex gap-4 justify-center hidden w-full">
              {/* <img
                src="/assets/images/projects/rmibuandira/img-2.png"
                alt="img-1"
                className="rounded-xl w-80 h-auto"
              /> */}
              <div
                className="bg-cover bg-center w-full h-auto rounded-lg"
                style={{
                  backgroundImage:
                    "url('/assets/images/projects/rmibuandira/img-2.png')",
                }}
              />
              <div className="flex flex-col gap-2 w-full h-full">
                <div
                  className="bg-cover bg-center w-full h-full rounded-lg"
                  style={{
                    backgroundImage:
                      "url('/assets/images/projects/rmibuandira/img-3.png')",
                  }}
                />
                <div
                  className="bg-cover bg-center w-full h-full rounded-lg"
                  style={{
                    backgroundImage:
                      "url('/assets/images/projects/rmibuandira/img-4.png')",
                  }}
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-4 md:gap-6 md:pl-4">
              <h1 className="text-2xl md:text-4xl font-bold text-primary-500">
                Rumah Ibu Andira
              </h1>

              <div className="flex text-[12px] md:text-xl font-light gap-4">
                <div className="flex flex-col gap-2">
                  <p>Location</p>
                  <p>Category</p>
                  <p>Area</p>
                  <p>Year</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p>: Andara, Jakarta Selatan</p>
                  <p>: House/Residence</p>
                  <p>: 250 sqm</p>
                  <p>: 2023</p>
                </div>
              </div>
              <Link to="/projects/rmibuandira">
                <button className="border-2 md:border-4 border-primary-500 text-primary-500 rounded-lg md:rounded-xl w-36 md:w-64 h-12 md:h-16 hover:bg-primary-500 hover:font-bold hover:text-white text-sm md:text-md">
                  SEE PROJECT
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl bg-[#F2F2F2] flex flex-col justify-center items-center mx-auto gap-4 md:gap-8 p-6 md:p-12 rounded-xl mb-6 md:mb-10">
          <img
            src="/assets/images/projects/ptpundi/img-1.png"
            alt="img-1"
            className="rounded-xl w-full md:h-[580px] h-56 object-cover"
          />
          <div className="flex gap-4 mt-2 md:mt-6 w-full justify-center">
            <div className="md:flex gap-4 justify-center hidden w-full">
              <div
                className="bg-cover bg-center w-full h-auto rounded-lg"
                style={{
                  backgroundImage:
                    "url('/assets/images/projects/ptpundi/img-2.png')",
                }}
              />
              <div className="flex flex-col gap-2 w-full h-full">
                <div
                  className="bg-cover bg-center w-full h-full rounded-lg"
                  style={{
                    backgroundImage:
                      "url('/assets/images/projects/ptpundi/img-3.png')",
                  }}
                />
                <div
                  className="bg-cover bg-center w-full h-full rounded-lg"
                  style={{
                    backgroundImage:
                      "url('/assets/images/projects/ptpundi/img-4.png')",
                  }}
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-4 md:gap-6 md:pl-4">
              <h1 className="text-2xl md:text-4xl font-bold text-primary-500">
                PT. Pundi Mitra Mandiri
              </h1>

              <div className="flex text-[12px] md:text-xl font-light gap-4 ">
                <div className="flex flex-col gap-2">
                  <p>Location</p>
                  <p>Category</p>
                  <p>Area</p>
                  <p>Year</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p>: Jl. Masjid No.305B Jatibening, Bekasi</p>
                  <p>: Office</p>
                  <p>: 200 sqm</p>
                  <p>: 2021</p>
                </div>
              </div>
              <Link to="/projects/ptpundi">
                <button className="border-2 md:border-4 border-primary-500 text-primary-500 rounded-lg md:rounded-xl w-36 md:w-64 h-12 md:h-16 hover:bg-primary-500 hover:font-bold hover:text-white text-sm md:text-md">
                  SEE PROJECT
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl bg-[#F2F2F2] flex flex-col justify-center items-center mx-auto gap-4 md:gap-8 p-6 md:p-12 rounded-xl">
          <img
            src="/assets/images/projects/hotel/img-1.png"
            alt="img-1"
            className="rounded-xl w-full md:h-[580px] h-56 object-cover"
          />
          <div className="flex gap-4 mt-2 md:mt-6 w-full justify-center">
            <div className="md:flex gap-4 justify-center hidden w-full">
              <div
                className="bg-cover bg-center w-full h-auto rounded-lg"
                style={{
                  backgroundImage:
                    "url('/assets/images/projects/hotel/img-2.png')",
                }}
              />
              <div className="flex flex-col gap-2 w-full h-full">
                <div
                  className="bg-cover bg-center w-full h-full rounded-lg"
                  style={{
                    backgroundImage:
                      "url('/assets/images/projects/hotel/img-3.png')",
                  }}
                />
                <div
                  className="bg-cover bg-center w-full h-full rounded-lg"
                  style={{
                    backgroundImage:
                      "url('/assets/images/projects/hotel/img-4.png')",
                  }}
                />
              </div>
            </div>
            <div className="w-full flex flex-col gap-4 md:gap-6 md:pl-4">
              <h1 className="text-2xl md:text-4xl font-bold text-primary-500">
                Hotel GAIA
              </h1>

              <div className="flex text-[12px] md:text-xl font-light gap-4">
                <div className="flex flex-col gap-2">
                  <p>Location</p>
                  <p>Category</p>
                  <p>Area</p>
                  <p>Year</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p>: Jl. Dr. Setiabudi No.430, Bandunng</p>
                  <p>: Hospitality</p>
                  <p>: Full Building</p>
                  <p>: 2023 - 2025</p>
                </div>
              </div>
              <Link to="/projects/hotel">
                <button className="border-2 md:border-4 border-primary-500 text-primary-500 rounded-lg md:rounded-xl w-36 md:w-64 h-12 md:h-16 hover:bg-primary-500 hover:font-bold hover:text-white text-sm md:text-md">
                  SEE PROJECT
                </button>
              </Link>
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

export default Projects;
