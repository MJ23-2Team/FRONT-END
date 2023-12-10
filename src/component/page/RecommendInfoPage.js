import {
  recommendInsuranceReason,
  calculateInsuranceFee,
} from "../../intra/sellGroup/SellGroup";
import React, { useEffect, useState } from "react";
const RecommendInfoPage = (data) => {
  const [fee, setFee] = useState(null);
  const [reason, setReason] = useState();

  useEffect(() => {
    recommendInsuranceReason(data.id).then((res) => {
      setReason(res.data);
    });
    if (fee === null) {
      calculateInsuranceFee(data.id).then((res) => {
        setFee(res.data);
      });
    }
  });
  return (
    <div>
      <header>
        <h2>보험 정보</h2>
      </header>
      <div>{"보험 가계산: 월 " + fee + "원"}</div>
      <div>{"보험 추천 이유: " + reason}</div>
    </div>
  );
};

export default RecommendInfoPage;
