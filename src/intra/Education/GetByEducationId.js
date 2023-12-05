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

    return (
      <div>
        <div> 교육 이름: {educations.name} </div>
        <div> 교육 예산: {educations.budget} </div>
        <div> 교육 장소: {educations.place} </div>
        <div> 교육 내용: {educations.content} </div>
        <div> 교육 기간: {educations.duration} </div>
        <div> 강사 이름: {educations.teacher_name} </div>
        <div> 강사 번호: {educations.teacher_phone_number} </div>
      </div>
    );
}
export default GetByEducationId;