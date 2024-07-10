import React from 'react'

const Projects = () => {
    return (
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
        </section>
    )
}

export default Projects