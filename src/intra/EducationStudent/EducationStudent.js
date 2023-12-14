import request from "../../component/common/axios";

export const create = async (data) => {
  return await request.post("educationStudent", data);
};

export const retrieveAll = async () => {
  return await request.get("educationStudent/retrieveAll");
};

export const retrieveById = async (id) => {
  return await request.get("educationStudent/retrieveById?id=" + id);
};

export const retrieveEducationStudentByEducationID = async (id) => {
  return await request.get("educationStudent/retrieveByEducationId?id=" + id);
};
