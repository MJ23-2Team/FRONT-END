import { useState, useEffect, useMemo } from "react";
import { retrieveAll } from "./EducationStudent";
import { Link } from "react-router-dom";

const RetrieveAllEducationStudent = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    retrieveAll().then((res) => {
      setStudents(res.data);
    });
  }, []);

  const headers = [
    {
      text: "이름",
      value: "name",
    },
    {
      text: "성별",
      value: "gender",
    },
    {
      text: "나이",
      value: "age",
    },
    {
      text: "전화번호",
      value: "phone",
    },
  ];

  const tableData = useMemo(() => students, [students]);
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
                <Link
                  to={`/aboutEducationStudentPage`}
                  state={{ student: item }}
                >
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
export default RetrieveAllEducationStudent;
