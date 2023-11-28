import { Link } from "react-router-dom";
import Login from "../../user/customer/Login";

const LoginPage = () => {
  return (
    <div>
      <Login />
      <Link to="/register">
          <button>회원가입</button>
      </Link>
    </div>
  );
};

export default LoginPage;
