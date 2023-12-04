import GetAllRewards from "../../user/employee/reward/GetAllReward";
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