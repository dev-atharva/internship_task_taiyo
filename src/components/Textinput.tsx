import React from "react";
interface Inputprops {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  handleChange: (key: string, value: string) => void;
  value: string;
}

const Input: React.FC<Inputprops> = ({
  id,
  label,
  type,
  disabled,
  required,
  handleChange,
  value,
}) => {
  return (
    <div className="w-full relative">
      <input
        onChange={(e) => handleChange(id, e.target.value)}
        id={id}
        required={required}
        value={value}
        disabled={disabled}
        placeholder=" "
        type={type}
        className={`
        peer w-full p-4 pt-6 bg-white border-2 rounded-md font-light outline-none
         transition disabled:opacity-70 disabled:cursor-not-allowed 
          pl-4
        border-neutral-300
         focus:border-black
        `}
      />
      <label
        className={`absolute text-md duration-150
       transform -translate-y-3 top-5 z-10 origin-[0]
        left-4
       peer-placeholder-shown:scale-100 
       peer-placeholder-shown:translate-y-0
       peer-focus:scale-75
       peer-focus:-translate-y-4
       text-zinc-400
       `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
