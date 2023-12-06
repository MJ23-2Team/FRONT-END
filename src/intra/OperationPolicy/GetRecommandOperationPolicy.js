import { useState, useEffect } from "react";
import { retriveRecommanded } from "./OperationPolicy";
const GetRecommandOperationPolicy = () => {
    const [policys, setPolicys] = useState([]);

    useEffect(() => {
        retriveRecommanded().then( (res) => {setPolicys(res.data);});
    }, []);
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
                    </div>
                );
            })}
        </div>
  );
};
export default GetRecommandOperationPolicy;