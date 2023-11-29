import { manageInsurancePlan } from "./InsuranceDevelopment";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const ManageInsurancePlan = () => {
  const location = useLocation();
  const [data, setData] = useState({});
  const onHandleChangeData = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };
  const onSubmitHandle = () => {
    if (data) {
      manageInsurancePlan(data).then((res) => alert(res.data.message));
    } else {
      alert("값을 입력해주세요");
    }
  };

  return (
    <>
      <div>기존 상품 기획</div>
      <div>고객니즈 및 경쟁사의 동향 분석 보고서를 작성하세요 </div>
      <input
        type="text"
        name="planReport"
        placeholder="report"
        onChange={(e) => onHandleChangeData(e)}
      />

      <button
        onClick={() => {
          setData((prevData) => ({
            insuranceID: location.state.insuranceID,
            ...prevData,
          }));
          // console.log(data);
          onSubmitHandle(data);
        }}
      >
        기획 저장
      </button>
      <div>
        ===============================================================================
      </div>
    </>
  );
};

export default ManageInsurancePlan;
