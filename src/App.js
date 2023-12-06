import { Routes, Route } from "react-router-dom";

import HomePage from "./component/page/HomePage";
import OperationPolicyPage from "./component/page/OperationPolicyPage";
import SellGroupPage from "./component/page/SellGroupPage";
import GetAllSellGroup from "./intra/sellGroup/GetAllSellGroup";
import GyuPage from "./component/page/GyuPage";
import EducationPage from "./component/page/EducationPage";
import EducationStudentPage from "./component/page/EducationStudentPage";
import PaymentPage from "./component/page/PaymentPage";
import ContractManagementPolicyPage from "./component/page/ContractManagementPolicyPage";
import AdviceNoteModal from "./component/page/AdviceNoteModal";
import EmployeeRewardPage from "./component/page/EmployeeRewardPage";
import Register from "./user/customer/Register";
import AboutEducationPage from "./component/page/AboutEducationPage";
import AboutEducationStudentPage from "./component/page/AboutEducationStudentPage";
import ManageInsurancePlan from "./user/employee/insuranceDevelopment/ManageInsurancePlan";
import DesignInsurance from "./user/employee/insuranceDevelopment/DesignInsurance";
import LoginPage from "./component/page/LoginPage";
import GetAllCustomer from "./user/customer/GetAllCustomer";
import CreateCampaignPlan from "./user/employee/marketing/CreateCampaignPlan";
import RetrievePlanCampaign from "./user/employee/marketing/RetrievePlanCampaign";
import RetrieveRunCampaign from "./user/employee/marketing/RetrieveRunCampaign";
import RetrieveEndCampaign from "./user/employee/marketing/RetrieveEndCampaign";
import RetrieveUnderWritingPolicy from "./intra/underwriting/RetrieveUnderWritingPolicy";
import CreateUnderWritingPolicy from "./intra/underwriting/CreateUnderWritingPolicy";
import RegisterInsurance from "./user/customer/RegisterInsurance";
import DoBasicUnderWriting from "./intra/underwriting/DoBasicUnderWriting";
import DoCollaborativeUnderWriting from "./intra/underwriting/DoCollaborativeUnderWriting";
import EstimateProfit from "./user/employee/insuranceDevelopment/EstimateProfit";
import AnalyzeInsuranceRate from "./user/employee/insuranceDevelopment/AnalyzeInsuranceRate";
import AuthorizeInsurance from "./user/employee/insuranceDevelopment/AuthorizeInsurance";
import RetrieveUserPersonas from "./intra/sellGroup/RetrieveUserPersonas";
import CreateUserPersona from "./intra/sellGroup/CreateUserPersona";
import PlanSalesPlan from "./intra/sellGroup/PlanSalesPlan";
import RegisterPage from "./component/page/RegisterPage";
import InsuranceDevelopmentPage from "./component/page/InsuranceDevelopmentPage";
import CreateInsurancePlan from "./user/employee/insuranceDevelopment/CreateInsurancePlan";
import PlanProductPage from "./component/page/PlanProductPage";
import RetrieveReports from "./user/employee/insuranceDevelopment/RetrieveReports";
import RetrievePlannedInsurances from "./user/employee/insuranceDevelopment/RetrievePlannedInsurances";
import SalesPlanPage from "./component/page/SalesPlanPage";
import ProcessSalesPage from "./component/page/ProcessSalesPage";
import RetrieveAppliedCounselingCustomers from "./intra/sellGroup/RetrieveAppliedCounselingCustomers";
import RetrieveCustomerCounselingsByCustomerID from "./intra/sellGroup/RetrieveCustomerCounselingsByCustomerID";
import RetrieveAcceptedApplyCounselingCustomers from "./intra/sellGroup/RetrieveAcceptedApplyCounselingCustomers";
import UpdateCustomerInformation from "./intra/sellGroup/UpdateCustomerInformation";
import GetSuggestedOperationPolicy from "./intra/operationPolicy/GetSuggestedOperationPolicy";
import RecommendInsurance from "./intra/sellGroup/RecommendInsurance";
import RecommendInsurances from "./intra/sellGroup/RecommendInsurances";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/regsiter" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />

        <Route path="/operationPolicy" element={<OperationPolicyPage />} />
        <Route
          path="/operationPolicy/suggested"
          element={<GetSuggestedOperationPolicy />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/getAllCustomer" element={<GetAllCustomer />} />
        <Route path="/sellGroup" element={<SellGroupPage />} />
        <Route path="/sellGroup/getAll" element={<GetAllSellGroup />} />
        <Route path="/sellGroup/recommend" element={<RecommendInsurance />} />

        <Route path="/educationPage" element={<EducationPage />} />
        <Route path="/aboutEducationPage" element={<AboutEducationPage />} />
        <Route
          path="/aboutEducationStudentPage"
          element={<AboutEducationStudentPage />}
        />
        <Route
          path="/educationStudentPage"
          element={<EducationStudentPage />}
        />
        <Route path="/paymentPage" element={<PaymentPage />} />
        <Route path="/adviceNoteModal" element={<AdviceNoteModal />} />
        <Route path="/employeeRewardPage" element={<EmployeeRewardPage />} />
        <Route
          path="/contractManagementPolicyPage"
          element={<ContractManagementPolicyPage />}
        />
        <Route
          path="/insuranceDevelopmentPage"
          element={<InsuranceDevelopmentPage />}
        />
        <Route path="/planProductPage" element={<PlanProductPage />} />
        <Route path="/processSalesPage" element={<ProcessSalesPage />} />
        <Route path="/salesPlanPage" element={<SalesPlanPage />} />

        <Route path="/manageInsurancePlan" element={<ManageInsurancePlan />} />
        <Route path="/designInsurance" element={<DesignInsurance />} />
        <Route path="/gyu" element={<GyuPage />} />
        <Route path="/createCampaignPlan" element={<CreateCampaignPlan />} />
        <Route
          path="/retrievePlanCampaign"
          element={<RetrievePlanCampaign />}
        />
        <Route path="/retrieveRunCampaign" element={<RetrieveRunCampaign />} />
        <Route path="/retrieveEndCampaign" element={<RetrieveEndCampaign />} />
        <Route path="/registerInsurance" element={<RegisterInsurance />} />
        <Route path="/basic" element={<DoBasicUnderWriting />} />
        <Route
          path="/collaborative"
          element={<DoCollaborativeUnderWriting />}
        />
        <Route
          path="/createUnderWritingPolicy"
          element={<CreateUnderWritingPolicy />}
        />
        <Route
          path="/retrieveUnderWritingPolicy"
          element={<RetrieveUnderWritingPolicy />}
        />

        <Route path="/estimateProfit" element={<EstimateProfit />} />
        <Route
          path="/analyzeInsuranceRate"
          element={<AnalyzeInsuranceRate />}
        />
        <Route path="/authorizeInsurance" element={<AuthorizeInsurance />} />
        <Route
          path="/retrieveUserPersonas"
          element={<RetrieveUserPersonas />}
        />
        <Route path="/createUserPersona" element={<CreateUserPersona />} />
        <Route path="/planSalesPlan" element={<PlanSalesPlan />} />
        <Route path="/createInsurancePlan" element={<CreateInsurancePlan />} />
        <Route path="/retrieveReports" element={<RetrieveReports />} />
        <Route
          path="/retrievePlannedInsurances"
          element={<RetrievePlannedInsurances />}
        />
        <Route
          path="/retrieveAppliedCounselingCustomers"
          element={<RetrieveAppliedCounselingCustomers />}
        />
        <Route
          path="/retrieveCustomerCounselingsByCustomerID"
          element={<RetrieveCustomerCounselingsByCustomerID />}
        />
        <Route
          path="/retrieveAcceptedApplyCounselingCustomers"
          element={<RetrieveAcceptedApplyCounselingCustomers />}
        />
        <Route
          path="/updateCustomerInformation"
          element={<UpdateCustomerInformation />}
        />
        <Route path="/recommendInsurances" element={<RecommendInsurances />} />
      </Routes>
    </>
  );
};
export default App;
