import { useState, useEffect } from "react";
import { doBasicUnderWriting, retrieveBasicContract } from "./UnderWriting";

const DoBasicUnderWriting = () => {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    retrieveBasicContract().then((res) => {
      setContracts(res.data);
    });
  }, []);

  const onSubmitHandleRun = (campaignID) => {
    doBasicUnderWriting(campaignID).then(() => {
      alert("기본 인수 심사 성공");
    });
  };

  return (
    <div>
      <div>Basic Contract 조회</div>
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

export default DoBasicUnderWriting;
