import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Components/Header';
import Menus from './Components/Menus';
import Home from './Components/Home';
import AddTransaction from './Components/AddTransaction';
import AllTransactions from './Components/AllTransactions'; // Correct the import
import SearchTransaction from './Components/SearchTransaction'; // Import the new component

function App() {
  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={3}>
              <h1>
                Menu 
                <Menus />
              </h1>
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home /> } />
                
                <Route path="/add-transaction" element={<AddTransaction />} />
                <Route path="/view-transactions" element={<AllTransactions />} />
                <Route path="/search-transaction" element={<SearchTransaction />} /> {/* Add this route */}
              </Routes>
            </Col>
            
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
