import React, { useEffect, useState } from "react";
import { retrieveAppliedCounselingCustomers } from "./SellGroup";
import { Link } from "react-router-dom";

const RetrieveAppliedCounselingCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    retrieveAppliedCounselingCustomers().then((res) => {
      setCustomers(res.data);
    });
  }, []);

  return (
    <div>
      <div>*************** 상담 일정 ***************</div>
      {customers &&
        customers.map((customer, index) => {
          return (
            <div key={index}>
              <div>===============================</div>
              <input
                type="radio"
                id={customer.insuranceID}
                name="report"
                onClick={() => {
                  setChecked(customer);
                }}
              />
              {customer.name}
            </div>
          );
        })}
      <Link
        to={"/retrieveCustomerCounselingsByCustomerID"}
        state={{ customerID: checked.customerID }}
      >
        <button>선택</button>
      </Link>
    </div>
  );
};
export default RetrieveAppliedCounselingCustomers;
