import './App.css';
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";


const SharedLayout = () => {
  return (
    <Grid item xs={12} md={4}>
      <Navbar />
    </Grid>
  );
};


function App() {
  return (
    <Grid container>
      <SharedLayout />
      <Grid item xs={12} md={8}>
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default App;
