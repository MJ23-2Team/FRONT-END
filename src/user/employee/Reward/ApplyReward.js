import { useState } from "react";
import { create } from "./Reward";
import { useNavigate } from "react-router-dom";

const ApplyReward = (res) => {
  const [data, setData] = useState({});

  const userID = localStorage.getItem("id");
  const navigate = useNavigate();

  const onHandleChangeData = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const onSubmitHandle = () => {
    data.contractID = document.getElementById("contractid").value;
    if (
      data.contractID &&
      data.content &&
      data.accidentProfile &&
      data.customerid &&
      data.identifyProfile
    ) {
      create(data);
      navigate("/customer/home");
    } else {
      alert("Input Data");
      console.log(data);
    }
  };

  const [selected, setSelect] = useState([res.data[0].contractID]);

  data.customerid = userID;
  data.contractid = selected;

  const SelectBox = (props) => {
    return (
      <select name="contractID" id="contractid">
        {props.option.data.map((option) => (
          <option key={option.insuranceID} value={option.contractID}>
            {option.insuranceName}
          </option>
        ))}
      </select>
    );
  };

  return (
    <>
      <div> 보상 신청 </div>
      <div> 상품 선택 </div>
      <SelectBox option={res}></SelectBox>
      <div> 사고 내용 </div>
      <input
        type="text"
        name="content"
        placeholder="내용"
        onChange={(e) => onHandleChangeData(e)}
      />
      <div> 사고 증빙 자료 </div>
      <input
        type="text"
        name="accidentProfile"
        placeholder="사고 증빙 자료"
        onChange={(e) => onHandleChangeData(e)}
      />
      <div> 본인 증명 서류 </div>
      <input
        type="text"
        name="identifyProfile"
        placeholder="본인 인증 서류"
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
export default ApplyReward;
