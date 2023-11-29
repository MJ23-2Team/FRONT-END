import { Link } from "react-router-dom";

const GyuPage = () => {
  return (
    <div>
      <Link to="/campaignPlan">
        <button>캠페인 기획</button>
      </Link>
      <Link to="/getPlanCampaign">
        <button>기획 캠페인 전체 조회</button>
      </Link>
      <Link to="/getRunCampaign">
        <button>진행 캠페인 전체 조회</button>
      </Link>
      <Link to="/getEndCampaign">
        <button>종료된 캠페인 결과 저장</button>
      </Link>
    </div>
  );
};

export default GyuPage;
