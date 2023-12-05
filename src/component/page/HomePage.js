import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "../common/Modal";
import AdviceNoteModal from "./AdviceNoteModal";

const HomePage = () => {
  const [adviceModalOpen, setAdviceModalOpen] = useState(false);

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
        <Link to="/gyu">
          <button>심규창</button>
        </Link>
        <Link to="/educationPage">
          <button> 교육 </button>
        </Link>
        <Link to ="/educationStudentPage">
          <button> 교육 학생 </button>
        </Link>
        <Link to="/contractManagementPolicyPage">
          <button> 계약 관리 정책</button>
        </Link>
        <Link to="/employeeRewardPage">
          <button> 직원 보상 목록 </button>
        </Link>
        <Link to="/insuranceDevelopmentPage">
          <button>보험 개발</button>
        </Link>
      </header>
    </div>
  );
};
export default HomePage;
