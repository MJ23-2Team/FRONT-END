import { Link } from "react-router-dom";

const InsuranceDevelopmentPage = () => {
  return (
    <div>
      <header>
        <h2>보험 개발</h2>
      </header>
      <Link to="/planProductPage">
        <button>상품 기획</button>
      </Link>
      <Link to="/retrievePlannedInsurances">
        <button>상품 개발</button>
      </Link>
      <Link to="/authorizeInsurance">
        <button>상품 인가</button>
      </Link>
    </div>
  );
};

export default InsuranceDevelopmentPage;
