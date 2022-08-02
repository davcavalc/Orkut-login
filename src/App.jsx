import React from "react";
import Header from "./Componentes/Header";
import Main from "./Componentes/Main";
import "./index.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="">
        <Main/>
      </div>
    </React.Fragment>
  )
}

export default App;
