import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Thali from "./component/Thali"
import Cart from "./component/Checkout"

function App() {
  return (
    <div className="App">
      
      
      <BrowserRouter>
      
        <Navbar />
        
        <Routes>
          
           <Route path="/" element={<Thali />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
