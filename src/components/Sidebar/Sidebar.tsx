import React, { useCallback, useState } from "react";
import { AiOutlineContacts, AiOutlineRightCircle } from "react-icons/ai";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Sidebarelement from "./Sidebar_elements";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const toggle = useCallback(
    (param: string) => {
      navigate(`/${param}`);
    },
    [navigate]
  );

  const toggleSidebarWidth = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`fixed left-0 top-0 min-h-[100vh] ${
        expanded ? "max-w-[40vw]" : "w-[60px]"
      } flex flex-col justify-start p-4 gap-2 shadow-lg rounded-r-lg bg-white z-30 transition-all duration-300`}
    >
      <button onClick={toggleSidebarWidth}>
        {expanded ? (
          <IoArrowBackCircleOutline size={30} />
        ) : (
          <AiOutlineRightCircle size={30} />
        )}
      </button>
      <Sidebarelement
        icon={AiOutlineContacts}
        heading="Contact"
        onclick={toggle}
        path=""
        showHeading={expanded}
      />
      <Sidebarelement
        icon={HiOutlineChartSquareBar}
        heading="Charts"
        onclick={toggle}
        path="charts"
        showHeading={expanded}
      />
    </div>
  );
};

export default Sidebar;
