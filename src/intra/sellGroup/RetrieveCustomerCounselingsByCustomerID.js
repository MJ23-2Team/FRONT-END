import React, { useEffect, useState } from "react";
import {
  retrieveCustomerCounselingsByCustomerID,
  updateConsultationSchedule,
} from "./SellGroup";
import { Link, useLocation } from "react-router-dom";

const RetrieveCustomerCounselingsByCustomerID = () => {
  const [counselings, setCounselings] = useState([]);
  const [checked, setChecked] = useState([]);
  const location = useLocation();

  useEffect(() => {
    retrieveCustomerCounselingsByCustomerID(location.state.customerID).then(
      (res) => {
        setCounselings(res.data);
      }
    );
  });

  return (
    <div>
      <div>*************** 상담 일정 ***************</div>
      {counselings &&
        counselings.map((counseling, index) => {
          return (
            <div key={index}>
              <div>===============================</div>
              <input
                type="radio"
                id={counseling.counselingID}
                name="report"
                onClick={() => {
                  setChecked(counseling.counselingID);
                }}
              />
              {"장소: " + counseling.counselingPlace + " / "}
              {"시간: " + counseling.counselingTime}
            </div>
          );
        })}
      <Link to={"/processSalesPage"}>
        <button
          onClick={() => {
            updateConsultationSchedule(checked);
            alert("상담 일정이 잡혔습니다");
          }}
        >
          선택
        </button>
      </Link>
    </div>
  );
};
export default RetrieveCustomerCounselingsByCustomerID;
