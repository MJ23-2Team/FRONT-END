import { planSalesPlan } from "./SellGroup";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

const PlanSalesPlan = () => {
  const location = useLocation();
  const [data, setData] = useState({});
  const onHandleChangeData = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };
  const onSubmitHandle = (newData) => {
    if (newData) {
      planSalesPlan(newData);
      alert("완료되었습니다");
    } else {
      alert("값을 입력해주세요");
    }
  };

  return (
    <>
      <header>
        <h2>영업 활동 계획</h2>
      </header>
      <div>
        영업 활동 시작일 / 영업 활동 종료일 / 예상 목표 인원 / 판매 방식
      </div>
      <input
        type="date"
        name="salesStartDate"
        placeholder="판매 시작일"
        onChange={(e) => onHandleChangeData(e)}
      />
      <input
        type="date"
        name="salesEndDate"
        placeholder="판매 종료일"
        onChange={(e) => onHandleChangeData(e)}
      />
      <input
        type="number"
        name="goalPeopleNumber"
        placeholder="예상 목표 인원"
        onChange={(e) => onHandleChangeData(e)}
      />
      <input
        type="text"
        name="salesMethod"
        placeholder="판매 방식"
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
          저장
        </button>
      </Link>
    </>
  );
};

export default PlanSalesPlan;
