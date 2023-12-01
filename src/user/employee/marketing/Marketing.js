import request from "../../../component/common/axios";

export const campaignplan = async (data) => {
  return await request.post(`campaign`, data);
};
export const getPlanCampaign = async () => {
  return await request.get("campaign/planCampaign");
};
export const doCampaignRun = async (data) => {
  return await request.post("campaign/stateRun?campaignID=" + data);
};
export const getRunCampaign = async () => {
  return await request.get("campaign/runCampaign");
};
export const doCampaignEnd = async (data) => {
  return await request.post("campaign/stateEnd?campaignID=" + data);
};
export const getEndCampaign = async () => {
  return await request.get("campaign/endCampaign");
};
export const setCampaignResult = async (data) => {
  return await request.post("campaign/result?campaignID=" + data);
};
