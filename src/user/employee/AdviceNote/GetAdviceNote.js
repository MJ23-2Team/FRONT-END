import { useState, useEffect } from "react";
import { getById, pass } from "./AdviceNote";

const GetAdviceNote = () => {
    const [ adviceNotes, setAdviceNotes ] = useState( [] );

    useEffect( () => {
        getById().then( (res) => { setAdviceNotes( res.data.data ); });
    }, [] );

    const onSubmitHandlePass = (index) => {
        pass( index ).then( (res) => alert( res.data.data ) );
    };
    return (
        // Modal 만드는 방법 알아오기
        <div>

        </div>
    );
};
export default GetAdviceNote;