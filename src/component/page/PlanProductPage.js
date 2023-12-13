import { Link } from "react-router-dom";

import "../common/TableStyle.css";
import "../common/ButtonStyle.css";
import "../common/CommonStyle.css";
import "./PlanProductPage.css";

const PlanProductPage = () => {
  return (
    <div>
      <header>
        <div class="banner-div">
          <span class="banner-text"> 1조 보험사 </span>
        </div>
      </header>

      <div class="planProduct-div">
        <Link to="/createInsurancePlan" class="planProduct-button" style={{textDecoration: 'none'}}>
          <div >
            <p class="planProduct-button-text"> 새 상품 기획 </p>
          </div>
        </Link>
        <Link to="/retrieveReports" class="planProduct-button" style={{textDecoration: 'none'}}>
          <div >
            <p class="planProduct-button-text"> 기존 상품 관리 </p>
          </div>
        </Link>
      </div>

      <footer>
        <p> 직원 전용 페이지입니다.</p>
        <p> 1조 보험사 페이지_분산프로그래밍II</p>
      </footer>
    </div>
  );
};

export default PlanProductPage;
