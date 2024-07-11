import React from 'react'

const Detail2 = () => {
    return (
        <>

            <section className="max-w-screen-lg flex flex-col justify-center items-center mx-auto bg-white mt-32 mb-10 gap-10">
                <div className="flex flex-col justify-center items-center gap-4">
                    <h1 className="text-8xl text-primary-500 font-bold">Hotel GAIA</h1>
                    <p className="text-4xl">Industrial Hotel</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-10">
                    <img src="/assets/images/projects/img-9.png" alt="img-9" className="w-full" />
                    <p className="text-xl leading-relaxed">
                        Industrial hotel style with an edgy sophistication. We bring ideas where raw beauty meets comfort. Experience the perfect blend of industrial charm and modern luxury in your stylish and functionalized space.
                    </p>
                </div>
                <div className="flex items-center justify-between gap-28 w-full">
                    <img src="/assets/images/projects/img-2-1.png" alt="img-2-1" className="w-1/3" />
                    <div className="flex flex-col gap-6 w-full">
                        <h1 className="text-4xl text-primary-500 font-bold">Industrial Design</h1>
                        <p className="text-xl leading-8">
                            Modern design ornament that used in the kitchen will bring you a joy of every single food cooked in your kitchen. We believe a kitchen should be beautiful yet still functionable on every aspects within it.
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-between-reverse gap-28 w-full">
                    <div className="flex flex-col gap-6 w-full">
                        <h1 className="text-4xl text-primary-500 font-bold">Green Space</h1>
                        <p className="text-xl leading-8">
                            Green space with a refreshing tranquility. We bring ideas where nature meets harmony. Experience the perfect blend of lush greenery and modern elegance in your serene and functionalized environment.
                        </p>
                    </div>
                    <img src="/assets/images/projects/img-2-1.png" alt="img-2-1" className="w-1/3" />
                </div>
            </section>

            <section className="relative min-h-screen h-full bg-cover bg-center flex flex-col justify-center items-center gap-4"
                style={{ backgroundImage: "url('/assets/images/home/bg-img-2.png')" }}
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

export default Detail2