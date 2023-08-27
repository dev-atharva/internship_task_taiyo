import { TranformedLinedata, Originallinedata } from "../types/index";

const transform_data = (originaldata: Originallinedata, color: string) => {
  const transformedCases: TranformedLinedata = {
    id: "cases",
    color,
    data: [],
  };

  const transformedDeaths: TranformedLinedata = {
    id: "deaths",
    color,
    data: [],
  };

  const transformedRecovered: TranformedLinedata = {
    id: "recovered",
    color, 
    data: [],
  };

  const datekeys = Object.keys(originaldata.cases);

  for (let i = 0; i < datekeys.length; i += 90) {
    const dateStr = datekeys[i];
    const cases = originaldata.cases[dateStr];
    const deaths = originaldata.deaths[dateStr];
    const recovered = originaldata.recovered[dateStr];

    transformedCases.data.push({ x: dateStr, y: cases });
    transformedDeaths.data.push({ x: dateStr, y: deaths });
    transformedRecovered.data.push({ x: dateStr, y: recovered });
  }

  return [transformedCases, transformedDeaths, transformedRecovered];
};

const fetchlinedata = async () => {
  try {
    const response = await fetch(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    );
    const data: Originallinedata = await response.json();
    const color = "hsl(90, 70%, 50%)";
    const formattedData = transform_data(data, color);
    return formattedData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export default fetchlinedata;
