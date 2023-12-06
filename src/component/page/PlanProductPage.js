import { Link } from "react-router-dom";

const PlanProductPage = () => {
  return (
    <div>
      <Link to="/createInsurancePlan">
        <button>새 상품 기획</button>
      </Link>
      <Link to="/retrieveReports">
        <button>기존 상품 관리</button>
      </Link>
    </div>
  );
};

export default PlanProductPage;
