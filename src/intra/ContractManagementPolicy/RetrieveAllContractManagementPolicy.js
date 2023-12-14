import { useState, useEffect, useMemo } from "react";
import { retrieveAll } from "./ContractManagemetPolicy";
import { Link } from "react-router-dom";

const RetrieveAllContractMangementPolicy = () => {
  const [policys, setPolicys] = useState([]);

  useEffect(() => {
    retrieveAll().then((res) => {
      setPolicys(res.data);
    });
  }, []);

  const headers = [
    {
      text: "정책 이름",
      value: "name",
    },
    {
      text: "정책 내용",
      value: "content",
    },
  ];
  const tableData = useMemo(() => policys, [policys]);

  const headerKey = headers.map((header) => header.value);

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header.text}>{header.text}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => (
          <tr key={index}>
            {headerKey.map((key) => (
              <td key={key + index}>
                <Link to={`/aboutEducationPage`} state={{ education: item }}>
                  {item[key]}
                </Link>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default RetrieveAllContractMangementPolicy;
