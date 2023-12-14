import { Link } from "react-router-dom";
import EstablishOperationPolicy from "../../intra/operationPolicy/EstablishOperationPolicy";
import RetrieveRecommendOperationPolicy from "../../intra/operationPolicy/RetrieveRecommendOperationPolicy";

const OperationPolicyPage = () => {
  return (
    <div>
      <EstablishOperationPolicy />
      <Link to="/operationPolicy/suggested">
        <button>건의된 정책 목록</button>
      </Link>
      <RetrieveRecommendOperationPolicy />
    </div>
  );
};

export default OperationPolicyPage;
