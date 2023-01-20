import express from 'express';
import conexion from './database/conexion.js';
import cors from 'cors'
import clienteRouter from './routes/routesClientes.js';

const app = express();
const port = 3100;

try {
    await conexion.authenticate()
    console.log(`Conexion exitosa a la base de datos`)
} catch (error) {
    console.log(`No conexion: ${error}`) 
}
app.use (cors())
app.use(express.json())

app.use('/clientes', clienteRouter)

app.listen(port, ()=> {
    console.log(`Servidor corriendo en el puerto ${port}`)
    console.log(`Servidor funcionando en http://localhost:3100`)

});