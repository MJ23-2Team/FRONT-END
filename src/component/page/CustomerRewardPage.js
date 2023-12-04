import GetMyRewards from "../../user/employee/reward/GetMyReward";
import ApplyRewards from "../../user/employee/reward/GetMyReward";
import { useState } from "react";
import Modal from "../common/Modal";

const CustomerRewardPage = () => {
    const [ modalOpen, setModalOpen ] = useState( false );

    return (
        <div>
            <GetMyRewards />
            <input type="button" value="보상 신청" className="blueBtn" onClick={ () => setModalOpen( !modalOpen ) } />
            { modalOpen && (
                <Modal closeModal={ () => setModalOpen( !modalOpen ) } >
                    <ApplyRewards />
                </Modal>
            )}
        </div>
    );
};
export default CustomerRewardPage;