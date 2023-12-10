import React, { useEffect, useState } from "react";
import { retrievePlannedInsurances } from "./InsuranceDevelopment";
import { Link } from "react-router-dom";

const RetrievePlannedInsurances = () => {
  const [insurances, setInsurances] = useState([]);
  const [checked, setChecked] = useState([]);
  const handleRadioClick = () => {
    const checkedRadio = document.querySelector('input[name="report"]:checked');
    setChecked(checkedRadio);
  };

  useEffect(() => {
    retrievePlannedInsurances().then((res) => {
      setInsurances(res.data);
    });
  }, []);

  return (
    <div>
      <header>
        <h2>상품 개발</h2>
      </header>
      <div>설계할 보험 기획안을 선택해주세요.</div>
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
export default RetrievePlannedInsurances;
