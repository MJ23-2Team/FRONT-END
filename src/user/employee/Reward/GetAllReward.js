import { useState, useEffect } from "react";
import { getAll, pass } from "./Reward";

const GetAllRewards = () => {
    const [ rewards, setRewards ] = useState( [] );

    useEffect( () => {
        getAll().then( (res) => { setRewards( res.data.data )});
    }, [] );

    const onSubmitHandlePass = (index) => {
        pass( index ).then( (res) => alert( res.data.message ));
    };

    return (
        <div>
            <div> 보상 신청 목록 </div>
            {rewards && rewards.map((user, index) => {
                return (
                    <div key={index}>
                        <div>===============================================================================</div>
                        {user && Object.entries(user).map(([key, value]) => (
                            <div key={key}>{`${key} : ${value}`}</div>

                        ))}
                    </div>
                );
            })}
        </div>
    );
};
export default GetAllRewards;