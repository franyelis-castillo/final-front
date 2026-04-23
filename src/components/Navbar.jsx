import { Link } from "react-router-dom";

function Navbar() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user"); // 🔥 importante para multiusuario
    window.location.href = "/";
  };

  return (
    <nav className="navbar">
      <h3 className="logo">Mis Gastos</h3>

      <div className="nav-links">
        

        <button onClick={handleLogout}>
          Salir
        </button>
      </div>
    </nav>
  );
}

export default Navbar;