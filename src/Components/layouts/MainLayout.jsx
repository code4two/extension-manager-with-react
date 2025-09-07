import { Link } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex justify-between font-bold items-center my-6 flex-col sm:flex-row">
      <h1 className="text-4xl mb-2">Extensions List</h1>
      <ul className="flex items-center font-normal text-lg gap-3 sm:gap-2">
        <li className="bg-red-500 px-3 py-1 rounded-2xl cursor-pointer">
          <Link to="/">All</Link>
        </li>
        <li className="bg-slate-700 border-1 border-gray-500 px-3 py-1 rounded-2xl cursor-pointer">
          <Link to="/active-extensions">Active</Link>
        </li>
        <li className="bg-slate-700 border-1 border-gray-500 px-3 py-1 rounded-2xl cursor-pointer">
          <Link to="/inactive-extensions">Inactive</Link>
        </li>
      </ul>
    </div>
  );
};

export default MainLayout;
