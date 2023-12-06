import {
  analyzeInsuranceRate,
  retrieveByInsuranceID,
} from "./InsuranceDevelopment";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const AnalyzeInsuranceRate = () => {
  const location = useLocation();
  const [data, setData] = useState({});
  const onHandleChangeData = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };
  const onSubmitHandle = (newData) => {
    if (newData) {
      analyzeInsuranceRate(newData);
    } else {
      alert("값을 입력해주세요");
    }
  };
  return (
    <>
      <div>요율 분석</div>
      <div>위험도를 입력해주세요.</div>
      <input
        type="number"
        name="riskDegree"
        placeholder="위험도"
        onChange={(e) => onHandleChangeData(e)}
      />
      <button
        onClick={() => {
          const newData = {
            insuranceID: location.state.insuranceID,
            ...data,
          };
          setData(newData);
          onSubmitHandle(newData);
        }}
      >
        검증
      </button>

      <button
        onClick={() => {
          retrieveByInsuranceID(location.state.insuranceID).then((res) => {
            if (res.data.rate === 0) {
              alert(
                "아직 요율검증결과 합격되지 않은 상품입니다. 요율검증을 시도하세요!"
              );
            } else {
              window.location.href = "/home";
            }
          });
        }}
      >
        설계 완료
      </button>
      <div>
        ===============================================================================
      </div>
    </>
  );
};

export default AnalyzeInsuranceRate;
