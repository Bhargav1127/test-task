import InputWithLabel from "../common/InputWithLabel";
import TextAreaWithLabel from "../common/TextAreaWithlabel";

const EndPage = () => {
  return (
    <div className="mt-5 p-6 pb-[35px] rounded-[16px] border border-border bg-secondary_background">
      <h1 className="text-xl font-medium mb-6">End Page</h1>
      <div className="md:max-w-[579px]">
        <InputWithLabel
          label="Heading Text"
          mainClassName="mb-6"
          placeholder="Heading text here"
        />
        <TextAreaWithLabel label="Body Text" placeholder="Body text here" />
      </div>
    </div>
  );
};

export default EndPage;
