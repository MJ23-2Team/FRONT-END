import { Link } from "react-router-dom";

const UnderWritingPolicyPage = () => {
  return (
    <div>
      <Link to="/createUnderWritingPolicy">
        <button>인수 정책 기획</button>
      </Link>
      <Link to="/retrieveUnderWritingPolicy">
        <button>인수 정책 조회</button>
      </Link>
    </div>
  );
};

export default UnderWritingPolicyPage;
