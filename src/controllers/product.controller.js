// controller
import productService from "../services/product.service.js";

export const getProducts = async (req, res, next) => {
  try {
    const products = await productService.getAll();
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const { nombre, precio } = req.body;
    const newProduct = await productService.createProduct({ nombre, precio });
    res.status(201).json({ message: "Producto creado exitosamente", payload: newProduct });
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { nombre, precio, disponible } = req.body;

    const updatedProduct = await productService.editProduct(id, {
      nombre,
      precio: +precio,
      disponible: disponible ?? false,
    });

    res.status(200).json({ message: "Producto actualizado", payload: updatedProduct });
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await productService.removeProduct(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export default { getProducts, createProduct, updateProduct, deleteProduct };