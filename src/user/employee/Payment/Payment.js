import request from "../../../component/common/axios";

export const create = async (data) => {
  return await request.post("payment/create", data);
};

export const retrieveAll = async () => {
  return await request.get("payment/retrieveAll");
};

export const retrieveAllExpired = async () => {
  return await request.get("payment/retrieveAllExpired");
};

export const retrieveById = async (id) => {
  return await request.get("payment/retrieveById", id);
};

export const checkValidate = async () => {
  return await request.get("payment/checkValidate");
};
