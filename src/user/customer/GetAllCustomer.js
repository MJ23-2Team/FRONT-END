import React, { useEffect, useState } from "react";
import { getAllUsers } from "./Customer";

const GetAllCustomer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((res) => {
      setUsers(res.data.data);
    });
  }, []);

  return (
    <div>
      <div>캠페인 전체 조회</div>
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
export default GetAllCustomer;
