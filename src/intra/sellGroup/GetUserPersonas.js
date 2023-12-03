import React, { useEffect, useState } from "react";
import { getUserPersonas } from "./SellGroup";
import { Link, useLocation } from "react-router-dom";

const GetUserPersonas = () => {
  const [insurances, setInsurances] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const insuranceID = searchParams.get("insuranceID");

  useEffect(() => {
    getUserPersonas(insuranceID).then((res) => {
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
              <div>===============================</div>
              <div>{"성별: " + insurance.sex}</div>
              <div>{"나이: " + insurance.age}</div>
              <div>{"직업: " + insurance.job}</div>
              <div>{"소득수준: " + insurance.incomeLevel}</div>
            </div>
          );
        })}
      <Link to={"/addUserPersona"} state={{ insuranceID: insuranceID }}>
        <button
          onClick={() => {
            console.log(insuranceID);
          }}
        >
          추가
        </button>
      </Link>
      <Link to={"/planSalesPlan"} state={{ insuranceID: insuranceID }}>
        <button>계획 수립</button>
      </Link>
    </div>
  );
};
export default GetUserPersonas;
