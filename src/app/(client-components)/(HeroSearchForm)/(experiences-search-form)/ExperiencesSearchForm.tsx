import React, { FC } from "react";
import { TrophyIcon, AcademicCapIcon, BuildingLibraryIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export interface ExperiencesSearchFormProps {}

const ExperiencesSearchForm: FC<ExperiencesSearchFormProps> = ({}) => {
  const renderForm = () => {
    return (
      <form className="w-full relative mt-8 p-8 flex flex-col md:flex-row rounded-3xl md:rounded-full shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800">
        <div className="flex-[1] flex items-center justify-center flex-col">
          <TrophyIcon className="w-5 h-5 lg:w-7 lg:h-7" />
          <p className="mt-2">Sekolah Standar Nasional</p>
        </div>
        <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
        <div className="flex-[1] flex items-center justify-center flex-col">
          <AcademicCapIcon className="w-5 h-5 lg:w-7 lg:h-7" />
          <p className="mt-2">Akreditasi A</p>
        </div>
        <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
        <div className="flex-[1] flex items-center justify-center flex-col">
          <BuildingLibraryIcon className="w-5 h-5 lg:w-7 lg:h-7" />
          <p className="mt-2">Islamic Full Day School</p>
        </div>
        <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
        <div className="flex-[1] flex items-center justify-center flex-col">
          <UserGroupIcon className="w-5 h-5 lg:w-7 lg:h-7" />
          <p className="mt-2">2000+ Students</p>
        </div>
      </form>
    );
  };

  return renderForm();
};

export default ExperiencesSearchForm;