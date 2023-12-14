import { useState } from "react";
import { create } from "./Education";
import { useNavigate } from "react-router-dom";

const EstablishEducation = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const onHandleChangeData = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };
  const onSubmitHandle = () => {
    if (
      data.name &&
      data.content &&
      data.duration &&
      data.place &&
      data.budget
    ) {
      create(data).then((res) => alert("Success"));
      navigate("/educationPage");
    } else {
      alert("Input Data");
    }
  };

  return (
    <>
      <div> 교육 등록 </div>
      <div> 교육 이름 </div>
      <input
        type="text"
        name="name"
        placeholder="이름"
        onChange={(e) => onHandleChangeData(e)}
      />
      <div> 교육 예산 </div>
      <input
        type="text"
        name="budget"
        placeholder="예산"
        onChange={(e) => onHandleChangeData(e)}
      />
      <div> 교육 내용 </div>
      <input
        type="text"
        name="content"
        placeholder="내용"
        onChange={(e) => onHandleChangeData(e)}
      />
      <div> 교육 기간 </div>
      <input
        type="text"
        name="duration"
        placeholder="기간"
        onChange={(e) => onHandleChangeData(e)}
      />
      <input
        type="hidden"
        name="exResult"
        value="NULL"
        onChange={(e) => onHandleChangeData(e)}
      />
      <div> 교육 장소 </div>
      <input
        type="text"
        name="place"
        placeholder="장소"
        onChange={(e) => onHandleChangeData(e)}
      />
      <button
        onClick={() => {
          onSubmitHandle();
        }}
      >
        등록
      </button>
    </>
  );
};
export default EstablishEducation;
