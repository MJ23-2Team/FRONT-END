import CreateInsurancePlan from "../../user/employee/insuranceDevelopment/CreateInsurancePlan";
import GetReports from "../../user/employee/insuranceDevelopment/GetReports";
import GetPlannedInsurances from "../../user/employee/insuranceDevelopment/GetPlannedInsurances";

const HyunPage = () => {
  return (
    <div>
      <CreateInsurancePlan />
      <GetReports />
      <GetPlannedInsurances />
    </div>
  );
};

export default HyunPage;
