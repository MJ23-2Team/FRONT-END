import { campaignplan } from "./Marketing";
import { useState } from "react";

const CampaignPlan = () => {
  const [data, setData] = useState({});
  const onHandleChangeData = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };
  const onSubmitHandle = () => {
    if (
      data.insuranceID &&
      data.campaignName &&
      data.campaignTarget &&
      data.duration &&
      data.place &&
      data.campaignWay &&
      data.budget &&
      data.exResult
    ) {
      campaignplan(data).then((res) => alert(res.data.message));
    } else {
      alert("값을 입력해주세요");
    }
  };

  return (
    <>
      <div>캠페인 기획</div>
      <div>
        대상 보험 / 캠페인 이름 / 마케팅 대상 / 마케팅 기간 / 마케팅 장소 /
        캠페인 수단 / 마케팅 예산 / 예상 손익률{" "}
      </div>
      <input
        type="number"
        name="insuranceID"
        placeholder="insuranceID"
        onChange={(e) => onHandleChangeData(e)}
      />
      <input
        type="text"
        name="campaignName"
        placeholder="campaignName"
        onChange={(e) => onHandleChangeData(e)}
      />
      <input
        type="text"
        name="campaignTarget"
        placeholder="campaignTarget"
        onChange={(e) => onHandleChangeData(e)}
      />
      <input
        type="number"
        name="duration"
        placeholder="duration"
        onChange={(e) => onHandleChangeData(e)}
      />
      <input
        type="text"
        name="place"
        placeholder="place"
        onChange={(e) => onHandleChangeData(e)}
      />
      <input
        type="text"
        name="campaignWay"
        placeholder="campaignWay"
        onChange={(e) => onHandleChangeData(e)}
      />
      <input
        type="number"
        name="budget"
        placeholder="budget"
        onChange={(e) => onHandleChangeData(e)}
      />
      <input
        type="number"
        name="exResult"
        placeholder="exResult"
        onChange={(e) => onHandleChangeData(e)}
      />
      <button
        onClick={() => {
          onSubmitHandle();
        }}
      >
        기획 저장
      </button>
      <div>
        ===============================================================================
      </div>
    </>
  );
};

export default CampaignPlan;
