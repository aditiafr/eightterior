import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";
import { CustomLeftArrow, CustomRightArrow } from "../../components/CustomArrows";
import Loading from "../../components/Loading";
import { useEffect, useState } from "react";

const About = () => {

  const [isLoading, setIsLoading] = useState(true)

  const [activeTab, setActiveTab] = useState("house");

  // Array of tab names for easy indexing
  const Tabs = ["house", "apartment", "office", "hospitality"];

  useEffect(() => {
    // Function to change tab every 5 seconds
    const intervalId = setInterval(() => {
      setActiveTab((prevTab) => {
        // Find the index of the current tab
        const currentIndex = Tabs.indexOf(prevTab);
        // Determine the next tab index
        const nextIndex = (currentIndex + 1) % Tabs.length;
        return Tabs[nextIndex];
      });
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [Tabs]);


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
      <section
        className="h-80 md:h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/about/bg-img-1.png')" }}
      >
        <div className="max-w-screen-xl h-full md:mx-auto flex items-center max-md:px-4">
          <div className="flex flex-col text-left md:gap-4">
            <h1 className="text-4xl md:text-8xl text-primary-500 font-bold">
              We Help
            </h1>
            <h1 className="text-4xl md:text-8xl text-primary-500 font-bold">
              Realize Your
            </h1>
            <h1 className="text-4xl md:text-8xl text-second-500 font-bold">
              Your Style
            </h1>
          </div>
        </div>
      </section>

      <section className="w-full flex items-center justify-center my-10 md:my-20 max-md:px-4">
        <div className="max-w-screen-xl flex flex-col">
          <div className="flex max-md:flex-col md:items-center justify-between text-left gap-4 w-full">
            <h2 className="text-3xl md:text-4xl text-primary-500 font-bold md:w-1/3">
              Build Dreams
            </h2>
            <p className="text-sm md:text-md md:w-2/3">
              Welcome to Eightterior, your premier choice for corporate
              construction and interior solutions. With years of experience in
              the industry, we specialize in designing and constructing
              high-quality apartments, hospitality, houses, and office spaces.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full md:flex justify-center items-center">
        <div className="max-w-screen-xl flex flex-col max-md:px-4 my-12">
          {activeTab === "house" && (
            <img
              src="/assets/images/about/tabs/img-1.jpg"
              alt="img-1"
              className="rounded-xl h-52 md:h-[600px] w-full object-cover"
            />
          )}
          {activeTab === "apartment" && (
            <img
              src="/assets/images/about/tabs/img-2.jpg"
              alt="img-2"
              className="rounded-xl h-52 md:h-[600px] w-full object-cover"
            />
          )}
          {activeTab === "office" && (
            <img
              src="/assets/images/about/tabs/img-3.jpg"
              alt="img-3"
              className="rounded-xl h-52 md:h-[600px] w-full object-cover"
            />
          )}
          {activeTab === "hospitality" && (
            <img
              src="/assets/images/about/tabs/img-4.jpg"
              alt="img-4"
              className="rounded-xl h-52 md:h-[600px] w-full object-cover"
            />
          )}

          <div className="md:grid md:grid-cols-4 gap-10 md:gap-14 mt-12 md:mt-16 h-42 relative flex overflow-x-auto no-scrollbar">
            <button
              className={`text-left ${activeTab === "house"
                ? "text-primary-500"
                : "text-gray-400 hover:text-primary-500"
                }`}
              onClick={() => setActiveTab("house")}
              aria-current={activeTab === "house" ? "page" : undefined}
            >
              <div
                className={`border-t-8 md:border-t-4 w-56 md:w-full flex flex-col gap-4 ${activeTab === "house"
                  ? "border-primary-500"
                  : "border-gray-400 hover:border-primary-500"
                  }`}
              >
                <p className="text-4xl font-bold mt-4">House</p>
                <p className={`text-xl ${activeTab === "house" && "text-black"}`}>Build your own dream house now.</p>
              </div>
            </button>

            <button
              className={`text-left ${activeTab === "apartment"
                ? "text-primary-500"
                : "text-gray-400 hover:text-primary-500"
                }`}
              onClick={() => setActiveTab("apartment")}
            >
              <div
                className={`border-t-8 md:border-t-4 w-56 md:w-full flex flex-col gap-4 ${activeTab === "apartment"
                  ? "border-primary-500"
                  : "border-gray-400 hover:border-primary-500"
                  }`}
              >
                <p className="text-4xl font-bold mt-4">Apartment</p>
                <p className={`text-xl ${activeTab === "house" && "text-black"}`}>
                  Create your own apartment to align with your taste.
                </p>
              </div>
            </button>

            <button
              className={`text-left ${activeTab === "office"
                ? "text-primary-500"
                : "text-gray-400 hover:text-primary-500"
                }`}
              onClick={() => setActiveTab("office")}
            >
              <div
                className={`border-t-8 md:border-t-4 w-56 md:w-full flex flex-col gap-4 ${activeTab === "office"
                  ? "border-primary-500"
                  : "border-gray-400 hover:border-primary-500"
                  }`}
              >
                <p className="text-4xl font-bold mt-4">Office</p>
                <p className={`text-xl ${activeTab === "house" && "text-black"}`}>
                  Make your office more suitable than before.
                </p>
              </div>
            </button>

            <button
              className={`text-left ${activeTab === "hospitality"
                ? "text-primary-500"
                : "text-gray-400 hover:text-primary-500"
                }`}
              onClick={() => setActiveTab("hospitality")}
            >
              <div
                className={`border-t-8 md:border-t-4 w-56 md:w-full flex flex-col gap-4 ${activeTab === "hospitality"
                  ? "border-primary-500"
                  : "border-gray-400 hover:border-primary-500"
                  }`}
              >
                <p className="text-4xl font-bold mt-4">Hospitality</p>
                <p className={`text-xl ${activeTab === "house" && "text-black"}`}>
                  Create a comfortable hospitality for your guest.
                </p>
              </div>
            </button>
          </div>
        </div>
      </section>

      <section className="w-full flex items-center justify-center my-10 md:my-20 max-md:px-4">
        <div className="max-w-screen-xl flex flex-col">
          <div className="flex max-md:flex-col md:items-center justify-between text-left gap-4 w-full">
            <h2 className="text-3xl md:text-4xl text-primary-500 font-bold md:w-1/3">
              Joyful Process
            </h2>
            <p className="text-sm md:text-md md:w-2/3">
              Joyful process with vibrant enthusiasm. We bring ideas where
              excitement meets productivity. Experience the perfect blend of fun
              and efficiency in your lively and engaging workflow.
            </p>
          </div>
        </div>
      </section>

      <section className="lg:h-screen h-64 w-full">
        <Carousel
          slideInterval={5000}
          leftControl={<CustomLeftArrow />}
          rightControl={<CustomRightArrow />}
        >
          <div
            className="relative min-h-screen h-full bg-cover bg-center flex flex-col gap-4"
            style={{
              backgroundImage: "url('/assets/images/about/img-2-1.png')",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            <div className="relative max-w-screen-lg mx-10 md:mx-auto text-center flex flex-col justify-center items-center h-full text-white gap-2 md:gap-6">
              <h3 className="text-2xl md:text-4xl font-semibold">
                Consultation
              </h3>
              <h1 className="text-md md:text-3xl">
                We begin understanding your vision and requirements
              </h1>
            </div>
          </div>

          <div
            className="relative min-h-screen h-full bg-cover bg-center flex flex-col gap-4"
            style={{
              backgroundImage: "url('/assets/images/about/img-2-2.png')",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            <div className="relative max-w-screen-lg mx-10 md:mx-auto text-center flex flex-col justify-center items-center h-full text-white gap-2 md:gap-6">
              <h3 className="text-2xl md:text-4xl font-semibold">Design</h3>
              <h1 className="text-md md:text-3xl">
                Our team of skilled designers develop a comprehensive plan
              </h1>
            </div>
          </div>

          <div
            className="relative min-h-screen h-full bg-cover bg-center flex flex-col gap-4"
            style={{
              backgroundImage: "url('/assets/images/about/img-2-3.png')",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            <div className="relative max-w-screen-lg mx-10 md:mx-auto text-center flex flex-col justify-center items-center h-full text-white gap-2 md:gap-6">
              <h3 className="text-2xl md:text-4xl font-semibold">
                Construction
              </h3>
              <h1 className="text-md md:text-3xl">
                Utilizing the latest construction techniques and quality
                materials, we bring the design to life.
              </h1>
            </div>
          </div>

          <div
            className="relative min-h-screen h-full bg-cover bg-center flex flex-col gap-4"
            style={{
              backgroundImage: "url('/assets/images/about/img-2-4.png')",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            <div className="relative max-w-screen-lg mx-10 md:mx-auto text-center flex flex-col justify-center items-center h-full text-white gap-2 md:gap-6">
              <h3 className="text-2xl md:text-4xl font-semibold">
                Interior Finishing
              </h3>
              <h1 className="text-md md:text-3xl">
                Our interior designers ensure that every detail aligns with your
                aesthetic and functional preferences.
              </h1>
            </div>
          </div>
        </Carousel>
      </section>

      <section
        className="relative md:min-h-screen h-full bg-cover bg-center flex flex-col justify-center items-center gap-4 py-12 md:py-0 max-md:px-4"
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

export default About;
