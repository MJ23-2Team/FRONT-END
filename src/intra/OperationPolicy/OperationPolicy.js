import request from "../../component/common/axios";

export const save = async (data) => {
  return await request.post(`operationPolicy`, data);
};
export const recommand = async (data) => {
  return await request.post(`operationPolicy/recommend`, JSON.stringify(data), {
      headers: {
          'Content-Type': 'application/json'
      }
  });
};
export const pass = async (data) => {
  return await request.post(`operationPolicy/pass`, JSON.stringify(data), {
    headers: {
        'Content-Type': 'application/json'
    }
});
};
export const retriveSuggested = async () => {
  return await request.get(`operationPolicy/suggested`);
};

export const retriveRecommanded = async () => {
  return await request.get(`operationPolicy/recommended`);
};


