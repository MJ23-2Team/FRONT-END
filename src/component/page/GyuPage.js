import { Link } from "react-router-dom";

const GyuPage = () => {
  return (
    <div>
      <Link to="/createCampaignPlan">
        <button>캠페인 기획</button>
      </Link>
      <Link to="/retrievePlanCampaign">
        <button>기획 캠페인 전체 조회</button>
      </Link>
      <Link to="/retrieveRunCampaign">
        <button>진행 캠페인 전체 조회</button>
      </Link>
      <Link to="/retrieveEndCampaign">
        <button>종료된 캠페인 결과 저장</button>
      </Link>
      <Link to="/registerInsurance">
        <button>고객 보험 가입 신청</button>
      </Link>
      <Link to="/basic">
        <button>기본 인수 심사</button>
      </Link>
      <Link to="/collaborative">
        <button>공동 인수 심사</button>
      </Link>
      <Link to="/createUnderWritingPolicy">
        <button>인수 정책 기획</button>
      </Link>
      <Link to="/retrieveUnderWritingPolicy">
        <button>인수 정책 조회</button>
      </Link>
    </div>
  );
};

export default GyuPage;
