import { useState, useEffect } from "react";
import {
  retrieveCollaborativeContract,
  doCollaborativeUnderWriting,
} from "./UnderWriting";

const DoCollaborativeUnderWriting = () => {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    retrieveCollaborativeContract().then((res) => {
      setContracts(res.data);
    });
  }, []);

  const onSubmitHandleRun = (contractID) => {
    doCollaborativeUnderWriting(contractID).then(() => {
      alert("공동 인수 심사 성공");
    });
  };

  return (
    <div>
      <div>Collaborative Contract 조회</div>
      {contracts.map((contract) => {
        return (
          <>
            <div>contractID: {contract.contractID}</div>
            <div>customerID: {contract.customerID}</div>
            <div>insuranceID: {contract.insuranceID}</div>
            <div>state: {contract.contractRunState}</div>
            <button onClick={() => onSubmitHandleRun(contract.contractID)}>
              인수 심사
            </button>
          </>
        );
      })}
    </div>
  );
};

export default DoCollaborativeUnderWriting;
