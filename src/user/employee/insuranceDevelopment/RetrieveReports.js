import React, { useEffect, useState } from "react";
import { retrieveReports, deleteInsurancePlan } from "./InsuranceDevelopment";
import { Link } from "react-router-dom";

const RetrieveReports = () => {
  const [insurances, setInsurances] = useState([]);
  const [checked, setchecked] = useState([]);

  useEffect(() => {
    retrieveReports().then((res) => {
      setInsurances(res.data);
    });
  }, []);

  return (
    <div>
      <header>
        <h2>기존 상품 관리</h2>
      </header>
      <div>수정하거나 삭제할 보험 기획안을 선택해주세요.</div>
      {insurances &&
        insurances.map((insurance, index) => {
          return (
            <div key={index}>
              <div>
                <input
                  type="radio"
                  id={insurance.insuranceID}
                  name="report"
                  onClick={() => {
                    setchecked(
                      document.querySelector('input[name="report"]:checked')
                    );
                  }}
                />
                {insurance.planReport}
              </div>
            </div>
          );
        })}
      <Link to={"/manageInsurancePlan"} state={{ insuranceID: checked.id }}>
        <button>수정</button>
      </Link>
      <button
        onClick={() => {
          deleteInsurancePlan(checked.id);
          window.location.reload();
        }}
      >
        삭제
      </button>
    </div>
  );
};
export default RetrieveReports;
