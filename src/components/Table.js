import React, { useEffect, useState } from "react";

const Table = () => {
  const [data, setData] = useState();

  return (
    <div>
      {data?.data.map((val, index) => {
        <table>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
        </table>;
      })}
    </div>
  );
};

export default Table;
