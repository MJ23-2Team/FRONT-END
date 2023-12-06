import { createUserPersona } from "./SellGroup";
import { retrieveByInsuranceID } from "../../user/employee/insuranceDevelopment/InsuranceDevelopment";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const CreateUserPersona = () => {
  const [data, setData] = useState({});
  const location = useLocation();
  const onHandleChangeData = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <div>새상품 기획</div>
      <div>고객니즈 및 경쟁사의 동향 분석 보고서를 작성하세요 </div>
      <select name="sex" onChange={(e) => onHandleChangeData(e)}>
        <option value="none" selected disabled>
          =성별=
        </option>
        <option value="MALE">남성</option>
        <option value="FEMALE">여성</option>
      </select>
      <input
        type="number"
        name="age"
        placeholder="나이"
        onChange={(e) => onHandleChangeData(e)}
      />
      <input
        type="text"
        name="job"
        placeholder="직업"
        onChange={(e) => onHandleChangeData(e)}
      />
      <input
        type="number"
        name="incomeLevel"
        placeholder="소득수준"
        onChange={(e) => onHandleChangeData(e)}
      />
      <Link to="/">
        <button
          onClick={() => {
            retrieveByInsuranceID(location.state.insuranceID).then((res) => {
              const newData = { insurance: res.data, ...data };
              console.log(newData);
              if (newData) {
                createUserPersona(newData).then((res) =>
                  alert(res.data.message)
                );
                const newUrl = `/retrieveUserPersonas?insuranceID=${location.state.insuranceID}`;
                window.location.href = newUrl;
              } else {
                alert("값을 입력해주세요");
              }
            });
          }}
        >
          저장
        </button>
      </Link>
      <div>
        ===============================================================================
      </div>
    </>
  );
};

export default CreateUserPersona;
