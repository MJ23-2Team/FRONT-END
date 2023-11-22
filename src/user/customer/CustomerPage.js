import UserLogin from "./Login";
import Register from "./Register";
import GetAllCustomer from "./GetAllCustomer";

const customerPage = () => {
    return (
        <div>
            <UserLogin/>
            <Register/>
            <GetAllCustomer/>
        </div>
    );
};
export default customerPage;