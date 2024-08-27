import { Button, Carousel, Image, Input, Space, Table } from "antd";
import EditProject from "./edit";
import DeleteProject from "./delete";
import { Link } from "react-router-dom";
import HeaderTitle from "../../components/Global/HeaderTitle";
import { useEffect, useState } from "react";
import { getProjectList } from "../../API/GetData";


const Project = () => {

    useEffect(() => {
        document.title = "Eightterior - Project";
    }, []);
    
    const [dataSource, setDataSource] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await getProjectList();
            setDataSource(response);
        } catch (error) {
            setDataSource([]);
            console.log(error);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };

    const filteredData = dataSource.filter((item) =>
        Object.values(item).some(
            (val) => val && val.toString().toLowerCase().includes(searchText.toLowerCase())
        )
    );


    const columns = [
        {
            title: "No",
            dataIndex: "key",
            key: "key",
            width: 60,
        },
        {
            title: "Gambar",
            width: 250,
            render: (_, record) => {
                return (

                    <Carousel autoplay arrows infinite={false}>
                        {record.foto1 && (
                            <div>
                                <Image
                                    src={record.foto1}
                                    style={{ width: '250px', height: '140px', objectFit: 'cover' }}
                                />
                            </div>
                        )}
                        {record.foto2 && (
                            <div>
                                <Image
                                    src={record.foto2}
                                    style={{ width: '250px', height: '140px', objectFit: 'cover' }}
                                />
                            </div>
                        )}
                        {record.foto3 && (
                            <div>
                                <Image
                                    src={record.foto3}
                                    style={{ width: '250px', height: '140px', objectFit: 'cover' }}
                                />
                            </div>
                        )}
                        {record.foto4 && (
                            <div>
                                <Image
                                    src={record.foto4}
                                    style={{ width: '250px', height: '140px', objectFit: 'cover' }}
                                />
                            </div>
                        )}
                    </Carousel>

                    // <div className="relative flex gap-4">
                    //     <Image
                    //         // width={200}
                    //         src={record.foto1}
                    //     />
                    //     <Image
                    //         // width={200}
                    //         src={record.foto1}
                    //     />
                    //     <Image
                    //         // width={200}
                    //         src={record.foto1}
                    //     />
                    // </div>
                )
            }
        },
        {
            title: "Name Project",
            dataIndex: "name",
            key: "name",
            width: 200,
        },
        {
            title: "Name Client",
            dataIndex: "name_client",
            key: "name_client",
            width: 150,
        },
        {
            title: "Category Name",
            dataIndex: "category_name",
            key: "category_name",
            width: 200,
        },
        {
            title: "Area",
            dataIndex: "area",
            key: "area",
            width: 150,
        },
        {
            title: "Location",
            dataIndex: "location",
            key: "location",
            width: 200,
        },
        {
            title: "Year",
            dataIndex: "year",
            key: "year",
            width: 150,
        },
        {
            title: "Description",
            dataIndex: "deskripsi",
            key: "deskripsi",
            width: 300,
        },
        {
            title: "Action",
            fixed: "right",
            width: 100,
            render: (_, record) => (
                <Space>
                    <EditProject onData={record} onEdit={fetchData} />
                    <DeleteProject onData={record} onDelete={fetchData} />
                </Space>
            ),
        },
    ];

    return (
        <>
            <div className="flex justify-between items-center px-2 pb-4">
                <HeaderTitle
                    title="PROJECT"
                    subtitle="All data Project"
                />
                <div>
                    <Link to="/dashboard/project/form">
                        <Button type="primary">+ Add New</Button>
                    </Link>
                </div>
            </div>
            <div className="w-full bg-white p-4 rounded-lg">
                <div className="w-full flex justify-end pb-4">
                    <Input
                        placeholder="search..."
                        allowClear
                        value={searchText}
                        onChange={handleSearch}
                        style={{ width: 200 }}
                    />
                </div>
                <Table
                    loading={loading}
                    // rowSelection
                    columns={columns}
                    dataSource={filteredData}
                    pagination={{
                        showSizeChanger: true,
                        defaultPageSize: 10,
                    }}
                    scroll={{
                        x: 1000,
                    }}
                />
            </div>
        </>
    );
};

export default Project;
