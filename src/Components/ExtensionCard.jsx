import { useState } from "react";

import Backdrop from "../Components/Backdrop";
import ModalCard from "./ModalCard";
import { useTheme } from "./ThemeContext";

const ExtensionCard = ({
  firstIcon,
  title,
  description,
  toggleButton,
  firstIconBg,
}) => {
  const [showModal, setShowModal] = useState(false);
  const { changeTheme } = useTheme();

  const deleteHandler = () => {
    setShowModal(true);
    console.log("You just clicked the Delete button");
  };

  const cancelHandler = () => {
    setShowModal(false);
    console.log("Cancel button just got clicked!!");
  };

  const toggleHandler = () => {
    console.log("Toggle Clicked!!");
    alert(" Oops!! \n Under Construction \n Check back later!");
  };

  return (
    <div
      className={`${
        changeTheme === "dark"
          ? "bg-slate-800 border-gray-500 border-1"
          : "bg-white border-0"
      } p-4 rounded-xl`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`${firstIconBg} flex text-blue-950 p-3 rounded-xl text-3xl`}
        >
          {firstIcon}
        </div>
        <div className="flex flex-col">
          <h2 className="m-0 font-bold text-2xl mb-1">{title}</h2>
          <p className="text-lg">{description}</p>
        </div>
      </div>
      <div className="mt-8 flex justify-between items-center text-lg">
        <button
          onClick={deleteHandler}
          className={`${
            changeTheme === "dark"
              ? "border-1 border-gray-500"
              : " border-1 border-gray-500"
          } py-1 px-3 rounded-2xl cursor-pointer`}
        >
          Remove
        </button>
        <h2
          onClick={toggleHandler}
          className="text-4xl m-0 text-orange-600 cursor-pointer"
        >
          {toggleButton}
        </h2>
      </div>
      {showModal ? <Backdrop /> : null}
      {showModal && <ModalCard baloon={cancelHandler} />}
    </div>
  );
};

export default ExtensionCard;
