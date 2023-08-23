import axios from "axios";
import React from "react";
import { useAuth } from "../../Providers/AuthProvider";
import { FormProvider, useForm } from "react-hook-form";
import { ContentWrapper } from "../../ContentWrapper/ContentWrapper";
import "./Login.scss"; // Make sure the correct path is used here

const Login = () => {
  const { loginData, setLoginData } = useAuth();

  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  const submitHandle = async (data) => {
    const formData = new URLSearchParams();
    formData.append("username", data.username);
    formData.append("password", data.password);

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
      sessionStorage.setItem("token", JSON.stringify(data));
      setLoginData(data);
    }
  };

  const LogOut = () => {
    sessionStorage.removeItem("token");
    setLoginData("");
    reset();
  };

  return (
    <ContentWrapper title="Login">
      <FormProvider {...register}>
        {!loginData ? (
          <form
            className="login-form"
            onSubmit={handleSubmit(submitHandle)}
            method="POST"
          >
            <div className="Login-info">
              <h2>Login</h2>
              <p>Indtast dit brugernavn og adgangskode for at logge ind</p>
            </div>
            <div>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Brugernavn"
                {...register("username", { required: "Indtast brugernavn!" })}
              />
            </div>
            <span className="error">{errors.username?.message}</span>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Adgangskode"
                {...register("password", { required: "Indtast adgangskode!" })}
              />
            </div>
            <span className="error">{errors.password?.message}</span>
            <div className="button-container">
              <button className="login" type="submit">
                Login
              </button>
              <button className="reset" type="button" onClick={() => reset()}>
                Annuller
              </button>
            </div>
          </form>
        ) : (
          <div>
            <p>Du er logget ind</p>
            <button className="logged-in" type="button" onClick={LogOut}>
              Log ud
            </button>
          </div>
        )}
      </FormProvider>
    </ContentWrapper>
  );
};

export default Login;
