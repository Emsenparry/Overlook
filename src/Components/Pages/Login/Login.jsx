import axios from "axios";
import React from "react";

const Login = () => {
  // const [loginData, setLoginData]

  const submitHandle = async (e) => {
    const formData = new URLSearchParams();
    formData.append("username", e.target.form.username.value);
    formData.append("password", e.target.form.password.value);

    const endpoint = `http://localhost:4000/login`;
    try {
      const result = await axios.post(endpoint, formData)
      handleSessionData(result.data.access_token);
    } catch (err) {
      console.error(`Kunne ikke logge ind: ${err}`);
    }
  };

  const handleSessionData = data => {
    if(data) {
      sessionStorage.setItem('token', JSON.stringify(data))
    }
  }

  return (
    <form method="POST">
      <div>
        <label htmlFor="username">Brugernavn</label>
        <input type="text" name="username" />
      </div>
      <div>
        <label htmlFor="password">Adgangskode</label>
        <input type="password" name="password" />
      </div>
      <div>
        <button type="button" onClick={(e) => submitHandle(e)}>
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
