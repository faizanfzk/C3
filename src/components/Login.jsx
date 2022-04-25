import { useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";



export const Login = () => {
    //  use reqres to log user in.
    const {handleAuth} = useContext(AuthContext)
    const navigate=useNavigate()
  
    return (
      <form className="loginform">
        <input
          name="username"
          type="text"
          placeholder="Enter username"
          className="login_username"
        />
        <input
          name="password"
          type="text"
          placeholder="Enter password"
          className="login_password"
        />
        <input type="submit" onClick={()=>{
            handleAuth(true)
            
            navigate("/",{replace:true})
        }} value="SIGN IN" className="login_submit" />
      </form>
    );
  };
  