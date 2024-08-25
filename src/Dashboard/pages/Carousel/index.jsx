import { Button, Image, Input, Space, Table } from "antd";
import EditCarousel from "./edit";
import DeleteCarousel from "./delete";
import { Link } from "react-router-dom";
import HeaderTitle from "../../components/Global/HeaderTitle";
import { useEffect, useState } from "react";
import { getCarouselList } from "../../API/GetData";


const CarouselAbout = () => {

  const [dataSource, setDataSource] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getCarouselList();
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
      width: 80,
    },
    {
      title: "Gambar",
      width: 250,
      render: (_, record) => {
        return (
          <div>
            <Image
              src={record.foto}
              style={{ width: '250px', height: '140px', objectFit: 'cover' }}
            />
          </div>
        )
      }
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: 200,
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
      width: 300,
    },
    {
      title: "Action",
      fixed: "right",
      width: 100,
      render: (_, record) => (
        <Space>
          <EditCarousel onData={record} onEdit={fetchData} />
          <DeleteCarousel onData={record} onDelete={fetchData} />
        </Space>
      ),
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center px-2 pb-4">
        <HeaderTitle
          title="Carousel"
          subtitle="All data Carousel"
        />
        <div>
          <Link to="/dashboard/Carousel/form">
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
            x: 1000,
          }}
        />
      </div>
    </>
  );
};

export default CarouselAbout;
