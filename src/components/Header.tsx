import { Icons } from "./svgs";
import UserImage from "@/assets/images/Person.png";
import UserInfoCard from "./common/UserInfoCard";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent } from "./ui/sheet";
import Sidebar from "./Sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side={"left"} className="p-0 h-full">
          <Sidebar />
        </SheetContent>
      </Sheet>
      <div className="flex items-center justify-between">
        <Menu className="block md:hidden" onClick={() => setOpen(true)} />
        <h2 className="md:text-2xl text-lg font-medium">New Self-Assessment</h2>
        <div className="flex items-center sm:gap-5 gap-2">
          <div className="p-2 bg-secondary_background rounded-full border">
            <Icons.notification />
          </div>
          <UserInfoCard name="Reuben Hale" role="Sub Admin" />
          <Avatar className="md:hidden block">
            <AvatarImage src={UserImage} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </>
  );
};

export default Header;
