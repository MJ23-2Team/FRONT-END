import EducationStudentPage from "./EducationStudentPage";
import RetrieveByEducationId from "../../intra/education/RetrieveByEducationId";

const AboutEducationPage = () => {
  return (
    <div>
      <RetrieveByEducationId />
      <EducationStudentPage />
    </div>
  );
};
export default AboutEducationPage;
