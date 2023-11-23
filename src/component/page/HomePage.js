import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <header>
        <div>홈페이지</div>
        <Link to="/woong">
          <button>황재웅</button>
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
      <Link to="/login">
          <button>로그인</button>
        </Link>
        <Link to="/register">
          <button>회원가입</button>
        </Link>
    </div>
  );
};
export default HomePage;
