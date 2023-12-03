import React, { useEffect, useState } from "react";
import { getAppliedCounselingCustomers } from "./SellGroup";
import { Link } from "react-router-dom";

const GetAppliedCounselingCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    getAppliedCounselingCustomers().then((res) => {
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
        to={"/getCustomerCounselingsByCustomerID"}
        state={{ customerID: checked.customerID }}
      >
        <button>선택</button>
      </Link>
    </div>
  );
};
export default GetAppliedCounselingCustomers;
