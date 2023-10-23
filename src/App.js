import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from "./pages/About";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import Reservations from "./pages/Reservations";
import Contact from "./pages/Contact";

const SharedLayout = () =>{
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <SharedLayout />
      <Routes>
     
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/contact" element={<Contact />} />
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
