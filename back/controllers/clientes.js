import Cliente from "../models/modeClientes.js";

const crearCliente = async (req, res) => {
    try {
        await Cliente.create(req.body);
        res.json({
            message: "Usuario creado",
        });
        
    } catch (error) {
        res.json({
            message: `No se creo: ${error}`,
        });
    }
};
async function mostrarClientes(req, res) {
    try {
      const clientes = await Cliente.findAll();
      res.json(clientes);
    } catch (error) {
      res.json({
        message: "Base de datos vacia",
      });
    }
  };
  const editarCliente = async (req, res) => {
    try {
      await Cliente.update(req.body, {
        where: { id: req.params.id },
      });
      res.json({
        message: "registro Actualizado correctamente",
      });
    } catch (error) {
      res.json({
        message: error.message,
      });
    }
  };
export{
    crearCliente,
    mostrarClientes,
    editarCliente
}