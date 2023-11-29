import React, { useEffect, useState } from "react";
import { getPlannedInsurances } from "./InsuranceDevelopment";
import { Link } from "react-router-dom";

const GetPlannedInsurances = () => {
  const [insurances, setInsurances] = useState([]);
  const [checked, setchecked] = useState([]);

  useEffect(() => {
    getPlannedInsurances().then((res) => {
      setInsurances(res.data);
    });
  }, []);

  return (
    <div>
      <div>설계할 보험 기획안의 번호를 입력해주세요.</div>
      {insurances &&
        insurances.map((insurance, index) => {
          return (
            <div key={index}>
              <div>
                <input
                  type="radio"
                  id={insurance.insuranceID}
                  name="report"
                  // onClick={setchecked(insurance.insuranceID)}
                />
                {insurance.planReport}
              </div>
            </div>
          );
        })}
      <Link to={"/manageInsurancePlan"} state={{ Insurance: checked }}>
        {/* <Link to="/manageInsurancePlan"> */}
        <button>수정</button>
      </Link>
      <button
        onClick={() => {
          //   deleteInsurancePlan(); //insurance id 던져주기
        }}
      >
        삭제
      </button>
    </div>
  );
};
export default GetPlannedInsurances;
