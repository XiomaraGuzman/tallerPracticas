import {Sequelize} from 'sequelize'

const conexion = new Sequelize('registro', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default conexion