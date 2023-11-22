import {Link} from "react-router-dom"

const HomePage = () => {
return (
    <>  
        <div>홈페이지</div>
        <div><Link to="/UserLogin">Login</Link></div>
        <div><Link to="/Register">Register</Link></div>
        <div><Link to="/GetAllCustomer">GetAllCustomer</Link></div>
      </>
    );
};
export default HomePage;