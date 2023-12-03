import GetAllPayment from "../../user/employee/Payment/GetAllPayment";
import CheckPaymentValidate from "../../user/employee/Payment/CheckPaymentValidate";
import CreatePayment from "../../user/employee/Payment/CreatePayment";
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
