import { useState } from "react";
import { save } from "./OperationPolicy";

const EstablishOpPolicy = () => {
    const [data, setData] = useState({});
    const onHandleChangeData = (e) => {
          setData(prevData => ({ ...prevData, [e.target.name]: e.target.value }));
    };
    const onSubmitHandle = () => {
        if (data.name && data.content) {
            save(data).then((res) =>
                alert(res.data.message));
        }else{
            alert("값을 입력해주세요");
        }
    };
  
    return (
      <>
        <div>정책 등록</div>
        <div>정책 이름 / 정책 내용</div>
        <input type="text" name="name" placeholder="name" onChange={(e) => onHandleChangeData(e)} />
        <input type="text" name="content" placeholder="content" onChange={(e) => onHandleChangeData(e)} />
        <button onClick={() => {onSubmitHandle();}}>
          등록
        </button>
      </>
    );
  };
export default EstablishOpPolicy;