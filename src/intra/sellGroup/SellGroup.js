import request from "../../component/common/axios";

export const evaluateResult = async (data) => {
  return await request.post(`sellGroup/evaluateResult`, data);
};
export const retrieveRecommendInsurance = async () => {
  return await request.get('sellGroup/recommend');
};
export const recommendInsuranceReason = async (data) => {
  return await request.get(`sellGroup/recommendReason?insuarnceId=${data}&customerId=${localStorage.getItem("id")}`);
};
export const calculateInsuranceFee = async (data) => {
  return await request.get(`sellGroup/calculateFee?insuarnceId=${data}&customerId=${localStorage.getItem("id")}`);
};

export const retrieveAll = async () => {
  return await request.get(`sellGroup/retrieveAll`);
};
export const choiceCampaignProgram = async (data) => {
  return await request.get(`sellGroup/campaignProgram?id=` + data);
};
export const retrieveUserPersonas = async (data) => {
  return await request.get(`sellGroup/userPersonas?id=` + data);
};
export const createUserPersona = async (data) => {
  return await request.post(`sellGroup/userPersona`, data);
};
export const planSalesPlan = async (data) => {
  return await request.put(`sellGroup/salesPlan`, data);
};
export const retrieveAppliedCounselingCustomers = async () => {
  return await request.get(`sellGroup/appliedCounselingCustomers`);
};
export const retrieveCustomerCounselingsByCustomerID = async (data) => {
  return await request.get(`sellGroup/appliedCounselings?customerID=` + data);
};
export const updateConsultationSchedule = async (data) => {
  return await request.put(`sellGroup/schedule?customerCounselingID=` + data);
};
export const retrieveAcceptedApplyCounselingCustomers = async () => {
  return await request.get(`sellGroup/acceptedApplyCounselingCustomers`);
};
