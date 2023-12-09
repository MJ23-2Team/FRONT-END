import React, { useEffect, useState } from "react";
import {
  retrieveDesignedInsurances,
  authorizeInsurance,
} from "./InsuranceDevelopment";
import { Link } from "react-router-dom";

const AuthorizeInsurance = () => {
  const [insurances, setInsurances] = useState([]);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    retrieveDesignedInsurances().then((res) => {
      setInsurances(res.data);
    });
  }, []);

  return (
    <div>
      <div>인가할 보험의 번호를 입력해주세요.</div>
      {insurances &&
        insurances.map((insurance, index) => {
          return (
            <div key={index}>
              <div>
                <input
                  type="radio"
                  id={insurance.insuranceName}
                  value={insurance}
                  name="name"
                  onClick={() => {
                    setChecked(insurance);
                  }}
                />
                {insurance.insuranceName}
              </div>
            </div>
          );
        })}
      <Link to={"/home"}>
        <button
          onClick={() => {
            authorizeInsurance(checked).then((res) => {
              if (res.data === "AUTHORIZED") {
                let today = new Date();
                let month = today.getMonth() + 1;
                let date = today.getDate();
                alert(month + "월 " + date + "일에 합격 되었습니다");
              } else {
                alert("불합격되었습니다.");
              }
            });
          }}
        >
          선택
        </button>
      </Link>
    </div>
  );
};
export default AuthorizeInsurance;
