import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <header>
        <div>홈페이지</div>
        <Link to="/operationPolicy">
          <button>OperationPolicyPage</button>
        </Link>
        <Link to="/sellGroup">
          <button>SellGroupPage</button>
        </Link>
        <Link to="/getAllCustomer">
          <button>GetAllCustomer</button>
        </Link>
        <Link to="/gyu">
          <button>심규창</button>
        </Link>
        <Link to="/seong">
          <button>임성제</button>
        </Link>
        <Link to="/hyun">
          <button>임현우</button>
        </Link>
      </header>
    </div>
  );
};
export default HomePage;
