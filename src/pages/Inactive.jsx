import ExtensionBar from "../Components/ExtensionBar";
import ExtensionCard from "../Components/ExtensionCard";
import { MdToggleOff } from "react-icons/md";
import { FaStaffSnake } from "react-icons/fa6";
import { FaSoap } from "react-icons/fa";
import { FaStapler } from "react-icons/fa6";
import { IoGrid } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";
import { LuSunMoon } from "react-icons/lu";
import MainLayout from "../Components/layouts/MainLayout";

const Inactive = () => {
  return (
    <div>
      <div>
        <ExtensionBar
          Icon1={<IoSettingsSharp />}
          title2={"Inactive Extensions"}
          Theme1={<FaMoon />}
          Theme2={<LuSunMoon />}
        />
      </div>
      <MainLayout />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
        <ExtensionCard
          firstIcon={<FaStaffSnake />}
          title={"JSONWizard"}
          description={
            "Format, validates, and prettifies JSON responses in browser."
          }
          toggleButton={<MdToggleOff />}
          firstIconBg="bg-pink-200"
        />
        <ExtensionCard
          firstIcon={<FaSoap />}
          title={"ViewportBuddy"}
          description={
            "Simulates various screens resolutions within the browser."
          }
          toggleButton={<MdToggleOff />}
          firstIconBg="bg-blue-200"
        />
        <ExtensionCard
          firstIcon={<IoGrid />}
          title={"GridGuides"}
          description={
            "Overlay customizable grids and alignment grids on the web page."
          }
          toggleButton={<MdToggleOff />}
          firstIconBg="bg-indigo-300"
        />
        <ExtensionCard
          firstIcon={<FaStapler />}
          title={"DOM Snapshots"}
          description={"Captures and export DOM structues quickly."}
          toggleButton={<MdToggleOff />}
          firstIconBg="bg-cyan-200"
        />
      </div>
    </div>
  );
};

export default Inactive;
