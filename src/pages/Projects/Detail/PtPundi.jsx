import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../../components/Loading";

const PTPundi = () => {

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
      <section className="max-w-screen-lg flex flex-col justify-center items-center mx-auto bg-white mt-24 md:mt-32 mb-10 gap-10">
        <div className="flex flex-col justify-center items-center gap-2 md:gap-4">
          <h1 className="text-3xl md:text-7xl text-primary-500 font-bold">
            PT. Pundi Mitra Mandiri
          </h1>
          <p className="text-xl md:text-4xl">Simple Office</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-10">
          <img
            src="/assets/images/projects/ptpundi/img-3.jpg"
            alt="img-3"
            className="w-full md:rounded-xl h-[300px] md:h-[600px] object-cover"
          />
          <p className="text-lg md:text-2xl md:leading-relaxed leading-relaxed max-md:px-4 text-justify">
            Simple office with a sleek efficiency. We bring ideas where clarity
            meets productivity. Experience the perfect blend of minimalist
            design and functional elegance in your organized and efficient
            workspace.
          </p>
        </div>
        <div className="flex max-md:flex-col max-md:px-4 items-center justify-between gap-10 md:gap-20 w-full">
          <img
            src="/assets/images/projects/ptpundi/img-1.jpg"
            alt="img-1"
            className="md:w-1/3 h-96 w-full rounded-xl"
          />
          <div className="flex flex-col gap-4 md:gap-6 w-full">
            <h1 className="text-3xl md:text-5xl text-primary-500 font-bold">
              Compact Room
            </h1>
            <p className="text-lg md:text-2xl md:leading-relaxed text-justify">
              Compact room with a smart design. We bring ideas where space meets
              style. Experience the perfect blend of functionality and modern
              aesthetics in your cleverly optimized and cozy room.
            </p>
          </div>
        </div>
        <div className="flex max-md:flex-col-reverse items-center justify-between-reverse gap-10 md:gap-20 w-full max-md:px-4">
          <div className="flex flex-col gap-4 md:gap-6 w-full">
            <h1 className="text-3xl md:text-5xl text-primary-500 font-bold">
              Simple Pantry
            </h1>
            <p className="text-lg md:text-2xl md:leading-relaxed text-justify">
              Simple pantry with effortless organization. We bring ideas where
              convenience meets simplicity. Experience the perfect blend of
              practical design and modern charm in your neatly arranged and
              functional pantry.
            </p>
          </div>
          <img
            src="/assets/images/projects/ptpundi/img-2.jpg"
            alt="img-2"
            className="md:w-1/3 h-96 w-full rounded-xl"
          />
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

export default PTPundi;
