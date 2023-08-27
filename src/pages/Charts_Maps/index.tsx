import LineChartContainer from "./LineChartContainer";
import StatsCardscontainer from "./StatsCardsContainer";
import Map from "./Map";

const Charts = () => {
  return (
    <>
      <div className="max-w-[96vw] h-[10vh]  pl-12  ml-12 py-2 flex items-center justify-center">
        <span className="text-neutral-700 font-bold text-3xl">
          Covid Dashboard
        </span>
      </div>
      <StatsCardscontainer />
      <LineChartContainer />
      <div className="max-w-[96vw] h-[50vh] pl-12  ml-12 py-6 flex flex-row overflow-x-auto justify-start  sm:justify-evenly">
        <Map />
      </div>
    </>
  );
};

export default Charts;
