import request from "../../../component/common/axios";

export const create = async (data) => {
  return await request.post("reward/create", data);
};
export const retrieveAll = async () => {
  return await request.get("reward/retrieveAll");
};
export const retrieveByCustomerId = async (customerId) => {
  return await request.get("reward/retrieveByCustomerId?id=" + customerId);
};
export const retrieveContractByCustomerId = async (customerId) => {
  return await request.get(
    "contract/retrieveContractByCustomerId?customerId=" + customerId
  );
};
export const approve = async () => {
  return await request.get("reward/approve", true);
};
export const deny = async () => {
  return await request.get("reward/approve", false);
};
