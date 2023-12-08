import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Modal from "../common/Modal";
import AdviceNoteModal from "./AdviceNoteModal";

import "../common/TableStyle.css";
import "../common/ButtonStyle.css";

const CustomerHomePage = () => {
  const [adviceModalOpen, setAdviceModalOpen] = useState(false);
  useEffect( () => {
    localStorage.setItem( "id", 1 );
  });

  return (
    <div>
      <header>
        <div>홈페이지</div>
        <Link to="/operationPolicy">
          <button>운영방침</button>
        </Link>
        <input
          type="button"
          value="팝업"
          className="blueBtn"
          onClick={() => setAdviceModalOpen(!adviceModalOpen)}
        />
        {adviceModalOpen && (
          <Modal closeModal={() => setAdviceModalOpen(!adviceModalOpen)}>
            <AdviceNoteModal />
          </Modal>
        )}
        <Link to="/sellGroup">
          <button>판매 그룹 페이지</button>
        </Link>
        <Link to="/getAllCustomer">
          <button>고객 정보 불러오기</button>
        </Link>
        <Link to="/registerInsurance">
          <button>보험 가입</button>
        </Link>
        <Link to="/campaignPage">
          <button>캠페인</button>
        </Link>
        <Link to="/underwritingPage">
          <button>인수 심사</button>
        </Link>
        <Link to="/underwritingpolicyPage">
          <button>인수 정책</button>
        </Link>
        <Link to="/educationPage">
          <button> 교육 </button>
        </Link>
        <Link to="/educationStudentPage">
          <button> 교육 학생 </button>
        </Link>
        <Link to="/paymentPage">
          <button> 납부 </button>
        </Link>
        <Link to="/contractManagementPolicyPage">
          <button> 계약 관리 정책</button>
        </Link>
        <Link to="/employeeRewardPage">
          <button> 직원 보상 목록 </button>
        </Link>
        <Link to="/customerRewardPage">
          <button> 고객 보상 목록 </button>
        </Link>
        <Link to="/insuranceDevelopmentPage">
          <button>보험 개발</button>
        </Link>
      </header>
    </div>
  );
};
export default CustomerHomePage;