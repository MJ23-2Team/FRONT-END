import { useState, useEffect } from "react";
import { recommendInsurance } from "./SellGroup";

const RecommendInsurance = () => {
    const [insurances, setInsurances] = useState([]);

    useEffect(() => {
        recommendInsurance().then( (res) => {setInsurances(res.data.data);});
    }, []);
    return (
        <div>
            <div>추천된 보험 정보 불러오기</div>
            {insurances && insurances.map((user, index) => {
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
export default RecommendInsurance;