// const express = require("express");
import express from "express";
const app = express();
// const morgan = require("morgan");
import morgan from "morgan";

// const routerProducts = require("./backend/src/routes/index");
import routerProducts from "./backend/src/routes/index.js";

// const path = require("express"); // se encarga de unir directorios (para validar en windows ya que se usa contrabarra y necesitamos barra)
import path from "path";

// Settings
app.set("port", process.env.PORT || 3000);

//Middlewares (son funciones que se ejecutan antes de llegar a las rutas)
//npm install morgan (sirve para ver en consola las peticiones)
app.use(morgan("dev"));

app.use(express.json()); // comprueba si el dato que llega es un json (antes se hacia con el modulo bodyParser)si lo es, podemos acceder a los datos.

//Routes
const router = express.Router();
router.get("/", (req, res) => {
	res.send("API TIENDA");
});

app.use("/api", routerProducts);
// app.use("/", express.static("frontend"));
app.use(router);

// module.exports = router

//Static files

// app.use(express.static()) // para dirigir a la url estatica (frontend)
// app.use("/frontend", express.static(path.join(__dirname, "frontend")));

// console.log(__dirname + "/frontend");
// console.log(__dirname);

//Starting the server
app.listen(app.get("port"), () => {
	console.log(`Server is running on port ${app.get("port")}`);
});
