import request from "../../component/common/axios";

export const create = async (data) => {
  return await request.post("contractManagementPolicy/add", data);
};

export const retrieveAll = async () => {
  return await request.get("contractManagementPolicy/getAll");
};
