import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Marklist from "./pages/Marklist";
import MainLayout from "./layout/MainLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Protected Layout */}
        <Route element={<MainLayout />}>
          <Route path="/marklist" element={<Marklist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
