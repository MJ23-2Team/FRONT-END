import EstablishContractManagementPolicy from "../../intra/contractManagementPolicy/EstablishContractManagementPolicy";
import RetrieveAllContractManagementPolicy from "../../intra/contractManagementPolicy/RetrieveAllContractManagementPolicy";
import { useState } from "react";
import Modal from "../common/Modal";

const ContractManagementPolicyPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <RetrieveAllContractManagementPolicy />
      <input
        type="button"
        value="정책 생성"
        className="blueBtn"
        onClick={() => setModalOpen(!modalOpen)}
      />
      {modalOpen && (
        <Modal closeModal={() => setModalOpen(!modalOpen)}>
          <EstablishContractManagementPolicy />
        </Modal>
      )}
    </div>
  );
};

export default ContractManagementPolicyPage;
