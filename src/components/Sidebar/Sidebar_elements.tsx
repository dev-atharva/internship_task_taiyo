import { IconType } from "react-icons";

interface Sidebar_elemets_props {
  icon: IconType;
  heading: string;
  onclick: (params: string) => void;
  path: string;
  showHeading: boolean;
}

const Sidebarelement: React.FC<Sidebar_elemets_props> = ({
  icon: Icon,
  heading,
  onclick,
  path,
  showHeading,
}) => {
  return (
    <div
      onClick={() => onclick(path)}
      className={`flex flex-row items-center justify-start cursor-pointer hover:scale-105 transition
       ${showHeading ? "p-2" : "p-0"}
       ${showHeading ? "gap-2" : "gap-0"}
      ${showHeading ? "justify-start" : "justify-center"}
      `}
    >
      <Icon size={showHeading ? 25 : 40} />
      <div className="text-lg font-semibold ">
        {showHeading ? <>{heading}</> : <></>}
      </div>
    </div>
  );
};

export default Sidebarelement;
