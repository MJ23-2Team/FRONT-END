import { useState, useEffect } from "react";
import { retrieveAuthorizedInsurances } from "../employee/insuranceDevelopment/InsuranceDevelopment";
import { registerInsurance } from "./Customer";

import "../../component/common/TableStyle.css";
import "../../component/common/ButtonStyle.css";
import "../../component/common/CommonStyle.css";
import "./RegisterInsurance.css";

const RegisterInsurance = () => {
  const [insurances, setInsurances] = useState([]);

  useEffect(() => {
    retrieveAuthorizedInsurances().then((res) => {
      setInsurances(res.data);
    });
  }, []);

  const regist = (insuranceID) => {
    const customerID = localStorage.getItem("id");
    registerInsurance(customerID, insuranceID).then(() => {
      alert("보험 가입 신청 성공");
    });
  };

  return (
    <div>
      <header>
        <div class="banner-div">
          <span class="banner-text"> 1조 보험사 </span>
        </div>
      </header>
      <div>보험 가입 신청</div>
      {insurances.map((insurance) => {
        return (
          <>
            <div>insuranceID: {insurance.insuranceID}</div>
            <div>insuranceName: {insurance.insuranceName}</div>
            <button onClick={() => regist(insurance.insuranceID)}>
              가입 신청
            </button>
          </>
        );
      })}
      <footer>
        <p> 고객 전용 페이지입니다.</p>
        <p> 1조 보험사 페이지_분산프로그래밍II</p>
      </footer>
    </div>
  );
};

export default RegisterInsurance;
