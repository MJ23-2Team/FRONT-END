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

export const getAll = async () => {
  return await request.get(`sellGroup/getAll`);
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
