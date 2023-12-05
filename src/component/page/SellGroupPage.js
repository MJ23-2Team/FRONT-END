import { Link } from "react-router-dom";
import RecommendInsuranceReason from "../../intra/sellGroup/RecommendInsuranceReason";
import CalculateInsuranceFee from "../../intra/sellGroup/CalculateInsuranceFee";

const SellGroupPage = () => {
  return (
    <div>
      <Link to="/sellGroup/getAll">
        <button>GetAllSellGroup</button>
      </Link>
      <Link to="/sellGroup/recommend">
        <button>RecommendInsurance</button>
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
