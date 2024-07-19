import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  CustomLeftArrow,
  CustomRightArrow,
} from "../../components/CustomArrows";
import { Carousel } from "@material-tailwind/react";

const Home = () => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1; // Adjust scroll speed if needed
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const pictHome = [
    { name: "House", imgUrl: "assets/images/home/home-1.png" },
    { name: "Hospitality", imgUrl: "assets/images/home/home-2.png" },
    { name: "Apartment", imgUrl: "assets/images/home/home-3.png" },
    { name: "Office", imgUrl: "assets/images/home/home-4.png" },
  ];

  return (
    <>
      <section
        className="h-72 md:min-h-screen bg-cover bg-center flex flex-col justify-center items-center gap-4"
        style={{ backgroundImage: "url('assets/images/home/bg-img-1.png')" }}
      >
        <div className="flex flex-col items-center justify-center gap-2 md:gap-8">
          <h1 className="text-4xl md:text-8xl text-primary-500 font-bold">
            We Inspire
          </h1>
          <h1 className="text-4xl md:text-8xl text-second-500 font-bold">
            Your Style
          </h1>
        </div>
      </section>

      <section className="w-full md:max-w-[1120px] flex flex-wrap items-center justify-between px-8 md:mx-auto my-14 md:my-24">
        <div className="flex justify-evenly items-center w-full gap-8 md:gap-32">
          <div className="relative flex justify-center items-center">
            {/* <img
              src="assets/images/home/img-1.png"
              alt="img-1"
              className="w-32 md:w-96 h-40 md:h-[460px] absolute top-2 md:top-5 left-2 md:left-5 z-10 rounded-md md:rounded-2xl"
            /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-12 w-12 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <div className="relative bottom-2 md:bottom-5 right-2 md:right-5 bg-primary-500 w-32 md:w-96 h-40 md:h-[460px] rounded-md md:rounded-2xl"></div>
          </div>
          <div className="flex flex-col md:gap-2 w-full">
            <h2 className="text-primary-500 font-bold text-2xl md:text-[64px]">
              Eight<span className="text-second-500">terior</span>
            </h2>
            <p className="text-[8px] md:text-2xl mt-1 md:mt-5 font-light">
              PT. Delapan Mitra Interior
            </p>
            <p className="md:leading-relaxed mt-4 md:mt-6 text-[8px] md:text-2xl font-light">
              Welcome to Eightterior, your premier choice for corporate
              construction and interior solutions. With years of experience in
              the industry, we specialize in designing and constructing
              high-quality apartments, hospitality, houses, and office spaces.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items-center mt-16 md:mt-24 gap-8 md:gap-0">
          <div className="flex flex-col items-center md:items-start md:gap-4 w-1/2">
            <h2 className="text-2xl md:text-[64px] text-primary-500 font-bold">
              What we do
            </h2>
            <p className="text-[8px] md:text-2xl md:mt-4 font-light">
              We can help realize your dream
            </p>
            <Link to={`/about`}>
              <button className="w-64 h-16 rounded-xl border-4 border-primary-500 text-primary-500 mt-6 hidden md:block hover:bg-primary-500 hover:text-white hover:font-bold">
                ABOUT US
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-2 w-full md:w-2/3 justify-between gap-x-9 md:gap-x-20 gap-y-6 md:gap-y-12">
            {pictHome.map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <img
                  src={item.imgUrl}
                  alt={item.name}
                  className="w-24 md:w-48"
                />
                <p className="text-lg md:text-2xl">{item.name}</p>
              </div>
            ))}
          </div>
          <Link to={`/about`} className="md:hidden">
            <button className="w-40 h-12 rounded-xl border-4 border-primary-500 text-primary-500 block md:hidden hover:bg-primary-500 hover:text-white hover:font-bold">
              ABOUT US
            </button>
          </Link>
        </div>
      </section>

      <section className="md:h-screen h-64 w-full">
        <Carousel
          autoplay={true}
          autoplayDelay={4000}
          loop={true}
          prevArrow={({ handlePrev }) => (
            <CustomLeftArrow onClick={handlePrev} />
          )}
          nextArrow={({ handleNext }) => (
            <CustomRightArrow onClick={handleNext} />
          )}
        >
          <div
            className="relative md:min-h-screen h-full bg-cover bg-center flex flex-col gap-4 overflow-hidden"
            style={{
              backgroundImage: "url('/assets/images/home/carousel/img-1.png')",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            <div className="relative flex flex-col justify-center h-full md:mx-52 text-white gap-1 md:gap-3 mx-16">
              <h3 className="text-sm md:text-4xl">RECENT PROJECT</h3>
              <h1 className="text-xl md:text-6xl font-semibold">HOTEL GAIA</h1>
              <div className="relative">
                <Link to={`/projects/hotel`}>
                  <button className="text-white border md:border-2 w-28 md:w-56 h-10 md:h-16 mt-4 md:mt-6 rounded-xl text-[10px] md:text-sm hover:bg-white hover:text-primary-500 hover:font-bold">
                    LEARN MORE
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div
            className="relative md:min-h-screen h-full bg-cover bg-center flex flex-col gap-4 overflow-hidden"
            style={{
              backgroundImage: "url('/assets/images/home/carousel/img-3.png')",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            <div className="relative flex flex-col justify-center h-full md:mx-52 text-white gap-1 md:gap-4 mx-16">
              <h3 className="text-sm md:text-[32px]">RECENT PROJECT</h3>
              <h1 className="text-xl md:text-5xl font-bold">
                PT. PUNDI MITRA MANDIRI
              </h1>
              <div className="relative">
                <Link to={`/projects/ptpundi`}>
                  <button className="text-white border md:border-2 w-28 md:w-56 h-10 md:h-16 mt-4 md:mt-6 rounded-xl text-[10px] md:text-sm hover:bg-white hover:text-primary-500 hover:font-bold">
                    LEARN MORE
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div
            className="relative md:min-h-screen h-full bg-cover bg-center flex flex-col gap-4 overflow-hidden"
            style={{
              backgroundImage: "url('/assets/images/home/carousel/img-4.png')",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            <div className="relative flex flex-col justify-center h-full md:mx-52 text-white gap-1 md:gap-4 mx-16">
              <h3 className="text-sm md:text-[32px]">RECENT PROJECT</h3>
              <h1 className="text-xl md:text-5xl font-bold">
                RUMAH IBU ANDIRA
              </h1>
              <div className="relative">
                <Link to={`/projects/rmibuandira`}>
                  <button className="text-white border md:border-2 w-28 md:w-64 h-10 md:h-16 mt-4 md:mt-6 rounded-xl text-[10px] md:text-sm hover:bg-white hover:text-primary-500 hover:font-bold">
                    LEARN MORE
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Carousel>
      </section>

      <section className="w-full my-12 md:my-20" id="testimoni">
        <div className="flex items-center justify-between w-full">
          <img
            src="assets/images/home/img-3.png"
            alt="..."
            className="relative w-1/2 rounded-r-xl md:rounded-r-2xl"
          />
          <div
            ref={containerRef}
            className={`absolute flex items-center gap-2 md:gap-4 p-6 w-full pl-[100px] md:pl-[600px] overflow-x-auto no-scrollbar ${isDragging ? "cursor-grabbing" : "cursor-grab"
              }`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div className="bg-white w-full p-4 h-24 md:h-auto md:p-10 shadow-gray-400 shadow-sm rounded-lg flex flex-col gap-2 md:gap-4">
              <p className="w-[200px] text-[7px] md:text-lg md:w-[620px] font-light">
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
            <div className="bg-white w-full p-4 h-24 md:h-auto md:p-10 shadow-gray-400 shadow-sm rounded-lg flex flex-col gap-2 md:gap-4">
              <p className="w-[200px] text-[7px] md:text-lg md:w-[620px] font-light">
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
            <div className="bg-white w-full p-4 h-24 md:h-auto md:p-10 shadow-gray-400 shadow-sm rounded-lg flex flex-col gap-2 md:gap-4">
              <p className="w-[200px] text-[7px] md:text-lg md:w-[620px] font-light">
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

export default Home;
