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
      createInsurancePlan(data).then((res) => alert(res.data.message));
    } else {
      alert("값을 입력해주세요");
    }
  };

  return (
    <>
      <div>새상품 기획</div>
      <div>고객니즈 및 경쟁사의 동향 분석 보고서를 작성하세요 </div>
      <input
        type="text"
        name="report"
        placeholder="report"
        onChange={(e) => onHandleChangeData(e)}
      />
      <Link to="/">
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
