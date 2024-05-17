import { Link } from "react-router-dom";
import "../styles/shared.css";

function Button({ buttonText, linkTo }) {
  return (
    <div className="Button">
      <Link className="Link" to={linkTo}>
        {buttonText}
      </Link>
    </div>
  );
}

export default Button;
