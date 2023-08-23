import React from "react";
import "./App.scss";
import Header from "./Components/Partials/Header/Header";
import AppRouter from "./Components/AppRouter/AppRouter";
import Footer from "./Components/Partials/Footer/Footer";

const App = () => {
  return (
    <>
    <Header />
      <AppRouter />
      <Footer />
    </>
  );
};

export default App;
