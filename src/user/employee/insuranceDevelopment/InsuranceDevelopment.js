import request from "../../../component/common/axios";

export const createInsurancePlan = async (data) => {
  return await request.post(`insuranceDevelopment/plan?report=` + data);
};

export const manageInsurancePlan = async (data) => {
  return await request.put(`insuranceDevelopment/plan`, data);
};

export const retrieveReports = async () => {
  return await request.get(`insuranceDevelopment/reports`);
};

export const retrievePlannedInsurances = async () => {
  return await request.get(`insuranceDevelopment/planned`);
};

export const deleteInsurancePlan = async (data) => {
  return await request.delete(`insuranceDevelopment/plan?id=` + data);
};

export const designInsurance = async (data) => {
  return await request.put(`insuranceDevelopment/design`, data);
};

export const estimateProfit = async (data) => {
  return await request.put(`insuranceDevelopment/profit`, data);
};
export const analyzeInsuranceRate = async (data) => {
  return await request.put(`insuranceDevelopment/rate`, data);
};
export const retrieveByInsuranceID = async (data) => {
  return await request.get(`insuranceDevelopment/insurance?id=` + data);
};
export const retrieveDesignedInsurances = async () => {
  return await request.get(`insuranceDevelopment/designed`);
};
export const authorizeInsurance = async (data) => {
  return await request.put(`insuranceDevelopment/authorize`, data);
};
export const retrieveAuthorizedInsurances = async () => {
  return await request.get(`sellGroup/authorized`);
};
