import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import HomePage from "./pages/HomePage";
import CourseRegistrationPage from "./pages/CourseRegistrationPage";
import SchedulePage from "./pages/SchedulePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/course-registration"
          element={<CourseRegistrationPage />}
        />
        <Route path="/schedule-creation" element={<SchedulePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
