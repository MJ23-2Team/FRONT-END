import { Link } from "react-router-dom";

const CampaignPage = () => {
  return (
    <div>
      <Link to="/createCampaignPlan">
        <button>캠페인 기획</button>
      </Link>
      <Link to="/retrieveCampaignPage">
        <button>캠페인 조회</button>
      </Link>
    </div>
  );
};

export default CampaignPage;
