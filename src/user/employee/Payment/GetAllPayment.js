import { useState, useEffect, useMemo } from 'react';
import { getAll } from "/Payment";
import { Link } from "react-router-dom";

const GetAllPayment = () => {
    const [ payments, setPayments ] = useState( [] );

    useEffect( () => {
        getAll().then( (res) => { setPayments( res.data ); } );
    }, [] );

    const headers = [
        
    ]

}