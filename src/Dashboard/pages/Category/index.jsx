import { Button, Carousel, Image, Input, Space, Table } from "antd";
// import EditProject from "./edit";
// import DeleteProject from "./delete";
import { Link } from "react-router-dom";
import HeaderTitle from "../../components/Global/HeaderTitle";
import { useEffect, useState } from "react";
import { getCategoryList } from "../../API/GetData";
import EditCategory from "./edit";
import DeleteCategory from "./delete";

const Category = () => {

  const [dataSource, setDataSource] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getCategoryList();
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
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Action",
      fixed: "right",
      render: (_, record) => (
        <Space>
          <EditCategory onData={record} onEdit={fetchData} />
          <DeleteCategory />
        </Space>
      ),
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center px-2 pb-4">
        <HeaderTitle
          title="CATEGORY"
          subtitle="All data Category"
        />
        <div>
          <Link to="/dashboard/category/form">
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
        // scroll={{
        //   x: 1000,
        // }}
        />
      </div>
    </>
  );
};

export default Category;
