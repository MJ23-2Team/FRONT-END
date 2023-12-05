import { useState } from "react";
import { recommendInsuranceReason } from "./SellGroup";

const RecommendInsuranceReason = () => {
  const [data, setData] = useState();

  const onSubmitHandle = () => {
    if (data && data.trim() !== '') {
      recommendInsuranceReason(data).then((res) =>
        alert(res.data));
    } else {
      alert("값을 입력해주세요");
    }
  };

  return (
    <>
      <div>보험 추천 이유</div>
      <input type="text" name="id" placeholder="ID" onChange={(e) => setData(e.target.value)} />
      <div/>
      <button onClick={onSubmitHandle}>
        조회
      </button>
    </>
  );
};
export default RecommendInsuranceReason;
