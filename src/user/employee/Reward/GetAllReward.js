import { useState, useEffect, useMemo } from "react";
import { getAll } from "./Reward";

const GetAllRewards = () => {
    const [ rewards, setRewards ] = useState( [] );

    useEffect( () => {
        getAll().then( (res) => { setRewards( res.data.data )});
    }, [] );

    const headers = [
        {
            text: "신청자",
            value: "customer_name"
        },
        {
            text: "신청 날짜",
            value: "appli_date",
        },
        {
            text: "상태",
            value: "appli_result",
        },
        {
            text: "내용",
            value: "content",
        }
    ];
    const tableData = useMemo( () => rewards, [rewards] );
    const headerKey = headers.map( (header) => header.value );
    return (
        <table>
          <thead>
            <tr>
            {
                headers.map((header) => 
                <th key={header.text}>
                    {header.text}
                </th> 
                )
            }
            </tr>
          </thead>
          <tbody>
            {
              tableData.map((item, index) => (
                <tr key={index}>
                  { 
                    headerKey.map((key) => 
                      <td key={key + index}>
                        {item[key]}
                      </td>
                    )
                  }
                </tr>
              ))
            }
          </tbody>
        </table>
    );
};
export default GetAllRewards;