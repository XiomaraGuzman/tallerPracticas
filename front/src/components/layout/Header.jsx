import { Link } from "react-router-dom";
import {FaPersonBooth,FaPhone, FaTable,FaShopify} from 'react-icons/fa'

const Header = () => {
  return (
    <nav className=" navbar  header-p ">
      <div className="container-fluid">
        <a className="navbar-brand" href="">
          <h1 className="comodin">
              <FaPersonBooth/>
            <Link to={"/"} className="navbar-brand como">
              COMODIN
            </Link>
          </h1>
        </a>
        <a className="navbar-brand a" href="#">
          Coleccion
          <FaShopify/>
        </a>
        <a className="navbar-brand a" href="#">
          Contacto
          <FaPhone/>
        </a>
        <Link to={"/clientes"} className="navbar-brand a">
          Registro <FaTable/>
        </Link>
        
      </div>
    </nav>
  );
};

export default Header;
