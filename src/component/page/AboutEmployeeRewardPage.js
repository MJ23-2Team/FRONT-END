import { useLocation } from "react-router-dom";
import ApproveRewards from "../../user/employee/reward/ApproveReward";

const AboutEmployeeRewardPage = ( data ) => {
    return (
        <div>
            <ApproveRewards id={data.id} />
        </div>
    );
};
export default AboutEmployeeRewardPage;