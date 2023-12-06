import { useState } from "react";
import { save } from "./EducationStudent";
import { Link, useLocation, useNavigate } from "react-router-dom";

const EstablishEducationStudent = () => {
    const location = useLocation();
    const education = location.state.education;
    const navigate = useNavigate();
    const [ data, setData ] = useState( {} );

    data.educationID = education.educationID;

    const onHandleChangeData = (e) => {
        setData( prevData => ( { ...prevData, [e.target.name]: e.target.value }));
    };
    const onSubmitHandle = () => {
        if( data.name && data.phone && data.age ) {
            save( data ).then( (res) => 
                navigate( "/home" ));
        } else {
            alert( "Input Data" );
        }
    };
    const debug = () => {
        console.log( data );
    }

    return (
        <>
            <div> 학생 이름 </div>
            <input type="text" name="name" placeholder="name" onChange={(e) => onHandleChangeData(e)} />
            <div> 나이 </div>
            <input type="number" name="age" placeholder="1" onChange={(e) => onHandleChangeData(e)} />
            <div> 전화번호 </div>
            <input type="text" name="phone" placeholder="phone" onChange={(e) => onHandleChangeData(e)} />
            <Link to="/educationStudent/add">
                <button onClick={ () => { onSubmitHandle(); } }>
                    등록
                </button>
            </Link>
            <button onClick={ () => debug()}> DEBUG </button>
        </>
    );
};
export default EstablishEducationStudent;