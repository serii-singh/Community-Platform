
import React from "react";
import { useNavigate } from "react-router";

export default function Error(){
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/login'); // Redirect to login page if the user is not logged in
      };
    
    return(
<>

<div className="  text-center text-3xl"> 404 Page not found</div>
<button onClick={handleRedirect}>Go to Login</button>



</>



    )
}