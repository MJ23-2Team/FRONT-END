import EstablishContractManagementPolicy from "../../intra/ContractManagementPolicy/EstablishContractManagementPolicy";
import GetAllContractManagementPolicy from "../../intra/ContractManagementPolicy/GetAllContractManagementPolicy";

const ContractManagementPolicyPage = () => {
    return (
        <div>
            <EstablishContractManagementPolicy />
            <GetAllContractManagementPolicy />
        </div>
    );
};

export default ContractManagementPolicyPage;