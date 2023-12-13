import { manageInsurancePlan } from "./InsuranceDevelopment";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

const ManageInsurancePlan = () => {
  const location = useLocation();
  const [data, setData] = useState({});
  const onHandleChangeData = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };
  const onSubmitHandle = (newData) => {
    if (newData) {
      manageInsurancePlan(newData);
    } else {
      alert("값을 입력해주세요");
    }
  };

  return (
    <>
      <header>
        <h2>기존 상품 기획</h2>
      </header>
      <div>고객니즈 및 경쟁사의 동향 분석 보고서를 작성하세요 </div>
      <input
        type="text"
        name="planReport"
        placeholder="report"
        onChange={(e) => onHandleChangeData(e)}
      />
      <Link to={"/home"}>
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
          기획 저장
        </button>
      </Link>
      <div>
        ===============================================================================
      </div>
    </>
  );
};

export default ManageInsurancePlan;
