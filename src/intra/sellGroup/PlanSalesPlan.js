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
      planSalesPlan(newData).then((res) => alert(res.data.message));
    } else {
      alert("값을 입력해주세요");
    }
  };

  return (
    <>
      <div>
        영업 활동 시작일(20**-**-**), 종료일(20**-**-**), 예상 목표 인원, 판매
        방식을 /로 구분하여 입력하세요.
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
      <Link to={"/"}>
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

export default PlanSalesPlan;
