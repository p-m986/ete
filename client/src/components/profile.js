import axios from "axios";
import { useNavigate } from "react-router-dom";
import react from "react";

const Profile = () => {
    const PreviousOrders = "abc";
    return(
        <div>
            <div className="pro">
                <div className="pro__infobox">
                    <div className="pro__header">Hello, <p>Test Sample</p></div>
                    <div className="pro__email">
                        <p>Registered Email : sampletest@gmail.com</p>
                    </div>
                    <div className="pro__createdat">
                        <p>Account created on </p>
                        <p>At </p>
                    </div>
                </div>
                <div className="pro__image">
                    <img src="../Images/miscellaneous/3_Corousel.png" alt="Test Image"></img>
                </div>
            </div>

            <div className="ord">
                <div className="ord__box">
                    {PreviousOrders}
                </div>
            </div>
        </div>
    )
}

export default Profile; 