import { ChangeEvent, useState } from "react";
import { Icons } from "../svgs";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import { encodeImageFileAsURL } from "@/lib/utils";

const ShareAssessment = () => {
  const [image, setImage] = useState("");

  const handleChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files) {
      encodeImageFileAsURL(files[0], (val) => {
        setImage(val);
      });
    }
  };
  return (
    <>
      <div className="flex justify-between items-center pt-[26px]">
        <div className="flex items-center md:gap-12 gap-4">
          <h2 className="text-muted text-xl">Edit</h2>
          <h2 className="text-xl">Share</h2>
        </div>
        <div>
          <div className="flex items-center gap-3">
            <Label htmlFor="airplane-mode" className="text-base">
              Survey is Active
            </Label>
            <Switch id="airplane-mode" />
          </div>
        </div>
      </div>

      <div className="mt-[34px] bg-secondary_background p-6 rounded-2xl pb-8">
        <h2 className="text-xl font-medium leading-9">Share Assessment</h2>
        <h4 className="text-base leading-9 font-medium pt-6">
          Add Cover image (Optional)
        </h4>
        {image ? (
          <div className="max-w-[358px] w-full h-[188px] rounded-[9px] border-[1.5px] border-[#B6C0F3] overflow-hidden">
            <img src={image} className="w-full h-full object-cover " />
          </div>
        ) : (
          <label
            htmlFor="cover_image"
            className="max-w-[358px] w-full h-[188px] flex flex-col gap-4 justify-center items-center bg-[#004EE1]/10 rounded-[9px] border-[1.5px] border-[#B6C0F3] mt-2"
          >
            <div>
              <Icons.gallery />
            </div>
            <p className="font-poppins text-xs">
              Drop your image here, or{" "}
              <span className="text-primary font-medium">browse</span>
            </p>
            <input
              type="file"
              onChange={handleChangeImage}
              id="cover_image"
              className="hidden"
            />
          </label>
        )}
      </div>
    </>
  );
};

export default ShareAssessment;
