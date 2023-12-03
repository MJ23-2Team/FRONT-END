import request from "../../component/common/axios";

export const evaluateResult = async (data) => {
  return await request.post(`sellGroup/evaluateResult`, data);
};
export const recommand = async (data) => {
  return await request.post(`sellGroup/recommand`, JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const recommendInsurance = async (data) => {
  return await request.get(`sellGroup/recommand`, JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const recommendInsuranceReason = async (data) => {
  return await request.get(`sellGroup/recommendReason?insuarnceId=${data}&customerId=${localStorage.getItem("id")}`);
};
export const calculateInsuranceFee = async (data) => {
  return await request.get(`sellGroup/fee?insuarnceId=${data}&customerId=${localStorage.getItem("id")}`);
};

export const getAll = async () => {
  return await request.get(`sellGroup/getAll`);
};
export const choiceCampaignProgram = async (data) => {
  return await request.get(`sellGroup/campaignProgram?id=` + data);
};
export const getUserPersonas = async (data) => {
  return await request.get(`sellGroup/userPersonas?id=` + data);
};
export const addUserPersona = async (data) => {
  return await request.post(`sellGroup/userPersona`, data);
};
export const planSalesPlan = async (data) => {
  return await request.put(`sellGroup/salesPlan`, data);
};
export const getAppliedCounselingCustomers = async () => {
  return await request.get(`sellGroup/appliedCounselingCustomers`);
};
export const getCustomerCounselingsByCustomerID = async (data) => {
  return await request.get(`sellGroup/appliedCounselings?customerID=` + data);
};
export const setConsultationSchedule = async (data) => {
  return await request.put(`sellGroup/schedule?customerCounselingID=` + data);
};
