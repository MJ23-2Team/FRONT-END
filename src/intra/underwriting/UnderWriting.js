import request from "../../component/common/axios";

export const createUnderWritingPolicy = async (data) => {
  return await request.post("uw", data);
};
export const doBasicUnderWriting = async (data) => {
  return await request.post("uw/basic?contractId=" + data);
};
export const doCollaborativeUnderWriting = async (data) => {
  return await request.post("uw/collaborative?contractId=" + data);
};
export const retrieveBasicContract = async () => {
  return await request.get("uw/basic");
};
export const retrieveCollaborativeContract = async () => {
  return await request.get("uw/collaborative");
};
export const retrieveUnderWritingPolicy = async () => {
  return await request.get("uw/all");
};
