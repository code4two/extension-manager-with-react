import { useState } from "react";

const ExtensionBar = ({ Icon1, Theme1, Theme2, title2 }) => {
  const [changeTheme, setChangeTheme] = useState("light");

  const toggleTheme = () => {
    setChangeTheme(changeTheme === "light" ? "dark" : "light");
    console.log("Theme button clicked!!");
  };

  return (
    <div
      className={`${
        changeTheme === "light"
          ? "bg-white text-black"
          : "bg-slate-800 text-white"
      } flex justify-between font-bold text-2xl p-2 mb-2 md:mb-12 rounded-xl`}
    >
      <div className="gap-2 flex">
        <div className="flex items-center text-4xl text-orange-600">
          {Icon1}
        </div>
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl">{title2}</h1>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        {/* <div className="rounded-lg bg-slate-700 p-3 cursor-pointer">{Theme1}</div> */}

        <div
          onClick={toggleTheme}
          className={`${
            changeTheme === "light" ? "bg-red-500" : "bg-slate-700"
          } cursor-pointer p-3 rounded-lg`}
        >
          {Theme2}
        </div>
      </div>
    </div>
  );
};

export default ExtensionBar;
