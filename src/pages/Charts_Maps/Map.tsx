import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { useQuery } from "@tanstack/react-query";
import getcountrydata from "../../providers/Map_data_provider";
import Popupcard from "./Popupcard";


const customIcon = new Icon({
  iconUrl: require("../../assets/map_marker.png"),
  iconSize: [38, 38],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});

const Map = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["map_data"],
    queryFn: getcountrydata,
  });

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <>
      {isLoading || data === undefined || data === null ? (
        <></>
      ) : (
        <MapContainer center={[20.59, 78.96]} zoom={5} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {data.map((country) => (
            <Marker
              key={country.country}
              icon={customIcon}
              position={[country.countryInfo.lat, country.countryInfo.long]}
            >
              <Popup>
                <Popupcard
                  image_url={country.countryInfo.flag}
                  country_name={country.country}
                  deaths={country.deaths}
                  cases={country.cases}
                  recovered={country.recovered}
                />
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </>
  );
};

export default Map;
