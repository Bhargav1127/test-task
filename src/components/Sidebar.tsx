import { cn, sidebarItems } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/images/Logo.svg";
import { ScrollArea } from "./ui/scroll-area";
import { Separator } from "./ui/separator";
import { Icons } from "./svgs";
import { Switch } from "./ui/switch";
import { useTheme } from "@/theme/ThemeProvider";
import { Sun } from "lucide-react";

const Sidebar = ({ className }: { className?: string }) => {
  const location = useLocation();
  const { setTheme, theme } = useTheme();
  return (
    <div
      className={cn(
        "shrink-0 md:max-w-[247px] w-[300px] md:w-full   bg-secondary_background rounded-2xl",
        className
      )}
    >
      <div className="flex justify-center md:pb-14 pb-10 pt-6 px-8">
        {/* <img src={logo} /> */}
        <Icons.logo />
      </div>
      <div className="md:h-[calc(100vh_-_169px)] h-[calc(100vh_-_95px)] overflow-y-auto rounded-2xl pb-4">
        <ScrollArea className="h-full">
          {sidebarItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                to={item.link}
                className={`relative group flex items-center text-sm leading-5 font-medium hover:text-primary rounded-md  ${
                  location.pathname === item.link ? " text-primary" : ""
                } `}
                key={index}
              >
                <div
                  className={cn("w-2 self-stretch bg-transparent", {
                    "bg-primary ": location.pathname === item.link,
                  })}
                ></div>
                <div className="flex items-center pl-6 pr-8 py-3 ">
                  <Icon size={24} />
                  <h2 className="text-sm font-medium pl-5 leading-9">
                    {item.title}
                  </h2>
                </div>
              </Link>
            );
          })}
          <div className="px-8">
            <Separator className="my-6 " />
            <div className="">
              <div className="flex items-center justify-between py-3 ">
                <div className="flex items-center">
                  {theme === "dark" ? <Sun /> : <Icons.moon size={24} />}

                  <h2 className="text-sm font-medium pl-5 leading-9">
                    Darkmode
                  </h2>
                </div>
                <Switch
                  checked={theme === "dark"}
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                />
              </div>

              <div className="flex items-center py-3">
                <Icons.logout size={24} />
                <h2 className="text-sm font-medium pl-5 leading-9">Logout</h2>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Sidebar;
