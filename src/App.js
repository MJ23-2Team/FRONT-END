import {Routes, Route} from "react-router-dom"

import UserLogin from "./user/customer/Login";
import Register from "./user/customer/Register";
import GetAllCustomer from "./user/customer//GetAllCustomer";
import HomePage from "./page/HomePage";

const App = () => {
return (
    <>  
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/UserLogin" element={<UserLogin />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/GetAllCustomer" element={<GetAllCustomer />} />
        </Routes>
      </>
    );
};
export default App;
