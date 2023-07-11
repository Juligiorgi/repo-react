import { CardWidget } from "../CardWidget/CardWidget";
import "./Navbar.css";

export const Navbar = () => {
  return ( <nav className="navbar navbar-expand-lg navbar-mine">
              <div className="container-fluid">
                    <h2 className="navbar-brand let-mine" href="#">Lemons</h2>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                     </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
                       <li className="nav-item">
                         <a className="nav-link active" href="#">Ropa</a>
                         </li>
                       <li className="nav-item">
                          <a className="nav-link active" href="#">Suplementos</a>
                       </li>
                       <li className="nav-item">
                        <a className="nav-link active" href="#">Contacto</a>
                       </li>
                     </ul>
                 </div>
                 <CardWidget/> <h2 className="number">0</h2>
              </div>
            </nav>
        
  )
}



