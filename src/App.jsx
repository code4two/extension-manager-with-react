import "./App.css";
import { Routes, Route } from "react-router-dom";

import All from "./pages/All";
import Active from "./pages/Active";
import Inactive from "./pages/Inactive";
import NoMatch from "./pages/NoMatch";

import { ThemeProvider, useTheme } from "./Components/ThemeContext";

const AppContent = () => {
  const { changeTheme } = useTheme();

  return (
    <div
      className={`${
        changeTheme === "dark"
          ? "bg-slate-900 text-white"
          : "bg-sky-100 text-black"
      } px-4 py-8 min-h-screen`}
    >
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="active-extensions" element={<Active />} />
        <Route path="inactive-extensions" element={<Inactive />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
