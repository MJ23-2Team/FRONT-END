import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from "../common/Modal";
import AdviceNoteModal from "./AdviceNoteModal";
import { getById } from "../../user/employee/adviceNote/AdviceNote";

import "../common/TableStyle.css";
import "../common/ButtonStyle.css";
import "../common/CommonStyle.css";

const CustomerHomePage = () => {
  let existAdviceNote = false;
  const [adviceNote, setAdviceNote] = useState([]);

  useEffect(() => {
    localStorage.setItem("id", 1);
    getById(localStorage.getItem("id")).then((res) => setAdviceNote(res.data));
    if (adviceNote.length != 0) {
      existAdviceNote = true;
    }
    console.log(adviceNote);
  }, []);

  const [adviceModalOpen, setAdviceModalOpen] = useState(existAdviceNote);

  return (
    <div>
      <header>
        <div class="banner-div">
          <span class="banner-text"> 1조 보험사 </span>
        </div>
      </header>

      <div class="main-div"> 
        <div class="customer-div">
          <p class="customer-title"> 보험 상담 </p>
          <Link to="/counselingApply">
            <button class="pageBtn">상담신청</button>
          </Link>
        </div>
        <div class="customer-div">
          <p class="customer-title"> 보험 가입 </p>
          <Link to="/registerInsurance">
            <button class="pageBtn">보험 가입</button>
          </Link>
        </div>
        <div class="customer-div">
          <p class="customer-title"> 보상 신청 </p>
          <Link to="/customerRewardPage">
            <button class="pageBtn"> 보상 확인 </button>
          </Link>
        </div>
      </div>

      <footer>
        <p> 고객 전용 페이지입니다.</p>
        <p> 1조 보험사 페이지_분산프로그래밍II</p>
      </footer>
    </div>
  );
};
export default CustomerHomePage;
