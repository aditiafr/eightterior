import { Button, Carousel, Image, Input, Space, Table, Tag } from "antd";
import EditProject from "./edit";
import DeleteProject from "./delete";
import { Link } from "react-router-dom";
import HeaderTitle from "../../components/Global/HeaderTitle";
import { useEffect, useState } from "react";
import { getProjectList } from "../../API/getData";
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const columns = [
    {
        title: "No",
        dataIndex: "key",
        key: "key",
        width: 80,
    },
    {
        title: "Gambar",
        width: 150,
        render: (_, record) => {
            return (

                <Carousel autoplay arrows infinite={false}>
                    {record.foto1 && (
                        <div>
                            <Image
                                src={record.foto1}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    )}
                    {record.foto2 && (
                        <div>
                            <Image
                                src={record.foto2}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    )}
                    {record.foto3 && (
                        <div>
                            <Image
                                src={record.foto3}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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
        title: "Category Name",
        dataIndex: "category_name",
        key: "category_name",
        width: 150,
    },
    {
        title: "Action",
        fixed: "right",
        width: 100,
        render: (_, record) => (
            <Space>
                <EditProject />
                <DeleteProject />
            </Space>
        ),
    },
];

const Project = () => {

    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await getProjectList();
            setDataSource(response);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

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
                    <Search
                        placeholder="Search..."
                        onSearch={onSearch}
                        style={{
                            width: 200,
                        }}
                    />
                </div>
                <Table
                    loading={loading}
                    rowSelection
                    columns={columns}
                    dataSource={dataSource}
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
