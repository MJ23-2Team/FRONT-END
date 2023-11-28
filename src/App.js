import { Routes, Route } from "react-router-dom";

import HomePage from "./component/page/HomePage";
import OperationPolicyPage from "./component/page/OperationPolicyPage";
import GyuPage from "./component/page/GyuPage";
import HyunPage from "./component/page/HyunPage";
import EducationPage from "./component/page/EducationPage";
import EducationStudentPage from "./component/page/EducationStudentPage";
import Register from "./user/customer/Register";
import Login from "./user/customer/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/operationPolicyPage" element={<OperationPolicyPage />} />
        <Route path="/gyu" element={<GyuPage />} />
        <Route path="/educationPage" element={<EducationPage />} />
        <Route path="/educationStudentPage" element={<EducationStudentPage /> } />
        <Route path="/hyun" element={<HyunPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};
export default App;
