import GetAllPayment from "../../user/employee/payment/GetAllPayment";
// import CheckPaymentValidate from "../../user/employee/payment/CheckPaymentValidate";
// import CreatePayment from "../../user/employee/payment/CreatePayment";
import { useState } from "react";
import Modal from "../common/Modal";

const PaymentPage = () => {
    const [ modalOpen, setModalOpen ] = useState( false );

    return (
        <div>
            <GetAllPayment />
            <input type="button" value="미납 관리" className="blueBtn" onClick={ () => setModalOpen( !modalOpen ) } />
            { modalOpen && (
                <Modal closeModal={ () => setModalOpen( !modalOpen ) }>

                </Modal>        
            )}
        </div>
    );
};
export default PaymentPage;
