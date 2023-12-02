import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "./Customer";

const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({});
  const onHandleChangeData = (e) => {
        setData(prevData => ({ ...prevData, [e.target.name]: e.target.value }));
  };
  const onSubmitHandle = () => {
    if (data.id && data.pw) {
      loginUser(data)
      .then((res) => {
        alert(res.data.message);
        localStorage.clear();
        localStorage.setItem('id', res.data.data);
        navigate("/home");
      });
    } else {
      alert("값을 입력해주세요");
    }
  };
  return (
    <>
      <div>로그인</div>
      <div>아이디 / 비밀번호</div>
      <input type="text" name="id" placeholder="ID" onChange={(e) => onHandleChangeData(e)} />
      <input type="password" name="pw" placeholder="PW" onChange={(e) => onHandleChangeData(e)} />
      <div/>
      <button onClick={() => {onSubmitHandle();}}>
        로그인
      </button>
    </>
  );
};
export default Login;
