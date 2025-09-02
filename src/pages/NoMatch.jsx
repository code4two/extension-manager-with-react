import ExtensionCard from "../Components/ExtensionCard";

const NoMatch = () => {
  return (
    <div>
      <div className="text-center text-3xl font-bold">
        <p className="text-center">Under Construction</p>
        <h1>Check back later!!</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-3">
        <ExtensionCard />
        <ExtensionCard />
        <ExtensionCard />
        <ExtensionCard />
        <ExtensionCard />
        <ExtensionCard />
      </div>
    </div>
  );
};

export default NoMatch;
