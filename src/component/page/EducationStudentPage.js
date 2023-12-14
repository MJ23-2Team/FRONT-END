import EstablishEducationStudent from "../../intra/educationStudent/EstablishEducationStudent";
import RetrieveEducationStudentByEducationId from "../../intra/educationStudent/RetrieveEducationStudentByEducationId";
import { useState } from "react";
import Modal from "../common/Modal";

const EducationStudentPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <RetrieveEducationStudentByEducationId />
      <input
        type="button"
        value="학생 추가"
        className="blueBtn"
        onClick={() => setModalOpen(!modalOpen)}
      />
      {modalOpen && (
        <Modal closeModal={() => setModalOpen(!modalOpen)}>
          <EstablishEducationStudent />
        </Modal>
      )}
    </div>
  );
};

export default EducationStudentPage;
