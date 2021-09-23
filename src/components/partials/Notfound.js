import { Link } from "react-router-dom";
const Notfound = () => {
  return (
    <div className="Notfound">
      <h1>
        NOT FOUND
        <Link to="/home" >
          Home
        </Link>
      </h1>
    </div>
  );
}

export default Notfound;