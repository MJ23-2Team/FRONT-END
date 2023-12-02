import { designInsurance } from "./InsuranceDevelopment";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

const DesignInsurance = () => {
  const location = useLocation();
  const [data, setData] = useState({});
  const onHandleChangeData = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };
  const onSubmitHandle = (newData) => {
    if (newData) {
      designInsurance(newData).then((res) => alert(res.data.message));
    } else {
      alert("값을 입력해주세요");
    }
  };

  return (
    <>
      <div>설계할 보험 기획안</div>
      <div>{location.state.planReport}</div>
      <div>
        설계할 보험의 이름, 상품 종류, 판매 대상, 가입 조건, 보험료, 보장 내용,
        개발 예상 비용을 / 로 구분하여 입력해주세요{" "}
      </div>
      <input
        type="text"
        name="insuranceName"
        placeholder="보험 이름"
        onChange={(e) => onHandleChangeData(e)}
      />
      <select name="insuranceType" onChange={(e) => onHandleChangeData(e)}>
        <option value="none" selected disabled>
          =선택=
        </option>
        <option value="FIRE">화재</option>
      </select>
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
      <Link
        to={"/estimateProfit"}
        state={{ insuranceID: location.state.insuranceID }}
      >
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
          저장
        </button>
      </Link>
      <div>
        ===============================================================================
      </div>
    </>
  );
};

export default DesignInsurance;
