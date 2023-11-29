import { Routes, Route } from "react-router-dom";

import HomePage from "./component/page/HomePage";
import OperationPolicyPage from "./component/page/OperationPolicyPage";
import GyuPage from "./component/page/GyuPage";
import SeongPage from "./component/page/SeongPage";
import HyunPage from "./component/page/HyunPage";
import Register from "./user/customer/Register";
import Login from "./user/customer/Login";
import CampaignPlan from "./user/employee/marketing/CampaignPlan";
import GetPlanCampaign from "./user/employee/marketing/GetPlanCampaign";
import GetRunCampaign from "./user/employee/marketing/GetRunCampaign";
import GetEndCampaign from "./user/employee/marketing/GetEndCampaign";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/operationPolicyPage" element={<OperationPolicyPage />} />
        <Route path="/gyu" element={<GyuPage />} />
        <Route path="/seong" element={<SeongPage />} />
        <Route path="/hyun" element={<HyunPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/campaignPlan" element={<CampaignPlan />} />
        <Route path="/getPlanCampaign" element={<GetPlanCampaign />} />
        <Route path="/getRunCampaign" element={<GetRunCampaign />} />
        <Route path="/getEndCampaign" element={<GetEndCampaign />} />
      </Routes>
    </>
  );
};
export default App;
