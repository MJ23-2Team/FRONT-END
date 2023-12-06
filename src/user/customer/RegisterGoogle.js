import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setInfo } from "./Customer";
  const RegisterGoogle = () => {

  const navigate = useNavigate();
  const [data, setdata] = useState({});
  const [info, setinfo] = useState({});

  const onHandleChangedata = (e) => {
    setdata(prevInfo => ({...prevInfo, [e.target.name]: e.target.value}));
  };
  useEffect(() => {
    setinfo(() => ({id: localStorage.getItem('id'), customerDto: data }));
  }, [data]);
  
  const onSubmitHandle = () => {
      if (data.address && data.age) {
        setInfo(info);
        navigate("/home");
      }else{
          alert("값을 입력해주세요");
      }

  };

  return (
    <>
      <div>고객 정보 등록</div>
      <input type="text" name="address" placeholder="address" onChange={(e) => onHandleChangedata(e)} />
      <input type="text" name="age" placeholder="age" onChange={(e) => onHandleChangedata(e)} />
      <input type="text" name="sex" placeholder="sex" onChange={(e) => onHandleChangedata(e)} />
      <input type="text" name="job" placeholder="job" onChange={(e) => onHandleChangedata(e)} />
      <input type="text" name="name" placeholder="name" onChange={(e) => onHandleChangedata(e)} />
      <div></div>
      <input type="text" name="phoneNumber" placeholder="phoneNumber" onChange={(e) => onHandleChangedata(e)} />
      <input type="text" name="registrationNumber" placeholder="registrationNumber" onChange={(e) => onHandleChangedata(e)} />
      <input type="text" name="incomeLevel" placeholder="incomeLevel" onChange={(e) => onHandleChangedata(e)} />
      <input type="text" name="accountNumber" placeholder="accountNumber" onChange={(e) => onHandleChangedata(e)} />
      <input type="text" name="accountPassword" placeholder="accountPassword" onChange={(e) => onHandleChangedata(e)} />
      <button onClick={() => {onSubmitHandle();}}>
        등록하기
      </button>
    </>
  );
};
export default RegisterGoogle;
