
// ========================
// REGISTRO
// ========================
export const register = async ({ email, password }) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const exists = users.find((u) => u.email === email);

  if (exists) {
    throw new Error("Usuario ya existe");
  }

  users.push({ email, password });

  localStorage.setItem("users", JSON.stringify(users));

  return { mensaje: "Usuario creado" };
};

// ========================
// LOGIN
// ========================
export const login = async ({ email, password }) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    throw new Error("Credenciales incorrectas");
  }

  return {
    token: "fake-token",
    user: { email: user.email },
  };
};

// ========================
// OBTENER GASTOS
// ========================
export const getGastos = async () => {
  const user = localStorage.getItem("user");

  if (!user) return [];

  return JSON.parse(localStorage.getItem(`gastos_${user}`)) || [];
};

// ========================
// CREAR GASTO
// ========================
export const crearGasto = async ({ concepto, monto }) => {
  const user = localStorage.getItem("user");

  if (!user) return;

  const gastos =
    JSON.parse(localStorage.getItem(`gastos_${user}`)) || [];

  const nuevoGasto = {
    id: Date.now(),
    concepto,
    monto,
  };

  gastos.push(nuevoGasto);

  localStorage.setItem(`gastos_${user}`, JSON.stringify(gastos));

  return { mensaje: "Gasto guardado" };
};