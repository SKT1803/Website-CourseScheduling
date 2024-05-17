import { Link } from "react-router-dom";

function Login({ buttonText, linkTo }) {
  return (
    <div className="Login">
      <Link to={linkTo}>{buttonText}</Link>
    </div>
  );
}

export default Login;
