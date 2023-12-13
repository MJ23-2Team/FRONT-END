import { updateCustomerInformation } from "../../user/customer/Customer";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

const UpdateCustomerInformation = () => {
  const location = useLocation();
  const [data, setData] = useState({});
  const onHandleChangeData = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };
  const onSubmitHandle = (newData) => {
    const customerInformationRequest = {
      customerID: newData.customerID,
      name: newData.name,
      age: newData.age,
      sex: newData.sex,
      phoneNumber: newData.phoneNumber,
      incomeLevel: newData.incomeLevel,
      accountNumber: newData.accountNumber,
      accountPassword: newData.accountPassword,
    };
    if (newData) {
      updateCustomerInformation(customerInformationRequest);
    } else {
      alert("값을 입력해주세요");
    }
  };

  return (
    <>
      <header>
        <h2>대면 상담</h2>
      </header>
      <div>고객님의 정보를 입력해주세요.</div>
      <input
        type="text"
        name="name"
        placeholder="이름"
        onChange={(e) => onHandleChangeData(e)}
      />
      <input
        type="number"
        name="age"
        placeholder="나이"
        onChange={(e) => onHandleChangeData(e)}
      />
      <select name="sex" onChange={(e) => onHandleChangeData(e)}>
        <option value="none" selected disabled>
          =성별=
        </option>
        <option value="MALE">남성</option>
        <option value="FEMALE">여성</option>
      </select>
      <input
        type="text"
        name="phoneNumber"
        placeholder="연락처"
        onChange={(e) => onHandleChangeData(e)}
      />
      <input
        type="number"
        name="incomeLevel"
        placeholder="소득 수준"
        onChange={(e) => onHandleChangeData(e)}
      />
      <input
        type="text"
        name="accountNumber"
        placeholder="계좌번호"
        onChange={(e) => onHandleChangeData(e)}
      />
      <input
        type="text"
        name="accountPassword"
        placeholder="계좌 비밀번호"
        onChange={(e) => onHandleChangeData(e)}
      />
      <Link to={"/recommendInsurances"}>
        <button
          onClick={() => {
            const newData = {
              customerID: location.state.customerID,
              ...data,
            };
            onSubmitHandle(newData);
          }}
        >
          저장
        </button>
      </Link>
    </>
  );
};

export default UpdateCustomerInformation;
