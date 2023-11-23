import request from "../../component/common/axios";

export const save = async (data) => {
  return await request.post(`OperationPolicy`, data);
};
export const recommand = async (data) => {
  return await request.post(`OperationPolicy/recommand`, JSON.stringify(data), {
      headers: {
          'Content-Type': 'application/json'
      }
  });
};
export const pass = async (data) => {
  return await request.post(`OperationPolicy/pass`, JSON.stringify(data), {
    headers: {
        'Content-Type': 'application/json'
    }
});
};
export const getAll = async () => {
  return await request.get(`OperationPolicy/getAll`);
};
