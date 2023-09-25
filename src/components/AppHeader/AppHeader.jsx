import { Link, NavLink } from "react-router-dom";

export function AppHeader() {
  return (
    <header className="app-header flex align-center">
      <Link to="/">
        <img className="logo" src="src/assets/img/est 1918.svg" alt="Logo" />
      </Link>
      <nav>
        <button className="img-btn">
          <NavLink to="/">
            home
          </NavLink>
        </button>
        <button className="img-btn">
          <NavLink to="/about">
            our story
          </NavLink>
        </button>
        <button className="img-btn">
          <NavLink to="/toy">
            toys
          </NavLink>
        </button>
        <button className="img-btn">
          <NavLink to="/dashboard">
            Dashboard
          </NavLink>
        </button>
      </nav>
    </header>
  );
}
