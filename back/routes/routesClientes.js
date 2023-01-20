import express from 'express'
import { crearCliente, editarCliente, mostrarClientes } from '../controllers/clientes.js';

const clienteRouter = express.Router ();

clienteRouter.post('/', crearCliente)
clienteRouter.get('/', mostrarClientes)
clienteRouter.put('/:id', editarCliente)

export default clienteRouter