import React, { useEffect, useState } from "react";

const Table = () => {
  const [data, setData] = useState();

  useEffect(() => {
    let getData = JSON.parse(localStorage.getItem("data"));
    console.log("getData--->", getData);
    setData(getData);
  }, []);

  return (
    <div className="App">
      {data &&
        data.map((val, index) => {
          return (
            <>
              <table className="table-row">
                <th>Name</th>
                <th>Email</th>
                <tr>
                  <td>{val.firstNameValue}</td>
                  <td>{val.emailValue}</td>
                </tr>
              </table>
            </>
          );
        })}
      ;
    </div>
  );
};

export default Table;
