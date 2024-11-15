import { DatePicker } from "../common/DatePicker";
import SelectMenu from "../common/SelectMenu";
import { TIME_OPTIONS } from "@/lib/constants";

const Publish = () => {
  return (
    <div className="mt-5 p-6 bg-secondary_background border border-border rounded-[16px]">
      <h2 className="text-[20px] font-medium mb-6">Publish Time (Optional)</h2>
      <div className="md:max-w-[591px] w-full flex items-center md:gap-8 gap-4 flex-wrap md:flex-nowrap">
        <div className="md:w-[50%] w-full">
          <label className="leading-[36px] mb-1 font-medium block">
            Add Date
          </label>
          <DatePicker buttonClassName="w-full" />
        </div>
        <div className="md:w-[50%] w-full">
          <label className="leading-[36px] mb-1 font-medium block">
            Add Time
          </label>
          <SelectMenu
            options={TIME_OPTIONS}
            className="bg-background"
            placeholder="Select Time"
          />
        </div>
      </div>
    </div>
  );
};

export default Publish;
