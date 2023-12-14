import request from "../../../component/common/axios";

export const create = async (data) => {
  return await request.post("advicenote", data);
};

export const retrieveById = async (customerid) => {
  return await request.get("advicenote/retrieveByCustomerId?id=" + customerid);
};
