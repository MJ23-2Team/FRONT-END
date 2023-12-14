import { useState, useEffect, useMemo } from "react";
import { retrieveAll } from "./Education";
import { Link } from "react-router-dom";

const RetrieveAllEducation = () => {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    retrieveAll().then((res) => {
      setEducations(res.data);
    });
  }, []);

  const headers = [
    {
      text: "교육 이름",
      value: "name",
    },
    {
      text: "교육 예산",
      value: "budget",
    },
    {
      text: "교육 기간",
      value: "duration",
    },
    {
      text: "교육 내용",
      value: "content",
    },
    {
      text: "교육 장소",
      value: "place",
    },
  ];
  const tableData = useMemo(() => educations, [educations]);

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
export default RetrieveAllEducation;
