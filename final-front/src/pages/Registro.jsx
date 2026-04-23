import { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../api/api";
import Swal from "sweetalert2";

function Registro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await register({ email, password });

      Swal.fire("Éxito", "Usuario registrado", "success");

      // limpiar formulario
      setEmail("");
      setPassword("");

    } catch (error) {
      Swal.fire("Error", "No se pudo registrar", "error");
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Registro</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Registrar</button>
      </form>

      <Link to="/">Ir a login</Link>
    </div>
  );
}

export default Registro;