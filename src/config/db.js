
import { config } from "dotenv";      // permote trabajar con variables de entorno. 
                                  // Var.de entorno es una variable que va a estar alojada en un archivo, que tiene que estar en la RAIZ de mi proyecto
                                  // Permiten convigurar otras variables, que las podemos compartir, sin compartir información sensible, x ej. sin compartir la conexión a la Base de Datos en la nube
config();              // ejecuto (llamo) el módilo "config"

import { getFirestore } from "firebase/firestore";    // importo "getFirestore" desde "Firebase/firestore"
        // el "getFirestore" me va a permitir inicializar la Base de Datos cuando lo llame.

import { initializeApp } from "firebase/app";


// Credenciales de la Base de Datos
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



const db = getFirestore(app);
export { db };    // el "db" contiene todos los métodos que ofrece "firestore" para poder hacer las consultas a la Base de Datos


