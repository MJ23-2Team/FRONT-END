import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <header>
        <div>홈페이지</div>
        <Link to="/operationPolicyPage">
          <button>OperationPolicyPage</button>
        </Link>
        <Link to="/gyu">
          <button>심규창</button>
        </Link>
        <Link to="/educationPage">
          <button> 교육 </button>
        </Link>
        <Link to ="educationStudentPage">
          <button> 교육 학생 </button>
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
