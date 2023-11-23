import { Routes, Route } from "react-router-dom";

import HomePage from "./page/HomePage";
import WoongPage from "./page/WoongPage";
import GyuPage from "./page/GyuPage";
import SeongPage from "./page/SeongPage";
import HyunPage from "./page/HyunPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/woong" element={<WoongPage />} />
        <Route path="/gyu" element={<GyuPage />} />
        <Route path="/seong" element={<SeongPage />} />
        <Route path="/hyun" element={<HyunPage />} />
      </Routes>
    </>
  );
};
export default App;
