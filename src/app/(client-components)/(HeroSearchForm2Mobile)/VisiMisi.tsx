import React, { FC } from "react";

const VisiMisi: FC = ({}) => {
  const renderForm = () => {
    return (
      <div className="w-full relative mt-8 p-8 rounded-3xl shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800">
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
      </div>
    );
  };

  return renderForm();
};

export default VisiMisi;
