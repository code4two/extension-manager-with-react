const ExtensionBar = ({ Icon1, Theme1, Theme2, title2 }) => {
  return (
    <div className="flex justify-between font-bold text-2xl p-2 bg-slate-800 mb-2 md:mb-12 rounded-xl">
      <div className="gap-2 flex">
        <div className="flex items-center text-4xl text-orange-600">
          {Icon1}
        </div>
        <div className="flex items-center">
          <h1 className="text-xl md:text-2xl">{title2}</h1>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        {/* <div className="rounded-lg bg-slate-700 p-3">{Theme1}</div> */}
        <div className="rounded-lg bg-slate-700 p-3">{Theme2}</div>
      </div>
    </div>
  );
};

export default ExtensionBar;
