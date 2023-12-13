import { Link } from "react-router-dom";

const ProcessSalesPage = () => {
  return (
    <div>
      <header>
        <h2>영업 활동</h2>
      </header>
      <Link to="/salesPlanPage">
        <button>영업 활동 계획</button>
      </Link>
      <Link to="/retrieveAppliedCounselingCustomers">
        <button>상담 일정 수립</button>
      </Link>
      <Link to="/retrieveAcceptedApplyCounselingCustomers">
        <button>대면 상담</button>
      </Link>
    </div>
  );
};

export default ProcessSalesPage;
