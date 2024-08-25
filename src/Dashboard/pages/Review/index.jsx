import React, { useEffect, useState } from 'react'
import HeaderTitle from '../../components/Global/HeaderTitle'
import { Link } from 'react-router-dom'
import { Button, Input, Space, Table } from 'antd'
import { getReviewList } from '../../API/GetData'
import EditReview from './edit'
import DeleteReview from './delete'

const Review = () => {

    const [dataSource, setDataSource] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await getReviewList();
            setDataSource(response);
        } catch (error) {
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
            width: 80
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            width: 200
        },
        {
            title: "Name Project",
            dataIndex: "name_project",
            key: "name_project",
            width: 250
        },
        {
            title: "Description",
            dataIndex: "deskripsi",
            key: "deskripsi",
            width: 500
        },
        {
            title: "Action",
            fixed: "right",
            width: 100,
            render: (_, record) => (
                <Space>
                    <EditReview onData={record} onEdit={fetchData} />
                    <DeleteReview nData={record} onDelete={fetchData} />
                </Space>
            ),
        },
    ];

    return (
        <>
            <div className="flex justify-between items-center px-2 pb-4">
                <HeaderTitle
                    title="REVIEW"
                    subtitle="All data Review"
                />
                <div>
                    <Link to="/dashboard/review/form">
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
                    rowSelection
                    columns={columns}
                    dataSource={filteredData}
                    pagination={{
                        showSizeChanger: true,
                        defaultPageSize: 10,
                    }}
                    scroll={{
                        x: 500,
                    }}
                />
            </div>
        </>
    )
}

export default Review