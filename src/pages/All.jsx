import ExtensionBar from "../Components/ExtensionBar";
import ExtensionCard from "../Components/ExtensionCard";
import { FaMoon } from "react-icons/fa6";
import { LuSunMoon } from "react-icons/lu";
import { FaCloud } from "react-icons/fa";
import { IoToggle } from "react-icons/io5";
import { MdToggleOff } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { FaBinoculars } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaStaffSnake } from "react-icons/fa6";
import { FaBowlRice } from "react-icons/fa6";
import { FaSoap } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { FaShapes } from "react-icons/fa";
import { FaFaceSmile } from "react-icons/fa6";
import { FaFlagCheckered } from "react-icons/fa6";
import { FaStapler } from "react-icons/fa6";
import { FaMugHot } from "react-icons/fa6";
import MainPage from "../Components/layouts/MainPage";

const All = () => {
  return (
    <div>
      <ExtensionBar
        Icon1={<IoSettingsSharp />}
        title2={"All Extensions"}
        Theme1={<FaMoon />}
        Theme2={<LuSunMoon />}
      />
      <MainPage />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <ExtensionCard
          firstIcon={<FaCloud />}
          title={"DevLens"}
          description={
            "Quickly inspect page layout and visualize elements boundaries"
          }
          toggleButton={<IoToggle />}
        />
        <ExtensionCard
          firstIcon={<FaBinoculars />}
          title={"StyleSpy"}
          description={
            "Instantly analyze and copy CSS from any webpage elements."
          }
          toggleButton={<IoToggle />}
        />
        <ExtensionCard
          firstIcon={<FaTruck />}
          title={"SpeedBoost"}
          description={
            "Optimize browser resource usage to accelerate page loading."
          }
          toggleButton={<IoToggle />}
        />
        <ExtensionCard
          firstIcon={<FaStaffSnake />}
          title={"JSONWizard"}
          description={
            "Format, validates, and prettifies JSON responses in browser."
          }
          toggleButton={<MdToggleOff />}
        />
        <ExtensionCard
          firstIcon={<FaBowlRice />}
          title={"TabMaster Pro"}
          description={"Organize browser tabs into groups and sessions."}
          toggleButton={<IoToggle />}
        />
        <ExtensionCard
          firstIcon={<FaSoap />}
          title={"ViewportBuddy"}
          description={
            "Simulates various screens resolutions within the browser."
          }
          toggleButton={<MdToggleOff />}
        />
        <ExtensionCard
          firstIcon={<FaShapes />}
          title={"Markup Notes"}
          description={
            "Enables annotation and notes directly unto webpages for collaborative debugging."
          }
          toggleButton={<IoToggle />}
        />
        <ExtensionCard
          firstIcon={<IoGrid />}
          title={"GridGuides"}
          description={
            "Overlay customizable grids and alignment grids on the web page."
          }
          toggleButton={<MdToggleOff />}
        />
        <ExtensionCard
          firstIcon={<FaFaceSmile />}
          title={"Pallete Picker"}
          description={"Instantly extract color palette from any webpage."}
          toggleButton={<IoToggle />}
        />
        <ExtensionCard
          firstIcon={<FaFlagCheckered />}
          title={"LinkChecker"}
          description={"Scans and highlights broken links on any web page"}
          toggleButton={<IoToggle />}
        />
        <ExtensionCard
          firstIcon={<FaStapler />}
          title={"DOM Snapshots"}
          description={"Captures and export DOM structues quickly."}
          toggleButton={<MdToggleOff />}
        />
        <ExtensionCard
          firstIcon={<FaMugHot />}
          title={"ConnectPlus"}
          description={
            "Enhanced Developer console with advanced filtering and logging"
          }
          toggleButton={<IoToggle />}
        />
      </div>
    </div>
  );
};

export default All;
