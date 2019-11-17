import React from "react";
import { Link } from "react-router-dom";
const Landing  = function(){
    return (
      <div>
        <div>
          <Link to="/register">
            Register
          </Link>
        </div>
        <div>
          <Link to="/login">
            Log In
          </Link>
        </div>
      </div>
    );
}
export default Landing;