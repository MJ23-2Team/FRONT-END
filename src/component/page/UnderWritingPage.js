import { Link } from "react-router-dom";

const UnderWritingPage = () => {
  return (
    <div>
      <Link to="/basic">
        <button>기본 인수 심사</button>
      </Link>
      <Link to="/collaborative">
        <button>공동 인수 심사</button>
      </Link>
    </div>
  );
};

export default UnderWritingPage;
