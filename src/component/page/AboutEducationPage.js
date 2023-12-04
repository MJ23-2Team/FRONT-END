import EducationStudentPage from "./EducationStudentPage";
import { useLocation } from 'react-router-dom';
import GetByEducationId from "../../intra/education/GetByEducationId";

const AboutEducationPage = () => {
    const location = useLocation();
    const education = location.state.education;

    return (
    <div>
        { education.educationID } 
        <GetByEducationId /> {/* 이 부분을 불러올 때 education.educationID를 어떻게 넘겨줄 수 있는지 알아볼 것 */}
        <EducationStudentPage />
    </div>
    );
}
export default AboutEducationPage;