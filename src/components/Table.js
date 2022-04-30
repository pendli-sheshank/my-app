import MaterialTable from "material-table";
import React, { useEffect, useState } from "react";
import tableIcons from './tableIcons';

const Table = () => {
  const [data, setData] = useState();

  const handleDelete =(rowData)=>{
    let id = rowData.id
    console.log(id)
    console.log("rowData--->",rowData)
   
    
    
  }


  const columns = [

    {
    title:"First Name",
    field:"firstNameValue"
    },
    {
    title:"Last Name",
    field:"lastNameValue"
    },
    {
    title:"Mobile Number",
    field:"numberValue"
    },
    {
    title:"Email",
    field:"emailValue"
    },
    {
      title:"Edit",
      render:(rowData)=>(
        <div>
        <button className="btn btn-sm text-light btn-info" >Edit</button>
        </div>
      )
      
    },
    {
      title:"Delete",
      render:(rowData)=>(
        <div>
        <button className="btn btn-sm btn-danger" onClick={()=>handleDelete(rowData)} >Delete</button>
        </div>
      )
    }
  ]

  useEffect(() => {
    let getData = JSON.parse(localStorage.getItem("data"));
    console.log("getData--->", getData);
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
