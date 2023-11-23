import request from "../../component/common/axios";

export const save = async (data) => {
  return await request.post(`OperationPolicy`, data);
};
export const recommand = async (data) => {
  return await request.post(`OperationPolicy/recommand`, data);
};
export const pass = async (data) => {
  return await request.post(`OperationPolicy/pass`, data);
};
export const getAll = async () => {
  return await request.get(`OperationPolicy/getAll`);
};
