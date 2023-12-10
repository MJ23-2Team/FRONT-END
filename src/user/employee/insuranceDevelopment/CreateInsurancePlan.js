import { createInsurancePlan } from "./InsuranceDevelopment";
import { useState } from "react";
import { Link } from "react-router-dom";

const CreateInsurancePlan = () => {
  const [data, setData] = useState({});
  const onHandleChangeData = (e) => {
    setData(() => e.target.value);
  };
  const onSubmitHandle = () => {
    if (data) {
      createInsurancePlan(data);
    } else {
      alert("값을 입력해주세요");
    }
  };

  return (
    <>
      <header>
        <h2>새 상품 기획</h2>
      </header>
      <div>고객니즈 및 경쟁사의 동향 분석 보고서를 작성하세요 </div>
      <input
        type="text"
        name="report"
        placeholder="보고서"
        onChange={(e) => onHandleChangeData(e)}
      />
      <Link to="/home">
        <button
          onClick={() => {
            onSubmitHandle();
          }}
        >
          저장
        </button>
      </Link>
      <div>
        ===============================================================================
      </div>
    </>
  );
};

export default CreateInsurancePlan;
