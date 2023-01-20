import { DataTypes } from "sequelize";
import conexion from "../database/conexion.js";

const Cliente = conexion.define('clientes', {
    tipoDocumento: {
        type: DataTypes.STRING
    },
    documento: {
        type: DataTypes.STRING
    },
    nombres: {
        type: DataTypes.STRING
    },
    apellidos:{
        type: DataTypes.STRING
    },
    fechaNacimiento: {
        type: DataTypes.STRING
    },
    direccion: {
        type: DataTypes.STRING
    },
    ciudad: {
        type: DataTypes.STRING
    },
    departamento:{
        type: DataTypes.STRING
    },
    pais: {
        type: DataTypes.STRING
    },
    marca: {
        type: DataTypes.STRING
    }
})

export default Cliente
