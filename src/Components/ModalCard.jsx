import { useTheme } from "./ThemeContext";

const ModalCard = ({ baloon }) => {
  const { changeTheme } = useTheme();

  return (
    <div className="z-30 inset-0 fixed items-center justify-center flex">
      <div
        className={`${
          changeTheme === "dark"
            ? "bg-gray-800 border-1 border-gray-500"
            : "bg-white"
        } py-4 px-45 text-2xl rounded-lg font-medium`}
      >
        <p className="text-center">Are you sure?🤷🏻‍♂️</p>
        <div className="mt-13 flex gap-10">
          <button
            onClick={baloon}
            className={`${
              changeTheme === "dark"
                ? "border-1 border-gray-500 bg-gray-800 "
                : "bg-white border-1 border-gray-500"
            } rounded-xl cursor-pointer py-1 px-3`}
          >
            Cancel
          </button>
          <button className="py-1 px-3 bg-gray-400 opacity-60 text-white rounded-xl cursor-pointer">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalCard;
