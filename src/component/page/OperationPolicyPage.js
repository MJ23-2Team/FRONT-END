import EstablishOperationPolicy from "../../intra/OperationPolicy/EstablishOperationPolicy";
import GetAllOperationPolicy from "../../intra/OperationPolicy/GetAllOperationPolicy";

const OperationPolicyPage = () => {
  return (
    <div>
      <EstablishOperationPolicy />
      <GetAllOperationPolicy />
    </div>
  );
};

export default OperationPolicyPage;
