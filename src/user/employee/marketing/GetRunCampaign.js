import { getRunCampaign, doCampaignEnd } from "./Marketing";
import React, { useState, useEffect } from "react";

const GetRunCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    getRunCampaign().then((res) => {
      setCampaigns(res.data.data);
    });
  }, []);

  const onSubmitHandleRun = (campaignID) => {
    doCampaignEnd(campaignID).then(() => {
      alert("캠페인 종료 성공");
    });
  };

  return (
    <div>
      <div>진행중인 캠페인 전체 조회</div>
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
              종료
            </button>
          </>
        );
      })}
    </div>
  );
};
export default GetRunCampaign;
