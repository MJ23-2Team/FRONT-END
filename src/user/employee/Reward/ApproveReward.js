import { useState } from "react";
import { save, approve, deny } from "./Reward";
import GetReward from "./GetReward";

const ApproveRewards = (req) => {
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
            <GetReward id={req.id}/>
            <button onClick={ () => approve( req.id ) }>
                승인
            </button>
            <button onClick={ () => 
            deny( req.id ) }>
                거절
            </button>
        </>
    );
};
export default ApproveRewards;