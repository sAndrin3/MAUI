import Navbar from "./components/Navbar/Navbar";
import { Outlet } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import Header from "./components/Header/Header";
import {useEffect, useState} from "react";
import {useLocation} from "react-router";

function App() {
    const [title, setTitle] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const parsedTitle = location.pathname.replace(/\W/g, ' ');
        setTitle(parsedTitle);
    }, [location]);

  return (
    <Grid container>
        <Navbar />
        <Header title={title}/>
        <Outlet />
    </Grid>
  );
}

export default App;
