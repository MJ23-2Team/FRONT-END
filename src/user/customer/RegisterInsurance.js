import { useState, useEffect } from "react";
import { getAuthorizedInsurances } from "../employee/insuranceDevelopment/InsuranceDevelopment";
import { registerInsurance } from "./Customer";

const RegisterInsurance = () => {
  const [insurances, setInsurances] = useState([]);

  useEffect(() => {
    getAuthorizedInsurances().then((res) => {
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
    </div>
  );
};

export default RegisterInsurance;
