import request from "../../component/common/axios";

export const login = async (data) => {
  return await request.post(`login/oauth2/code/google`, data);
};

export const loginUser = async (data) => {
  return await request.post(`login`, data);
};
export const createUser = async (data) => {
  return await request.post(`register`, data);
};
export const getAllUsers = async () => {
  return await request.get(`customer/getAll`);
};
export const getInfo = async (data) => {
  return await request.get(`customermanage/Info?id=${data}`);
};

export const setInfo = async (data) => {
  return await request.post(`customermanage/Info`, data);
};
export const counselingApply = async (data) => {
  console.log(data);
  return await request.post(`customerCounseling`, data);
};
