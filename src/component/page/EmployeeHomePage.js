import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "../common/Modal";
import AdviceNoteModal from "./AdviceNoteModal";

import "../common/TableStyle.css";
import "../common/ButtonStyle.css";
import "../common/CommonStyle.css";

const EmployeeHomePage = () => {
  const [adviceModalOpen, setAdviceModalOpen] = useState(false);

  return (
    <div>
      <header>
        <div class="banner-div">
          <span class="banner-text"> 1조 보험사 </span>
        </div>
      </header>

      <div class="main-div">
        <div class="teamGroup-div">
          <p class="teamGroup-title"> 상품 관리 </p>
          <Link to="/insuranceDevelopmentPage">
            <button class="pageBtn">보험 개발</button>
          </Link>
        </div>
        <div class="teamGroup-div">
          <p class="teamGroup-title"> 운영 관리 </p>
          <Link to="/operationPolicy">
            <button class="pageBtn">운영방침</button>
          </Link>
        </div>
        <div class="teamGroup-div">
          <p class="teamGroup-title"> 교육 관리 </p>
          <Link to="/educationPage">
            <button class="pageBtn"> 교육 </button>
          </Link>
        </div>
        <div class="teamGroup-div">
          <p class="teamGroup-title"> 납부 관리 </p>
          <Link to="/paymentPage">
            <button class="pageBtn"> 납부 </button>
          </Link>
        </div>
      </div> 

      <div class="main-div">
        <div class="teamGroup-div">
          <p class="teamGroup-title"> 판매 그룹 관리 </p>
          <Link to="/sellGroup">
            <button class="pageBtn">판매 그룹 페이지</button>
          </Link>
        </div>
        <div class="teamGroup-div">
          <p class="teamGroup-title"> 고객 관리 </p>
          <Link to="/getAllCustomer">
            <button class="pageBtn">고객 정보 불러오기</button>
          </Link>
        </div>
        <div class="teamGroup-div">
          <p class="teamGroup-title"> 계약 관리 </p>
          <Link to="/contractManagementPolicyPage">
            <button class="pageBtn"> 계약 관리 정책</button>
          </Link>
        </div>
        <div class="teamGroup-div">
          <p class="teamGroup-title"> 보상 관리 </p>
          <Link to="/employeeRewardPage">
            <button class="pageBtn"> 직원 보상 목록 </button>
          </Link>
        </div>
      </div>

      <footer>
        <p> 직원 전용 페이지입니다.</p>
        <p> 1조 보험사 페이지_분산프로그래밍II</p>
      </footer>
    </div>
  );
};
export default EmployeeHomePage;
