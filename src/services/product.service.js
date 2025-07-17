// services
import {
  getAllProducts,
  saveProduct,
  updateProduct,
  deleteProduct,
} from "../models/product.model.js";




const getAll = async () => await getAllProducts();

const createProduct = async (product) => await saveProduct(product);

const editProduct = async (id, data) => await updateProduct(id, data);

const removeProduct = async (id) => await deleteProduct(id);

export default { getAll, createProduct, editProduct, removeProduct };