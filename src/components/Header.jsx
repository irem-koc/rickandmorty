import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="flex navbar navbar-light bg-light p-2">
        <h1 className="navbar-brand d-flex gap-3">
          <Link className="text-decoration-none" to="/">
            Rick & Morty App
          </Link>
          <Link className="text-decoration-none text-sm" to="/fav-chars">
            Favourite Character's
          </Link>
        </h1>
        <form className="d-flex align-items-center justify-content-center form my-2 gap-2 ">
          <input
            className="form-control mr-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success ml-2" type="submit">
            Search
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Header;
