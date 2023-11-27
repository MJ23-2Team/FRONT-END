import EstablishContractManagementPolicy from "../../intra/ContractManagementPolicy";
import GetAllContractMangementPolicy from "../../intra/ContractManagementPolicy/GetAllContractManagementPolicy";;

const ContractMnagementPolicyPage = () => {
    return (
        <div>
            <EstablishContractManagementPolicy />
            <GetAllContractMangementPolicy />
        </div>
    );
};

export default ContractMnagementPolicyPage;