import React from "react";

const Toggle = () => {
  return (
    <div className="flex font-semibold text-white">
      <label
        htmlFor="Toggle3"
        className="inline-flex mx-auto items-center p-2 rounded-3xl cursor-pointer"
      >
        <input id="Toggle3" type="checkbox" className="hidden peer" />
        <span className="px-4 py-2 rounded-l-3xl dark:bg-violet-400 peer-checked:dark:bg-gray-300 shadow-lg">
          Auto
        </span>
        <span className="px-4 py-2 rounded-r-3xl dark:bg-gray-300 peer-checked:dark:bg-violet-400 shadow-lg">
          Manual
        </span>
      </label>
    </div>
  );
};

export default Toggle;
