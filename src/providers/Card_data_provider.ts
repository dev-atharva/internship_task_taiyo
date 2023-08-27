import { Covid_worldwide_data } from "../types/index";

const fetchCovidCardData = async (): Promise<Covid_worldwide_data> => {
  const response = await fetch("https://disease.sh/v3/covid-19/all");
  const data: Covid_worldwide_data = await response.json();
  return data;
};

export default fetchCovidCardData;
