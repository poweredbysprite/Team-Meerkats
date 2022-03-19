import React, { useState } from 'react';
import LoginForm from "./LoginForm";
import "./LoginPage.css";

function LoginPage() {
    const adminUser = {
        email: "admin@admin.com",
        password: "admin123"
    }

    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("");

    const Login = details => {
        console.log(details);

        if (details.email == adminUser.email && details.password == adminUser.password){
          console.log("Logged In!");
          setUser({
            name: details.name,
            email: details.email
          });
        } else {
          setError("Incorrect Details!");
        }

    }

    const Logout = () => {
        setUser({ name: "", email: "" })
    }

  return (
    <div className='loginPage'>
      {(user.email != "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  )
}

export default LoginPage