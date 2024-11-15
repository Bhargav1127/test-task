import EndPage from "@/components/assessment/EndPage";
import Publish from "@/components/assessment/Publish";
import ShareAssessment from "@/components/assessment/ShareAssessment";
import { Button } from "@/components/ui/button";

const AssessmentPage = () => {
  return (
    <>
      <ShareAssessment />
      <Publish />
      <EndPage />
      <div className="flex items-center justify-end gap-2 my-12">
        <Button variant={"outline"}>Preview</Button>
        <Button>Send Assessment</Button>
      </div>
    </>
  );
};

export default AssessmentPage;
