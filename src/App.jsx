import React from "react";
import "./App.scss";
import Header from "./Components/Partials/Header/Header";
import AppRouter from "./Components/AppRouter/AppRouter";

const App = () => {
  return (
    <>
    <Header />
      <AppRouter />
    </>
  );
};

export default App;
