import { useState } from "react";
import { save } from "./Reward";

const ApplyReward = () => {
    const [ data, setData ] = useState( {} );
    const onHandleChangeData = (e) => {
        setData( prevData => ({ ...prevData, [e.target.neame]: e.target.value }));
    };
    const onSubmitHandle = () => {
        if (data.contractid && data.content && data.accidentProfile && data.customerName && data.identifyProfile ) {
            save( data ).then( (res) =>
                alert( res.data.message ) );
        } else {
            alert( "Input Data" );
        }
    };

    return (
        // Modal창 띄우기 알아보기
        <>
        </>
    )
}