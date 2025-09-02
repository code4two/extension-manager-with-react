const ExtensionCard = ({ firstIcon, title, description, toggleButton }) => {
  return (
    <div className="bg-gray-800 border-1 p-4 border-gray-500 rounded-xl">
      <div className="flex items-start gap-3">
        <div className="flex p-4 rounded-xl text-4xl bg-violet-600">
          {firstIcon}
        </div>
        <div className="flex flex-col">
          <h2 className="m-0 font-bold text-xl mb-1">{title}</h2>
          <p className="text-lg">{description}</p>
        </div>
      </div>
      <div className="mt-8 flex justify-between items-center">
        <button className="border-1 border-gray-500 py-1 px-3 rounded-2xl">
          Remove
        </button>
        <h2 className="text-3xl m-0 text-orange-600">{toggleButton}</h2>
      </div>
    </div>
  );
};

export default ExtensionCard;
