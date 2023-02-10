import { useState } from "react";
import {useNavigate} from "react-router-dom"

const Header = () => {
    const navigate = useNavigate();
    const [id, setId  ] = useState(1);
  
    function handleClick(x){
      setId(x);
    }

    return(
        <div className="">
            <div id = "topBar" className = "disgrid">
                <div id = "tB-sectionOne" className = "disgrid">
                <div id = "sO-leftDiv" className = "disflex flex-right ">
                    <li>
                        <ul id = "profileBtn" className = "" onClick={() => navigate("/profile")}>
                            <i className="fa fa-user" aria-hidden="true"></i> 
                            <p> Profile</p>
                        </ul>
                    </li>
                </div>

                <div className = "FILLER-DIV"></div>

                <div id = "sO-rightDiv" className = "disflex">
                    {/* axios handlers to be added here */}
                    <li>
                        

                        <ul id = "cartBtn" className = ""  onClick={() => navigate("/cart")}>
                        {/* <i class="fa-solid fa-basket-shopping"></i> */}
                            <i class="fa-solid fa-cart-shopping"></i>
                        </ul>
                        <ul id = "searchBtn" className = "">
                            <i className="fa fa-search" aria-hidden="true">                            </i>
                        </ul>
                    </li>

                </div>
                </div>

                <div id = "tB-sectionTwo" className = "disflex Vcenter">
                    <h2 onClick={() => navigate("/")}>IShop</h2>
                </div>

                <div id = "tB-sectionThree" className = "disgrid Vcenter">
                    <div className = "FILLER-DIV"></div>
                    <li id = "sT-navbar" className = "disgrid">
                        <ul id = "sT-home" className = "disflex Vcenter" onClick={() => navigate("/")}>
                            <b>HOME</b> 
                            <i class="fa-solid fa-house"></i>
                        </ul>
                        <ul id = "sT-store" className = "disflex Vcenter" onClick = {() => navigate("/store")}>
                            <b>STORE</b> 
                            <i class="fa-solid fa-store"></i>
                        </ul>
                    </li>
                    <div className = "FILLER-DIV"></div>
                </div>
            </div>
        </div>
    )
};

export default Header;