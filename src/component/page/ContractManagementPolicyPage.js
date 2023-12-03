import EstablishContractManagementPolicy from "../../intra/ContractManagementPolicy/EstablishContractManagementPolicy";
import GetAllContractManagementPolicy from "../../intra/ContractManagementPolicy/GetAllContractManagementPolicy";
import { useState } from "react";
import Modal from "../common/Modal";

const ContractManagementPolicyPage = () => {
    const [ modalOpen, setModalOpen ] = useState( false );

    return (
        <div>
            <GetAllContractManagementPolicy />
            <input type="button" value="정책 생성" className="blueBtn" onClick={ () => setModalOpen( !modalOpen ) } />
            { modalOpen && (
                <Modal closeModal={ () => setModalOpen( !modalOpen ) }>
                    <EstablishContractManagementPolicy />
                </Modal> 
            )}
        </div>
    ); 
};

export default ContractManagementPolicyPage;