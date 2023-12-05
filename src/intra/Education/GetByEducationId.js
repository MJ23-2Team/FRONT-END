import { useState, useEffect, useMemo } from "react";
import { getByEducationId } from "./Education";
import { useLocation, Link } from "react-router-dom";

const GetByEducationId = () => {
    const [ educations, setEducations ] = useState( [] );

    const location = useLocation();
    const education = location.state.education;

    useEffect( () => { 
        getByEducationId( education.educationID ).then( (res) => { setEducations( res.data ); });
    }, [] );

    const headers = [
        {
            text: "교육 이름",
            value: "name"
        },
        {
            text: "교육 장소",
            value: "place"
        },
        {
            text: "교육 내용",
            value: "content"
        },
        {
            text: "교육 기간",
            value: "duration"
        },
        {
            text: "교육 예산",
            value: "budget"
        },
        {
            text: "강사 이름",
            value: "teacher_name"
        },
        {
            text: "강사 번호",
            value: "teacher_phone_number"
        }
    ];
    const tableData = useMemo( () => educations, [educations] );
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
                        <Link to={`/aboutEducationPage`} state={{ education: item }}>
                          {item[key]}
                        </Link>
                      </td>
                    )
                  }
                </tr>
              ))
            }
          </tbody>
        </table>
    );
}
export default GetByEducationId;