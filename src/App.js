import { Container, Col, Row } from "react-bootstrap";
import "./App.css";
import { Routes , Route } from "react-router-dom";
import Account from "./Account";
import AuthComponent from "./AuthComponent";
// import ProtectedRoutes from "./ProtectedRoutes";
import ShowOrderList from './components/ShowOrderList';
import CreateOrder from './components/CreateOrder';
import UpdateOrderInfo from './components/UpdateOrderInfo';
import ShowOrderDetails from './components/ShowOrderDetails';


function App() {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1> Order Management </h1>

          {/* <section id="navigation">
            <a href="/">Home</a>
            <a href="/auth">Auth Component</a>
          </section> */}
        </Col>
      </Row>

        <Routes>
          <Route path="/" element={<Account />} exact/>
          {/* <Route path="/auth" element={<AuthComponent/> } exact/> */}
          <Route path="/auth" element={<div><AuthComponent/> <ShowOrderList /></div>} exact/>
          <Route path='/create-order' element={<CreateOrder />} exact/>
          <Route path='/edit-order/:id' element={<UpdateOrderInfo />} exact/>
          <Route path='/show-order/:id' element={<ShowOrderDetails />} exact/>
        </Routes>
    </Container>

  );
}

export default App;