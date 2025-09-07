import ExtensionBar from "../Components/ExtensionBar";
import ExtensionCard from "../Components/ExtensionCard";
import { IoSettingsSharp } from "react-icons/io5";
import { FaMoon } from "react-icons/fa6";
import { LuSunMoon } from "react-icons/lu";
import { IoToggle } from "react-icons/io5";
import { FaCloud } from "react-icons/fa";
import { FaBinoculars } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaBowlRice } from "react-icons/fa6";
import { FaShapes } from "react-icons/fa";
import { FaFaceSmile } from "react-icons/fa6";
import { FaFlagCheckered } from "react-icons/fa6";
import { FaMugHot } from "react-icons/fa6";
import MainLayout from "../Components/layouts/MainLayout";

const Active = () => {
  return (
    <div>
      <div>
        <ExtensionBar
          Icon1={<IoSettingsSharp />}
          title2={"Active Extensions"}
          Theme1={<FaMoon />}
          Theme2={<LuSunMoon />}
        />
      </div>
      <MainLayout />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
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
          firstIcon={<FaBowlRice />}
          title={"TabMaster Pro"}
          description={"Organize browser tabs into groups and sessions."}
          toggleButton={<IoToggle />}
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

export default Active;
