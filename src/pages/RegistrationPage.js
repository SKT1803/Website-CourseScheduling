import "../styles/shared.css";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
  return (
    <div className="container">
      <h1 className="app-title">Course Scheduling Application</h1>
      <form className="form">
        <h1>Register</h1>
        <input className="input" type="text" placeholder="Name" required />
        <input className="input" type="text" placeholder="Surname" required />
        <input className="input" type="email" placeholder="Email" required />
        <input
          className="input"
          type="password"
          placeholder="Password"
          required
        />
        <p>
          Already have an account?{" "}
          <Link className="link" to="/">
            Login
          </Link>
          .
        </p>
        <Link className="main-link" to="/">
          Sign In
        </Link>
      </form>
    </div>
  );
};

export default RegistrationPage;
