const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes')

const app = express()
const port = 8002
const mongoURL = 'mongodb+srv://leocaselli:perritolindopasword@cluster0.bvpuq.mongodb.net/fullStackMern?retryWrites=true&w=majority'

//conecta a la base datos 
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })

// Refleja el error de conexion base de datos
mongoose.connection.on('error', err => {
    console.log('err on db connection', err)
})
// Despega mensaje conexion exitosa
mongoose.connection.on('connected', (err, res) => {
    console.log('mongoose is connected')
})


app.get("/", (req, res) => {                 //solo de testeo revisar que funciona /
    res.json({ mensage: "hola mundo desde el index principal" });
});


// Middlewares
app.use(cors())           //permite conectar con react
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', routes)       //ruta principal /api en la carpeta rout se le agregan rutas posteriores a esta /api/login 

app.listen(port, () => console.log(`listing a port: ${port}`));
