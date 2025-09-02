const ModalCard = ({ baloon }) => {
  return (
    <div className="z-30 inset-0 fixed items-center justify-center flex">
      <div className="bg-gray-800 font-medium text-2xl rounded-lg px-45 border-1 border-gray-500 py-4">
        <p className="text-center">Are you sure?🤷🏻‍♂️</p>
        <div className="mt-13 flex gap-10">
          <button
            onClick={baloon}
            className="py-2 px-6 text-orange-700 border-1 border-orange-700 bg-white shadow-lg rounded-2xl cursor-pointer"
          >
            Cancel
          </button>
          <button className="py-2 px-6 bg-gray-400 opacity-60 text-white shadow-lg rounded-2xl cursor-pointer">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
