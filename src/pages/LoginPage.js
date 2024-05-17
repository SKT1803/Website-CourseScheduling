import "../styles/shared.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="container">
      <h1 className="app-title">Course Scheduling Application</h1>
      <form className="form">
        <h1>Log In</h1>
        <input className="input" type="email" placeholder="Email" required />
        <input
          className="input"
          type="password"
          placeholder="Password"
          required
        />
        <p>
          Don't have an account?{" "}
          <Link className="link" to="/register">
            Create one
          </Link>
          .
        </p>
        <Link className="main-link" to="/home">
          Log In
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
