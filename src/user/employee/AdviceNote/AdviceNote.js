import request from "../../../component/common/axios";

export const create = async (data) => {
  return await request.post("advicenote/create", data);
};

export const retrieveById = async (customerid) => {
  return await request.get("advicenote/retrieveAdviceNoteByCustomerId?id=" + customerid);
};
