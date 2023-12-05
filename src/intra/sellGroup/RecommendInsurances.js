import React, { useEffect, useState } from "react";
import { retrieveAcceptedApplyCounselingCustomers } from "./SellGroup";
import { Link } from "react-router-dom";

const RecommendInsurances = () => {
  const [customers, setCustomers] = useState([]);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    retrieveAcceptedApplyCounselingCustomers().then((res) => {
      setCustomers(res.data);
    });
  }, []);

  return (
    <div>
      <div>*************** 대면 상담 ***************</div>
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
        to={"/updateCustomerInformation"}
        state={{ customerID: checked.customerID }}
      >
        <button>선택</button>
      </Link>
    </div>
  );
};
export default RecommendInsurances;
