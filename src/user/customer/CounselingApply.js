import { counselingApply } from "./Customer";
import { useState } from "react";
import { Link } from "react-router-dom";

const CounselingApply = () => {
  const [data, setData] = useState({});
  const onHandleChangeData = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };
  const onSubmitHandle = (newData) => {
    if (newData) {
      counselingApply(newData).then((res) => alert(res.data.message));
    } else {
      alert("값을 입력해주세요");
    }
  };

  return (
    <>
      <div>*************** 상담 신청 ***************</div>
      <input
        type="text"
        name="counselingPlace"
        placeholder="상담 희망 장소"
        onChange={(e) => onHandleChangeData(e)}
      />
      <input
        type="date"
        name="counselingDate"
        placeholder="상담 희망일"
        onChange={(e) => onHandleChangeData(e)}
      />
      <input
        type="time"
        name="counselingTime"
        placeholder="상담 희망 시간"
        onChange={(e) => onHandleChangeData(e)}
      />
      <Link to={"/customer/home"}>
        <button
          onClick={() => {
            const newData = {
              customerID: localStorage.getItem("id"),
              ...data,
            };
            setData(newData);
            onSubmitHandle(newData);
          }}
        >
          신청
        </button>
      </Link>
      <div>
        ===============================================================================
      </div>
    </>
  );
};

export default CounselingApply;
