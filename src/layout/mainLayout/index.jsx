import {Outlet} from 'react-router-dom';
import Header from "../../components/Header";
import CustomizedBreadcrums from "../../components/CustomizedBreadcrums";
import {Grid} from "@mui/material";
import Box from "@mui/material/Box";

// ==============================|| MINIMAL LAYOUT ||============================== //

const MainLayout = () => (
    <>
        <Header/>
        <Box sx={{my: 1, mx: 2}}>
        </Box>
        <Outlet/>
    </>
);

export default MainLayout;
