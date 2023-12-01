import { Link } from "react-router-dom";

const SellGroupPage = () => {
  return (
    <div>
        <Link to="/sellGroup/getAll">
          <button>GetAllSellGroup</button>
        </Link>
        <Link to="/sellGroup/recommendInsurance">
          <button>RecommendInsurance</button>
        </Link>
        
    </div>
  );
};

export default SellGroupPage;
