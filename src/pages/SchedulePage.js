import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/shared.css";

const courses = [
  { id: "SENG 214_01", time: "Tuesday 13:00-15:50", location: "D032" },
  { id: "SENG 214_02", time: "Wednesday 15:00-17:50", location: "DB20" },
  { id: "SENG 214_03", time: "Friday 15:00-17:50", location: "D026" },
  { id: "SENG 214_01", time: "Tuesday 13:00-15:50", location: "D032" },
  { id: "AAA 214_03", time: "Friday 15:00-17:50", location: "D026" },
  { id: "SENG 214_02", time: "Wednesday 15:00-17:50", location: "DB20" },
  { id: "SENG 214_03", time: "Friday 15:00-17:50", location: "D026" },
  { id: "SENG 214_01", time: "Tuesday 13:00-15:50", location: "D032" },
  { id: "AAA 214_03", time: "Friday 15:00-17:50", location: "D026" },
];

const SchedulePage = () => {
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
        <div className="search-bar-sched">
          <input
            type="text"
            placeholder="Search for a course"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
        </div>
        <div className="course-list-sched">
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
        <div>
          <div className="selected-course-sched">
            <div className="main-grid-item">
              <p>SENG 214_01</p>
              <p>Tu 13:00-15:50</p>
              <p>D032</p>
            </div>
            <div className="main-grid-item">
              <p>CMPE 326_02</p>
              <p>Mo 15:00-16:50</p>
              <p>K184</p>
            </div>
            <div className="main-grid-item">
              <p>CMPE 382_01</p>
              <p>Tu 11:00-12:50</p>
              <p>DB14</p>
            </div>
            <div className="main-grid-item">
              <p>CMPE 442_02</p>
              <p>Wed 15:00-16:50</p>
              <p>DB14</p>
            </div>
            <div className="main-grid-item">
              <p>ADA 423_01</p>
              <p>Tu 16:00-18:50</p>
              <p>D030</p>
            </div>
            <div className="main-grid-item">
              <p>CMPE 232_03</p>
              <p>Th 11:00-13:50</p>
              <p>DB14</p>
            </div>
          </div>
        </div>
      </div>
      <div className="selected-course-grid">
        <div className="sched-pagination">
          <button>{"< "}prev</button>
          <button>1</button>
          <button>...</button>
          <button>12</button>
          <button>next {" >"}</button>
        </div>
        <div class="grid-sched">
          <div class="cell cell01 index">1</div>
          <div class="cell cell02 core">Monday</div>
          <div class="cell cell03 core">Tuesday</div>
          <div class="cell cell04 core">Wednesday</div>
          <div class="cell cell05 core">Thursday</div>
          <div class="cell cell06 core">Friday</div>
          <div class="cell cell07 core">9 - 9.50</div>
          <div class="cell cell08 c"></div>
          <div class="cell cell09 c"></div>
          <div class="cell cell10 c"></div>
          <div class="cell cell11 c"></div>
          <div class="cell cell12 c"></div>
          <div class="cell cell13 core">10 - 10.50</div>
          <div class="cell cell14 c"></div>
          <div class="cell cell15 c"></div>
          <div class="cell cell16 c"></div>
          <div class="cell cell17 c"></div>
          <div class="cell cell18 c"></div>
          <div class="cell cell19 core">11 - 11.50</div>
          <div class="cell cell20 c">CMPE 382_01</div>
          <div class="cell cell21 c"></div>
          <div class="cell cell22 c"></div>
          <div class="cell cell23 c">CMPE 232_03</div>
          <div class="cell cell24 c"></div>
          <div class="cell cell25 core">12 - 12.50</div>
          <div class="cell cell26 c">CMPE 382_01</div>
          <div class="cell cell27 c"></div>
          <div class="cell cell28 c"></div>
          <div class="cell cell29 c">CMPE 232_03</div>
          <div class="cell cell30 c"></div>
          <div class="cell cell31 core">13 - 13.50</div>
          <div class="cell cell32 c">CMPE 442_02</div>
          <div class="cell cell33 c">SENG 214_01</div>
          <div class="cell cell34 c"></div>
          <div class="cell cell35 c">CMPE 232_03</div>
          <div class="cell cell36 c"></div>
          <div class="cell cell37 core">14 - 14.50</div>
          <div class="cell cell38 c"></div>
          <div class="cell cell39 c">SENG 214_01</div>
          <div class="cell cell40 c">CMPE 326_02</div>
          <div class="cell cell41 c"></div>
          <div class="cell cell42 c"></div>
          <div class="cell cell43 core">15 - 15.50</div>
          <div class="cell cell44 c">CMPE 326_02</div>
          <div class="cell cell45 c">SENG 214_01</div>
          <div class="cell cell46 c">CMPE 442_02</div>
          <div class="cell cell47 c"></div>
          <div class="cell cell48 c"></div>
          <div class="cell cell49 core">16 - 16.50</div>
          <div class="cell cell50 c">CMPE 326_02</div>
          <div class="cell cell51 c">CMPE 382_01</div>
          <div class="cell cell52 c">CMPE 442_02</div>
          <div class="cell cell53 c">ADA 423_01</div>
          <div class="cell cell54 c"></div>
          <div class="cell cell55 core">17 - 17.50</div>
          <div class="cell cell56 c"></div>
          <div class="cell cell57 c"></div>
          <div class="cell cell58 c"></div>
          <div class="cell cell59 c">ADA 423_01</div>
          <div class="cell cell60 c"></div>
          <div class="cell cell61 core">18 - 18.50</div>
          <div class="cell cell62 c"></div>
          <div class="cell cell63 c"></div>
          <div class="cell cell64 c"></div>
          <div class="cell cell65 c">ADA 423_01</div>
          <div class="cell cell66 c"></div>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
