import react from "react";
import { useNavigate  } from "react-router-dom";

// Static Images
import coverImage from "../Images/miscellaneous/3_Corousel.png";
import coverImage2 from "../Images/Products/apple_iPod_2A.png"
import Featured from "../Images/miscellaneous/2_corousel.png"

import { ReactComponent as support } from '../Images/Web/support.svg';
import { ReactComponent as refund } from '../Images/Web/refund.svg';
import { ReactComponent as shipping } from '../Images/Web/shipping.svg';
const Home = () => {
    const navigate = useNavigate();
    return (
        
        <div className="home">

        
            <div className="home__coverpage">
                <div className="home__infobox">
                    <p>New Products, <br/>Upto 20%</p>
                    <button className="btn" onClick={() => navigate("/store")}>Shop Now</button>
                </div>
                <img src={coverImage}></img>
        
            </div>

            <div className="home__bestsellers">

                
            </div>

            <div className="home__featured">
                    <div className = "FILLER-DIV"></div>
                    <div id = "hp-sub-container" className = "disgrid">
                    <div id = "hp-sub-descr" className = "Vcenter">
                      <p className = "featured_title">iPhone 6 Plus</p>
                      <p className = "featured_descr">Performance and design. Taken right to edge</p>
                      <a className = "" onClick={() => navigate("/store")}>SHOP NOW</a>
                    </div>
                    <div id = "hp-sub-imgContainer">
                      <img src = {Featured}/>
                    </div>
                </div>
            </div>

        
            <div className="home__perks">
                <div id = "hp-sf-container" className = "disgrid">

                <div id = "hp-shipping" className = "disgrid detailsCard">
                  <div className = "hp-sf-imgcontainer disflex Vcenter">
                    <img src = {shipping}/>
                  </div>
                  <p className = "disflex Vcenter font-sizemed sf-title">FREE SHIPPING</p>
                  <p className = "disflex  font-sizesml sf-content"> Lorem ipsum dolor sit ament, consectetur adipisicing elit, des do eiusmond tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                </div>

                <div id = "hp-refund" className = "disgrid detailsCard">
                  <div className = "hp-sf-imgcontainer disflex Vcenter">
                    <img src = {refund}/>
                  </div>
                  <p className = "disflex Vcenter font-sizemed sf-title">100% REFUND</p>
                  <p className = "disflex  font-sizesml sf-content"> Lorem ipsum dolor sit ament, consectetur adipisicing elit, des do eiusmond tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                </div>

                <div id = "hp=support" className = "disgrid detailsCard">
                  <div className = "hp-sf-imgcontainer disflex Vcenter">
                    <img src = {support}/>
                  </div>
                  <p className = "disflex Vcenter font-sizemed sf-title">24/7 SUPPORT</p>
                  <p className = "disflex  font-sizesml sf-content"> Lorem ipsum dolor sit ament, consectetur adipisicing elit, des do eiusmond tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                </div>
            </div>
            </div>
            
        
        </div>
    )
}

export default Home;