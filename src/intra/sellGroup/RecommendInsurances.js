import React, { useEffect, useState } from "react";
import { recommendInsurance } from "./SellGroup";
import { Link } from "react-router-dom";
import Modal from "../../component/common/Modal";
import RecommendInfoPage from "../../component/page/RecommendInfoPage";

const RecommendInsurances = () => {
  const [insurances, setInsurances] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    recommendInsurance().then((res) => {
      setInsurances(res.data);
    });
  }, []);

  return (
    <div>
      <header>
        <h2>대면 상담</h2>
      </header>
      <div>**********추천 보험 리스트**********</div>
      {insurances &&
        insurances.map((insurance, index) => {
          return (
            <div key={index}>
              <div>{"추천 보험 상품: " + insurance.insuranceName}</div>
              <button
                onClick={() => {
                  setModalOpen(!modalOpen);
                }}
              >
                상세 정보
              </button>
              <div>===============================</div>
              {modalOpen && (
                <Modal closeModal={() => setModalOpen(!modalOpen)}>
                  <RecommendInfoPage id={insurance.insuranceID} />
                </Modal>
              )}
            </div>
          );
        })}
      <Link to={"/home"}>
        <button>완료</button>
      </Link>
    </div>
  );
};
export default RecommendInsurances;
