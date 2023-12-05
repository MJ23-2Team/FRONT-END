import { useState, useEffect } from "react";
import { retriveSuggested, pass,recommand } from "./OperationPolicy";
const GetSuggestedOperationPolicy = () => {
    const [policys, setPolicys] = useState([]);

    useEffect(() => {
        retriveSuggested().then( (res) => {setPolicys(res.data.data);});
    }, []);

    const onSubmitHandleRate = (index) => {
        recommand(index).then((res) => alert(res.data.message));
    };
    const onSubmitHandlePass = (index) => {
        pass(index).then((res) => alert(res.data.message));
    };
    return (
        <div>
            <div>건의된 정책 정보 불러오기</div>
            {policys && policys.map((user, index) => {
                return (
                    <div key={index}>
                        <div>===============================================================================</div>
                        {user && Object.entries(user).map(([key, value]) => (
                            <div key={key}>{`${key} : ${value}`}</div>

                        ))} 
                            <button onClick={() => {onSubmitHandleRate(user.policyID);}}>정책 추천</button>
                            <button onClick={() => {onSubmitHandlePass(user.policyID);}}>정책 등록</button>
                    </div>
                );
            })}
        </div>
  );
};
export default GetSuggestedOperationPolicy;