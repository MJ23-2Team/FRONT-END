import React, { useEffect, useState } from "react";
import { retrieveUserPersonas } from "./SellGroup";
import { Link, useLocation } from "react-router-dom";

const RetrieveUserPersonas = () => {
  const [insurances, setInsurances] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const insuranceID = searchParams.get("insuranceID");

  useEffect(() => {
    retrieveUserPersonas(insuranceID).then((res) => {
      setInsurances(res.data);
    });
  });

  return (
    <div>
      <header>
        <h2>영업 활동 계획</h2>
      </header>
      <div>유저 퍼소나 목록</div>
      {insurances &&
        insurances.map((insurance, index) => {
          return (
            <div key={index}>
              <div>===============================</div>
              <div>{"성별: " + insurance.sex}</div>
              <div>{"나이: " + insurance.age}</div>
              <div>{"직업: " + insurance.job}</div>
              <div>{"소득수준: " + insurance.incomeLevel}</div>
            </div>
          );
        })}
      <Link to={"/createUserPersona"} state={{ insuranceID: insuranceID }}>
        <button>추가</button>
      </Link>
      <Link to={"/planSalesPlan"} state={{ insuranceID: insuranceID }}>
        <button>계획 수립</button>
      </Link>
    </div>
  );
};
export default RetrieveUserPersonas;
