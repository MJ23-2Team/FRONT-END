import { useState, useEffect, useMemo } from "react";
import { getById } from "./EducationStudent";
import { useLocation, Link } from "react-router-dom";

const GetEducationStudent = () => {
    const [ students, setStudents ] = useState( [] );

    const location = useLocation();
    const student = location.state.student;

    useEffect( () => {
        getById( student.studentID ).then( (res) => { setStudents( res.data); });
    }, [] );

    return (
        <div>
            <div> 이름: { students.name }</div>
            <div> 성별: { students.gender } </div>
            <div> 나이: { students.age } </div>
            <div> 전화번호: { students.phone } </div>
        </div>
    );
};
export default GetEducationStudent;