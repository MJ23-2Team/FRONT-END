import { retrievePlanCampaign, doCampaignRun } from "./Marketing";
import React, { useState, useEffect } from "react";

const RetrievePlanCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    retrievePlanCampaign().then((res) => {
      setCampaigns(res.data);
    });
  }, []);

  const onSubmitHandleRun = (campaignID) => {
    doCampaignRun(campaignID).then(() => {
      alert("캠페인 실행 성공");
    });
  };

  return (
    <div>
      <div>기획된 캠페인 전체 조회</div>
      {campaigns.map((campaign) => {
        return (
          <>
            <div>campaignId: {campaign.campaignID}</div>
            <div>campaignName: {campaign.campaignName}</div>
            <div>duration: {campaign.duration}</div>
            <div>target: {campaign.campaignTarget}</div>
            <div>place: {campaign.place}</div>
            <div>outTeam: {campaign.outTeam}</div>
            <button onClick={() => onSubmitHandleRun(campaign.campaignID)}>
              실행
            </button>
          </>
        );
      })}
    </div>
  );
};

export default RetrievePlanCampaign;
