const express = require('express')
const app = express()

app.get('/prueba',(req, res) => {
    res.send("Prueba Exitosa")
})

app.listen(3000,() => {
    console.log("Conectado en el puerto: 3000")
})
