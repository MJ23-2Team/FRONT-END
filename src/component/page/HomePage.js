import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "../common/Modal";
import AdviceNoteModal from "./AdviceNoteModal";


const HomePage = () => {
  const [ adviceModalOpen, setAdviceModalOpen ] = useState( false );

  return (
    <div>
      <header>
        <div>홈페이지</div>
        <Link to="/operationPolicyPage">
          <button>OperationPolicyPage</button>
        </Link>
        <input type="button" value="팝업" className="blueBtn" onClick={() => setAdviceModalOpen(!adviceModalOpen)}/>
        {adviceModalOpen && (
          <Modal closeModal={() => setAdviceModalOpen(!adviceModalOpen)}>
            <AdviceNoteModal />
          </Modal>
        )}
        <Link to="/gyu">
          <button>심규창</button>
        </Link>
        <Link to="/educationPage">
          <button> 교육 </button>
        </Link>
        <Link to ="educationStudentPage">
          <button> 교육 학생 </button>
        </Link>
        <Link to="contractManagementPolicyPage">
          <button> 계약 관리 정책</button>
        </Link>
        <Link to="/hyun">
          <button>임현우</button>
        </Link>
      </header>
      <Link to="/login">
          <button>로그인</button>
        </Link>
        <Link to="/register">
          <button>회원가입</button>
        </Link>
    </div>
  );
};
export default HomePage;
