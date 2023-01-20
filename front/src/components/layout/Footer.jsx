import {FaLocationArrow, FaFacebookF, FaInstagram, FaYoutube, FaPersonBooth} from 'react-icons/fa'
const Footer =() =>{
    return(
        <section className="footer">
            <nav className='iconos'>
                
                <h1 className='como-footer'>
                <FaPersonBooth/>
                    COMODIN</h1>
                <span>
                    <p className='redes'>Siguenos en nuestras redes 
                    <FaFacebookF/>
                    <FaInstagram/>
                    <FaYoutube/>
                    </p>   
                </span>
                <span>
                    <FaLocationArrow/>
                    <a href="#" className='navbar-brand ubi'>Encuentra tu tienda</a>
                </span>
                
               
            </nav>
        </section>
    )
}
export default Footer