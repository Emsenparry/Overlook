import axios from "axios";
import React from "react";
import { useAuth } from "../../Providers/AuthProvider";

const Login = () => {
  const { loginData, setLoginData } = useAuth();
  console.log(loginData);

  const submitHandle = async (e) => {
    const formData = new URLSearchParams();
    formData.append("username", e.target.form.username.value);
    formData.append("password", e.target.form.password.value);

    const endpoint = `http://localhost:4000/login`;
    try {
      const result = await axios.post(endpoint, formData);
      handleSessionData(result.data.access_token);
    } catch (err) {
      console.error(`Kunne ikke logge ind: ${err}`);
    }
  };

  const handleSessionData = (data) => {
    if (data) {
      // Når vi skriver ned er det json.stringify
      sessionStorage.setItem("token", JSON.stringify(data));
      setLoginData(data);
    }
  };

  const LogOut = () => {
    sessionStorage.removeItem('token')
    setLoginData('')
  }

  return (
    <>
      {!loginData ? (
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
      ) : (
        <div>
          <p>Du er logget ind</p>
          <button type="button" onClick={() => LogOut()}>Log ud</button>
        </div>
      )}
    </>
  );
};

export default Login;
