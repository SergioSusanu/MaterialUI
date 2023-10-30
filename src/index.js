import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import Reservations from "./pages/Reservations";
import Contact from "./pages/Contact";
import { ThemeProvider } from '@mui/material/styles';
import { dashboardTheme } from './dashboardTheme';
import Authentication from './pages/Authentication';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={dashboardTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="about" element={<About />} />
          <Route path="authentication" element={<Authentication />} />
          <Route path="menu" element={<Menu />} />
          <Route path="order" element={<Order />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
