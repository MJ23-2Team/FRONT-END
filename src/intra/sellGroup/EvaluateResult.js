import { useState } from "react";
import { evaluateResult } from "./SellGroup";

const EvaluateResult = () => {
  const [data, setData] = useState({});
  const onHandleChangeData = (e) => {
        setData(prevData => ({ ...prevData, [e.target.name]: e.target.value }));
  };
  const onSubmitHandle = () => {
      if (data.id && data.info) {
        evaluateResult(data).then((res) =>
              alert(res.data.message));
      }else{
          alert("값을 입력해주세요");
      }
  };

  return (
    <>
      <div>판매 조직 평가</div>
      <div>판매 조직 아이디 / 평가 내용</div>
      <input type="text" name="id" placeholder="ID" onChange={(e) => onHandleChangeData(e)} />
      <input type="text" name="info" placeholder="info" onChange={(e) => onHandleChangeData(e)} />
      <div/>
      <button onClick={() => {onSubmitHandle();}}>
        등록
      </button>
    </>
  );
};
export default EvaluateResult;
