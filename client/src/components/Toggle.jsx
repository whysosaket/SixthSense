import React from "react";

const Toggle = () => {
  return (
    <div className="flex font-semibold text-white">
      <label
        htmlFor="Toggle3"
        className="inline-flex mx-auto items-center p-2 rounded-3xl cursor-pointer"
      >
        <input id="Toggle3" type="checkbox" className="hidden peer" />
        <span className="px-4 py-2 rounded-l-3xl bg-violet-400 dark:bg-violet-800 dark:peer-checked:bg-gray-500 peer-checked:bg-gray-300 shadow-lg">
          Auto
        </span>
        <span className="px-4 py-2 rounded-r-3xl bg-gray-300 dark:bg-gray-500 dark:peer-checked:dark:bg-violet-800 peer-checked:bg-violet-400 shadow-lg">
          Manual
        </span>
      </label>
    </div>
  );
};

export default Toggle;
