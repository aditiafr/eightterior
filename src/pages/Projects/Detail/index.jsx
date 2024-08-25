import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const DetailProject = () => {

    const params = useParams();
    const { id } = params;
    const [dataSource, setDataSource] = useState([]);

    const fecthDetailProject = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BASEURL}/v1/project/list-limit/${id}`);
            console.log(res.data.data);
            setDataSource(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fecthDetailProject();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        dataSource.map((item, idx) => (
            <div key={idx}>
                <section className="max-w-screen-lg flex flex-col justify-center items-center mx-auto bg-white mt-24 md:mt-32 mb-10 gap-10">
                    <div className="flex flex-col justify-center items-center gap-2 md:gap-4">
                        <h1 className="text-4xl md:text-7xl text-primary-500 font-bold">
                            {item.name_client}
                        </h1>
                        <p className="text-xl md:text-4xl">{item.name}</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-6 md:gap-8 w-full">
                        <img
                            src={`${item.foto1}`}
                            alt="img-1"
                            className="w-full md:rounded-xl h-[300px] md:h-[600px] object-cover "
                        />
                        <div className="w-full flex flex-col md:flex-row justify-between gap-6 md:gap-8 font-light">
                            <p className="md:w-full text-sm md:text-2xl md:leading-relaxed leading-relaxed px-4 md:px-0 text-justify">
                                {item.deskripsi}
                            </p>

                            <div className="w-full grid grid-cols-2 px-4 md:px-4 text-[12px] md:text-md gap-8">
                                <div className="flex items-center gap-4 w-full">
                                    <img
                                        src="/assets/images/projects/icons/location.png"
                                        alt="location"
                                        className="w-6 h-auto"
                                    />
                                    <p>{item.location}</p>
                                </div>
                                <div className="flex items-center gap-4 w-full">
                                    <img
                                        src="/assets/images/projects/icons/category.png"
                                        alt="category"
                                        className="w-6 h-auto"
                                    />
                                    <p>{item.category_name}</p>
                                </div>
                                <div className="flex items-center gap-4 w-full">
                                    <img
                                        src="/assets/images/projects/icons/year.png"
                                        alt="year"
                                        className="w-6 h-auto"
                                    />
                                    <p>{item.year}</p>
                                </div>
                                <div className="flex items-center gap-4 w-full">
                                    <img
                                        src="/assets/images/projects/icons/area.png"
                                        alt="area"
                                        className="w-6 h-auto"
                                    />
                                    <p>{item.area}</p>
                                </div>
                            </div>

                            <div className="flex flex-col justify-around px-4 md:px-0 gap-6">
                                <div className="flex text-[12px] md:text-lg justify-between w-full gap-3 md:gap-0">

                                </div>
                                <div className="flex text-[12px] md:text-lg justify-between w-full gap-3 md:gap-0">

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full px-4 md:px-0">
                    <div className="max-w-screen-lg mx-auto flex flex-col gap-10 md:gap-16 mb-20">
                        <img
                            src={`${item.foto2}`}
                            alt="img-2"
                            className="w-full md:rounded-xl h-[300px] md:h-[600px] object-cover rounded-xl"
                        />
                        <img
                            src={`${item.foto3}`}
                            alt="img-5"
                            className="w-full md:rounded-xl h-[300px] md:h-[600px] object-cover rounded-xl"
                        />
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
            </div>
        ))
    );
};

export default DetailProject;
