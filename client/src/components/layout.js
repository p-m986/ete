import react from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./login";
import Header from "./header";
import Footer from "./footer";
import Profile from "./profile";

const Layout = () => {
    return(
        <BrowserRouter>
        <Header/>
        <div className="loader">
            <Routes>
                <Route default index element = {<h1> Home</h1>}/>
                <Route exact path = "/login" element = {<Login/>}/>
                <Route exact path = "/register" element = {<Login register/>}/>
                <Route exact path = "/cart" element = {<h1>Cart</h1>}/>
                <Route exact path = "/profile" element = {<Profile/>}/>
                <Route exact path = "/store" element = {<h1>Store</h1>}/>
                <Route exact path = "/*" element = {<h1>WRONG PAGE</h1>}/>
            </Routes>
        </div>
        <Footer/>
        </BrowserRouter>
    )
}

export default Layout;