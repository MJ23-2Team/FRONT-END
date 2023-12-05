import { useState, useEffect } from "react";
import { getById } from "./AdviceNote";
import { useNavigate } from "react-router-dom";

const GetAdviceNote = () => {
    const [ adviceNotes, setAdviceNotes ] = useState( [] );
    const customerid = parseInt( localStorage.getItem("id") );

    const navigate = useNavigate();
    useEffect( () => {
        getById( customerid ).then( (res) => { setAdviceNotes( res.data ); });
    }, [] );

    return adviceNotes;
};
export default GetAdviceNote;