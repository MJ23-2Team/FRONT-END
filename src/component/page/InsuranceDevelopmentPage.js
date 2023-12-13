import { Link } from "react-router-dom";

import "../common/TableStyle.css";
import "../common/ButtonStyle.css";
import "../common/CommonStyle.css";
import "./InsuranceDevelopmentPage.css";

const InsuranceDevelopmentPage = () => {
  return (
    <div>
      <header>
        <div class="banner-div">
          <span class="banner-text"> 1조 보험사 </span>
        </div>
      </header>

      <div class="insuranceDevelopment-div">
        <Link to="/planProductPage" class="insuranceDevelopment-button" style={{textDecoration: 'none'}}>
          <div >
            <p class="insuranceDevelopment-button-text"> 상품 기획 </p>
          </div>
        </Link>
        <Link to="/retrievePlannedInsurances" class="insuranceDevelopment-button" style={{textDecoration: 'none'}}>
          <div >
            <p class="insuranceDevelopment-button-text"> 상품 개발 </p>
          </div>
        </Link>
        <Link to="/authorizeInsurance" class="insuranceDevelopment-button" style={{textDecoration: 'none'}}>
        <div>
            <p class="insuranceDevelopment-button-text"> 상품 인가 </p>
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

export default InsuranceDevelopmentPage;
