import Header from "./Header";
import Footer from "./Footer";
import {  Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
             <Helmet>
        <title>Home</title>
    </Helmet>
            <Header></Header>
          <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;