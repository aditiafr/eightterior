import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <section className="w-full mt-24 mb-12 md:mt-28 px-4">
        <div className="max-w-screen-xl flex flex-col justify-center items-center mx-auto">
          <h1 className="text-[44px] lg:text-[140px] text-primary-500 font-bold w-full text-center">
            SATISF<span className="text-second-500">ACTION</span>
          </h1>
          <div className="flex max-md:flex-col items-center justify-between w-full lg:px-14 gap-6 lg:gap-40 mt-4 md:mt-6">
            <p className="w-full text-md lg:text-2xl">
              Customer satisfaction is our main objective. We prioritize
              functional design yet still keep an eye on its aesthetic aspects.
              Find your needs from our recent projects.
            </p>
            <div className="w-full flex text-center items-center justify-around lg:justify-between">
              <div className="flex flex-col gap-4">
                <h2 className="text-4xl lg:text-5xl text-primary-500 font-bold">
                  50+
                </h2>
                <p className="text-xl lg:text-2xl">Happy Client</p>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-4xl lg:text-5xl text-second-500 font-bold">
                  50+
                </h2>
                <p className="text-xl lg:text-2xl">Project Finished</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col gap-6 justify-center items-center my-12 md:my-24 px-4">
        <div className="max-w-screen-xl bg-gray-200 p-6 md:p-12 rounded-xl">
          <img
            src="/assets/images/projects/rmibuandira/img-1.jpg"
            alt="img-1"
            className="rounded-xl w-full md:h-[580px] object-cover"
          />
          <div className="flex gap-4 mt-6">
            <div className="flex gap-4 justify-center max-md:hidden w-1/2">
              {/* <img
                src="/assets/images/projects/rmibuandira/img-2.jpg"
                alt="img-1"
                className="rounded-xl w-80 h-auto"
              /> */}
              <div
                className="bg-cover bg-center w-full h-auto rounded-lg"
                style={{
                  backgroundImage:
                    "url('/assets/images/projects/rmibuandira/img-2.jpg')",
                }}
              />
              <div className="flex flex-col gap-2 w-1/2 h-full">
                <div
                  className="bg-cover bg-center w-full h-full rounded-lg"
                  style={{
                    backgroundImage:
                      "url('/assets/images/projects/rmibuandira/img-3.jpg')",
                  }}
                />
                <div
                  className="bg-cover bg-center w-full h-full rounded-lg"
                  style={{
                    backgroundImage:
                      "url('/assets/images/projects/rmibuandira/img-4.jpg')",
                  }}
                />
              </div>
            </div>
            <div className="md:w-1/2 flex flex-col gap-4 md:pl-4">
              <h1 className="text-3xl md:text-4xl font-bold text-primary-500">
                Rumah Ibu Andira
              </h1>
              <p className="text-md md:text-lg">
                Modern kitchen with a minimalism design. We bring ideas where
                passion meets joy. Cook is a passion while you can enjoy your
                passion in your beautiful and functionalized kitchen.
              </p>
              <Link to="/projects/detail1">
                <button className="border-2 border-primary-500 text-primary-500 rounded-lg w-36 md:w-48 h-12 md:h-14 hover:bg-primary-500 hover:font-bold hover:text-white text-sm md:text-lg">
                  SEE PROJECT
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl bg-gray-200 p-6 md:p-12 rounded-xl">
          <img
            src="/assets/images/projects/ptpundi/img-1.jpg"
            alt="img-1"
            className="rounded-xl w-full md:h-[580px] object-cover"
          />
          <div className="flex gap-4 mt-6">
            <div className="flex gap-4 justify-center max-md:hidden w-1/2">
              <div
                className="bg-cover bg-center w-full h-auto rounded-lg"
                style={{
                  backgroundImage:
                    "url('/assets/images/projects/ptpundi/img-2.jpg')",
                }}
              />
              <div className="flex flex-col gap-2 w-1/2 h-full">
                <div
                  className="bg-cover bg-center w-full h-full rounded-lg"
                  style={{
                    backgroundImage:
                      "url('/assets/images/projects/ptpundi/img-3.jpg')",
                  }}
                />
                <div
                  className="bg-cover bg-center w-full h-full rounded-lg"
                  style={{
                    backgroundImage:
                      "url('/assets/images/projects/ptpundi/img-4.jpg')",
                  }}
                />
              </div>
            </div>
            <div className="md:w-1/2 flex flex-col gap-4 md:pl-4">
              <h1 className="text-2xl md:text-4xl font-bold text-primary-500">
                PT. Pundi Mitra Mandiri
              </h1>
              <p className="text-md md:text-lg">
                Simple office with a sleek efficiency. We bring ideas where
                clarity meets productivity. Experience the perfect blend of
                minimalist design and functional elegance in your organized and
                efficient workspace.
              </p>
              <Link to="/projects/detail2">
                <button className="border-2 border-primary-500 text-primary-500 rounded-lg w-36 md:w-48 h-12 md:h-14 hover:bg-primary-500 hover:font-bold hover:text-white text-sm md:text-lg">
                  SEE PROJECT
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl bg-gray-200 p-6 md:p-12 rounded-xl">
          <img
            src="/assets/images/projects/hotel/img-1.jpg"
            alt="img-1"
            className="rounded-xl w-full md:h-[580px] object-cover"
          />
          <div className="flex gap-4 mt-6">
            <div className="flex gap-4 justify-center max-md:hidden w-1/2">
              <div
                className="bg-cover bg-center w-full h-auto rounded-lg"
                style={{
                  backgroundImage:
                    "url('/assets/images/projects/hotel/img-2.jpg')",
                }}
              />
              <div className="flex flex-col gap-2 w-1/2 h-full">
                <div
                  className="bg-cover bg-center w-full h-full rounded-lg"
                  style={{
                    backgroundImage:
                      "url('/assets/images/projects/hotel/img-3.jpg')",
                  }}
                />
                <div
                  className="bg-cover bg-center w-full h-full rounded-lg"
                  style={{
                    backgroundImage:
                      "url('/assets/images/projects/hotel/img-4.jpg')",
                  }}
                />
              </div>
            </div>
            <div className="md:w-1/2 flex flex-col gap-4 md:pl-4">
              <h1 className="text-3xl md:text-4xl font-bold text-primary-500">
                Hotel GAIA
              </h1>
              <p className="text-md md:text-lg">
                Industrial hotel style with an edgy sophistication. We bring
                ideas where raw beauty meets comfort. Experience the perfect
                blend of industrial charm and modern luxury in your stylish
                space.
              </p>
              <Link to="/projects/detail3">
                <button className="border-2 border-primary-500 text-primary-500 rounded-lg w-36 md:w-48 h-12 md:h-14 hover:bg-primary-500 hover:font-bold hover:text-white text-sm md:text-lg">
                  SEE PROJECT
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative lg:min-h-screen h-full bg-cover bg-center flex flex-col justify-center items-center gap-4 py-12 lg:py-0 px-4 lg:px-0"
        style={{ backgroundImage: "url('/assets/images/home/bg-img-2.png')" }}
      >
        <div className="absolute inset-0 bg-blue-800 opacity-80 z-0"></div>
        <div className="relative z-10 flex flex-col items-center gap-4 lg:gap-8 text-white">
          <h2 className="text-3xl lg:text-4xl font-bold">Interested?</h2>
          <p className="text-center text-[12px] lg:text-xl max-w-2xl">
            Reach us if you have any questions regarding anything related to our
            services, we will help you to find the solutions for your needs!
          </p>
          <button className="bg-white text-primary-500 w-32 lg:w-52 h-10 lg:h-14 rounded-lg text-[10px] lg:text-sm hover:font-bold hover:bg-transparent hover:border-4 hover:text-white">
            CONTACT US
          </button>
        </div>
      </section>
    </>
  );
};

export default Projects;
