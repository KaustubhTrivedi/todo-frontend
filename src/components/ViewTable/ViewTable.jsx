import { Table } from "antd";
const ViewTable = () => {
  const dataSource = [
    { key: 1, name: "Kaustubh", email: "kaus12tri@gmail.com" },
    { key: 2, name: "Hemanshi", email: "Hemanshi@gmail.com" },
    { key: 3, name: "Vishal", email: "Vishal@gmail.com" },
    { key: 4, name: "Akash", email: "Akash@gmail.com" },
  ];

  const columns = [
    {
      title: "Key",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default ViewTable;
