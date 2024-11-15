import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="flex gap-5 p-[18px] pb-0">
      <Sidebar className="hidden md:block" />
      <div className="w-full">
        <Header />
        <div className="md:h-[calc(100vh-114px)] overflow-y-auto mt-4">
          <ScrollArea className="h-full md:pr-3">
            <Outlet />
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
