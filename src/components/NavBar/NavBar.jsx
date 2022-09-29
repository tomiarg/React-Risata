import ImagenLogo from "../assets/logo.jpeg";
import "../NavBar/NavBar.css"
import { CartWidget } from "../CartWidget/CartWidget";

export function NavBar() {
  return (
    <>
    <nav className="NavBar">
        <ul className="lista">
            <li><a href="">Nosotros</a></li>
            <li><a href="">Productos</a></li>
            <li><a href="">contacto</a></li>
        </ul>
        <img src={ImagenLogo} alt="logo" className="logo"/>
        <CartWidget/>
    </nav>
    </>
   
  );
}
