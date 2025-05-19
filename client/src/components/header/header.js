import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import RegistroButton from "./RegistroButton";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import ProfileButton from "./ProfileButton";

const Header = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <header className="bg-white shadow-sm mb-4">
      <div className="container d-flex flex-wrap align-items-center justify-content-between py-3">
        {/* Logo */}
        <Link
          to="/"
          className="navbar-brand fw-bold fs-3 text-dark"
          aria-label="logo"
        >
          Ejemplo Auth0
        </Link>
        {/* Navegación */}
        <nav className="d-flex gap-3">
          <Link to="/" className="nav-link text-dark">
            Inicio
          </Link>
          <Link to="/cliente" className="nav-link text-dark">
            Cliente View
          </Link>
          <Link to="/admin" className="nav-link text-dark">
            Admin View
          </Link>
        </nav>
        {/* Botones */}
        <div className="d-flex gap-2">
          {isAuthenticated ? (
            <>
              <LogoutButton />
              <ProfileButton />
            </>
          ) : (
            <>
              <LoginButton />
              <RegistroButton />
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;