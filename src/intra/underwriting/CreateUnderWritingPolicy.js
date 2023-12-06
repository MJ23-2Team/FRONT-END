import { createUnderWritingPolicy } from "./UnderWriting";
import { useState } from "react";

const CreateUnderWritingPolicy = () => {
  const [data, setData] = useState({});

  const onHandleChangeData = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const handleSelectChange = (selectedType) => {
    setData((prevData) => ({ ...prevData, policyType: selectedType }));
  };

  const onSubmitHandle = () => {
    console.log(data.name);
    console.log(data.content);
    console.log(data.policyType);

    if (data.name && data.content && data.policyType) {
      createUnderWritingPolicy(data).then((res) => alert(res.data.message));
    } else {
      alert("값을 입력해주세요");
    }
  };

  return (
    <>
      <div>인수 정책 기획</div>
      <div>정책 이름 / 정책 내용 / 정책 종류 </div>
      <input
        type="text"
        name="name"
        placeholder="policyName"
        onChange={(e) => onHandleChangeData(e)}
      />
      <input
        type="text"
        name="content"
        placeholder="policyContent"
        onChange={(e) => onHandleChangeData(e)}
      />
      <select onChange={(e) => handleSelectChange(e.target.value)}>
        <option key="BASIC" value="BASIC">
          기본 인수
        </option>
        <option key="COLLABORATIVE" value="COLLABORATIVE">
          공동 인수
        </option>
      </select>
      <button
        onClick={() => {
          onSubmitHandle();
        }}
      >
        기획 저장
      </button>
    </>
  );
};

export default CreateUnderWritingPolicy;
