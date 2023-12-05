import { useState, useEffect } from "react";
import { retrieveAll } from "./SellGroup";
import EvaluateResult from "../../intra/sellGroup/EvaluateResult";

const GetAllOperationPolicy = () => {
    const [sellGroups, setSellGroup] = useState([]);

    useEffect(() => {
        retrieveAll().then( (res) => {setSellGroup(res.data.data);});
    }, []);
    return (
        <div>
            <EvaluateResult/>
            <div>판매조직 정보 불러오기</div>
            {sellGroups && sellGroups.map((user, index) => {
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
export default GetAllOperationPolicy;