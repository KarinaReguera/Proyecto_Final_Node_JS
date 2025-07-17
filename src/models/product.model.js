// model
import { db } from "../config/db.js";


import {
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";    // importo distintos módulos desde "firebase/firestore"



const productCollection = collection(db, "productos");  // a "coleccion" le paso "db" que es la conexión a la Base de Datos, donde están las credenciales y demás.
// y también el nombre de la "colección" que se llama "productos" generada anteriormente



//Trabajo con los distintos métodos. Y directamente lo exporto
export const getAllProducts = async () => {
  try {
    const productList = await getDocs(productCollection);   // llamo al método "getDocs" en plural porque me quiero traer todo. A esto le paso "productCollection" que se conformó más arriba
    const products = [];  // creo un array auxiliar
    productList.forEach((doc) => products.push({ id: doc.id, ...doc.data() }));   // recorro la "productList" con un "forEach" por cada "doc" (documento que tengo)
    // por cada documento (producto), al array auxiliar que definí, le hago un "push" y desgloso la información que va a traer "{ id: doc.id, ...doc.data() }" Trae el id y todo lo que tenga con "..doc.data()" (uso el spread operator)
    return products;    // retorno el array

  } catch (error) {
    throw new Error(`Error al obtener productos: ${error.message}`);
  }
};


export const getProductById = async (id) => {
  try {
    const productDoc = await getDoc(doc(productCollection, id));
    if (!productDoc.exists()) {
      throw new Error("Producto no encontrado");
    }
    return { id: productDoc.id, ...productDoc.data() };
  } catch (error) {
    throw new Error(`Error al obtener producto: ${error.message}`);
  }
};




export const saveProduct = async (product) => {
  try {
    if (!product.nombre || !product.precio) {
      throw new Error("Faltan datos obligatorios del producto (nombre y precio).");
    }

    const newProduct = await addDoc(productCollection, product); //El "addDoc" recibe "productCollection", que es la conexion a la BD y "product" (el producto)
    return newProduct;  // retorno "newProduct" (el nuevo producto)
  } catch (error) {
    throw new Error(`Error al guardar producto: ${error.message}`);
  }
};




export const updateProduct = async (id, data) => {
  try {
    const productRef = doc(productCollection, id);
    const productDoc = await getDoc(productRef);

    if (!productDoc.exists()) {
      throw new Error("Producto no encontrado");
    }

    await updateDoc(productRef, data);
    return { id, ...data };
  } catch (error) {
    throw new Error(`Error al actualizar producto: ${error.message}`);
  }
};

export const deleteProduct = async (id) => {
  try {
    const productRef = doc(productCollection, id);
    const productDoc = await getDoc(productRef);

    if (!productDoc.exists()) {
      throw new Error("Producto no encontrado");
    }

    await deleteDoc(productRef);
    return { message: `Producto con id ${id} eliminado correctamente` };
  } catch (error) {
    throw new Error(`Error al eliminar producto: ${error.message}`);
  }
};


