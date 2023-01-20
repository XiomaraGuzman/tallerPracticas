import React from "react";
import axios from "axios";
import Header from "../layout/Header";
import { useState, useEffect } from "react";
import Footer from "../layout/Footer";

const apiClientes = "http://localhost:3100/clientes";

const ListadoClientes = () => {
  const [clientes, setClientes] = useState([]);
  useEffect(() => {
    ListarClientes();
    
  }, []);

  const ListarClientes = async () => {
    const response = await axios.get(apiClientes);
    setClientes(response.data);
    console.log(response.data);
  };

  return (
    <section className="listado">
      <Header/>
      <Footer/>
      <table className="table mt-4">
        <thead className="thead">
          <tr>
            <th scope="col">#</th>
            <th scope="col">tipoDocumento</th>
            <th scope="col">Documento</th>
            <th scope="col">Nombres</th>
            <th scope="col">Apellidos</th>
            <th scope="col">FechaNacimiento</th>
            <th scope="col">Direccion</th>
            <th scope="col">Ciudad</th>
            <th scope="col">Departamento</th>
            <th scope="col">Pais</th>
            <th scope="col">Marca</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.tipoDocumento}</td>
              <td>{cliente.documento}</td>
              <td>{cliente.nombres}</td>
              <td>{cliente.apellidos}</td>
              <td>{cliente.fechaNacimiento}</td>
              <td>{cliente.direccion}</td>
              <td>{cliente.ciudad}</td>
              <td>{cliente.departamento}</td>
              <td>{cliente.pais}</td>
              <td>{cliente.marca}</td>
              <td>
                <a href="">Editar</a>
              </td>
                      
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
export default ListadoClientes;
