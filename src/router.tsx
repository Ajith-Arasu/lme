import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import MainLayout from "./layout/MainLayout";
import EventDashboard from "./pages/Exam Events";
import Marklist from "./pages/ExamEvent";
import AnswerPage from "./pages/AnswerPage";
import WorkingOnIt from "./components/WorkingOnIt";
import SubjectRegistration from "./pages/SubjectRegister";

// Your Data Router
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "exam-events",
        element: <EventDashboard />,
      },
      {
        path: "exam-event/:id",
        element: <Marklist />,
      },
      {
        path: "answer-page",
        element: <AnswerPage />,
        loader: () => {
          // used for navigation blocking
          return { blockNavigation: true };
        }
      },
      {
        path: "subject-registration-details",
        element: <SubjectRegistration />,
      },
      { path: "re-evaluation", element: <WorkingOnIt /> },
      { path: "settings", element: <WorkingOnIt /> },
      { path: "help", element: <WorkingOnIt /> },
      { path: "profile", element: <WorkingOnIt /> },
    ],
  },
]);
