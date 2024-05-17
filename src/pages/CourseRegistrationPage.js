import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/shared.css";

const courses = [
  { id: "SENG 214_01", time: "Tuesday 13:00-15:50", location: "D032" },
  { id: "CMPE 382_01", time: "Monday 11:00-12:50", location: "DB14" },
  { id: "CMPE 442_02", time: "Monday 13:00-13:50", location: "DB14" },
  { id: "CMPE 326_02", time: "Tuesday 15:00-16:50", location: "K184" },
  { id: "CMPE 382_01", time: "Tuesday 16:00-16:50", location: "D032" },
  { id: "CMPE 326_02", time: "Wednesday 14:00-14:50", location: "DB20" },
  { id: "CMPE 442_02", time: "Wednesday 15:00-16:50", location: "DB16" },
  { id: "CMPE 232_03", time: "Thursday 11:00-13:50", location: "DB14" },
  { id: "ADA 423_01", time: "Thursday 16:00-18:50", location: "D030" },
];

const CourseRegistrationPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [drop, setDrop] = useState(false);
  const [regis, setRegis] = useState(false);

  const handleDropClick = () => {
    setDrop(!drop);
    setRegis(false);
  };

  const handleRegisClick = () => {
    setRegis(!regis);
    setDrop(false);
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
  };

  // Filter courses based on search term
  const filteredCourses = courses.filter((course) =>
    course.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="course-selector home-container">
      <Link className="exit-button" to="/home">
        Home
      </Link>
      <div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for a course"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
        </div>
        <div className="course-list">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div
                key={course.id}
                className="course-item"
                onClick={() => handleCourseClick(course)}
              >
                <span>{course.id}</span>
                <span>
                  {course.time} -> {course.location}
                </span>
              </div>
            ))
          ) : (
            <div className="no-data">No matching courses found</div>
          )}
        </div>
      </div>
      <div>
        {selectedCourse && (
          <div className="selected-course">
            <h3>Selected Course</h3>
            <p>ID: {selectedCourse.id}</p>
            <p>Time: {selectedCourse.time}</p>
            <p>Location: {selectedCourse.location}</p>
            <div>
              <Link
                className="regis-link"
                to="/course-registration"
                onClick={handleRegisClick}
              >
                Register
              </Link>
              <Link
                className="regis-link"
                to="/course-registration"
                onClick={handleDropClick}
              >
                Drop
              </Link>
            </div>
          </div>
        )}
        <div className="notification">
          {drop && <p>Dropped Successfully!</p>}
          {regis && <p>Registered Successfully!</p>}
        </div>
      </div>
    </div>
  );
};

export default CourseRegistrationPage;
