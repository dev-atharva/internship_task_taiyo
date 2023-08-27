import React from "react";
import { formatNumberWithCommas } from "./StatsCardsContainer";

interface Popupprops {
  image_url: string;
  country_name: string;
  deaths: number;
  cases: number;
  recovered: number;
}
const Popupcard: React.FC<Popupprops> = ({
  image_url,
  country_name,
  deaths,
  cases,
  recovered,
}) => {
  return (
    <div className="flex flex-col p-1 w-[5rem] h-auto gap-1 justify-center items-center text-center">
      <img
        src={image_url}
        alt="Country flag"
        className="w-[100%] h-[25%] object-cover"
      />
      <h1 className="font-bold">{country_name}</h1>
      <div className="text-black">
        Cases:
        <br />
        <span className="font-semibold">{formatNumberWithCommas(cases)}</span>
      </div>
      <div className="text-red-800">
        Deaths:
        <br />
        <span className="font-semibold">{formatNumberWithCommas(deaths)}</span>
      </div>
      <div className="text-green-400">
        Recovered:
        <br />
        <span className="font-semibold">
          {formatNumberWithCommas(recovered)}
        </span>
      </div>
    </div>
  );
};

export default Popupcard;
