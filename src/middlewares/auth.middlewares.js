// middlewares/productValidator.js
export const validateProduct = (req, res, next) => {
  const { nombre, precio } = req.body;

  if (!nombre || typeof nombre !== "string" || nombre.trim() === "") {
    return res.status(400).json({ error: "El nombre del producto es obligatorio y debe ser un string válido." });
  }

  if (precio === undefined || isNaN(precio)) {
    return res.status(400).json({ error: "El precio del producto es obligatorio y debe ser un número válido." });
  }

  next(); // continúa al controlador si todo está bien
};