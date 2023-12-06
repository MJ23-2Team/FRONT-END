import GetEducationStudent from "../../intra/educationStudent/GetEducationStudent";
import { useLocation } from "react-router-dom";

const AboutEducationStudentPage = () => {
    const location = useLocation();
    const student = location.state.student;
    
    return (
        <div>
            <GetEducationStudent />
        </div>
    );
};
export default AboutEducationStudentPage;