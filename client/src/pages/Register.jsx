import React, { useState } from "react";
import Axios from "axios";


function Register() {

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        name: "",
        surname: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setUserInfo(prevValue => {
            return {
            ...prevValue,
            [name] : value
            };
        });
    }

    const register = (e) => {
        e.preventDefault();
        Axios.post("/register",userInfo).then(response=>{
            console.log(response);
        })
    }
    
    return (
        <div>
          <h1>
            -~ Register Page Boilerplate ~-
          </h1>
          <form>
            <input
              onChange={handleChange}
              name="email"
              value={userInfo.email}
              placeholder="Mail Address"
            />
            <input
              onChange={handleChange}
              name="password"
              value={userInfo.password}
              placeholder="Password"
            />
            <input
              onChange={handleChange}
              name="name"
              value={userInfo.name}
              placeholder="Name"
            />
            <input
              onChange={handleChange}
              name="surname"
              value={userInfo.surname}
              placeholder="Surname"
            />
            <button onClick={register}>Register</button>
          </form>
    
        </div>
      );
}

export default Register;