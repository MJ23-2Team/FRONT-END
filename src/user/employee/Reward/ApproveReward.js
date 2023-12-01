import { useState } from "react";
import { save, approve, deny } from "./Reward";

const ApproveRewards = () => {
    const [ data, setData ] = useState( {} );
    const onHandleChangeData = (e) => {
        setData( prevData => ( { ...prevData, [e.target.name]: e.target.value }));
    };
    const onSubmitHandle = () => {
        if ( data.name && data.content ) {
            save( data ).then( (res) => 
                alert( res.data.message ));
        } else {
            alert( "Input Data" );
        }
    };
    

    return (
        <>
        
        </>
    );
};
export default ApproveRewards;