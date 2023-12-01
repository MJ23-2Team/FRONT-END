import EstablishOperationPolicy from "../../intra/operationPolicy/EstablishOperationPolicy";
import GetAllOperationPolicy from "../../intra/operationPolicy/GetAllOperationPolicy";

const OperationPolicyPage = () => {
  return (
    <div>
      <EstablishOperationPolicy />
      <GetAllOperationPolicy />
    </div>
  );
};

export default OperationPolicyPage;
