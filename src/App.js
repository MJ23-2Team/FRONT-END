import { Routes, Route } from "react-router-dom";

import HomePage from "./component/page/HomePage";
import OperationPolicyPage from "./component/page/OperationPolicyPage";
import GyuPage from "./component/page/GyuPage";
import SeongPage from "./component/page/SeongPage";
import HyunPage from "./component/page/HyunPage";
import Register from "./user/customer/Register";
import Login from "./user/customer/Login";
import ManageInsurancePlan from "./user/employee/insuranceDevelopment/ManageInsurancePlan";
import DesignInsurance from "./user/employee/insuranceDevelopment/DesignInsurance";
import LoginPage from "./component/page/LoginPage";
import GetAllCustomer from "./user/customer/GetAllCustomer";
import CampaignPlan from "./user/employee/marketing/CampaignPlan";
import GetPlanCampaign from "./user/employee/marketing/GetPlanCampaign";
import GetRunCampaign from "./user/employee/marketing/GetRunCampaign";
import GetEndCampaign from "./user/employee/marketing/GetEndCampaign";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/operationPolicyPage" element={<OperationPolicyPage />} />
        <Route path="/getAllCustomer" element={<GetAllCustomer />} />
        <Route path="/gyu" element={<GyuPage />} />
        <Route path="/seong" element={<SeongPage />} />
        <Route path="/hyun" element={<HyunPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};
export default App;
