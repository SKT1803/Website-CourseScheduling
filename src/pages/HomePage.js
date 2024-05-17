import "../styles/shared.css";
import { Link } from "react-router-dom";
import Notification from "./Notification";

const HomePage = () => {
  return (
    <div className="home-container">
      <Link className="exit-button" to="/">
        Logout
      </Link>
      <h1 className="app-title">Course Scheduling Application <Notification /></h1>
      <Link className="home-link" to="/course-registration">
        Course Registration
      </Link>
      <Link className="home-link" to="/schedule-creation">
        Schedule Creation
      </Link>
    </div>
  );
};

export default HomePage;
