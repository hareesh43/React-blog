import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="not-fond">
      <h2>Hey buddy that doent exist !!</h2>
      <Link to="/">Goes back to home </Link>
    </div>
  );
};

export default NotFound;
