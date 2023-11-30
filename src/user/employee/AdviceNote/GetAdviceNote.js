import { useState, useEffect } from "react";
import { getById } from "./AdviceNote";

const GetAdviceNote = () => {
    const [ adviceNotes, setAdviceNotes ] = useState( [] );

    useEffect( () => {
        getById().then( (res) => { setAdviceNotes( res.data.data ); });
    }, [] );

    return (
        <div>
            <div> 경고 알림 </div>
        </div>
    );
};
export default GetAdviceNote;