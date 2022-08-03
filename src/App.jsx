import React from "react";
import Header from "./Componentes/Header";
import LeftSide from "./Componentes/LeftSide";
import Main from "./Componentes/Main";
import "./index.css";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="flex ml-[128px] flex-row">
        <Main />
        <LeftSide />
      </div>
    </React.Fragment>
  );
}

export default App;
