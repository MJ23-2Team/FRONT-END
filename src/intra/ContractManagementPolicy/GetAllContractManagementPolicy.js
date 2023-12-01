import { useState, useEffect } from "react";
import { getAll, pass } from "./ContractManagemetPolicy";

const GetAllContractMangementPolicy = () => {
    const [ policys, setPolicys ] = useState( [] );

    useEffect( () => {
        getAll().then( (res) => {setPolicys( res.data.data ); } );
    }, [] );

    const onSubmitHandlePass = (index) => {
        pass( index ).then( (res) => alert( res.data.message ) );
    };
    return (
        <div>
            <div>계약 관리 정책 불러오기</div>
            {policys && policys.map((user, index) => {
                return (
                    <div key={index}>
                        <div>===============================================================================</div>
                        {user && Object.entries(user).map(([key, value]) => (
                            <div key={key}>{`${key} : ${value}`}</div>

                        ))}
                            <button onClick={() => {onSubmitHandlePass(index+1);}}>정책 등록</button>
                    </div>
                );
            })}
        </div>
    );
};
export default GetAllContractMangementPolicy;