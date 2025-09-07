import "./App.css";

import { Routes, Route } from "react-router-dom";

import All from "./pages/All";
import Active from "./pages/Active";
import Inactive from "./pages/Inactive";
import NoMatch from "./pages/NoMatch";

const App = () => {
  return (
    <div className="bg-slate-900 px-4 text-white py-8">
      
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="active-extensions" element={<Active />} />
          <Route path="inactive-extensions" element={<Inactive />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      
    </div>
  );
};

export default App;
