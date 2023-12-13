import React, { useEffect, useState } from "react";
import { retrieveAcceptedApplyCounselingCustomers } from "./SellGroup";
import { Link } from "react-router-dom";

const RetrieveAcceptedApplyCounselingCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    retrieveAcceptedApplyCounselingCustomers().then((res) => {
      setCustomers(res.data);
    });
  }, []);

  return (
    <div>
      <header>
        <h2>대면 상담</h2>
      </header>
      <div>*************** 예정된 대면 상담 ***************</div>
      {customers &&
        customers.map((customer, index) => {
          return (
            <div key={index}>
              <input
                type="radio"
                id={customer.insuranceID}
                name="report"
                onClick={() => {
                  setChecked(customer);
                }}
              />
              {"이름: " + customer.customerName}
              {" / 날짜: " + customer.counselingDate}
              {" /  시간: " + customer.counselingTime}
              <div>=================================</div>
            </div>
          );
        })}
      <Link
        to={"/updateCustomerInformation"}
        state={{ customerID: checked.customerID }}
      >
        <button>선택</button>
      </Link>
    </div>
  );
};
export default RetrieveAcceptedApplyCounselingCustomers;
