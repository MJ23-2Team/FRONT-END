import { Link } from "react-router-dom";
import EstablishOperationPolicy from "../../intra/operationPolicy/EstablishOperationPolicy";
import RetrieveRecommandOperationPolicy from "../../intra/operationPolicy/RetrieveRecommandOperationPolicy";

const OperationPolicyPage = () => {
  return (
    <div>
      <EstablishOperationPolicy />
      <Link to="/operationPolicy/suggested">
        <button>건의된 정책 목록</button>
      </Link>
      <RetrieveRecommandOperationPolicy />
    </div>
  );
};

export default OperationPolicyPage;
