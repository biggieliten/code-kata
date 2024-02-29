import { useState } from "react";
import Header from "./components/Header/Header";
import RepeatText from "./components/RepeatText/RepeatText";
import "./App.css";

function App() {
  return (
    <>
      <h1>Code Kata</h1>
      <Header headerText="hola amigo" />
      <RepeatText count="7" text="robin råkade ta bort root" />
    </>
  );
}

export default App;
