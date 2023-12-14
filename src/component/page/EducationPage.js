import EstablishEducation from "../../intra/education/EstablishEducation";
import RetrieveAllEducation from "../../intra/education/RetrieveAllEducation";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../common/Modal";

const EducationPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <RetrieveAllEducation />
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        뒤로가기
      </button>
      <input
        type="button"
        value="교육 생성"
        className="blueBtn"
        onClick={() => setModalOpen(!modalOpen)}
      />
      {modalOpen && (
        <Modal closeModal={() => setModalOpen(!modalOpen)}>
          <EstablishEducation />
        </Modal>
      )}
    </div>
  );
};
export default EducationPage;
