import { useState, useEffect } from "react";
import { retrieveById } from "./AdviceNote";

const RetrieveAdviceNote = () => {
  const [adviceNotes, setAdviceNotes] = useState([]);
  const customerid = parseInt(localStorage.getItem("id"));

  useEffect(() => {
    retrieveById(customerid).then((res) => {
      setAdviceNotes(res.data);
    });
  }, []);

  return adviceNotes;
};
export default RetrieveAdviceNote;
