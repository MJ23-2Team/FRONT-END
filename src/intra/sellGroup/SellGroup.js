import request from "../../component/common/axios";

export const evaluateResult = async (data) => {
  return await request.post(`sellGroup/evaluateResult`, data);
};
export const recommand = async (data) => {
  return await request.post(`sellGroup/recommand`, JSON.stringify(data), {
      headers: {
          'Content-Type': 'application/json'
      }
  });
};
export const recommendInsurance = async (data) => {
  return await request.get(`sellGroup/recommand`, JSON.stringify(data), {
    headers: {
        'Content-Type': 'application/json'
    }
});
};
export const recommendInsuranceReason = async (data) => {
  return await request.get(`sellGroup/recommendReason?insuarnceId=${data}&customerId=${localStorage.getItem("id")}`);
};
export const calculateInsuranceFee = async (data) => {
  return await request.get(`sellGroup/fee?insuarnceId=${data}&customerId=${localStorage.getItem("id")}`);
};

export const getAll = async () => {
  return await request.get(`sellGroup/getAll`);
};
