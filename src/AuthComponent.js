import React, { useEffect, useState,  } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";



const cookies = new Cookies();

const token = cookies.get("TOKEN");

function AuthComponent() {
  const [message, setMessage] = useState("");

 

  useEffect(() => {
    // set configurations for the API call here
    const configuration = {
      method: "get",
      url: "https://ordermanagement-backend-rjxa.onrender.com/auth",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        // assign the message in our result to the message we initialized above
        setMessage(result.data.message);
      })
      .catch((error) => {
        error = new Error();
      });
  }, []);

  // logout
  const logout = () => {
    // destroy the cookie
    cookies.remove("TOKEN", { path: "/" });
    // redirect user to the landing page
    window.location.href = "/";
  }

  return (
    <div>
      
      <h3 className="text-center text-danger">{message}</h3>

      {/* logout   */}
        <Button type="submit" variant="danger" onClick={() => logout()}>
          Logout
        </Button>
    </div>
  );
}



export default AuthComponent;