import { createInsurancePlan } from "./InsuranceDevelopment";
import { useState } from "react";
import { Link } from "react-router-dom";

import "../../../component/common/CommonStyle.css";
import "../../../component/common/ButtonStyle.css";
import "../../../component/common/TableStyle.css";

import "./CreateInsurancePlan.css";

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
        <div class="banner-div">
          <span class="banner-text"> 1조 보험사 </span>
        </div>
      </header>
      <div class="createInsurance-main-div">
        <div class="createInsurance-main-title">새상품 기획</div>
        <div class="createInsurance-main-info">고객니즈 및 경쟁사의 동향 분석 보고서를 작성하세요 </div>
        <input
          type="text"
          class="createInsurance-main-input"
          name="report"
          placeholder="report"
          onChange={(e) => onHandleChangeData(e)}
        />
        <Link to="/home">
          <button
            class="createInsurance-main-button"
            onClick={() => {
              onSubmitHandle();
            }}
          >
            저장
          </button>
        </Link>
        <div style={{paddingTop: 80}}>
          ===============================================================================
        </div>
      </div>
      
      <footer>
        <p> 직원 전용 페이지입니다.</p>
        <p> 1조 보험사 페이지_분산프로그래밍II</p>
      </footer>
    </>
  );
};

export default CreateInsurancePlan;
