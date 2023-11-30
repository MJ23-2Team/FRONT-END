import request from "../../../component/common/axios";

export const createInsurancePlan = async (data) => {
  return await request.post(`insuranceDevelopment/plan?report=` + data);
};

export const manageInsurancePlan = async (data) => {
  return await request.put(`insuranceDevelopment/plan`, data);
};

export const getReports = async () => {
  return await request.get(`insuranceDevelopment/reports`);
};

export const getPlannedInsurances = async () => {
  return await request.get(`insuranceDevelopment/planned`);
};

export const deleteInsurancePlan = async (data) => {
  return await request.delete(`insuranceDevelopment/plan?id=` + data);
};

export const designInsurance = async (data) => {
  return await request.put(`insuranceDevelopment/design`, data);
};
