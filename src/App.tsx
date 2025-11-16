import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Marklist from "./pages/Marklist-Report";
import MainLayout from "./layout/MainLayout";
import AnswerPage from "./pages/AnswerPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Protected Layout */}
        <Route element={<MainLayout />}>
          <Route path="/marklist-report" element={<Marklist />} />
          <Route path="/answer-page" element={<AnswerPage />} />
          <Route path="/comments" element={<AnswerPage />} />
          <Route path="/settings" element={<AnswerPage />} />
          <Route path="/help" element={<AnswerPage />} />
          <Route path="/myprofile" element={<AnswerPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
