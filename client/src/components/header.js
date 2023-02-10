import { useState } from "react";

const Header = () => {
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
                        <ul id = "searchBtn" className = "">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </ul>
                    </li>
                </div>

                <div className = "FILLER-DIV"></div>

                <div id = "sO-rightDiv" className = "disflex">
                    {/* axios handlers to be added here */}
                    <li>
                        <ul id = "profileBtn" className = "">
                            <i className="fa fa-user" aria-hidden="true"></i> 
                            <p> Profile</p>
                        </ul>

                        <ul id = "cartBtn" className = ""  onClick = {() => {return}}>
                        {/* <i class="fa-solid fa-basket-shopping"></i> */}
                            <i class="fa-solid fa-cart-shopping"></i>
                        </ul>
                    </li>

                </div>
                </div>

                <div id = "tB-sectionTwo" className = "disflex">
                {/* <img src = {ishopLogo} alt = {shopAlt}></img> */}
                </div>

                <div id = "tB-sectionThree" className = "disgrid Vcenter">
                    <div className = "FILLER-DIV"></div>
                    <li id = "sT-navbar" className = "disgrid">
                        <ul id = "sT-home" className = "disflex Vcenter" onClick = {() => {return}}>
                            <b>HOME</b> 
                            <i class="fa-solid fa-house"></i>
                        </ul>
                        <ul id = "sT-store" className = "disflex Vcenter" onClick = {() => {return}}>
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