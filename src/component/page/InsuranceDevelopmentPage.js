import { Link } from "react-router-dom";

const InsuranceDevelopmentPage = () => {
  return (
    <div>
      <Link to="/planProductPage">
        <button>상품 기획</button>
      </Link>
      <Link to="/getPlannedInsurances">
        <button>상품 개발</button>
      </Link>
      <Link to="/authorizeInsurance">
        <button>상품 인가</button>
      </Link>
    </div>
  );
};

export default InsuranceDevelopmentPage;
