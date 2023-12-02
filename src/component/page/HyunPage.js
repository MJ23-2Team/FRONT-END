import CreateInsurancePlan from "../../user/employee/insuranceDevelopment/CreateInsurancePlan";
import GetReports from "../../user/employee/insuranceDevelopment/GetReports";
import GetPlannedInsurances from "../../user/employee/insuranceDevelopment/GetPlannedInsurances";
import AuthorizeInsurance from "../../user/employee/insuranceDevelopment/AuthorizeInsurance";
import GetAuthorizedInsurances from "../../intra/sellGroup/GetAuthorizedInsurances";

const HyunPage = () => {
  return (
    <div>
      <CreateInsurancePlan />
      <GetReports />
      <GetPlannedInsurances />
      <AuthorizeInsurance />
      <GetAuthorizedInsurances />
    </div>
  );
};

export default HyunPage;
