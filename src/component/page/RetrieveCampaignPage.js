import { Link } from "react-router-dom";

const RetrieveCampaignPage = () => {
  return (
    <div>
      <Link to="/retrievePlanCampaign">
        <button>기획 캠페인 전체 조회</button>
      </Link>
      <Link to="/retrieveRunCampaign">
        <button>진행 캠페인 전체 조회</button>
      </Link>
      <Link to="/retrieveEndCampaign">
        <button>종료된 캠페인 전체 조회</button>
      </Link>
    </div>
  );
};

export default RetrieveCampaignPage;
