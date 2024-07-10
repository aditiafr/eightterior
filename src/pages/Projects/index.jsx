import React from 'react'

const Projects = () => {
    return (
        <>
            <section className="max-w-screen-xl flex flex-col items-center justify-center mx-auto mt-24">
                <h1 className="text-[180px] text-primary-500 font-bold w-full text-center">SATISF<span className="text-second-500">ACTION</span></h1>
                <div className="flex items-center justify-between w-full px-14 gap-40 mt-4">
                    <p className="w-full text-2xl">
                        Customer satisfaction is our main objective. We prioritize functional design yet still keep an eye on its aesthetic aspects. Find your needs from our recent projects.
                    </p>
                    <div className="w-full flex text-center items-center justify-between">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-5xl text-primary-500 font-bold">50+</h2>
                            <p className="text-2xl">Happy Client</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h2 className="text-5xl text-second-500 font-bold">50+</h2>
                            <p className="text-2xl">Project Finished</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 w-full p-12 mt-10 rounded-xl">
                    <img src="assets/images/projects/img-1.png" alt="img-1" />
                    <div className="flex gap-6 mt-6">
                        <img src="assets/images/projects/img-2.png" alt="img-2" />
                        <div className="flex flex-col gap-4 w-full">
                            <img src="assets/images/projects/img-3.png" alt="img-3" />
                            <img src="assets/images/projects/img-4.png" alt="img-4" />
                        </div>
                        <div className="flex flex-col items-start gap-4">
                            <h2 className="text-primary-500 text-4xl font-bold">Rumah Ibu Andira</h2>
                            <p className="text-lg leading-relaxed">
                                Modern kitchen with a minimalism design. We bring ideas where passion meets joy. Cook is a passion while you can enjoy your passion in your beautiful and functionalized kitchen.
                            </p>
                            <button className="border-4 w-64 h-16 border-primary-500 rounded-xl text-primary-500 hover:bg-primary-500 hover:text-white hover:font-bold">SEE PROJECT</button>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 w-full p-12 mt-10 rounded-xl">
                    <img src="assets/images/projects/img-5.png" alt="img-5" />
                    <div className="flex gap-6 mt-6">
                        <img src="assets/images/projects/img-6.png" alt="img-6" />
                        <div className="flex flex-col gap-4 w-full">
                            <img src="assets/images/projects/img-7.png" alt="img-7" />
                            <img src="assets/images/projects/img-8.png" alt="img-8" />
                        </div>
                        <div className="flex flex-col items-start gap-4">
                            <h2 className="text-primary-500 text-4xl font-bold">PT. Pundi Mitra Mandiri</h2>
                            <p className="text-lg leading-relaxed">
                                Simple office with a sleek efficiency. We bring ideas where clarity meets productivity. Experience the perfect blend of minimalist design and functional elegance in your organized and efficient workspace.
                            </p>
                            <button className="border-4 w-64 h-16 border-primary-500 rounded-xl text-primary-500 hover:bg-primary-500 hover:text-white hover:font-bold">SEE PROJECT</button>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 w-full p-12 mt-10 rounded-xl">
                    <img src="assets/images/projects/img-9.png" alt="img-9" />
                    <div className="flex gap-6 mt-6">
                        <img src="assets/images/projects/img-10.png" alt="img-10" />
                        <div className="flex flex-col gap-4 w-full">
                            <img src="assets/images/projects/img-11.png" alt="img-11" />
                            <img src="assets/images/projects/img-12.png" alt="img-12" />
                        </div>
                        <div className="flex flex-col items-start gap-4">
                            <h2 className="text-primary-500 text-4xl font-bold">Hotel GAIA</h2>
                            <p className="text-lg leading-relaxed">
                                Industrial hotel style with an edgy sophistication. We bring ideas where raw beauty meets comfort. Experience the perfect blend of industrial charm and modern luxury in your stylish space.
                            </p>
                            <button className="border-4 w-64 h-16 border-primary-500 rounded-xl text-primary-500 hover:bg-primary-500 hover:text-white hover:font-bold">SEE PROJECT</button>
                        </div>
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

export default Projects