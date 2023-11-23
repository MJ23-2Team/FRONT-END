import UserLogin from "../user/customer/Login";
import Register from "../user/customer/Register";
import GetAllCustomer from "../user/customer/GetAllCustomer";

const WoongPage = () => {
  return (
    <div>
      <UserLogin />
      <Register />
      <GetAllCustomer />
    </div>
  );
};

export default WoongPage;
