import { useState } from "react";
import { save } from "./EducationStudent";

const EstablishEducationStudent = () => {
    const [ data, setData ] = useState( {} );
    const onHandleChangeData = (e) => {
        setData( prevData => ( { ...prevData, [e.target.name]: e.target.value }));
    };
    const onSubmitHandle = () => {
        if( data.name && data.phone && data.age ) {
            save( data ).then( (res) => 
                alert( res.data.message ));
        } else {
            alert( "Input Data" );
        }
    };

    return (
        <>
            <div> 학생 이름 </div>
            <input type="text" name="name" placeholder="name" onChange={(e) => onHandleChangeData(e)} />
            <div> 나이 </div>
            <input type="number" name="age" placeholder="1" onChange={(e) => onHandleChangeData(e)} />
            <div> 전화번호 </div>
            <input type="text" name="phone" placeholder="phone" onChange={(e) => onHandleChangeData(e)} />
        </>
    );
};