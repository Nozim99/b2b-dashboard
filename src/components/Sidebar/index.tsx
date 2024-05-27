import { useState } from "react";
import { BasketIcon, DBIcon, DashboardIcon, DateIcon, HomeIcon, MailIcon, MenuIcon, MessageIcon, ScreensIcon, SettingsIcon, SirclesIcon, StatisticsIcon } from "../Icons";
import classes from "./sidebar.module.scss";

const menuItems: Array<{ Element: ({ fill }: { fill: string }) => JSX.Element, id: string }> = [
  { id: "home", Element: HomeIcon },
  { id: "dashboard", Element: DashboardIcon },
  { id: "statistics", Element: StatisticsIcon },
  { id: "db", Element: DBIcon },
  { id: "screens", Element: ScreensIcon },
  { id: "mail", Element: MailIcon },
  { id: "message", Element: MessageIcon },
  { id: "basket", Element: BasketIcon },
  { id: "settings", Element: SettingsIcon },
  { id: "sircles", Element: SirclesIcon },
  { id: "date", Element: DateIcon },
];


const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("home");

  return (
    <div className="w-[102px] flex flex-col items-center bg-white pb-[40px]">
      <button className="mt-[44px] mx-auto mb-[103px] show">
        <MenuIcon />
      </button>
      <div className="flex flex-col gap-y-[20px] w-full">
        {
          menuItems.map((item, index) => (
            <div className="relative" key={item.id}>
              <div className={`${activeMenu === item.id ? "" : "hidden"} w-[3px] h-[35px] bg-[#3734A9] absolute top-1/2 -translate-y-1/2 rounded-r-full`}></div>
              <button
              style={{animationDelay: `${(index + 1) * 120 + 200}ms`}}
                onClick={() => setActiveMenu(item.id)}
                className={`${activeMenu === item.id ? classes.activeButton : ""} show mx-auto flex justify-center items-center w-[66px] h-[48px] rounded-[15px]`}
              >
                <item.Element fill={activeMenu === item.id ? "#fff" : "#C7C7D2"} />
              </button>
            </div>
          ))
        }
      </div>
    </div>
  )
};

export default Sidebar;