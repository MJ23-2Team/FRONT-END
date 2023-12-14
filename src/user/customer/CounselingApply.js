import { counselingApply } from "./Customer";
import { useState } from "react";
import { Link } from "react-router-dom";

import "../../component/common/TableStyle.css";
import "../../component/common/ButtonStyle.css";
import "../../component/common/CommonStyle.css";
import "./CounselingApply.css";

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
    <div class="counseling-main-div">
      <header>
        <div class="banner-div">
          <span class="banner-text"> 1조 보험사 </span>
        </div>
      </header>

      <div class="counseling-title"> 상담 신청 </div>
      <div>
        ===============================================================================
      </div>
      <div class="counseling-content-div">
        <input
          type="text"
          class="counseling-place-input"
          name="counselingPlace"
          placeholder="상담 희망 장소"
          onChange={(e) => onHandleChangeData(e)}
        />
        <input
          type="date"
          class="counseling-date-input"
          name="counselingDate"
          placeholder="상담 희망일"
          onChange={(e) => onHandleChangeData(e)}
        />
        <input
          type="time"
          class="counseling-time-input"
          name="counselingTime"
          placeholder="상담 희망 시간"
          onChange={(e) => onHandleChangeData(e)}
        />
        <Link to={"/customer/home"}>
          <button
            class="okBtn"
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
      </div>

      <div>
        ===============================================================================
      </div>
      <footer>
        <p> 고객 전용 페이지입니다.</p>
        <p> 1조 보험사 페이지_분산프로그래밍II</p>
      </footer>
    </div>
  );
};

export default CounselingApply;
