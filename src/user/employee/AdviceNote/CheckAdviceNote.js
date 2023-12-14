import { retrieveById } from "./AdviceNote";

export const checkAdviceNote = () => {
  let adviceNote = [];
  const customerid = parseInt(localStorage.getItem("id"));
  retrieveById(customerid).then((res) => (adviceNote = res.data));
  console.log(adviceNote);
};
