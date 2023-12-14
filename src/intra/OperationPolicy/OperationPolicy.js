import request from "../../component/common/axios";

export const create = async (data) => {
  return await request.post(`operationPolicy`, data);
};
export const recommend = async (data) => {
  return await request.post(`operationPolicy/recommend`, JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const pass = async (data) => {
  return await request.post(`operationPolicy/pass`, JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
export const retriveSuggested = async () => {
  return await request.get(`operationPolicy/suggested`);
};

export const retriveRecommended = async () => {
  return await request.get(`operationPolicy/recommended`);
};
