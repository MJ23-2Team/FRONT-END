import { getAllCampaign } from "./Marketing";
import React, { useState, useEffect } from "react";

const GetAllCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    getAllCampaign().then((res) => {
      setCampaigns(res.data.data);
    });
  }, []);

  return (
    <div>
      <div>캠페인 전체 조회</div>
      {console.log(campaigns)}
      {console.log(campaigns[0])}
      {campaigns &&
        campaigns.map((campaigns, index) => {
          return (
            <div key={index}>
              <div>
                ===============================================================================
              </div>
              {campaigns &&
                Object.entries(campaigns).map(([key, value]) => (
                  <div key={key}>{`${key} : ${value}`}</div>
                ))}
            </div>
          );
        })}
    </div>
  );
};

export default GetAllCampaign;
