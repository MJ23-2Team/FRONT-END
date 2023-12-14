import RetrieveAllPayment from "../../user/employee/payment/RetrieveAllPayment";
import { useState } from "react";
import Modal from "../common/Modal";

const PaymentPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <RetrieveAllPayment />
      <input
        type="button"
        value="미납 관리"
        className="blueBtn"
        onClick={() => setModalOpen(!modalOpen)}
      />
      {modalOpen && <Modal closeModal={() => setModalOpen(!modalOpen)}></Modal>}
    </div>
  );
};
export default PaymentPage;
