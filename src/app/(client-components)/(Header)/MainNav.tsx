import React, { FC } from "react";
import Logo from "@/shared/Logo";
import MenuBar from "@/shared/MenuBar";
import LangDropdown from "./LangDropdown";
import NotifyDropdown from "./NotifyDropdown";
import SwitchDarkMode from "@/shared/SwitchDarkMode";
import Link from "next/link";
import TemplatesDropdown from "./TemplatesDropdown";
import { Route } from "@/routers/types";

export interface MainNav2Props {
  className?: string;
}

const MainNav2: FC<MainNav2Props> = ({ className = "" }) => {
  return (
    <div className={`MainNav2 relative z-10 ${className}`}>
      <div className="px-4 h-20 lg:container flex justify-between">
        <div className="flex justify-start flex-1 space-x-3 sm:space-x-8 lg:space-x-10">
          <Logo className="w-24 self-center" />
        </div>

        <div className="flex flex-shrink-0 justify-end flex-1 lg:flex-none text-neutral-700 dark:text-neutral-100">
          <div className="hidden lg:flex space-x-1">
            <TemplatesDropdown />
            <NotifyDropdown />
            <SwitchDarkMode />
            <Link
              href={"/add-listing" as Route<string>}
              className="self-center text-opacity-90 group px-4 py-2 rounded-full inline-flex items-center text-sm text-white font-medium bg-green-700 hover:bg-green-900"
            >
              Contact Us
            </Link>
          </div>
          <div className="flex space-x-2 lg:hidden">
            <MenuBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav2;
