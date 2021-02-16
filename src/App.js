import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {
  Container,
  Row,
} from 'reactstrap'

import UploadForm from './Pages/UploadForm'
import ProductCatalog from './Pages/ProductCatalog';
import NavStart from './Components/NavStart';

function App() {
  return (
    <div className="App">
      <Router>

     <NavStart/>

        <Container fluid>
          <Row>
            <Container>
              <Row>

                <Switch>

                  <Route path="/product-catalog">
                    <ProductCatalog></ProductCatalog>
                  </Route>

                  <Route path="/upload-product">
                    <UploadForm />
                  </Route>

                  <Route path="/">
                    <h1> Hola, soy la vista "home"</h1>
                  </Route>

                </Switch>



              </Row>
            </Container>
          </Row>
        </Container>

      </Router >

    </div>
  );
}

export default App;
