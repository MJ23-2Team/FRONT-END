import { retrieveUnderWritingPolicy } from "./UnderWriting";

import { useState, useEffect } from "react";

const RetrieveUnderWritingPolicy = () => {
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    retrieveUnderWritingPolicy().then((res) => {
      setPolicies(res.data);
    });
  }, []);

  return (
    <>
      <div>인수 정책 조회</div>
      {policies.map((policy) => {
        return (
          <>
            <div>policyName = {policy.name}</div>
            <div>policyContent = {policy.content}</div>
            <div>policyType = {policy.policyType}</div>
            <div>============================</div>
          </>
        );
      })}
    </>
  );
};

export default RetrieveUnderWritingPolicy;
