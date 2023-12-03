import { useState } from "react";
import { calculateInsuranceFee } from "./SellGroup";

const CalculateInsuranceFee = () => {
  const [data, setData] = useState();

  const onSubmitHandle = () => {
    if (data && data.trim() !== '') {
      calculateInsuranceFee(data).then((res) =>
        alert(res.data));
    } else {
      alert("값을 입력해주세요");
    }
  };

  return (
    <>
      <div>보험료 계산</div>
      <input type="text" name="id" placeholder="ID" onChange={(e) => setData(e.target.value)} />
      <div/>
      <button onClick={onSubmitHandle}>
        조회
      </button>
    </>
  );
};
export default CalculateInsuranceFee;
