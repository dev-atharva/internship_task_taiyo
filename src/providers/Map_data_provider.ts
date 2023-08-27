import { CountryData } from "../types/index";

const getcountrydata = async (): Promise<CountryData[]> => {
  const response = await fetch("https://disease.sh/v3/covid-19/countries");
  const data: CountryData[] = await response.json();
  return data;
};

export default getcountrydata;
