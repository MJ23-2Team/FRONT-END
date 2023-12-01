import axios from "axios";

const request = axios.create({
    baseURL: "http://localhost:8080/",
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
    }
  });

export default request;
