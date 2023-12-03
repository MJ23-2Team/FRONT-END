import { useState, useEffect, useMemo } from "react";
import { getByEducationId } from "./Education";
import { useLocation } from "react-router-dom";

const GetByEducationId = () => {
    const [ educations, setEducations ] = useState( [] );

    const location = useLocation();
    const education = location.state.education;

    useEffect( () => { 
        getByEducationId( education.educationID ).then( (res) => { setEducations( res.data ); });
    }, [] );

    return (
        <div>
            { educations.map(( edu ) => {
                return (
                    <>
                        <div> 교육이름: {edu.name} </div>
                    </>
                );
            })}
        </div>
    );
}
export default GetByEducationId;