import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { mainData } from "./App";


const Login = () => {
  const {namex} = useContext(mainData);

  return (
    <li>
      <Link to={"login"}>
      <h2 style={{color:'white'}}>{namex == 'Unknown' ? 'Sign In' : namex}</h2>
      </Link>
    </li>

  );
};

export default Login;