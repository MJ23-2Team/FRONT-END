import { useState, useEffect } from "react";
import { save } from "./Reward";
import { useNavigate } from "react-router-dom";

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

    const [ rewards, setRewards ] = useState( {} );
    useEffect( () => {
        getContractByCustomerId( userID ).then( (res) => { setRewards( res.data ); });
    }, [] )

    const SelectBox = (props) => {
        return (
            <select>
                {props.options.map( (option) => {
                    <option
                        key={option.contractid}
                        value={option.contractid}
                    >
                        {option.contract}
                    </option>
                })}
            </select>
        )
    }

    return (
        // Modal창 띄우기 알아보기
        <>
            <div> 보상 신청 </div>
            <div> 상품 선택 </div>
                <SelectBox option={rewards}></SelectBox>
            <div> 사고 내용 </div>    
            <input type="text" name="content" placeholder="내용" onChange={ (e) => onHandleChangeData(e) } />
            <div> 사고 증빙 자료 </div>
            <input type="text" name="accident_profile" placeholder="사고 증빙 자료" onChange={ (e) => onHandleChangeData(e) } />
            <div> 본인 증명 서류 </div>
            <input type="text" name="identify_profile" placeholder="본인 인증 서류" onChange={ (e) => onHandleChangeData(e) } />
            <button onClick={ () => {onSubmitHandle(); } }>
                등록
            </button>
        </>
    )
}