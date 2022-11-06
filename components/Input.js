import React from "react";

const Input = ({ placeholder, type, handleChange, value }) => {
  return (
    <div>
      <input
        className="w-full outline-none border border-1 border-gray-400 rounded-md p-2"
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default Input;
