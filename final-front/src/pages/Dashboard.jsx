import { useEffect, useState } from "react";
import { getGastos, crearGasto } from "../api/api";
import Navbar from "../components/Navbar";

function Dashboard() {
  const [gastos, setGastos] = useState([]);
  const [concepto, setConcepto] = useState("");
  const [monto, setMonto] = useState("");

  useEffect(() => {
    cargarGastos();
  }, []);

  const cargarGastos = async () => {
    const data = await getGastos();
    setGastos(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!concepto || !monto) return;

    await crearGasto({ concepto, monto });

    setConcepto("");
    setMonto("");

    cargarGastos();
  };

  const total = gastos.reduce((acc, g) => acc + Number(g.monto), 0);

  return (
    <>
      <Navbar />

      <div className="container">
        <h2>Dashboard</h2>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Concepto"
            value={concepto}
            onChange={(e) => setConcepto(e.target.value)}
          />

          <input
            type="number"
            placeholder="Monto"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
          />

          <button type="submit">Agregar</button>
        </form>

        <h3 className="total">Total: ${total}</h3>

        <div className="seccion">
          {gastos.length === 0 ? (
            <p>No hay gastos aún</p>
          ) : (
            gastos.map((g) => (
              <div key={g.id} className="card">
                <strong>{g.concepto}</strong>
                <p>${g.monto}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;