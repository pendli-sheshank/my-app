import MaterialTable from "material-table";
import React, { useEffect, useState } from "react";
import tableIcons from "./tableIcons";
import { useLocation } from "react-router-dom";

const Table = () => {
  const [data, setData] = useState();
  const path = useLocation();

  const handleDelete = (rowData) => {
    let id = rowData.id;
    console.log(id);
    console.log("rowData--->", rowData);

    let filterdData = data.filter((val) => val.id !== rowData.id);

    console.log("filterdData==>", filterdData);
    setData(filterdData);
    localStorage.setItem("data", JSON.stringify(filterdData));
  };

  const handleEdit = (rowData) => {
    let id = rowData.tableData.id;
    console.log("Edit Id--->", id);
    window.location.href = "/edit/" + id;
  };

  const columns = [
    {
      title: "First Name",
      field: "firstNameValue",
    },
    {
      title: "Last Name",
      field: "lastNameValue",
    },
    {
      title: "Mobile Number",
      field: "numberValue",
    },
    {
      title: "Email",
      field: "emailValue",
    },
    {
      title: "Edit",
      render: (rowData) => (
        <div>
          <button
            onClick={() => handleEdit(rowData)}
            className="btn btn-sm text-light btn-info"
          >
            Edit
          </button>
        </div>
      ),
    },
    {
      title: "Delete",
      render: (rowData) => (
        <div>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => handleDelete(rowData)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    let getData = JSON.parse(localStorage.getItem("data"));
    console.log("getData--->", getData);
    console.log("path===>", path);

    setData(getData);
  }, []);

  return (
    <div className="App p-5">
      <MaterialTable
        title="Members List"
        icons={tableIcons}
        data={data}
        columns={columns}
      />
    </div>
  );
};

export default Table;
