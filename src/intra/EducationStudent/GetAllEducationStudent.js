import { useState, useEffect } from 'react';
import { getAll, pass } from "./EducationStudent";

const GetAllEducationStudent = () => {
    const [ students, setStudents ] = useState( [] );

    useEffect( () => {
        getAll().then( (res) => { setStudents( res.data.data ); });
    }, [] );

    const onSubmitHandlePass = (index) => {
        pass( index ).then( (res) => alert( res.data.message ) );
    };

    return (
        <div>
            <div> 학생 정보 불러오기 </div>
            { students && students.map( (user, index ) => {
                return (
                    <div key={index}>
                        <div> ======================================= </div>
                        { user && Object.entries( user ).map( ([key, value] ) => (
                            <div key={key}>{`${key} : ${value}`}</div>
                        ))}
                    </div>
                );
            })}
        </div>
    );
};
export default GetAllEducationStudent;