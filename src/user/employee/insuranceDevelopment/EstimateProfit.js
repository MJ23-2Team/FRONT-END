import { estimateProfit } from "./InsuranceDevelopment";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

const EstimateProfit = () => {
  const location = useLocation();
  const [data, setData] = useState({});
  const onHandleChangeData = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };
  const onSubmitHandle = (newData) => {
    if (newData) {
      estimateProfit(newData).then((res) => alert(res.data.message));
    } else {
      alert("값을 입력해주세요");
    }
  };

  return (
    <>
      <div>예상 손익 분석</div>
      <div>예상 손익률 분석값을 입력해주세요. </div>
      <input
        type="number"
        name="estimatedProfitRate"
        placeholder="예상 손익률 분석값"
        onChange={(e) => onHandleChangeData(e)}
      />
      <Link
        to={"/analyzeInsuranceRate"}
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
        <button
          onClick={() => {
            alert("예상 손익 분석을 건너뛰었습니다.");
          }}
        >
          건너뛰기
        </button>
      </Link>
      <div>
        ===============================================================================
      </div>
    </>
  );
};

export default EstimateProfit;
