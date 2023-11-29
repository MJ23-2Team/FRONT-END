import React, { useEffect, useState } from "react";
import { getReports } from "./InsuranceDevelopment";
import { Link } from "react-router-dom";

const GetReports = () => {
  const [insurances, setInsurances] = useState([]);
  const [checked, setchecked] = useState([]);

  useEffect(() => {
    getReports().then((res) => {
      setInsurances(res.data);
    });
  }, []);

  return (
    <div>
      <div>수정하거나 삭제할 보험 기획안의 번호를 입력해주세요.</div>
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
        {/* <Link to="/manageInsurancePlan"> */}
        <button>수정</button>
      </Link>
      <button
        onClick={() => {
          // deleteInsurancePlan();
          console.log(document.querySelector('input[name="report"]:checked'));
        }}
      >
        삭제
      </button>
    </div>
  );
};
export default GetReports;
