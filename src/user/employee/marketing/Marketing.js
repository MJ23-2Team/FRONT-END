import request from "../../../component/common/axios";

export const campaignplan = async (data) => {
  return await request.post(`plan`, data);
};
export const getAllCampaign = async () => {
  return await request.get("campaign/all");
};
// export const runCampaign = async (data) => {
//   return await request.patch("runCampaign/", data);
// };
