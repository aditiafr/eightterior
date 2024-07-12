import { Carousel } from "flowbite-react";
import React from "react";

const Home = () => {
  const pictHome = [
    {
      name: "House",
      imgUrl: "assets/images/home/home-1.png",
    },
    {
      name: "Hospitality",
      imgUrl: "assets/images/home/home-2.png",
    },
    {
      name: "Apartment",
      imgUrl: "assets/images/home/home-3.png",
    },
    {
      name: "Office",
      imgUrl: "assets/images/home/home-4.png",
    },
  ];

  return (
    <>
      <section
        className="h-96 lg:min-h-screen bg-cover bg-center flex flex-col justify-center items-center gap-4"
        style={{ backgroundImage: "url('assets/images/home/bg-img-1.png')" }}
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-5xl lg:text-8xl text-primary-500 font-bold">
            We Inspire
          </h1>
          <h1 className="text-5xl lg:text-8xl text-second-500 font-bold">
            Your Style
          </h1>
        </div>
      </section>

      <section className="max-w-screen-lg flex flex-wrap items-center justify-between mx-6 lg:mx-auto my-14 lg:my-28">
        <div className="flex justify-evenly items-center w-full gap-12 lg:gap-36">
          <div className="relative flex justify-center items-center">
            <img
              src="assets/images/home/img-2.png"
              alt="img-2"
              className="w-32 lg:w-80 h-44 lg:h-96 absolute top-5 lg:top-10 left-5 lg:left-10"
            />
            <div className=" bg-primary-500 w-32 lg:w-80 h-44 lg:h-96 rounded-md lg:rounded-2xl"></div>
          </div>
          <div className="flex flex-col lg:gap-2">
            <h2 className="text-primary-500 font-bold text-2xl lg:text-5xl">
              Eight<span className="text-second-500">terior</span>
            </h2>
            <p className="text-[10px] lg:text-lg">PT. Delapan Mitra Interior</p>
            <p className="lg:leading-7 mt-4 text-[10px] lg:text-lg">
              Welcome to Eightterior, your premier choice for corporate
              construction and interior solutions. With years of experience in
              the industry, we specialize in designing and constructing
              high-quality apartments, hospitality, houses, and office spaces.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-evenly items-center mt-20 lg:mt-32 gap-14 lg:gap-36 mx-6">
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-4xl text-primary-500 font-bold">What we do</h2>
            <p className="mt-1 text-[12px] lg:text-md">
              We can help realize your dream
            </p>
            <button className="py-3 w-48 rounded-lg border-2 border-primary-500 text-primary-500 mt-6 hidden lg:block hover:bg-primary-500 hover:text-white hover:font-bold">
              ABOUT US
            </button>
          </div>
          <div className="grid grid-cols-2 gap-x-16 lg:gap-x-28 gap-y-8 lg:gap-y-12">
            {pictHome.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <img src={item.imgUrl} alt={item.name} className="w-36" />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
          <button className="h-12 w-36 text-sm rounded-lg border-2 border-primary-500 text-primary-500 block lg:hidden hover:bg-primary-500 hover:text-white hover:font-bold">
            ABOUT US
          </button>
        </div>
      </section>

      <section className="lg:h-screen h-64 w-full">
        <Carousel slideInterval={5000} className="rounded-lg overflow-hidden">

          <div
            className="relative lg:min-h-screen h-full bg-cover bg-center flex flex-col gap-4 rounded-lg overflow-hidden"
            style={{
              backgroundImage: "url('/assets/images/home/carousel/img-1.png')",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            <div className="relative flex flex-col justify-center h-full lg:mx-52 text-white gap-1 lg:gap-3 mx-16">
              <h3 className="text-sm lg:text-4xl">RECENT PROJECT</h3>
              <h1 className="text-xl lg:text-6xl font-semibold">HOTEL GAIA</h1>
              <button className="relative text-white border lg:border-2 w-28 lg:w-64 h-10 lg:h-16 mt-4 lg:mt-6 rounded-lg text-[10px] lg:text-sm hover:bg-white hover:text-primary-500 hover:font-bold">
                LEARN MORE
              </button>
            </div>
          </div>

          <div
            className="relative lg:min-h-screen h-full bg-cover bg-center flex flex-col gap-4 rounded-lg overflow-hidden"
            style={{
              backgroundImage: "url('/assets/images/home/carousel/img-2.png')",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            <div className="relative flex flex-col justify-center h-full lg:mx-52 text-white gap-1 lg:gap-3 mx-16">
              <h3 className="text-sm lg:text-4xl">RECENT PROJECT</h3>
              <h1 className="text-xl lg:text-6xl font-semibold">MINIMALISM KITCHEN</h1>
              <button className="relative text-white border lg:border-2 w-28 lg:w-64 h-10 lg:h-16 mt-4 lg:mt-6 rounded-lg text-[10px] lg:text-sm hover:bg-white hover:text-primary-500 hover:font-bold">
                LEARN MORE
              </button>
            </div>
          </div>

          <div
            className="relative lg:min-h-screen h-full bg-cover bg-center flex flex-col gap-4 rounded-lg overflow-hidden"
            style={{
              backgroundImage: "url('/assets/images/home/carousel/img-3.png')",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            <div className="relative flex flex-col justify-center h-full lg:mx-52 text-white gap-1 lg:gap-3 mx-16">
              <h3 className="text-sm lg:text-4xl">RECENT PROJECT</h3>
              <h1 className="text-xl lg:text-6xl font-semibold">PT. PUNDI MITRA MANDIRI</h1>
              <button className="relative text-white border lg:border-2 w-28 lg:w-64 h-10 lg:h-16 mt-4 lg:mt-6 rounded-lg text-[10px] lg:text-sm hover:bg-white hover:text-primary-500 hover:font-bold">
                LEARN MORE
              </button>
            </div>
          </div>

          <div
            className="relative lg:min-h-screen h-full bg-cover bg-center flex flex-col gap-4 rounded-lg overflow-hidden"
            style={{
              backgroundImage: "url('/assets/images/home/carousel/img-4.png')",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            <div className="relative flex flex-col justify-center h-full lg:mx-52 text-white gap-1 lg:gap-3 mx-16">
              <h3 className="text-sm lg:text-4xl">RECENT PROJECT</h3>
              <h1 className="text-xl lg:text-6xl font-semibold">RUMAH IBU ANDIRA</h1>
              <button className="relative text-white border lg:border-2 w-28 lg:w-64 h-10 lg:h-16 mt-4 lg:mt-6 rounded-lg text-[10px] lg:text-sm hover:bg-white hover:text-primary-500 hover:font-bold">
                LEARN MORE
              </button>
            </div>
          </div>

        </Carousel>
      </section>

      <section
        id="testimoni"
        className="flex items-center justify-between mx-auto my-16 lg:my-28"
      >
        <div className="relative flex items-center w-full">
          <img src="assets/images/home/img-3.png" alt="..." className="w-1/2" />
          <div className="flex absolute right-0 overflow-x-auto gap-4 p-4">
            <div className="bg-white p-4 lg:p-14 shadow-gray-400 shadow-sm rounded-lg flex flex-col gap-4 text-[10px] lg:text-lg">
              <p>
                Terima kasih Eightterior karena telah mewujudkan rumah impian
                saya. Design dari Eightterior sangat mengedepankan aspek
                fungsionalitas serta keindahan di dalamnya. Keren banget!
              </p>
              <div className="flex flex-col">
                <p className="text-primary-500 font-semibold">Ibu Andira</p>
                <p>Project Re-Design Kitchen</p>
              </div>
            </div>
            <div className="bg-white p-4 lg:p-14 shadow-gray-400 shadow-sm rounded-lg flex flex-col gap-4 text-[10px] lg:text-lg">
              <p>
                Eightterior telah membantu Hotel GAIA untuk mewujudkan konsep
                hotel bergaya industrial dengan memperhatikan green space pada
                design nya.
              </p>
              <div className="flex flex-col">
                <p className="text-primary-500 font-semibold">Hotel GAIA</p>
                <p>Project Industrial Style Hotel</p>
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

export default Home;
