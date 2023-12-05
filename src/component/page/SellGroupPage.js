import { Link } from "react-router-dom";
import RecommendInsuranceReason from "../../intra/sellGroup/RecommendInsuranceReason";
import CalculateInsuranceFee from "../../intra/sellGroup/CalculateInsuranceFee";

const SellGroupPage = () => {
  return (
    <div>
      <Link to="/sellGroup/getAll">
        <button>판매그룹 목록</button>
      </Link>
      <Link to="/sellGroup/recommend">
        <button>보험 추천</button>
      </Link>
      <Link to="/processSalesPage">
        <button>영업 활동</button>
        </Link>
        <RecommendInsuranceReason/>
        <CalculateInsuranceFee/>
      </Link>
    </div>
  );
};

export default SellGroupPage;
