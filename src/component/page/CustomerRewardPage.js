import GetMyRewards from "../../user/employee/reward/GetMyReward";
import ApplyRewards from "../../user/employee/reward/ApplyReward";
import { useState, useEffect } from "react";
import { getContractByCustomerId } from "../../user/employee/reward/Reward";
import Modal from "../common/Modal";

const CustomerRewardPage = () => {
    const [ modalOpen, setModalOpen ] = useState( false );
    const [ contracts, setContracts ] = useState( {} );

    const userID = localStorage.getItem( "id" );

    useEffect( () => {
        getContractByCustomerId( userID ).then( (res) => { setContracts( res.data ); });
    }, [] )

    return (
        <div>
            <GetMyRewards />
            <input type="button" value="보상 신청" className="blueBtn" onClick={ () => setModalOpen( !modalOpen ) } />
            { modalOpen && (
                <Modal closeModal={ () => setModalOpen( !modalOpen ) }  >
                    <ApplyRewards data={contracts} />
                </Modal>
            )}
        </div>
    );
};
export default CustomerRewardPage;