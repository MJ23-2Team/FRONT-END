import request from "../axios";

export const getAllUsers = async () => {
  return request.get(`customer/getAll`);
};

export const createUser = (data) => {
  return request.post(`register`, data);
};

export const getUser = (data) => {
  return request.get(`customer`, data);
};