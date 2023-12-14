import { Link } from "react-router-dom";
import RecommendInsuranceReason from "../../intra/sellGroup/RecommendInsuranceReason";
import CalculateInsuranceFee from "../../intra/sellGroup/CalculateInsuranceFee";

const SellGroupPage = () => {
  return (
    <div>
      <header>
        <h2>보험 판매 그룹</h2>
      </header>
      <Link to="/sellGroup/retrieveAll">
        <button>판매그룹 목록</button>
      </Link>
      <Link to="/sellGroup/recommend">
        <button>보험 추천</button>
      </Link>
      <Link to="/processSalesPage">
        <button>영업 활동</button>
      </Link>
      <RecommendInsuranceReason />
      <CalculateInsuranceFee />
    </div>
  );
};

export default SellGroupPage;
