import {
  Link
} from "react-router-dom";

import {
  Container,
} from 'reactstrap'

function NavStart() {
  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-warning shadow mb-4">
      <Container fluid>

        <Link className="navbar-brand" to="/">Navbar</Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/product-catalog">Productos</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/upload-product">Subir Producto</Link>
            </li>
          </ul>
        </div>

      </Container>
    </nav>

  )
}

export default NavStart



