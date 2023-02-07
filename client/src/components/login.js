import {Link} from "react-router-dom";
import react from "react";
import axios from "axios";
const Login = ({register}) => {
    const [email, setEmail] = react.useState("");
    return(
        <div className="auth">
                <div className="auth__box">
                    <div className="auth__header">
                        {register ? "Register" : "Login"}
                    </div>
                    
                    {register && (
                        <div className="auth__field">
                            <label>Name</label>
                            <input type = "text"></input>
                        </div>
                    )}

                    <div className="auth__field">
                        <label> Email </label>
                        <input type = "text"></input>
                    </div>

                    <div className="auth__field">
                        <label> Password </label>
                        <input value={email} onChange = {(e) => setEmail(e.target.value)} type = "password"></input>
                    </div>
                    
                    {register && (
                        <div className="auth__field">
                            <label>Confirm Password</label>
                            <input type = "password"></input>
                        </div>
                    )}

                    <div className="auth__footer">
                        {register ? <h1>WoW</h1> : <Link className="auth__register" to={"../register"}>New user/Register now</Link>}
                        <p className="auth__error">Something went wrong</p>

                        <button className="btn" onClick = { () => {
                            axios.get("/print", email).then("sent successfully");
                        }}>{register ? "REGISTER" : "LOGIN"}</button>
                    </div>
                </div>
    
        </div>
    )
}

export default Login;