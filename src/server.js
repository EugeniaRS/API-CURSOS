import express from "express"
import morgan from "morgan"
import "dotenv/config"

const port = process.env.API_PORT
const app = express()
    // metodos de istancia
    // los metodos de clase los vas a utilizar en modelos
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("tiny"))
    // Una callback es una funcion que se envia como argumento dentro de una funcion.
    // Parametro es donde se espera un valor.  Y si le pones por ejemplo un 5, el 5 es el argumento, es el valor.
    // api seria mi argumento 
    // metodo se llama cuando esta en una clase
    // una funcion es cuando esta fuera de una clse
app.use("/api", (req, res) => {
    console.log("Esta es la ruta de mi Servidor")
    res.status(200).send("Esta es la ruta de mi Servidor")
})
app.listen(port, () => {
    console.log("Servidor ok")
})