import { Button, Carousel, CustomFlowbiteTheme } from "flowbite-react";
import { Tabs } from 'flowbite-react'
import React from 'react'


const About = () => {
    return (
        <>
            <section className="h-screen bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/images/about/bg-img-1.png')" }}
            >
                <div className="max-w-screen-xl h-screen mx-auto flex items-center">
                    <div className="flex flex-col text-left gap-4">
                        <h1 className="text-8xl text-primary-500 font-bold">We Help</h1>
                        <h1 className="text-8xl text-primary-500 font-bold">Realize Your</h1>
                        <h1 className="text-8xl text-second-500 font-bold">Your Style</h1>
                    </div>
                </div>
            </section>

            <section className="w-full flex items-center justify-center my-20">
                <div className="max-w-screen-lg flex flex-col">
                    <div className="flex items-center justify-between text-left gap-4">
                        <h2 className="text-4xl text-primary-500 font-bold w-1/3">Build Dreams</h2>
                        <p className="text-md w-2/3">
                            Welcome to Eightterior, your premier choice for corporate construction and interior solutions. With years of experience in the industry, we specialize in designing and constructing high-quality apartments, hospitality, houses, and office spaces.
                        </p>
                    </div>

                    <div className="flex flex-col my-20">
                        <img src="/assets/images/about/img-1.png" alt="img-1" />
                        <div className="grid grid-cols-4 gap-12 mt-16">
                            <button className="text-left">
                                <div className="border-t-4 border-primary-500 w-full flex flex-col gap-4">
                                    <p className="text-primary-500 text-2xl font-bold mt-4">House</p>
                                    <p className="text-lg">Build your own dream housenow.</p>
                                </div>
                            </button>
                            <button className="text-left">
                                <div className="border-t-4 border-primary-500 w-full flex flex-col gap-4">
                                    <p className="text-primary-500 text-2xl font-bold mt-4">House</p>
                                    <p className="text-lg">Build your own dream housenow.</p>
                                </div>
                            </button>
                            <button className="text-left">
                                <div className="border-t-4 border-primary-500 w-full flex flex-col gap-4">
                                    <p className="text-primary-500 text-2xl font-bold mt-4">House</p>
                                    <p className="text-lg">Build your own dream housenow.</p>
                                </div>
                            </button>
                            <button className="text-left">
                                <div className="border-t-4 border-primary-500 w-full flex flex-col gap-4">
                                    <p className="text-primary-500 text-2xl font-bold mt-4">House</p>
                                    <p className="text-lg">Build your own dream housenow.</p>
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className="flex text-left gap-4">
                        <h2 className="text-4xl text-primary-500 font-bold w-1/3">Joyful Process</h2>
                        <p className="text-md w-2/3">
                            Joyful process with vibrant enthusiasm. We bring ideas where excitement meets productivity. Experience the perfect blend of fun and efficiency in your lively and engaging workflow.
                        </p>
                    </div>
                </div>
            </section>

            <section className="h-screen w-full">
                <Carousel slideInterval={5000}>
                    <div className="relative min-h-screen h-full bg-cover bg-center flex flex-col gap-4"
                        style={{ backgroundImage: "url('/assets/images/about/img-2-1.png')" }}
                    >
                        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                        <div className="relative max-w-screen-lg mx-auto text-center flex flex-col justify-center items-center h-full text-white gap-6">
                            <h3 className="text-4xl font-semibold">Consultation</h3>
                            <h1 className="text-3xl">We begin understanding your vision and requirements</h1>
                        </div>
                    </div>

                    <div className="relative min-h-screen h-full bg-cover bg-center flex flex-col gap-4"
                        style={{ backgroundImage: "url('/assets/images/about/img-2-2.png')" }}
                    >
                        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                        <div className="relative max-w-screen-lg mx-auto text-center flex flex-col justify-center items-center h-full text-white gap-6">
                            <h3 className="text-4xl font-semibold">Design</h3>
                            <h1 className="text-3xl">Our team of skilled designers develop a comprehensive plan</h1>
                        </div>
                    </div>

                    <div className="relative min-h-screen h-full bg-cover bg-center flex flex-col gap-4"
                        style={{ backgroundImage: "url('/assets/images/about/img-2-3.png')" }}
                    >
                        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                        <div className="relative max-w-screen-lg mx-auto text-center flex flex-col justify-center items-center h-full text-white gap-6">
                            <h3 className="text-4xl font-semibold">Construction</h3>
                            <h1 className="text-3xl">Utilizing the latest construction techniques and quality materials, we bring the design to life.</h1>
                        </div>
                    </div>

                    <div className="relative min-h-screen h-full bg-cover bg-center flex flex-col gap-4"
                        style={{ backgroundImage: "url('/assets/images/about/img-2-4.png')" }}
                    >
                        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                        <div className="relative max-w-screen-lg mx-auto text-center flex flex-col justify-center items-center h-full text-white gap-6">
                            <h3 className="text-4xl font-semibold">Interior Finishing</h3>
                            <h1 className="text-3xl">Our interior designers ensure that every detail aligns with your aesthetic and functional preferences.</h1>
                        </div>
                    </div>
                </Carousel>
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

export default About