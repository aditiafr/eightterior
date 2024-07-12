import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <section className="w-full mt-24 mb-10 md:mt-28">
        <div className="max-w-screen-xl flex flex-col justify-center items-center mx-auto">
          <h1 className="text-[44px] lg:text-[140px] text-primary-500 font-bold w-full text-center">
            SATISF<span className="text-second-500">ACTION</span>
          </h1>
          <div className="flex max-md:flex-col items-center justify-between w-full px-6 lg:px-14 gap-6 lg:gap-40 mt-4 md:mt-6">
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

          <div className="w-full mx-6 flex justify-center items-center">
            <div className="bg-gray-100 p-4 md:p-12 mt-10 rounded-xl mx-4">
              <img src="assets/images/projects/img-1.png" alt="img-1" />
              <div className="flex gap-4 w-full mt-6">
                <img
                  src="/assets/images/projects/img-2.png"
                  alt="img-1"
                  className="w-96 max-md:hidden"
                />
                <div className="flex flex-col items-start justify-center gap-4 max-md:hidden">
                  <img src="assets/images/projects/img-2.png" alt="img-7" />
                  <img src="assets/images/projects/img-2.png" alt="img-8" />
                </div>
                <div className="flex flex-col items-start gap-4 w-full">
                  <h2 className="text-primary-500 text-3xl md:text-4xl font-bold">
                    Rumah Ibu Andira
                  </h2>
                  <p className="text-md md:text-lg leading-relaxed">
                    Modern kitchen with a minimalism design. We bring ideas
                    where passion meets joy. Cook is a passion while you can
                    enjoy your passion in your beautiful and functionalized
                    kitchen.
                  </p>
                  <Link to="/projects/detail1">
                    <button className="border-2 md:border-4 w-36 md:w-64 h-12 md:h-16 border-primary-500 rounded-xl text-primary-500 hover:bg-primary-500 hover:text-white hover:font-bold">
                      SEE PROJECT
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mx-6 flex justify-center items-center">
            <div className="bg-gray-100 p-4 md:p-12 mt-10 rounded-xl mx-4">
              <img src="assets/images/projects/img-5.png" alt="img-1" />
              <div className="flex gap-4 w-full mt-6">
                <img
                  src="/assets/images/projects/img-6.png"
                  alt="img-1"
                  className="w-96 max-md:hidden"
                />
                <div className="flex flex-col items-start justify-center gap-4 max-md:hidden">
                  <img src="assets/images/projects/img-6.png" alt="img-7" />
                  <img src="assets/images/projects/img-6.png" alt="img-8" />
                </div>
                <div className="flex flex-col items-start gap-4 w-full">
                  <h2 className="text-primary-500 text-3xl md:text-4xl font-bold">
                    PT. Pundi Mitra Mandiri
                  </h2>
                  <p className="text-md md:text-lg leading-relaxed">
                    Simple office with a sleek efficiency. We bring ideas where
                    clarity meets productivity. Experience the perfect blend of
                    minimalist design and functional elegance in your organized
                    and efficient workspace.
                  </p>
                  <Link to="/projects/detail2">
                    <button className="border-2 md:border-4 w-36 md:w-64 h-12 md:h-16 border-primary-500 rounded-xl text-primary-500 hover:bg-primary-500 hover:text-white hover:font-bold">
                      SEE PROJECT
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full mx-6 flex justify-center items-center">
            <div className="bg-gray-100 p-4 md:p-12 mt-10 rounded-xl mx-4">
              <img src="assets/images/projects/img-9.png" alt="img-1" />
              <div className="flex gap-4 w-full mt-6">
                <img
                  src="/assets/images/projects/img-10.png"
                  alt="img-1"
                  className="w-96 max-md:hidden"
                />
                <div className="flex flex-col items-start justify-center gap-4 max-md:hidden">
                  <img src="assets/images/projects/img-10.png" alt="img-7" />
                  <img src="assets/images/projects/img-10.png" alt="img-8" />
                </div>
                <div className="flex flex-col items-start gap-4 w-full">
                  <h2 className="text-primary-500 text-3xl md:text-4xl font-bold">
                    Hotel GAIA
                  </h2>
                  <p className="text-md md:text-lg leading-relaxed">
                    Industrial hotel style with an edgy sophistication. We bring
                    ideas where raw beauty meets comfort. Experience the perfect
                    blend of industrial charm and modern luxury in your stylish
                    space.
                  </p>
                  <Link to="/projects/detail2">
                    <button className="border-2 md:border-4 w-36 md:w-64 h-12 md:h-16 border-primary-500 rounded-xl text-primary-500 hover:bg-primary-500 hover:text-white hover:font-bold">
                      SEE PROJECT
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative lg:min-h-screen h-full bg-cover bg-center flex flex-col justify-center items-center gap-4 py-12 lg:py-0 px-10 lg:px-0"
        style={{ backgroundImage: "url('assets/images/home/bg-img-2.png')" }}
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
