import { useState, useEffect } from "react";
import { retrieveById } from "./EducationStudent";
import { useLocation } from "react-router-dom";

const RetrieveEducationStudent = () => {
  const [students, setStudents] = useState([]);

  const location = useLocation();
  const student = location.state.student;

  useEffect(() => {
    retrieveById(student.studentID).then((res) => {
      setStudents(res.data);
    });
  });

  return (
    <div>
      <div> 이름: {students.name}</div>
      <div> 성별: {students.gender} </div>
      <div> 나이: {students.age} </div>
      <div> 전화번호: {students.phone} </div>
    </div>
  );
};
export default RetrieveEducationStudent;
