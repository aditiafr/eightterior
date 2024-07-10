import React from 'react'

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
    ]

    return (
        <>
            <section className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center gap-4"
                style={{ backgroundImage: "url('assets/images/home/bg-img-1.png')" }}
            >
                <h1 className="text-8xl text-primary-500 font-bold">We Inspire</h1>
                <h1 className="text-8xl text-second-500 font-bold">Your Style</h1>
            </section>

            <section className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto my-28">
                <div className="flex justify-evenly items-center w-full gap-36">
                    <div className="relative flex justify-center items-center">
                        <img src="assets/images/home/img-2.png" alt="img-2" className="w-80 h-96 absolute top-10 left-10" />
                        <div className=" bg-primary-500 w-80 h-96  rounded-2xl"></div>
                        {/* <img src="assets/images/home/img-2.png" alt="img-2" className="w-80 " /> */}
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-primary-500 font-bold text-5xl">Eight<span className="text-second-500">terior</span></h2>
                        <p>PT. Delapan Mitra Interior</p>
                        <p className="leading-7 mt-4">
                            Welcome to Eightterior, your premier choice for corporate construction and interior solutions. With years of experience in the industry, we specialize in designing and constructing high-quality apartments, hospitality, houses, and office spaces.
                        </p>
                    </div>
                </div>
                <div className="w-full flex justify-evenly items-center mt-32 gap-36">
                    <div className="flex flex-col">
                        <h2 className="text-4xl text-primary-500 font-bold">What we do</h2>
                        <p className="mt-1">We can help realize your dream</p>
                        <button className="py-3 rounded-lg border-2 border-primary-500 text-primary-500 mt-6">ABOUT US</button>
                    </div>
                    <div className="grid grid-cols-2 gap-x-28 gap-y-12">
                        {pictHome.map((item, index) => (
                            (
                                <div key={index} className="flex flex-col items-center gap-2">
                                    <img src={item.imgUrl} alt={item.name} className="w-36" />
                                    <p>{item.name}</p>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-full flex items-center justify-between mx-auto">

                <div id="default-carousel" className="relative w-full" data-carousel="slide" data-carousel-interval="5000">

                    <div className="relative h-screen overflow-hidden">

                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="assets/images/home/carousel/img-1.png" className="absolute block w-full h-full object-cover" alt="..." />
                            <div className="absolute inset-0 flex flex-col justify-center items-start bg-black bg-opacity-50 gap-8">
                                <div className="flex flex-col justify-center ml-64 text-white gap-3">
                                    <h3 className="text-2xl">RECENT PROJECT</h3>
                                    <h1 className="text-4xl font-semibold">HOTEL GAIA</h1>
                                </div>
                                <button className="ml-64 text-white border-2 w-44 h-12 rounded-lg text-sm hover:bg-white hover:text-primary-500 hover:font-bold">LEARN MORE</button>
                            </div>
                        </div>

                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="assets/images/home/carousel/img-2.png" className="absolute block w-full h-full object-cover" alt="..." />
                            <div className="absolute inset-0 flex flex-col justify-center items-start bg-black bg-opacity-50 gap-8">
                                <div className="flex flex-col justify-center ml-64 text-white gap-3">
                                    <h3 className="text-2xl">RECENT PROJECT</h3>
                                    <h1 className="text-4xl font-semibold">MINIMALISM KITCHEN</h1>
                                </div>
                                <button className="ml-64 text-white border-2 w-44 h-12 rounded-lg text-sm hover:bg-white hover:text-primary-500 hover:font-bold">LEARN MORE</button>
                            </div>
                        </div>

                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="assets/images/home/carousel/img-3.png" className="absolute block w-full h-full object-cover" alt="..." />
                            <div className="absolute inset-0 flex flex-col justify-center items-start bg-black bg-opacity-50 gap-8">
                                <div className="flex flex-col justify-center ml-64 text-white gap-3">
                                    <h3 className="text-2xl">RECENT PROJECT</h3>
                                    <h1 className="text-4xl font-semibold">PT. PUNDI MITRA MANDIRI</h1>
                                </div>
                                <button className="ml-64 text-white border-2 w-44 h-12 rounded-lg text-sm hover:bg-white hover:text-primary-500 hover:font-bold">LEARN MORE</button>
                            </div>
                        </div>

                        <div className="hidden duration-700 ease-in-out" data-carousel-item>
                            <img src="assets/images/home/carousel/img-4.png" className="absolute block w-full h-full object-cover" alt="..." />
                            <div className="absolute inset-0 flex flex-col justify-center items-start bg-black bg-opacity-50 gap-8">
                                <div className="flex flex-col justify-center ml-64 text-white gap-3">
                                    <h3 className="text-2xl">RECENT PROJECT</h3>
                                    <h1 className="text-4xl font-semibold">RUMAH IBU ANDIRA</h1>
                                </div>
                                <button className="ml-64 text-white border-2 w-44 h-12 rounded-lg text-sm hover:bg-white hover:text-primary-500 hover:font-bold">LEARN MORE</button>
                            </div>
                        </div>

                    </div>

                    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    </div>

                    <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>

            </section>


            <section id="ulasan" className="flex items-center justify-between mx-auto my-28">
                <div className="relative flex items-center w-full">
                    <img src="assets/images/home/img-3.png" alt="..." className="w-1/2" />
                    <div className="flex absolute right-0 overflow-x-auto gap-4 p-4">
                        <div className="bg-white p-14 shadow-gray-400 shadow-sm rounded-lg flex flex-col gap-4">
                            <p>Terima kasih Eightterior karena telah mewujudkan rumah impian saya. Design dari Eightterior sangat mengedepankan aspek fungsionalitas serta keindahan di dalamnya. Keren banget!</p>
                            <div className="flex flex-col">
                                <p className="text-primary-500 font-semibold">Ibu Andira</p>
                                <p>Project Re-Design Kitchen</p>
                            </div>
                        </div>
                        <div className="bg-white p-14 shadow-gray-400 shadow-sm rounded-lg flex flex-col gap-4">
                            <p>Eightterior telah membantu Hotel GAIA untuk mewujudkan konsep hotel bergaya industrial dengan memperhatikan green space pada design nya.</p>
                            <div className="flex flex-col">
                                <p className="text-primary-500 font-semibold">Hotel GAIA</p>
                                <p>Project Industrial Style Hotel</p>
                            </div>
                        </div>
                        {/* Add more reviews here if needed */}
                    </div>
                </div>
            </section>

            <section className="relative min-h-screen h-full bg-cover bg-center flex flex-col justify-center items-center gap-4"
                style={{ backgroundImage: "url('assets/images/home/bg-img-2.png')" }}
            >
                <div className="absolute inset-0 bg-blue-800 opacity-80 z-0"></div>
                <div className="relative z-10 flex flex-col items-center gap-8 text-white">
                    <h2 className="text-4xl font-bold">Interested?</h2>
                    <p className="text-center max-w-2xl">
                        Reach us if you have any questions regarding anything related to our services, we will help you to find the solutions for your needs!
                    </p>
                    <button className="bg-white text-primary-500 w-52 h-14 rounded-lg text-sm hover:font-bold hover:bg-transparent hover:border-4 hover:text-white">CONTACT US</button>
                </div>
            </section>


        </>
    )
}

export default Home