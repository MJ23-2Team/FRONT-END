import React, { useEffect, useState } from "react";
import { retrieveAuthorizedInsurances } from "../../user/employee/insuranceDevelopment/InsuranceDevelopment";
import { choiceCampaignProgram } from "./SellGroup";

const RetrieveAuthorizedInsurances = () => {
  const [insurances, setInsurances] = useState([]);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    retrieveAuthorizedInsurances().then((res) => {
      setInsurances(res.data);
    });
  }, []);

  return (
    <div>
      <div>영업 활동 계획을 수립할 보험의 번호를 입력해주세요.</div>
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
                    setChecked(insurance);
                  }}
                />
                {insurance.insuranceName}
              </div>
            </div>
          );
        })}
      <button
        onClick={() => {
          choiceCampaignProgram(checked.insuranceID).then((res) => {
            if (res.data) {
              alert("캠페인 이름: " + res.data.campaignName);
              const newUrl = `/retrieveUserPersonas?insuranceID=${checked.insuranceID}`;
              window.location.href = newUrl;
            } else {
              alert("해당 상품의 캠페인 프로그램이 종료되지 않았습니다.");
            }
          });
        }}
      >
        선택
      </button>
    </div>
  );
};
export default RetrieveAuthorizedInsurances;
