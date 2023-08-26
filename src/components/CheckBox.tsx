import React from "react";

interface Checkboxinterface {
  isChecked: boolean;
  handleChange: (key: string, value: boolean) => void;
  label: string;
  id: string;
}

const CheckBox: React.FC<Checkboxinterface> = ({
  isChecked,
  handleChange,
  label,
  id,
}) => {
  return (
    <label className="flex items-center cursor-pointer text-base select-none">
      <input
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={() => handleChange(id, !isChecked)}
        className="hidden"
      />
      <span className="w-5 h-5 border-2 border-gray-300 rounded-full inline-block mr-2 transition-bg duration-300 ease-in-out">
        {isChecked && (
          <span className="block w-3 h-3 bg-red-500 rounded-full transform translate-x-1 transition-transform duration-300 ease-in-out"></span>
        )}
      </span>
      {label}
    </label>
  );
};

export default CheckBox;
