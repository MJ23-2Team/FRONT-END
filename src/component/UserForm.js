import { useState } from "react";
import { createUser } from "../axios/user/User";

const UserForm = ({ getUser }) => {
  const [data, setData] = useState({});
  const onSubmitHandle = () => {
    createUser(data).then(() => alert("성공적으로 등록했습니다 !"));
    getUser();
  };
  const onHandleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <>
      <input type="text" name="name" onChange={(e) => onHandleChange(e)} />
      <input type="text" name="age" onChange={(e) => onHandleChange(e)} />
      <button
        onClick={() => {
          onSubmitHandle();
        }}
      >
        등록하기
      </button>
    </>
  );
};
export default UserForm;
