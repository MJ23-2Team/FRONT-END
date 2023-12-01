import GetAllRewards from "../../user/employee/Reward/GetAllReward";
import { useState } from "react";
import Modal from "../common/Modal";

const EmployeeRewardPage = () => {
    const [ modalOpen, setModalOpen ] = useState( false );

    return (
        <div>
            <GetAllRewards />
        </div>
    );
};
export default EmployeeRewardPage;