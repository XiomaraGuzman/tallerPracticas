import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from "react";

const apiHome = "http://localhost:3100/";

const Home = () => {
  const [nombres, setNombres] = useState("");
  useEffect(() => {
    crearCliente();
  }, []);
  const [apellidos, setApellidos] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [documento, setDocumento] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [direccion, setDireccion] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [pais, setPais] = useState("");
  const[marca, setMarca] = useState("");
 
  const crearCliente = async (e) => {
    e.preventDefault()
     await axios.post(apiHome +'clientes',{
      nombres:nombres,
      apellidos:apellidos,
      tipoDocumento:tipoDocumento,
      documento:documento,
      fechaNacimiento:fechaNacimiento,
      direccion:direccion,
      ciudad:ciudad,
      departamento:departamento,
      pais:pais,
      marca:marca

    }
      );

  
  };
  return (
    <main className="principal">
      <Header />
      <Footer/>
      <section className="section-form">
        
          {/* nombre - apellido */}
          <div class="row nombre-apellido">
            <div class="col-6">
              <input
                onChange={(e) => {setNombres(e.target.value)}}
                type="text"
                class="form-control"
                placeholder="Nombre completo"
                aria-label="Nombre completo "
              />
            </div>
            <div class="col-6">
              <input
              onChange={(e) => {setApellidos(e.target.value)}}
                type="text"
                class="form-control"
                placeholder="Apellidos"
                aria-label="Apellidos"
              />
            </div>
          </div>
          {/* documento */}
          <div className="row documento">
            <div className="col-6">
              <select onChange={(e) => setTipoDocumento(e.target.value)} class="form-select" aria-label="Default select example">
                <option >Tipo de documento</option>
                <option >Cédula de extranjería</option>
                <option >Tarjeta de extrajería</option>
                <option >Cédula de ciudadanía</option>
                <option >Tarjeta de identidad</option>
                <option >NIT</option>
              </select>
            </div>

            <div className="col-6">
              <input
              onChange={(e) => {setDocumento (e.target.value)}}
                type="text"
                class="form-control"
                id="inputDocumen"
                placeholder="Documento"
                
              />
            </div>
          </div>
          {/* fecha nacimiento - marca */}
          <div className="row">
            <div class="flex bw1 b--solid b--muted-4 hover-b--muted-3 h-regular col-4 fecha">
              <label for="inputCity" class="form-fecha">
                Fecha de nacimiento
              </label>
              <input
              onChange={(e) => {setFechaNacimiento (e.target.value)}}
                type="date"
                name="birthdate"
                className="fecha-na"
                placeholder="Fecha de nacimiento"
                required=""
              />
            </div>

            {/* marca */}

            <div className="col-6 marca">
              <select onChange={(e) => {setMarca (e.target.value)}} class="form-select" aria-label="Default select example">
                <option selected>Marca</option>
                <option >Americanino</option>
                <option >American Eagle</option>
                <option >Chevignon</option>
                <option >Esprit</option>
                <option >Naf Naf</option>
                <option >Rifle</option>
              </select>
            </div>
          </div>
          {/* direccion - ciudad */}
          <div className="row direccion-ciudad">
            <div class="col-6 ">
              <input
              onChange={(e) => {setDireccion (e.target.value)}}
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Direccíon"
              />
            </div>

            <div class="col-6 ">
              <select onChange={(e) => {setCiudad (e.target.value)}} id="inputCity" className="form-select">
                <option selected>Ciudad</option>
                <option >Armenia</option>
                <option >Barrancabermeja</option>
                <option >Barranquilla</option>
                <option >Bogotá</option>
                <option >Bucaramanga</option>
                <option >Buga</option>
                <option >Cali</option>
                <option >Cartagena</option>
                <option >Chía</option>
                <option >Cúcuta</option>
                <option >Duitama</option>
                <option >Florencia</option>
                <option >Fusagasugá</option>
                <option >Girardot</option>
                <option >Honda</option>
                <option >Ibagué</option>
                <option >Ipiales</option>
                <option >Jamundí</option>
                <option >Leticia</option>
                <option >Manizales</option>
                <option >Mariquita</option>
                <option >Medellín</option>
                <option >Mompox</option>
                <option >Montería</option>
                <option >Murillo</option>
                <option >Neiva</option>
                <option >Pamplona</option>
                <option >Pasto</option>
                <option >Pereira</option>
                <option >Popayán</option>
                <option >Riohacha</option>
                <option >San Andrés y Providencia</option>
                <option >San Antero</option>
                <option >Santa Marta</option>
                <option >Santafé de Antioquia</option>
                <option >Sevilla</option>
                <option >Sincelejo</option>
                <option >Sogamoso</option>
                <option >Tabio</option>
                <option >Tocancipá</option>
                <option >Tolú</option>
                <option >Tuluá</option>
                <option >Tumaco</option>
                <option >Tunja</option>
                <option >Valledupar</option>
                <option >Villavicencio</option>
                <option >Yopal</option>
                <option >Zipaquirá</option>
              </select>
            </div>
          </div>
          {/* departamento - pais */}
          <div className="row departamento-pais">
            <div class="col-md-6">
              <select onChange={(e) => {setDepartamento (e.target.value)}} id="inputState" class="form-select">
                <option selected>Departamento</option>
                <option  >Amazonas</option>
                <option  >Antioquia</option>
                <option  >Arauca</option>
                <option  >Atlántico</option>
                <option  >Bogotá</option>
                <option  >Bolívar</option>
                <option  >Boyacá</option>
                <option  >Caldas</option>
                <option  >Caquetá</option>
                <option  >Casanare</option>
                <option  >Cauca</option>
                <option  >Cesar</option>
                <option  >Chocó</option>
                <option  >Córdoba</option>
                <option  >Cundinamarca</option>
                <option  >Guainía</option>
                <option  >Guaviare</option>
                <option  >Huila</option>
                <option  >La Guajira</option>
                <option  >Magdalena</option>
                <option  >Meta</option>
                <option  >Nariño</option>
                <option  >Norte de Santander</option>
                <option  >Putumayo</option>
                <option  >Quindío</option>
                <option  >Risaralda</option>
                <option  >San Andrés y Providencia</option>
                <option  >Santander</option>
                <option  >Sucre</option>
                <option  >Tolima</option>
                <option  >Valle del Cauca</option>
                <option >Vaupés</option>
                <option  >Vichada</option>
              </select>
            </div>

            <div class="col-md-6">
              <select onChange={(e) => {setPais (e.target.value)}} id="inputState" class="form-select">
                <option selected>País</option>
                <option >Afganistán</option>
                <option >Albania</option>
                <option >Alemania</option>
                <option >Andorra</option>
                <option >Angola</option>
                <option >Antigua y Barbuda</option>
                <option >Arabia Saudita</option>
                <option >Argelia</option>
                <option >Argentina</option>
                <option >Armenia</option>
                <option >Australia</option>
                <option >Austria</option>
                <option >Azerbaiyán</option>
                <option >Bahamas</option>
                <option >Bahrein</option>
                <option >Bangladesh</option>
                <option >Barbados</option>
                <option >Belarús</option>
                <option >Bélgica</option>
                <option >Belice</option>
                <option >Bhután</option>
                <option >Bolivia (Estado Plurinacional de)</option>
                <option >Bosnia y Herzegovina</option>
                <option >Botswana</option>
                <option >Brasil </option>
                <option >Brunei Darussalam</option>
                <option >Bulgaria</option>
                <option >Burkina Faso</option>
                <option >Burundi</option>
                <option >Cabo Verde</option>
                <option >Camboya</option>
                <option >Camerún</option>
                <option >Canadá</option>
                <option >Chad </option>
                <option >Chequia</option>
                <option >Chile</option>
                <option >China</option>
                <option >Chipre</option>
                <option >Colombia</option>
                <option >Comoras</option>
                <option >Congo </option>
                <option >Costa Rica</option>
                <option >Côte d’Ivoire</option>
                <option >Croacia</option>
                <option >Cuba</option>
                <option >Dinamarca</option>
                <option >Djibouti</option>
                <option >Dominica</option>
                <option >Ecuador </option>
                <option >Egipto</option>
                <option >El Salvador</option>
                <option >Emiratos Árabes Unidos</option>
                <option >Eritrea</option>
                <option >Eslovaquia</option>
                <option >Eslovenia</option>
                <option >España</option>
                <option >Estados Unidos de América</option>
                <option >Filipinas</option>
                <option >Finlandia</option>
                <option >Francia</option>
              </select>
            </div>
          </div>
          {/* enviar */}
          <div class="col-12 boton">
            <button onClick={crearCliente} value={"Guardar"} type="submit" class="btn ">
              <Link to={'/'} className="navbar-brand" >
              Suscribir
              </Link>
              
            </button>
          </div>
      </section>
    </main>
  );
};
export default Home;
