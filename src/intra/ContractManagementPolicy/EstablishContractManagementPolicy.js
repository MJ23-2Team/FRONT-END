import { useState } from 'react';
import { save } from './ContractManagemetPolicy';
import { useNavigate } from "react-router-dom";

const EstablishContractManagementPolicy = () => {
    const [ data, setData ] = useState( {} );
    const navigate = useNavigate();
    const onHandleChangeData = (e) => {
        setData( prevData => ( { ...prevData, [e.target.name]: e.target.value }));
    };
    const onSubmitHandle = () => {
        if( data.name && data.content ) {
            save( data );
            navigate( "/contractManagementPolicyPage" );
        } else {}
            alert( "Input Data" );
    }

    return (
        <>
          <div>정책 등록</div>
          <div>정책 이름 / 정책 내용</div>
          <input type="text" name="name" placeholder="name" onChange={(e) => onHandleChangeData(e)} />
          <input type="text" name="content" placeholder="content" onChange={(e) => onHandleChangeData(e)} />
          <button onClick={() => {onSubmitHandle();}}>
            등록
          </button>
        </>
      );
};
export default EstablishContractManagementPolicy;
