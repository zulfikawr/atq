import React, { FC } from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";

const Profil: FC<{}> = ({ }) => {
  const renderForm = () => {
    return (
      <form className="w-full relative p-2 mt-8 flex rounded-full shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800 ">
        <div className="flex-[2] flex justify-center items-center">
          <p className="ml-12">SDIT At Taufiq berdiri sejak 1996, dengan tujuan untuk menyiapkan generasi rabbani yang
            unggul, memadukan iman, takwa, ilmu pengetahuan, dan teknologi untuk menghadapi tantangan global.</p>
        </div>
        <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
        <div className="text-neutral-700 dark:text-neutral-400 flex-[0.5] flex z-10 flex-1 relative [ nc-hero-field-padding ] flex-shrink-0 items-center space-x-3 focus:outline-none text-left">
          <MapPinIcon className="w-5 h-5 lg:w-7 lg:h-7" />
          <div className="flex-grow">
            <p className="font-semibold">
              Cimanggis, Depok
            </p>
            <span className="block mt-0.5 text-sm text-neutral-600 font-light ">
              <span className="line-clamp-1">Indonesia</span>
            </span>
          </div>
        </div>
      </form>
    );
  };

  return renderForm();
};

export default Profil;
