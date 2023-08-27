import { useQuery } from "@tanstack/react-query";
import fetchCovidCardData from "../../providers/Card_data_provider";
import StatsCard from "./StatsCard";


export const formatNumberWithCommas = (number: number = 0) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const StatsCardscontainer = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["cards_data"],
    queryFn: fetchCovidCardData,
  });

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <div className="max-w-[96vw] pl-12  ml-12 py-6 flex flex-row overflow-x-auto justify-start  sm:justify-evenly">
          <StatsCard
            title="Total Cases"
            number={formatNumberWithCommas(data?.cases)}
          />
          <StatsCard
            title="Total Deaths"
            number={formatNumberWithCommas(data?.deaths)}
          />
          <StatsCard
            title="Total Recovered"
            number={formatNumberWithCommas(data?.recovered)}
          />
          <StatsCard
            title="Active Cases"
            number={formatNumberWithCommas(data?.active)}
          />
        </div>
      )}
    </>
  );
};

export default StatsCardscontainer;
