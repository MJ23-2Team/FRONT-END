import React, { useEffect, useState } from "react";
import { recommendInsurance } from "./SellGroup";
import { Link } from "react-router-dom";

const RecommendInsurances = () => {
  const [insurances, setInsurances] = useState([]);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    recommendInsurance().then((res) => {
      setInsurances(res.data);
    });
  }, []);

  return (
    <div>
      <div>추천 보험 리스트</div>
      {insurances &&
        insurances.map((insurance, index) => {
          return (
            <div key={index}>
              <div>===============================</div>
              <input
                type="radio"
                id={insurance.insuranceID}
                name="report"
                onClick={() => {
                  setChecked(insurance);
                }}
              />
              {insurance.name}
            </div>
          );
        })}
      <Link
        to={"/updateCustomerInformation"}
        state={{ customerID: checked.customerID }}
      >
        <button>선택</button>
      </Link>
    </div>
  );
};
export default RecommendInsurances;
