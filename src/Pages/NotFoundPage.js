import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <center>
        <h1>Not Found Page</h1>
        <Link to="/">
          <button>Go back home</button>
        </Link>
      </center>
    </div>
  );
};

export default NotFoundPage;
