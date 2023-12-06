import { getById } from "./Reward";
import { useState, useEffect, useMemo } from "react";

const GetReward = ( data ) => {
    const [ reward, setReward ] = useState( {} );

    useEffect( () => {
        getById( data.id ).then( (res) => { setReward( res.data ) } );
    }, [] );

    return (
        <div>
            <div> 신청 고객: { reward.customerName } </div>
            <div> 신청 날짜: { reward.appliDate } </div>
            <div> 현재 상태: { reward.appliResult } </div>
            <div> 보상 금액: { reward.rewardAmount } </div>
            <div> 신청 내용: { reward.content } </div>
            <div> 사고 증명: { reward.accidentProfile } </div>
            <div> 본인 증명: { reward.identifyProfile } </div>
        </div>
    );
    
};
export default GetReward;