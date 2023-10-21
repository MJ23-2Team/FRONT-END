import request from "../axios";

export const getUsers = async () => {
  return request.get(`index`);
};

export const createUser = (data) => {
  return request.post(`index`, data);
};
