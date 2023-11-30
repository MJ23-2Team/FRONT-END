import { Routes, Route } from "react-router-dom";

import HomePage from "./component/page/HomePage";
import OperationPolicyPage from "./component/page/OperationPolicyPage";
import GyuPage from "./component/page/GyuPage";
import HyunPage from "./component/page/HyunPage";
import EducationPage from "./component/page/EducationPage";
import EducationStudentPage from "./component/page/EducationStudentPage";
import ContractManagementPolicyPage from "./component/page/ContractManagementPolicyPage";
import AdviceNoteModal from "./component/page/AdviceNoteModal";
import EmployeeRewardPage from "./component/page/EmployeeRewardPage";
import Register from "./user/customer/Register";
import Login from "./user/customer/Login";
import AboutEducationPage from "./component/page/AboutEducationPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/operationPolicyPage" element={<OperationPolicyPage />} />
        <Route path="/gyu" element={<GyuPage />} />
        <Route path="/educationPage" element={<EducationPage />} />
        <Route path="/aboutEducationPage" element={<AboutEducationPage /> } />
        <Route path="/educationStudentPage" element={<EducationStudentPage /> } />
        <Route path="/adviceNoteModal" element={<AdviceNoteModal /> } />
        <Route path="/employeeRewardPage" element={<EmployeeRewardPage /> } />
        <Route path="/contractManagementPolicyPage" element={<ContractManagementPolicyPage /> } /> 
        <Route path="/hyun" element={<HyunPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};
export default App;
