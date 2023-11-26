import { useState, useEffect } from "react";
import { getAll, pass, recommand } from "./Education";

const GetAllEducation = () => {
    const [educations, setEducations ] = useState( [] );

    useEffect( () => {
        getAll().then( (res) => { setEducations( res.data.data ); } );
    }, [] );

    const onSubmitHandleRate = (index) => {
        recommand( index ).then( (res) => alert( res.data.message ) );
    };
    const onSubmitHandlePass = ( index ) => {
        pass( index ).then( (res) => alert( res.data.message ) );
    };
    return (
        <div>
            <div> 교육 목록 불러오기 </div>
            { educations && educations.map( (user, index ) => {
                return (
                    <div key={index}>
                        <div> ===============================</div>
                        { user && Object.entries( user ).map( ( [key, value ] ) => (
                            <div key={key}>{`${key} : ${value}`}</div>
                        ))}
                            <button onClick={ () => {onSubmitHandlePass( index + 1 ); } }> 교육 등록 </button> 
                    </div>
                );
            })}
        </div>
    );
}
export default GetAllEducation;