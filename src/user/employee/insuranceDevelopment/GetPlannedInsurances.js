import React, { useEffect, useState } from "react";
import { getPlannedInsurances } from "./InsuranceDevelopment";
import { Link } from "react-router-dom";

const GetPlannedInsurances = () => {
  const [insurances, setInsurances] = useState([]);
  const [checked, setChecked] = useState([]);
  const handleRadioClick = () => {
    const checkedRadio = document.querySelector('input[name="report"]:checked');
    setChecked(checkedRadio);
  };

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
                  value={insurance.planReport}
                  name="report"
                  onClick={handleRadioClick}
                />
                {insurance.planReport}
              </div>
            </div>
          );
        })}
      <Link
        to={"/designInsurance"}
        state={{ insuranceID: checked.id, planReport: checked.value }}
      >
        <button>선택</button>
      </Link>
    </div>
  );
};
export default GetPlannedInsurances;
