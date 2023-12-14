import request from "../../component/common/axios";

export const create = async (data) => {
  return await request.post("education/create", data);
};

export const retrieveByEducationId = async (id) => {
  return await request.get("education/retrieveById?id=" + id);
};

export const retrieveAll = async () => {
  return await request.get("education/retrieveAll");
};
