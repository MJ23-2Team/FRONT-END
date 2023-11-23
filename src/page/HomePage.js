import { Link, Routes, Route } from "react-router-dom";
import WoongPage from "./WoongPage";
import GyuPage from "./GyuPage";
import SeongPage from "./SeongPage";
import HyunPage from "./HyunPage";

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
      {/* <Routes>
        <Route path="/woong" element={<WoongPage />} />
        <Route path="/gyu" element={<GyuPage />} />
        <Route path="/seong" element={<SeongPage />} />
        <Route path="/hyun" element={<HyunPage />} />
      </Routes> */}
    </div>
  );
};
export default HomePage;
