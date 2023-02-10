import react from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./login";
import Header from "./header";
import Footer from "./footer";

const Layout = () => {
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route default index element = {<h1> Home</h1>}/>
                <Route exact path = "/login" element = {<Login/>}/>
                <Route exact path = "/register" element = {<Login register/>}/>
                <Route exact path = "/cart" element = {<h1>Cart</h1>}/>
                <Route exact path = "/profile" element = {<h1>Profile</h1>}/>
                <Route exact path = "/store" element = {<h1>Store</h1>}/>
                <Route exact path = "/*" element = {<h1>WRONG PAGE</h1>}/>
            </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default Layout;