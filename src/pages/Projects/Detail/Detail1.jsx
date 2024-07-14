import React from "react";

const Detail1 = () => {
  return (
    <>
      <section className="max-w-screen-lg flex flex-col justify-center items-center mx-auto bg-white mt-24 mb-10 gap-10">
        <div className="flex flex-col justify-center items-center gap-2 md:gap-4">
          <h1 className="text-4xl md:text-8xl text-primary-500 font-bold">
            Rumah Ibu Andira
          </h1>
          <p className="text-xl md:text-4xl">Modern Kitchen</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-10">
          <img
            src="/assets/images/projects/rmibuandira/img-1.jpg"
            alt="img-1"
            className="w-full md:rounded-xl h-[300px] md:h-[700px] object-cover "
          />
          <p className="text-lg md:text-xl leading-relaxed max-md:px-4">
            Modern kitchen with a minimalism design. We bring ideas where
            passion meets joy. Cook is a passion while you can enjoy your
            passion in your beautiful and functionalized kitchen.
          </p>
        </div>
        <div className="flex max-md:flex-col px-4 items-center justify-between gap-10 md:gap-28 w-full">
          <img
            src="/assets/images/projects/rmibuandira/img-4.jpg"
            alt="img-4"
            className="md:w-1/3 h-96 w-full rounded-xl"
          />
          <div className="flex flex-col gap-4 md:gap-6 w-full">
            <h1 className="text-3xl md:text-4xl text-primary-500 font-bold">
              Modern Design
            </h1>
            <p className="text-lg md:text-xl leading-8">
              Modern design ornament that used in the kitchen will bring you a
              joy of every single food cooked in your kitchen. We believe a
              kitchen should be beautiful yet still functionable on every
              aspects within it.
            </p>
          </div>
        </div>
        <div className="flex max-md:flex-col-reverse items-center justify-between-reverse gap-10 md:gap-28 w-full px-4">
          <div className="flex flex-col gap-4 md:gap-6 w-full">
            <h1 className="text-3xl md:text-4xl text-primary-500 font-bold">Aesthetic</h1>
            <p className="text-lg md:text-xl leading-8">
              Warm, proper, and a functionable lighting is a must in a kitchen.
              A proper and warm lighting could also make your kitchen more
              aesthetic.
            </p>
          </div>
          <img
            src="/assets/images/projects/rmibuandira/img-3.jpg"
            alt="img-3"
            className="md:w-1/3 h-96 w-full rounded-xl"
          />
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

export default Detail1;
