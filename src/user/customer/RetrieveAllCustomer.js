import React, { useEffect, useState } from "react";
import { retrieveAllUsers } from "./Customer";

const RetrieveAllCustomer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    retrieveAllUsers().then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div>
      <div>고객 전체 조회</div>
      {users &&
        users.map((user, index) => {
          return (
            <div key={index}>
              <div>
                ===============================================================================
              </div>
              {user &&
                Object.entries(user).map(([key, value]) => (
                  <div key={key}>{`${key} : ${value}`}</div>
                ))}
            </div>
          );
        })}
    </div>
  );
};
export default RetrieveAllCustomer;
