import {Routes, Route, BrowserRouter, Link} from "react-router-dom"
import customerPage from "./user/customer/CustomerPage";
const App = () => {
return (
    <>
        <Link to="/CustomerPage">CustomerPage</Link>
        <div>"dmdkdkdd"</div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<customerPage />} />
            </Routes>
        </BrowserRouter>
      </>
    );
};
export default App;
