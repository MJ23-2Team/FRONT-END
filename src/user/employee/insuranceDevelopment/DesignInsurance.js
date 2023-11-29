import { designInsurance } from "./InsuranceDevelopment";
import { useState } from "react";

const DesignInsurance = () => {
  const [data, setData] = useState({});
  const onHandleChangeData = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };
  const onSubmitHandle = () => {
    if (data) {
      designInsurance(data).then((res) => alert(res.data.message));
    } else {
      alert("값을 입력해주세요");
    }
  };

  return (
    <>
      <div>설계할 보험 기획안</div>
      <div>{data.planReport}</div> {/* 수정 요망 */}
      <div>고객니즈 및 경쟁사의 동향 분석 보고서를 작성하세요 </div>
      <input
        type="text"
        name="insuranceName"
        placeholder="보험 이름"
        onChange={(e) => onHandleChangeData(e)}
      />
      <input
        type="text"
        name="insuranceType"
        placeholder="보험 종류"
        onChange={(e) => onHandleChangeData(e)}
      />
      <input
        type="text"
        name="salesTarget"
        placeholder="보험 판매 대상"
        onChange={(e) => onHandleChangeData(e)}
      />
      <input
        type="text"
        name="canRegistTarget"
        placeholder="보험 가입 가능 대상"
        onChange={(e) => onHandleChangeData(e)}
      />
      <input
        type="number"
        name="payment"
        placeholder="보험료"
        onChange={(e) => onHandleChangeData(e)}
      />
      <input
        type="text"
        name="guarantee"
        placeholder="보장 내용"
        onChange={(e) => onHandleChangeData(e)}
      />
      <input
        type="number"
        name="estimatedDevelopment"
        placeholder="개발 예상 비용"
        onChange={(e) => onHandleChangeData(e)}
      />
      <button
        onClick={() => {
          onSubmitHandle();
        }}
      >
        저장
      </button>
      <div>
        ===============================================================================
      </div>
    </>
  );
};

export default DesignInsurance;
