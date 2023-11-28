import { useState, useEffect } from "react";
import { getAll, pass,recommand } from "./OperationPolicy";
const GetAllOperationPolicy = () => {
    const [policys, setPolicys] = useState([]);

    useEffect(() => {
        getAll().then( (res) => {setPolicys(res.data.data);});
    }, []);

    const onSubmitHandleRate = (index) => {
        recommand(index).then((res) => alert(res.data.message));
    };
    const onSubmitHandlePass = (index) => {
        pass(index).then((res) => alert(res.data.message));
    };
    return (
        <div>
            <div>정책 정보 불러오기</div>
            {policys && policys.map((user, index) => {
                return (
                    <div key={index}>
                        <div>===============================================================================</div>
                        {user && Object.entries(user).map(([key, value]) => (
                            <div key={key}>{`${key} : ${value}`}</div>

                        ))} 
                            <button onClick={() => {onSubmitHandleRate(user.policyId);}}>정책 추천</button>
                            <button onClick={() => {onSubmitHandlePass(user.policyId);}}>정책 등록</button>
                    </div>
                );
            })}
        </div>
  );
};
export default GetAllOperationPolicy;