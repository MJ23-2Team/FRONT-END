import GetMyRewards from "../../user/employee/reward/GetMyReward";
import ApplyRewards from "../../user/employee/reward/ApplyReward";
import { useState, useEffect } from "react";
import { getContractByCustomerId } from "../../user/employee/reward/Reward";
import Modal from "../common/Modal";

import "./CustomerRewardPage";

const CustomerRewardPage = () => {
    const [ modalOpen, setModalOpen ] = useState( false );
    const [ contracts, setContracts ] = useState( {} );

    const userID = localStorage.getItem( "id" );

    useEffect( () => {
        getContractByCustomerId( userID ).then( (res) => { setContracts( res.data ); });
    }, [] )

    return (
        <div class="customer_reward_main_div">
            <header>
                <div class="banner-div">
                <span class="banner-text"> 1조 보험사 </span>
                </div>
            </header>
            <GetMyRewards/>
            <button class="okBtn" onClick={ () => setModalOpen( !modalOpen ) }>
                보상 신청
            </button>
            { modalOpen && (
                <Modal closeModal={ () => setModalOpen( !modalOpen ) }  >
                    <ApplyRewards data={contracts} />
                </Modal>
            )}
            <footer>
                <p> 고객 전용 페이지입니다.</p>
                <p> 1조 보험사 페이지_분산프로그래밍II</p>
            </footer>
        </div>
    );
};
export default CustomerRewardPage;