import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Marklist from "./pages/Marklist-Report";
import MainLayout from "./layout/MainLayout";
import AnswerPage from "./pages/AnswerPage";
import WorkingOnIt from "./components/WorkingOnIt";
import EventDashboard from "./pages/StudentDashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Protected Layout */}
        <Route element={<MainLayout />}>
          <Route path="/student-dashboard" element={<EventDashboard />} />
          <Route path="/marklist-report" element={<Marklist />} />
          <Route path="/answer-page" element={<AnswerPage />} />
          <Route path="/re-evaluation" element={<WorkingOnIt />} />
          <Route path="/settings" element={<WorkingOnIt />} />
          <Route path="/help" element={<WorkingOnIt />} />
          <Route path="/profile" element={<WorkingOnIt />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
