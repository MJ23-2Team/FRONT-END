import { Link } from "react-router-dom";
import EstablishOperationPolicy from "../../intra/operationPolicy/EstablishOperationPolicy";
import GetRecommandOperationPolicy from "../../intra/operationPolicy/GetRecommandOperationPolicy";

const OperationPolicyPage = () => {
  return (
    <div>
      <EstablishOperationPolicy />
      <Link to="/operationPolicy/suggested">
        <button>건의된 정책 목록</button>
      </Link>
      <GetRecommandOperationPolicy />
    </div>
  );
};

export default OperationPolicyPage;
