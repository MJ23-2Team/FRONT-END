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
      <div>{"보험 가계산: " + fee}</div>
      <div>{"보험 추천 이유: " + reason}</div>
    </div>
  );
};

export default RecommendInfoPage;
