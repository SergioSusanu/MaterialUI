import './App.css';
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
import Header from './components/Header/Header';

function App() {
  return (
    <Grid container>
        <Navbar />
        <Header />
        <Outlet />
    </Grid>
  );
}

export default App;
