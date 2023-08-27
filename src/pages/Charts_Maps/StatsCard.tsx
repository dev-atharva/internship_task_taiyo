import React from "react";

interface StatsCardprops {
  title: string;
  number?: string;
}

const StatsCard: React.FC<StatsCardprops> = ({ title, number }) => {
  return (
    <div
      className=" w-[70%] sm:w-[28%] rounded-xl shadow-lg
     min-h-[5vh] flex flex-col gap-4 text-black p-4 text-center m-2"
    >
      <div className="font-extrabold text-2xl ">{number}</div>
      <div className="font-semibold text-xl">{title}</div>
    </div>
  );
};

export default StatsCard;
