import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">
      <NavLink to="/" end>
        Home
      </NavLink>

      <NavLink to="/project">
        Project Forsaken
      </NavLink>
    </nav>
  );
}
