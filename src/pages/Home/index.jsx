import { Carousel } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { CustomLeftArrow, CustomRightArrow } from "../../components/CustomArrows";

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
        className="h-96 md:min-h-screen bg-cover bg-center flex flex-col justify-center items-center gap-4"
        style={{ backgroundImage: "url('assets/images/home/bg-img-1.png')" }}
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-5xl md:text-8xl text-primary-500 font-bold">
            We Inspire
          </h1>
          <h1 className="text-5xl md:text-8xl text-second-500 font-bold">
            Your Style
          </h1>
        </div>
      </section>

      <section className="max-w-screen-lg flex flex-wrap items-center justify-between px-4 md:mx-auto my-14 md:my-24">
        <div className="flex justify-evenly items-center w-full gap-12 md:gap-36">
          <div className="relative flex justify-center items-center">
            <img
              src="assets/images/home/img-2.png"
              alt="img-2"
              className="w-32 md:w-96 h-44 md:h-[460px] absolute top-5 md:top-10 left-5 md:left-10"
            />
            <div className=" bg-primary-500 w-32 md:w-96 h-44 md:h-[460px] rounded-md md:rounded-2xl"></div>
          </div>
          <div className="flex flex-col md:gap-2">
            <h2 className="text-primary-500 font-bold text-2xl md:text-6xl">
              Eight<span className="text-second-500">terior</span>
            </h2>
            <p className="text-[10px] md:text-xl">PT. Delapan Mitra Interior</p>
            <p className="md:leading-relaxed mt-6 text-[10px] md:text-xl">
              Welcome to Eightterior, your premier choice for corporate
              construction and interior solutions. With years of experience in
              the industry, we specialize in designing and constructing
              high-quality apartments, hospitality, houses, and office spaces.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items-center mt-20 md:mt-32 gap-14 md:gap-32">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-4xl md:text-[64px] text-primary-500 font-bold">
              What we do
            </h2>
            <p className="text-[12px] md:text-2xl max-md:mt-2">
              We can help realize your dream
            </p>
            <Link to={`/about`}>
              <button className="w-64 h-16 rounded-xl border-4 border-primary-500 text-primary-500 mt-6 hidden md:block hover:bg-primary-500 hover:text-white hover:font-bold">
                ABOUT US
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-x-16 md:gap-x-28 gap-y-8 md:gap-y-12">
            {pictHome.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <img src={item.imgUrl} alt={item.name} className="w-36 md:w-48" />
                <p className="text-lg md:text-2xl">{item.name}</p>
              </div>
            ))}
          </div>
          <Link to={`/about`} className="md:hidden">
            <button className="w-48 h-14 rounded-xl border-4 border-primary-500 text-primary-500 block md:hidden hover:bg-primary-500 hover:text-white hover:font-bold">
              ABOUT US
            </button>
          </Link>
        </div>
      </section>

      <section className="md:h-screen h-64 w-full">
        <Carousel
          slideInterval={5000}
          leftControl={<CustomLeftArrow />}
          rightControl={<CustomRightArrow />}
        >
          <div
            className="relative md:min-h-screen h-full bg-cover bg-center flex flex-col gap-4 rounded-lg overflow-hidden"
            style={{
              backgroundImage: "url('/assets/images/home/carousel/img-1.png')",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            <div className="relative flex flex-col justify-center h-full md:mx-52 text-white gap-1 md:gap-3 mx-16">
              <h3 className="text-sm md:text-4xl">RECENT PROJECT</h3>
              <h1 className="text-xl md:text-6xl font-semibold">HOTEL GAIA</h1>
              <Link to={`/projects/hotel`}>
                <button className="relative text-white border md:border-2 w-28 md:w-64 h-10 md:h-16 mt-4 md:mt-6 rounded-lg text-[10px] md:text-sm hover:bg-white hover:text-primary-500 hover:font-bold">
                  LEARN MORE
                </button>
              </Link>
            </div>
          </div>

          <div
            className="relative md:min-h-screen h-full bg-cover bg-center flex flex-col gap-4 rounded-lg overflow-hidden"
            style={{
              backgroundImage: "url('/assets/images/home/carousel/img-2.png')",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            <div className="relative flex flex-col justify-center h-full md:mx-52 text-white gap-1 md:gap-3 mx-16">
              <h3 className="text-sm md:text-4xl">RECENT PROJECT</h3>
              <h1 className="text-xl md:text-6xl font-semibold">
                MINIMALISM KITCHEN
              </h1>
              <Link to={`/projects`}>
                <button className="relative text-white border md:border-2 w-28 md:w-64 h-10 md:h-16 mt-4 md:mt-6 rounded-lg text-[10px] md:text-sm hover:bg-white hover:text-primary-500 hover:font-bold">
                  LEARN MORE
                </button>
              </Link>
            </div>
          </div>

          <div
            className="relative md:min-h-screen h-full bg-cover bg-center flex flex-col gap-4 rounded-lg overflow-hidden"
            style={{
              backgroundImage: "url('/assets/images/home/carousel/img-3.png')",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            <div className="relative flex flex-col justify-center h-full md:mx-52 text-white gap-1 md:gap-3 mx-16">
              <h3 className="text-sm md:text-4xl">RECENT PROJECT</h3>
              <h1 className="text-xl md:text-6xl font-semibold">
                PT. PUNDI MITRA MANDIRI
              </h1>
              <Link to={`/projects/ptpundi`}>
                <button className="relative text-white border md:border-2 w-28 md:w-64 h-10 md:h-16 mt-4 md:mt-6 rounded-lg text-[10px] md:text-sm hover:bg-white hover:text-primary-500 hover:font-bold">
                  LEARN MORE
                </button>
              </Link>
            </div>
          </div>

          <div
            className="relative md:min-h-screen h-full bg-cover bg-center flex flex-col gap-4 rounded-lg overflow-hidden"
            style={{
              backgroundImage: "url('/assets/images/home/carousel/img-4.png')",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            <div className="relative flex flex-col justify-center h-full md:mx-52 text-white gap-1 md:gap-3 mx-16">
              <h3 className="text-sm md:text-4xl">RECENT PROJECT</h3>
              <h1 className="text-xl md:text-6xl font-semibold">
                RUMAH IBU ANDIRA
              </h1>
              <Link to={`/projects/rmibuandira`}>
                <button className="relative text-white border md:border-2 w-28 md:w-64 h-10 md:h-16 mt-4 md:mt-6 rounded-lg text-[10px] md:text-sm hover:bg-white hover:text-primary-500 hover:font-bold">
                  LEARN MORE
                </button>
              </Link>
            </div>
          </div>
        </Carousel>
      </section>

      <section className="w-full my-12 md:my-20" id="testimoni">
        <div className="flex items-center justify-between w-full">
          <img
            src="assets/images/home/img-3.png"
            alt="..."
            className="relative w-1/2"
          />
          <div className="absolute flex items-center gap-2 md:gap-4 h-[500px] w-full pl-[100px] md:pl-[600px] overflow-x-auto no-scrollbar">
            <div className="bg-white w-full p-4 max-md:h-24 md:p-10 shadow-gray-400 shadow-sm rounded-lg flex flex-col gap-2 md:gap-4">
              <p className="w-[200px] text-[7px] md:text-lg md:w-[520px]">
                Terima kasih Eightterior karena telah mewujudkan rumah impian
                saya. Design dari Eightterior sangat mengedepankan aspek
                fungsionalitas serta keindahan di dalamnya. Keren banget!
              </p>
              <div className="flex flex-col">
                <p className="text-primary-500 font-semibold md:text-lg text-[8px]">
                  Ibu Andira
                </p>
                <p className="md:text-lg text-[7px]">
                  Project Re-Design Kitchen
                </p>
              </div>
            </div>
            <div className="bg-white w-full p-4 max-md:h-24 md:p-10 shadow-gray-400 shadow-sm rounded-lg flex flex-col gap-2 md:gap-4">
              <p className="w-[200px] text-[7px] md:text-lg md:w-[520px]">
                Eightterior telah membantu Hotel GAIA untuk mewujudkan konsep
                hotel bergaya industrial dengan memperhatikan green space pada
                design nya.
              </p>
              <div className="flex flex-col">
                <p className="text-primary-500 font-semibold md:text-lg text-[8px]">
                  Hotel GAIA
                </p>
                <p className="md:text-lg text-[7px]">
                  Project Industrial Style Hotel
                </p>
              </div>
            </div>
            <div className="bg-white w-full p-4 max-md:h-24 md:p-10 shadow-gray-400 shadow-sm rounded-lg flex flex-col gap-2 md:gap-4">
              <p className="w-[200px] text-[7px] md:text-lg md:w-[520px]">
                Terima kasih Eightterior karena telah membantu perusahaan kami
                untuk mempunyai kantor yang memiliki gaya simpel namun tetap
                compact dalam fungsionalitasnya.
              </p>
              <div className="flex flex-col">
                <p className="text-primary-500 font-semibold md:text-lg text-[8px]">
                  PT. Pundi Mitra Mandiri
                </p>
                <p className="md:text-lg text-[7px]">Project Simple Office</p>
              </div>
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

export default Home;
