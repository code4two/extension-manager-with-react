import { useState } from "react";

import Backdrop from "../Components/Backdrop";
import ModalCard from "./ModalCard";

const ExtensionCard = ({ firstIcon, title, description, toggleButton }) => {
  const [showModal, setShowModal] = useState(false);

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
    alert("Oops!! \n Under Construction \n Check back later!");
  };

  return (
    <div className="bg-gray-800 border-1 p-4 border-gray-500 rounded-xl">
      <div className="flex items-start gap-3">
        <div className="flex p-4 rounded-xl text-4xl bg-pink-600">
          {firstIcon}
        </div>
        <div className="flex flex-col">
          <h2 className="m-0 font-bold text-xl mb-1">{title}</h2>
          <p className="text-lg">{description}</p>
        </div>
      </div>
      <div className="mt-8 flex justify-between items-center">
        <button
          onClick={deleteHandler}
          className="border-1 border-gray-500 py-1 px-3 rounded-2xl"
        >
          Remove
        </button>
        <h2 onClick={toggleHandler} className="text-3xl m-0 text-orange-600">
          {toggleButton}
        </h2>
      </div>
      {showModal ? <Backdrop /> : null}
      {showModal && <ModalCard baloon={cancelHandler} />}
    </div>
  );
};

export default ExtensionCard;
