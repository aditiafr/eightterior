import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";

const Projects = () => {

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
      <section className="w-full mt-24 mb-12 md:mt-28 px-4">
        <div className="max-w-screen-xl flex flex-col justify-center items-center mx-auto">
          <h1 className="text-[44px] md:text-[180px] text-primary-500 font-bold w-full text-center">
            SATISF<span className="text-second-500">ACTION</span>
          </h1>
          <div className="flex max-md:flex-col items-center justify-between w-full gap-6 md:gap-40 mt-4 md:mt-6">
            <p className="w-full text-md md:text-3xl">
              Customer satisfaction is our main objective. We prioritize
              functional design yet still keep an eye on its aesthetic aspects.
              Find your needs from our recent projects.
            </p>
            <div className="w-full flex text-center items-center justify-around md:justify-between">
              <div className="flex flex-col gap-4">
                <h2 className="text-4xl md:text-6xl text-primary-500 font-bold">
                  50+
                </h2>
                <p className="text-xl md:text-3xl">Happy Client</p>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-4xl md:text-6xl text-second-500 font-bold">
                  50+
                </h2>
                <p className="text-xl md:text-3xl">Project Finished</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col gap-14 justify-center items-center my-12 md:my-24 px-4">
        <div className="max-w-screen-xl bg-[#F2F2F2] p-6 md:p-12 rounded-xl">
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
              <Link to="/projects/rmibuandira">
                <button className="border-2 md:border-4 border-primary-500 text-primary-500 rounded-lg md:rounded-xl w-36 md:w-64 h-12 md:h-16 hover:bg-primary-500 hover:font-bold hover:text-white text-sm md:text-md">
                  SEE PROJECT
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl bg-[#F2F2F2] p-6 md:p-12 rounded-xl">
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
              <Link to="/projects/ptpundi">
                <button className="border-2 md:border-4 border-primary-500 text-primary-500 rounded-lg md:rounded-xl w-36 md:w-64 h-12 md:h-16 hover:bg-primary-500 hover:font-bold hover:text-white text-sm md:text-md">
                  SEE PROJECT
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-screen-xl bg-[#F2F2F2] p-6 md:p-12 rounded-xl">
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
        className="relative md:min-h-screen h-full bg-cover bg-center flex flex-col justify-center items-center gap-4 py-12 md:py-0 px-4 md:px-0"
        style={{ backgroundImage: "url('/assets/images/home/bg-img-2.png')" }}
      >
        <div className="absolute inset-0 bg-blue-800 opacity-80 z-0"></div>
        <div className="relative z-10 flex flex-col items-center gap-4 md:gap-16 text-white">
          <h2 className="text-3xl md:text-[64px] font-bold">Interested?</h2>
          <p className="text-center text-[12px] md:text-2xl max-w-[850px]">
            Reach us if you have any questions regarding anything related to our
            services, we will help you to find the solutions for your needs!
          </p>
          <Link to={`/contact-us`}>
            <button className="bg-white text-primary-500 w-32 md:w-52 h-10 md:h-14 rounded-lg text-[10px] md:text-sm hover:font-bold">
              CONTACT US
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Projects;
