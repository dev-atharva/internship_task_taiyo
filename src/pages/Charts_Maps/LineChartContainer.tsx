import { useQuery } from "@tanstack/react-query";
import fetchlinedata from "../../providers/Lineplot_data_provider";
import LineChart from "./LineChart";
import Loader from "../../components/Loader";

const LineChartContainer = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["line_data"],
    queryFn: fetchlinedata,
  });

  if (error) {
    return <h1>Error</h1>;
  }
  console.log(data);
  return (
    <div className="flex items-center justify-center p-4 pl-12 ">
      {isLoading || data === undefined || data === null ? (
        <Loader />
      ) : (
        <div className="w-[100%] sm:w-[90%] h-[50vh] mx-auto p-4 flex flex-col gap-1 justify-start shadow-none rounded-none sm:shadow-lg sm:rounded-lg  ">
          <span className="text-xl font-semibold text-black">
            Quarterly Covid Cases Distribution
          </span>
          <LineChart data={data} />
        </div>
      )}
    </div>
  );
};

export default LineChartContainer;
