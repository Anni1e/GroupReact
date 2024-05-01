import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

function App() {
  return (
    <>
      <h1>Аня и Оля</h1>
      <Header></Header>
      <Main></Main>
    </>
  );
}

export default App;
