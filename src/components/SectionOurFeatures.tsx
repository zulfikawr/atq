import React, { FC } from "react";
import rightImgPng from "@/images/atq.jpeg";
import Image, { StaticImageData } from "next/image";
import Badge from "@/shared/Badge";
import { TrophyIcon, AcademicCapIcon, BuildingLibraryIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export interface SectionOurFeaturesProps {
  className?: string;
  rightImg?: StaticImageData;
  type?: "type1" | "type2";
}

const SectionOurFeatures: FC<SectionOurFeaturesProps> = ({
  className = "",
  rightImg = rightImgPng,
  type = "type1",
}) => {
  return (
    <div
      className={`nc-SectionOurFeatures relative flex flex-col items-center ${type === "type1" ? "lg:flex-row" : "lg:flex-row-reverse"
        } ${className}`}
      data-nc-id="SectionOurFeatures"
    >
      <div className="w-full">
        <h2 className="font-semibold text-4xl text-left">Profil Sekolah</h2>

        <ul className="space-y-10 mt-8">
          <li className="space-y-4">
            <span className="block text-xl font-semibold text-left">
              Tentang
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400 text-left">
              SDIT At Taufiq berdiri sejak 1996, dengan tujuan untuk menyiapkan generasi rabbani yang
              unggul, memadukan iman, takwa, ilmu pengetahuan, dan teknologi untuk menghadapi tantangan global.
            </span>
          </li>
          <li className="space-y-4">
            <span className="block text-xl font-semibold text-left">
              Keunggulan
            </span>
            <div className="mt-5 grid grid-cols-2 gap-4 text-neutral-500 dark:text-neutral-400 sm:flex sm:flex-wrap sm:justify-center sm:space-x-4 lg:space-x-8">
              <div className="flex items-center justify-center flex-col p-2">
                <TrophyIcon className="w-5 h-5 lg:w-7 lg:h-7" />
                <p className="mt-2 text-center lg:text-left">Sekolah Standar Nasional</p>
              </div>
              <div className="flex items-center justify-center flex-col p-4">
                <AcademicCapIcon className="w-5 h-5 lg:w-7 lg:h-7" />
                <p className="mt-2 text-center lg:text-left">Akreditasi A</p>
              </div>
              <div className="flex items-center justify-center flex-col p-4">
                <BuildingLibraryIcon className="w-5 h-5 lg:w-7 lg:h-7" />
                <p className="mt-2 text-center lg:text-left">Islamic Full Day School</p>
              </div>
              <div className="flex items-center justify-center flex-col p-4">
                <UserGroupIcon className="w-5 h-5 lg:w-7 lg:h-7" />
                <p className="mt-2 text-center lg:text-left">2000+ Students</p>
              </div>
            </div>
          </li>

          <li className="space-y-4">
            <span className="block text-xl font-semibold text-left">
              Visi & Misi
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400 text-left">
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Visi</h2>
                <p>
                  Menjadi lembaga pendidikan yang menghasilkan generasi rabbani
                  berkualitas, siap menghadapi era globalisasi dengan keimanan yang
                  kokoh.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4">Misi</h2>
                <ul className="list-disc list-inside">
                  <li>
                    Mendidik dengan pendekatan yang holistik berbasis nilai-nilai
                    Islam.
                  </li>
                  <li>
                    Menyediakan lingkungan pembelajaran yang kondusif dan teknologi
                    terintegrasi.
                  </li>
                  <li>
                    Mendorong kemandirian dan keunggulan akademik serta non-akademik.
                  </li>
                  <li>
                    Menumbuhkan semangat berinovasi dan berwirausaha.
                  </li>
                </ul>
              </div>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SectionOurFeatures;