import { Routes, Route } from "react-router-dom";

import HomePage from "./component/page/HomePage";
import OperationPolicyPage from "./component/page/OperationPolicyPage";
import SellGroupPage from "./component/page/SellGroupPage";
import GetAllSellGroup from "./intra/sellGroup/GetAllSellGroup";
import GyuPage from "./component/page/GyuPage";
import SeongPage from "./component/page/SeongPage";
import HyunPage from "./component/page/HyunPage";
import Register from "./user/customer/Register";
import ManageInsurancePlan from "./user/employee/insuranceDevelopment/ManageInsurancePlan";
import DesignInsurance from "./user/employee/insuranceDevelopment/DesignInsurance";
import LoginPage from "./component/page/LoginPage";
import GetAllCustomer from "./user/customer/GetAllCustomer";
import CampaignPlan from "./user/employee/marketing/CampaignPlan";
import GetPlanCampaign from "./user/employee/marketing/GetPlanCampaign";
import GetRunCampaign from "./user/employee/marketing/GetRunCampaign";
import GetEndCampaign from "./user/employee/marketing/GetEndCampaign";
import EstimateProfit from "./user/employee/insuranceDevelopment/EstimateProfit";
import AnalyzeInsuranceRate from "./user/employee/insuranceDevelopment/AnalyzeInsuranceRate";
import AuthorizeInsurance from "./user/employee/insuranceDevelopment/AuthorizeInsurance";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        
        <Route path="/operationPolicy" element={<OperationPolicyPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/getAllCustomer" element={<GetAllCustomer />} />
        <Route path="/sellGroup" element={<SellGroupPage />} />
        <Route path="/sellGroup/getAll" element={<GetAllSellGroup/>} />
        <Route path="/sellGroup/recommend" element={<recommendInsurance/>} />

        <Route path="/gyu" element={<GyuPage />} />
        <Route path="/seong" element={<SeongPage />} />
        <Route path="/hyun" element={<HyunPage />} />
        
        <Route path="/manageInsurancePlan" element={<ManageInsurancePlan />} />
        <Route path="/designInsurance" element={<DesignInsurance />} />
        <Route path="/campaignPlan" element={<CampaignPlan />} />
        <Route path="/getPlanCampaign" element={<GetPlanCampaign />} />
        <Route path="/getRunCampaign" element={<GetRunCampaign />} />
        <Route path="/getEndCampaign" element={<GetEndCampaign />} />
        <Route path="/estimateProfit" element={<EstimateProfit />} />
        <Route
          path="/analyzeInsuranceRate"
          element={<AnalyzeInsuranceRate />}
        />
        <Route path="/authorizeInsurance" element={<AuthorizeInsurance />} />
      </Routes>
    </>
  );
};
export default App;
